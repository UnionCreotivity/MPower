<template>
  <div class="floor-detail-wrapper">
    <div class="floor-detail interior-design-img" ref="detailEl">
      <div class="overlay-close" @click="handleClose"></div>

      <div class="main-box">
        <div class="decorate">FLOOR PLAN</div>
        <div class="left-box">
          <img
            :src="floorData.textImg"
            class="floor-text-img customized-txt-img"
            :class="[floorData.textImgClassName]"
          />
        </div>
        <div class="right-box">
          <ScaleDrag :init="initXY" :max-ratio="2">
            <div class="img-box">
              <img
                :src="floorData.img"
                :alt="floor"
                class="floor-plan-img customized-main-img"
                :class="[floorData.className]"
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

const props = defineProps<{ floor: 'C-A' | 'C-B' }>()

const emit = defineEmits(['close'])
const detailEl = ref<HTMLElement | null>(null)

const initXY = computed(() => {
  const screenWidth = window.innerWidth
  return {
    x: screenWidth < 1400 ? 200 : 400,
    y: 0,
  }
})
// 客變資料
const floorMap = {
  'C-A': {
    img: new URL('@/assets/img/building/c_a.png', import.meta.url).href,
    textImg: new URL('@/assets/img/building/c_a_txt.png', import.meta.url).href,
    className: 'C-A',
    textImgClassName: 'text-C-A',
  },
  'C-B': {
    img: new URL('@/assets/img/building/c_b.png', import.meta.url).href,
    textImg: new URL('@/assets/img/building/c_b_txt.png', import.meta.url).href,
    className: 'C-B',
    textImgClassName: 'text-C-B',
  },
}

const floorData = computed(() => floorMap[props.floor])

// 新增：關閉時的動畫
function handleClose() {
  emit('close')
}

const initGsap = () => {
  const tl = gsap.timeline({})

  tl.fromTo(
    '.customized-txt-img',
    {
      opacity: 0,
    },
    {
      opacity: 1,
      duration: 0.85,
      ease: 'power1.in',
    },
  ).fromTo(
    '.customized-main-img',
    {
      opacity: 0,
    },
    {
      opacity: 1,
      duration: 0.85,
      ease: 'power1.in',
    },
    '<',
  )
}

onMounted(() => {
  initGsap()
})
</script>
