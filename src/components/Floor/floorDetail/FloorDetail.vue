<template>
  <div class="floor-detail">
    <div class="overlay-close" @click="$emit('close')"></div>
    <div class="main-box">
      <div class="decorate">FLOOR PLAN</div>
      <div class="left-box">
        <img :src="currentFloor.textImg" />
      </div>
      <div class="right-box">
        <ScaleDrag :init="initXY" :max-ratio="2">
          <img :src="currentFloor.img" :alt="floor" />
        </ScaleDrag>
      </div>
    </div>

    <div class="detail-hint">實際家具配置及平面與建材依買賣契約書為準</div>
  </div>
</template>

<script setup lang="ts">
import { computed } from 'vue'
import ScaleDrag from '@/components/scale-drag/ScaleDrag.vue'

const props = defineProps<{ floor: string }>()

// 所有樓層對應資料
const floorDetailMap: Record<string, { img: string; textImg: string }> = {
  '2F': {
    img: new URL('@/assets/img/building/2f.webp', import.meta.url).href,
    textImg: new URL('@/assets/img/building/2f_text.svg', import.meta.url).href,
  },
  '3F-12F': {
    img: new URL('@/assets/img/building/3f12f.webp', import.meta.url).href,
    textImg: new URL('@/assets/img/building/3f12f_text.svg', import.meta.url).href,
  },
  B1: {
    img: new URL('@/assets/img/building/b1.webp', import.meta.url).href,
    textImg: new URL('@/assets/img/building/b1_text.svg', import.meta.url).href,
  },
  B2: {
    img: new URL('@/assets/img/building/b2.webp', import.meta.url).href,
    textImg: new URL('@/assets/img/building/b2_text.svg', import.meta.url).href,
  },
  B3: {
    img: new URL('@/assets/img/building/b3.webp', import.meta.url).href,
    textImg: new URL('@/assets/img/building/b3_text.svg', import.meta.url).href,
  },
  B4: {
    img: new URL('@/assets/img/building/b4.webp', import.meta.url).href,
    textImg: new URL('@/assets/img/building/b4_text.svg', import.meta.url).href,
  },
  R1: {
    img: new URL('@/assets/img/building/r1.webp', import.meta.url).href,
    textImg: new URL('@/assets/img/building/rf_text.svg', import.meta.url).href,
  },
}
const initXY = computed(() => {
  return { x: 400, y: 0 }
})
// 根據傳入樓層取資料
const currentFloor = computed(() => floorDetailMap[props.floor])
</script>
