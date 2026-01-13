/**
 * 地圖狀態管理
 * 使用 Pinia 管理地圖相關的全局狀態
 */

import { defineStore } from 'pinia'
import { ref, computed } from 'vue'

export interface Project {
  id: string
  name: string
  location: { lat: number; lng: number }
  address: string
  image?: string
  description?: string
  price?: string
  link?: string
}

export interface ProjectDataset {
  id: string
  name: string
  center: { lat: number; lng: number }
  zoom: number
  projects: Project[]
}

export const useMapStore = defineStore('map', () => {
  // 狀態
  const datasets = ref<ProjectDataset[]>([])
  const currentDatasetId = ref<string>('')
  const selectedProjectId = ref<string | null>(null)
  const showModal = ref(false)
  const mapInitialized = ref(false)
  const googleApiKey = ref<string>('')

  // 計算屬性
  const currentDataset = computed(() => {
    return datasets.value.find((ds) => ds.id === currentDatasetId.value)
  })

  const currentProjects = computed(() => {
    return currentDataset.value?.projects || []
  })

  const selectedProject = computed(() => {
    return currentProjects.value.find((p) => p.id === selectedProjectId.value)
  })

  // 方法
  const setDatasets = (newDatasets: ProjectDataset[]) => {
    datasets.value = newDatasets
  }

  const setCurrentDataset = (datasetId: string) => {
    if (datasets.value.some((ds) => ds.id === datasetId)) {
      currentDatasetId.value = datasetId
      selectedProjectId.value = null // 切換數據集時清空選擇
    }
  }

  const selectProject = (projectId: string) => {
    if (currentProjects.value.some((p) => p.id === projectId)) {
      selectedProjectId.value = projectId
      showModal.value = true
    }
  }

  const deselectProject = () => {
    selectedProjectId.value = null
    showModal.value = false
  }

  const setMapInitialized = (initialized: boolean) => {
    mapInitialized.value = initialized
  }

  const setGoogleApiKey = (key: string) => {
    googleApiKey.value = key
  }

  const addProject = (project: Project) => {
    if (currentDataset.value) {
      currentDataset.value.projects.push(project)
    }
  }

  const removeProject = (projectId: string) => {
    if (currentDataset.value) {
      currentDataset.value.projects = currentDataset.value.projects.filter(
        (p) => p.id !== projectId
      )
    }
  }

  const updateProject = (projectId: string, updates: Partial<Project>) => {
    if (currentDataset.value) {
      const project = currentDataset.value.projects.find(
        (p) => p.id === projectId
      )
      if (project) {
        Object.assign(project, updates)
      }
    }
  }

  return {
    // 狀態
    datasets,
    currentDatasetId,
    selectedProjectId,
    showModal,
    mapInitialized,
    googleApiKey,
    // 計算屬性
    currentDataset,
    currentProjects,
    selectedProject,
    // 方法
    setDatasets,
    setCurrentDataset,
    selectProject,
    deselectProject,
    setMapInitialized,
    setGoogleApiKey,
    addProject,
    removeProject,
    updateProject
  }
})
