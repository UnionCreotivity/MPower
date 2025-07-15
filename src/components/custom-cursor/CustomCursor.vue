<template>
  <div>
    <!-- 主游標 -->
    <div id="custom-cursor" :style="mainCursorStyle"></div>

    <!-- 拖影圓點 -->
    <div
      v-for="(trail, index) in trails"
      :key="index"
      class="trail"
      :style="getTrailStyle(index)"
    ></div>
  </div>
</template>

<script setup lang="ts">
import { reactive, onMounted, onBeforeUnmount, computed } from 'vue'

interface Point {
  x: number
  y: number
}

// 主游標位置
const mainPos = reactive<Point>({ x: 0, y: 0 })

// 拖影位置陣列（假設拖影數量5）
const trailCount = 20
const trails = reactive<Point[]>(
  Array(trailCount)
    .fill(0)
    .map(() => ({ x: 0, y: 0 })),
)

let animationFrameId: number | null = null

// 當前滑鼠位置
const mousePos = reactive<Point>({ x: 0, y: 0 })

// 滑鼠移動事件
function onMouseMove(e: MouseEvent) {
  mousePos.x = e.clientX
  mousePos.y = e.clientY
}

// 使用緩動函數來更新拖影位置，越後面的點跟隨越慢
function animate() {
  // 主游標直接跟隨滑鼠
  mainPos.x = mousePos.x
  mainPos.y = mousePos.y

  // 拖影依序跟隨前一個點
  for (let i = 0; i < trailCount; i++) {
    const target = i === 0 ? mainPos : trails[i - 1]
    //殘影速度
    trails[i].x += (target.x - trails[i].x) * 0.2
    trails[i].y += (target.y - trails[i].y) * 0.2
  }

  animationFrameId = requestAnimationFrame(animate)
}

onMounted(() => {
  window.addEventListener('mousemove', onMouseMove)
  animate()
})

onBeforeUnmount(() => {
  window.removeEventListener('mousemove', onMouseMove)
  if (animationFrameId) cancelAnimationFrame(animationFrameId)
})

// style for main cursor
const mainCursorStyle = computed(() => ({
  transform: `translate3d(${mainPos.x}px, ${mainPos.y}px, 0)`,
}))

// style for each trail circle, 尺寸和透明度依序遞減
function getTrailStyle(index: number) {
  const size = 15 - index * 2
  const opacity = (trailCount - index) / trailCount / 2
  const pos = trails[index]
  return {
    width: `${size}px`,
    height: `${size}px`,
    transform: `translate3d(${pos.x}px, ${pos.y}px, 0)`,
    opacity,
  }
}
</script>

<style scoped lang="scss">
#custom-cursor {
  position: fixed;
  width: 15px;
  height: 15px;
  background: #5e4c3f;
  border-radius: 50%;
  pointer-events: none;
  will-change: transform;
  transform: translate3d(0, 0, 0);
  transition:
    left 0.05s ease,
    top 0.05s ease,
    width 0.1s ease-in-out,
    height 0.1s ease-in-out;
  z-index: 9999;
  mix-blend-mode: hard-light;
}

.trail {
  position: fixed;
  background: #5e4c3f;
  border-radius: 50%;
  pointer-events: none;
  will-change: transform;
  z-index: 9998;
  mix-blend-mode: hard-light;
  transition:
    width 0.1s ease-in-out,
    height 0.1s ease-in-out;
}
</style>
