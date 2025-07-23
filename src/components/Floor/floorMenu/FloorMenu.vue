<template>
  <div class="floor-menu">
    <div class="floor-box">
      <div
        v-for="floor in floorList"
        :key="floor"
        class="floor"
        :class="{ hovered: isHovered(floor) }"
        @mouseenter="hoverFloor = floor"
        @mouseleave="hoverFloor = null"
        @click="$emit('selectFloor', floor)"
      >
        {{ floor }}
      </div>
    </div>
  </div>
</template>

<script setup lang="ts">
import '@/assets/scss/building/_building-view.scss'
import { ref } from 'vue'

const hoverFloor = ref<string | null>(null)

const floorList = [
  'R1',
  '12F',
  '11F',
  '10F',
  '9F',
  '8F',
  '7F',
  '6F',
  '5F',
  '4F',
  '3F',
  '2F',
  '1F',
  'B1',
  'B2',
  'B3',
  'B4',
]

// 判斷目前這個樓層是否該亮起底色
function isHovered(floor: string): boolean {
  const hover = hoverFloor.value

  const isMidFloor = (f: string) => {
    const num = parseInt(f)
    return !isNaN(num) && num >= 3 && num <= 12
  }

  // 如果滑到的是 3F~12F 中任何一層
  if (hover && isMidFloor(hover)) {
    return isMidFloor(floor)
  }

  // 其他情況：只有單一樓層亮
  return hover === floor
}
</script>

<style lang="scss"></style>
