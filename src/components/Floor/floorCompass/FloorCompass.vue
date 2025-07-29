<template>
  <div class="floor-compass-modal">
    <div class="overlay-close" @click="$emit('close')"></div>
    <div class="modal-content">
      <div class="img-box">
        <img
          ref="imgRef"
          :src="currentImg"
          alt=""
          style="transition: opacity 0.5s ease"
          :style="{ opacity: imgOpacity, transition: 'opacity 0.5s ease' }"
        />

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
      <div class="floor-select-box" ref="floorBox">
        <div class="slider" :style="sliderStyle"></div>
        <div
          class="floor"
          v-for="(floorKey, index) in Object.keys(floorSelectList)"
          :key="floorKey"
          :class="{ active: selectedFloor === floorKey }"
          @click="selectFloor(floorKey)"
          ref="el => floorRefs[index] = el"
        >
          <div>{{ floorKey }}</div>
        </div>
      </div>
    </div>
    <FullScreen :forceWhiteIcon="true" />
  </div>
</template>

<script setup lang="ts">
import { ref, computed, watch, nextTick, onMounted } from 'vue'
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
const imgOpacity = ref(1)
const imgRef = ref<HTMLImageElement | null>(null)

const floorBox = ref<HTMLElement | null>(null)
interface SliderStyle {
  left?: string
  width?: string
  top?: string
  height?: string
}

const sliderStyle = ref<SliderStyle>({})

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

function updateSlider() {
  nextTick(() => {
    if (!floorBox.value) return
    const floors = floorBox.value.querySelectorAll('.floor')
    const selectedIndex = Object.keys(floorSelectList).indexOf(selectedFloor.value)
    if (selectedIndex < 0 || selectedIndex >= floors.length) return
    const selectedEl = floors[selectedIndex] as HTMLElement
    if (!selectedEl) return

    const boxRect = floorBox.value.getBoundingClientRect()
    const elRect = selectedEl.getBoundingClientRect()

    sliderStyle.value = {
      top: elRect.top - boxRect.top + 'px',
      height: elRect.height + 'px',
      left: '0px',
      width: '100%',
    }
  })
}

// 選擇樓層時呼叫滑動條更新
function selectFloor(floorKey: string) {
  selectedFloor.value = floorKey
  isNorth.value = true
  sectorRotation.value = 0
  updateSlider()
}
// 初始化時先呼叫一次
onMounted(async () => {
  await nextTick()
  console.log(floorBox.value, 'floorBox.value') // 確認是否有拿到元素
  updateSlider()
})

// 監聽樓層變化也更新
watch(selectedFloor, async () => {
  updateSlider()
  if (!imgRef.value) return

  // 先淡出
  imgOpacity.value = 0
  await new Promise((r) => setTimeout(r, 500)) // 等淡出300ms

  // 換圖片 (這裡圖片 src 是由 currentImg 綁定，自動更新)

  // 再淡入
  imgOpacity.value = 1
})
</script>

<style scoped>
.fade-enter-active,
.fade-leave-active {
  transition: opacity 0.5s;
}

.fade-enter-from,
.fade-leave-to {
  opacity: 0;
}
</style>
