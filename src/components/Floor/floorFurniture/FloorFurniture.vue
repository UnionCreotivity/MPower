<template>
  <div class="floor-detail-wrapper">
    <div class="floor-detail" ref="detailEl">
      <div class="overlay-close" @click="handleClose"></div>
      <img src="../../../assets/img/building/compass.png" alt="" class="compass" />
      <div class="main-box">
        <div class="decorate">FLOOR PLAN</div>
        <div class="left-box">
          <img
            :src="currentFurniture.textImg"
            class="floor-text-img"
            :class="[currentFurniture.textImgClassName]"
          />
        </div>
        <div class="right-box">
          <ScaleDrag :init="initXY" :max-ratio="2">
            <div class="img-box">
              <img
                :src="currentFurniture.img"
                :alt="floor"
                class="floor-plan-img"
                :class="[currentFurniture.className]"
              />
            </div>
          </ScaleDrag>
        </div>
        <div class="detail-hint">實際家具配置及平面與建材依買賣契約書為準</div>
      </div>
    </div>

    <FullScreen :forceBrownIcon="true" />
  </div>
</template>

<script setup lang="ts">
import { onMounted, computed, ref } from 'vue'
import gsap from 'gsap'
import ScaleDrag from '@/components/scale-drag/ScaleDrag.vue'
import FullScreen from '@/components/full-screen/FullScreen.vue'

const props = defineProps<{ floor: string }>()
const emit = defineEmits(['close'])
const detailEl = ref<HTMLElement | null>(null)

// 所有樓層對應資料
const furnitureMap: Record<
  string,
  { img: string; textImg: string; className: string; textImgClassName: string }
> = {
  '3F-12F-A': {
    img: new URL('@/assets/img/building/d_floor.webp', import.meta.url).href,
    textImg: new URL('@/assets/img/building/a_text.png', import.meta.url).href,
    className: '3F-12F-A',
    textImgClassName: 'text-3F-12F-A',
  },
  '3F-12F-B': {
    img: new URL('@/assets/img/building/d_floor.webp', import.meta.url).href,
    textImg: new URL('@/assets/img/building/b_text.png', import.meta.url).href,
    className: '3F-12F-B',
    textImgClassName: 'text-3F-12F-B',
  },
  '3F-12F-C': {
    img: new URL('@/assets/img/building/d_floor.webp', import.meta.url).href,
    textImg: new URL('@/assets/img/building/c_text.png', import.meta.url).href,
    className: '3F-12F-C',
    textImgClassName: 'text-3F-12F-C',
  },
  '3F-12F-D': {
    img: new URL('@/assets/img/building/d_floor.webp', import.meta.url).href,
    textImg: new URL('@/assets/img/building/d_text.min.svg', import.meta.url).href,
    className: '3F-12F-D',
    textImgClassName: 'text-3F-12F-D',
  },
}
const initXY = computed(() => {
  const screenWidth = window.innerWidth
  return {
    x: screenWidth < 1400 ? 200 : 400,
    y: 0,
  }
})

// 根據傳入樓層取資料
const currentFurniture = computed(() => furnitureMap[props.floor])

onMounted(() => {
  if (detailEl.value) {
    gsap.fromTo(detailEl.value, { opacity: 0 }, { opacity: 1, duration: 0.6 })
  }
})

// ✨ 新增：關閉時的動畫
function handleClose() {
  if (detailEl.value) {
    gsap.to(detailEl.value, {
      opacity: 0,
      duration: 0.6,
      onComplete: () => {
        emit('close')
      },
    })
  } else {
    emit('close')
  }
}
</script>
