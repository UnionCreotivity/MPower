<template>
  <div class="google-map-container">
    

    <!-- 地圖容器 -->
    <div class="map-wrapper">
      <div id="google-map" class="map-container"></div>

      <!-- 項目列表（側邊欄或下方）-->
      <div class="projects-sidebar">
        
        <div class="projects-list">
          <div
            v-for="project in currentProjects"
            :key="project.id"
            :class="['project-item', { active: selectedProjectId === project.id }]"
            @click="selectProjectFromList(project.id)"
          >
            <div class="project-name">{{ project.name }}</div>
            <div class="project-address">{{ project.address }}</div>
          </div>
        </div>
      </div>
    </div>

    <!-- 彈窗模態框 -->
    <MapMarkerModal
      v-if="showModal && selectedProject"
      :project="selectedProject"
      @close="deselectProject"
    />
  </div>
</template>

<script setup lang="ts">
import { ref, computed, onMounted, onUnmounted, watch } from 'vue'
import { useMapStore, type ProjectDataset } from '@/stores/mapStore'
import MapService from '@/services/mapService'
import MapMarkerModal from './MapMarkerModal.vue'
import mapProjectsData from '@/components/map/mapProjects.json'
import '@/assets/scss/map/_google-map.scss'

// 使用 store
const mapStore = useMapStore()

// 本地狀態
const mapService = ref<MapService | null>(null)
const isMapReady = ref(false)

// 計算屬性
const datasets = computed(() => mapStore.datasets)
const currentDatasetId = computed(() => mapStore.currentDatasetId)
const currentDataset = computed(() => mapStore.currentDataset)
const currentProjects = computed(() => mapStore.currentProjects)
const selectedProjectId = computed(() => mapStore.selectedProjectId)
const showModal = computed(() => mapStore.showModal)
const selectedProject = computed(() => mapStore.selectedProject)

// 初始化地圖
const initializeMap = async (datasetId: string) => {
  try {
    // 初始化 MapService
    const apiKey = import.meta.env.VITE_GOOGLE_MAP_API_KEY
    if (!apiKey) {
      console.error('Google Map API Key not found. Please set VITE_GOOGLE_MAP_API_KEY')
      return
    }

    if (!mapService.value) {
      mapService.value = MapService.getInstance(apiKey)
    }

    const dataset = datasets.value.find((ds) => ds.id === datasetId)
    if (!dataset) return

    // 初始化地圖
    await mapService.value.initMap('google-map', {
      center: dataset.center,
      zoom: dataset.zoom,
      mapTypeControl: true,
      fullscreenControl: true,
      zoomControl: true,
      streetViewControl: false,
      mapId: "2df8e8488e2303d1a6688199"
    })

    // 添加標記
    mapService.value.addMarkers(
      dataset.projects.map((p) => ({
        id: p.id,
        name: p.name,
        location: p.location,
        icon: undefined // 可自定義圖標
      }))
    )

    // 添加標記點擊事件
    dataset.projects.forEach((project) => {
      mapService.value?.addMarkerClickListener(project.id, () => {
        mapStore.selectProject(project.id)
      })
    })

    isMapReady.value = true
    mapStore.setMapInitialized(true)
  } catch (error) {
    console.error('Failed to initialize map:', error)
  }
}

// 切換數據集
const switchDataset = (datasetId: string) => {
  mapStore.setCurrentDataset(datasetId)
}

// 從列表選擇項目
const selectProjectFromList = (projectId: string) => {
  mapStore.selectProject(projectId)

  // 定位到選中的項目
  if (mapService.value && isMapReady.value) {
    const project = currentProjects.value.find((p) => p.id === projectId)
    if (project) {
      mapService.value.setCenter(project.location)
    //   mapService.value.setZoom(15)
    }
  }
}

// 取消選擇
const deselectProject = () => {
  mapStore.deselectProject()
}

// 監聽數據集變更
watch(
  () => mapStore.currentDatasetId,
  (newDatasetId) => {
    if (newDatasetId && isMapReady.value && mapService.value) {
      // 清除舊標記
      mapService.value.clearMarkers()

      // 重新初始化地圖
      const dataset = datasets.value.find((ds) => ds.id === newDatasetId)
      if (dataset) {
        mapService.value.setCenter(dataset.center)
        mapService.value.setZoom(dataset.zoom)

        // 添加新標記
        initializeMap(newDatasetId)
      }
    }
  }
)

// 生命週期
onMounted(() => {
  // 初始化 store 數據
  if (datasets.value.length === 0) {
    const typedData = mapProjectsData as { datasets: ProjectDataset[] }
    mapStore.setDatasets(typedData.datasets)
  }

  // 設置第一個數據集為當前
  if (datasets.value.length > 0 && !currentDatasetId.value) {
    mapStore.setCurrentDataset(datasets.value[0].id)
  }

  // 初始化地圖
  if (currentDatasetId.value) {
    initializeMap(currentDatasetId.value)
  }
})

onUnmounted(() => {
  // 清理資源
  if (mapService.value) {
    mapService.value.destroy()
  }
})
</script>

<style scoped>
/* 樣式由 SCSS 文件管理 */
</style>
