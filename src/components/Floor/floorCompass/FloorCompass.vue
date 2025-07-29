<template>
  <div class="floor-compass-modal">
    <div class="overlay-close" @click="$emit('close')"></div>
    <div class="modal-content">
      <div class="img-box">
        <transition name="fade" mode="out-in">
          <img :src="currentImg" :key="currentImg" />
        </transition>

        <div class="hint">{{ currentHint }}</div>
      </div>
      <div class="compass" @click="toggleDirection">
        <img class="north" src="../../../assets/img/building/north.png" alt="north" srcset="" />
        <img
          class="sector"
          src="../../../assets/img/building/sector.png"
          alt=""
          srcset=""
          :style="{ transform: `rotate(${sectorRotation}deg)` }"
        />
      </div>
      <div class="floor-select-box">
        <div
          class="floor"
          v-for="floorKey in Object.keys(floorSelectList)"
          :key="floorKey"
          :class="{ active: selectedFloor === floorKey }"
          @click="selectFloor(floorKey)"
        >
          <div>{{ floorKey }}</div>
        </div>
      </div>
    </div>
    <FullScreen :forceWhiteIcon="true" />
  </div>
</template>

<script setup lang="ts">
import { ref, computed } from 'vue'
import FullScreen from '@/components/full-screen/FullScreen.vue'

const floorSelectList: Record<string, { northImg: string; sorthImg: string; hint: string }> = {
  '3F': {
    northImg: new URL('@/assets/img/building/1.webp', import.meta.url).href,
    sorthImg: '',
    hint: '3F實景示意圖',
  },
  '5F': {
    northImg: new URL('@/assets/img/building/3.webp', import.meta.url).href,
    sorthImg: '',
    hint: '5F實景示意圖',
  },
  '8F': {
    northImg: new URL('@/assets/img/building/5.webp', import.meta.url).href,
    sorthImg: new URL('@/assets/img/building/2.webp', import.meta.url).href,
    hint: '8F實景示意圖',
  },
  '12F': {
    northImg: new URL('@/assets/img/building/6.webp', import.meta.url).href,
    sorthImg: new URL('@/assets/img/building/4.webp', import.meta.url).href,
    hint: '12F實景示意圖',
  },
}

const selectedFloor = ref('3F')
const isNorth = ref(true) // ✅ 狀態控制 north or sorth
const sectorRotation = ref(0)

function selectFloor(floorKey: string) {
  selectedFloor.value = floorKey
  isNorth.value = true
  sectorRotation.value = 0
}

// 根據當前狀態與樓層，回傳對應圖片
const currentImg = computed(() => {
  const floor = floorSelectList[selectedFloor.value]
  return isNorth.value || !floor.sorthImg ? floor.northImg : floor.sorthImg
})

const currentHint = computed(() => floorSelectList[selectedFloor.value]?.hint ?? '')

// 點擊 compass 時切換方向（如果有 sorth）

function toggleDirection() {
  const current = floorSelectList[selectedFloor.value]
  if (!current.sorthImg) return

  isNorth.value = !isNorth.value
  sectorRotation.value += 180
}
</script>

<style scoped>
.fade-enter-active,
.fade-leave-active {
  transition: all 0.4s ease-out;
}

.fade-enter-from,
.fade-leave-to {
  opacity: 0;
}
</style>
