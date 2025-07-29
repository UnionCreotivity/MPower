<template>
  <div class="floor-detail">
    <div class="overlay-close" @click="$emit('close')"></div>
    <img src="../../../assets/img/building/compass.png" alt="" class="compass" />
    <div class="main-box">
      <div class="decorate">FLOOR PLAN</div>
      <div class="left-box">
        <img :src="currentFloor.textImg" />
      </div>
      <div class="right-box">
        <ScaleDrag :init="initXY" :max-ratio="2">
          <div class="camera-box top-camera" @click="showCompass = true">
            <img
              v-if="props.floor === '3F-12F'"
              src="../../../assets/img/building/camera.png"
              alt=""
              class="camera"
            />
          </div>
          <img :src="currentFloor.img" :alt="floor" />
          <div class="camera-box bottom-camera" @click="showCompass = true">
            <img
              v-if="props.floor === '3F-12F'"
              src="../../../assets/img/building/camera.png"
              alt=""
              class="camera"
            />
          </div>
        </ScaleDrag>
      </div>
    </div>

    <div class="detail-hint">實際家具配置及平面與建材依買賣契約書為準</div>
  </div>
  <transition name="fade" mode="out-in">
    <FloorCompass v-if="showCompass" @close="showCompass = false" />
  </transition>

  <FullScreen :forceBrownIcon="true" />
</template>

<script setup lang="ts">
import { computed, ref } from 'vue'
import ScaleDrag from '@/components/scale-drag/ScaleDrag.vue'
import FloorCompass from '@/components/Floor/floorCompass/FloorCompass.vue'
import FullScreen from '@/components/full-screen/FullScreen.vue'

const props = defineProps<{ floor: string }>()
const showCompass = ref(false)

// 所有樓層對應資料
const floorDetailMap: Record<string, { img: string; textImg: string }> = {
  '2F': {
    img: new URL('@/assets/img/building/2f.webp', import.meta.url).href,
    textImg: new URL('@/assets/img/building/2f_text.svg', import.meta.url).href,
  },
  '3F-12F': {
    img: new URL('@/assets/img/building/3f12f.webp', import.meta.url).href,
    textImg: new URL('@/assets/img/building/3f12f_text.min.svg', import.meta.url).href,
  },
  B1: {
    img: new URL('@/assets/img/building/b1.webp', import.meta.url).href,
    textImg: new URL('@/assets/img/building/b1_text.min.svg', import.meta.url).href,
  },
  B2: {
    img: new URL('@/assets/img/building/b2.webp', import.meta.url).href,
    textImg: new URL('@/assets/img/building/b2_text.min.svg', import.meta.url).href,
  },
  B3: {
    img: new URL('@/assets/img/building/b3.webp', import.meta.url).href,
    textImg: new URL('@/assets/img/building/b3_text.min.svg', import.meta.url).href,
  },
  B4: {
    img: new URL('@/assets/img/building/b4.webp', import.meta.url).href,
    textImg: new URL('@/assets/img/building/b4_text.min.svg', import.meta.url).href,
  },
  R1: {
    img: new URL('@/assets/img/building/r1.webp', import.meta.url).href,
    textImg: new URL('@/assets/img/building/rf_text.min.svg', import.meta.url).href,
  },
}
const initXY = computed(() => {
  return { x: 400, y: 0 }
})
// 根據傳入樓層取資料
const currentFloor = computed(() => floorDetailMap[props.floor])
</script>
