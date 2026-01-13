<template>
  <div class="marker-modal-overlay" @click.self="closeModal">
    <div class="marker-modal">
      <!-- 關閉按鈕 -->
      <button class="modal-close" @click="closeModal" aria-label="關閉">
        <span>&times;</span>
      </button>

      <!-- 項目圖片 -->
      <div v-if="project.image" class="modal-image">
        <img :src="p_image" :alt="project.name" />
      </div>

      <!-- 項目信息 -->
      <div class="modal-content">
        <h2 class="project-title">{{ project.name }}</h2>

        <div class="project-info">
          <!-- 地址 -->
          <div class="info-item">
            <span class="info-value">{{ project.address }}</span>
          </div>

          <!-- 描述 -->
          <div v-if="project.description" class="info-item">
            <span class="info-label">格局規劃</span>
            <span class="info-value">{{ project.description }}</span>
          </div>

          <!-- 價格 -->
          <div v-if="project.price" class="info-item">
            <span class="info-label">💰 價格</span>
            <span class="info-value price">{{ project.price }}</span>
          </div>
        </div>

        <!-- 操作按鈕 -->
        <div class="modal-actions">
          <button v-if="project.link" class="btn btn-primary" @click="navigateToProject">
            查看詳情
          </button>
          <button class="btn btn-secondary" @click="closeModal">關閉</button>
        </div>
      </div>
    </div>
  </div>
</template>

<script setup lang="ts">
import { computed } from 'vue'
import { useRouter } from 'vue-router'
import type { Project } from '@/stores/mapStore'
import '@/assets/scss/map/_marker-modal.scss'

interface Props {
  project: Project
}

interface Emits {
  close: []
}

const props = defineProps<Props>()
const emit = defineEmits<Emits>()
const router = useRouter()

// 使用 import.meta.glob 預載入所有地圖圖片
const imageModules = import.meta.glob('@/assets/img/map/*.{jpg,jpeg,png,webp,gif}', { 
  eager: true, 
  import: 'default' 
}) as Record<string, string>

// 計算圖片路徑
const p_image = computed(() => {
  if (!props.project.image) return ''
  
  // 從路徑中提取檔名（例如：../../assets/img/map/project_003.jpg -> project_003.jpg）
  const fileName = props.project.image.split('/').pop()
  if (!fileName) return ''
  
  // 在映射中查找對應的圖片
  const imagePath = `/src/assets/img/map/${fileName}`
  return imageModules[imagePath] || ''
})

const closeModal = () => {
  emit('close')
}

const navigateToProject = async () => {
  if (props.project.link) {
    try {
      await router.push(props.project.link)
      closeModal()
    } catch (error) {
      console.error('Navigation failed:', error)
    }
  }
}
</script>
