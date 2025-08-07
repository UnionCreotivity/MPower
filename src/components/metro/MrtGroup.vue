<template>
  <div class="mrt-group">
    <img
      class="green-line-point"
      ref="greenPoint"
      src="../../assets/img/life/point.svg"
      alt="green point"
      @mouseenter="onGreenMouseEnter"
      @mouseleave="onGreenMouseLeave"
      @click="$emit('open-green-line')"
    />
    <img
      class="red-line-point"
      ref="redPoint"
      src="../../assets/img/life/point.svg"
      alt="red point"
      @mouseenter="onRedMouseEnter"
      @mouseleave="onRedMouseLeave"
      @click="$emit('open-red-line')"
    />
    <img
      class="orange-line-point"
      @mouseenter="onOrangeMouseEnter"
      @mouseleave="onOrangeMouseLeave"
      ref="orangePoint"
      src="../../assets/img/life/point.svg"
      alt="orange point"
    />

    <div class="red-line mrt-line" ref="redLine">
      <img src="/src/assets/img/metro/red_line.webp" alt="red_line" />
    </div>
    <div class="green-line mrt-line" ref="greenLine">
      <img src="/src/assets/img/metro/green_line.svg" alt="green_line" />
    </div>

    <div class="blue-line mrt-line">
      <img src="/src/assets/img/metro/blue_line.webp" alt="blue_line" />
    </div>
    <div class="orange-line mrt-line" ref="orangeLine">
      <img src="/src/assets/img/metro/orange_line.webp" alt="orange_line" />
    </div>
  </div>
</template>

<script setup lang="ts">
import { ref, type Ref } from 'vue'
import gsap from 'gsap'

const redPoint = ref<HTMLElement | null>(null)
const redLine = ref<HTMLElement | null>(null)

const greenPoint = ref<HTMLElement | null>(null)
const greenLine = ref<HTMLElement | null>(null)

const orangePoint = ref<HTMLElement | null>(null)
const orangeLine = ref<HTMLElement | null>(null)

/**
 * 共用 hover 動畫函式
 * @param hover 是否滑鼠在點上
 * @param pointRef 點的 ref
 * @param lineRef 線的 ref
 * @param glowColor 發光顏色
 */
const handleLineHover = (
  hover: boolean,
  pointRef: Ref<HTMLElement | null>,
  lineRef: Ref<HTMLElement | null>,
  glowColor: string,
) => {
  if (!pointRef.value || !lineRef.value) return

  gsap.to(pointRef.value, {
    scale: hover ? 1.3 : 1,
    ease: 'back.inOut(2)',
    duration: 0.5,
  })

  const lineImg = lineRef.value.querySelector('img')
  if (lineImg) {
    gsap.to(lineImg, {
      filter: hover ? `drop-shadow(0 0 25px ${glowColor})` : 'drop-shadow(0 0 0 transparent)',
      ease: 'power1.inOut',
      duration: 0.5,
    })
  }
}

// 用箭頭函式包住，避免模板載入時就執行
const onGreenMouseEnter = () => handleLineHover(true, greenPoint, greenLine, 'rgba(0, 255, 0, 0.7)')
const onGreenMouseLeave = () =>
  handleLineHover(false, greenPoint, greenLine, 'rgba(0, 255, 0, 0.7)')

const onRedMouseEnter = () => handleLineHover(true, redPoint, redLine, 'rgba(241, 64, 64, 0.842)')
const onRedMouseLeave = () => handleLineHover(false, redPoint, redLine, 'rgba(241, 64, 64, 0.842)')

const onOrangeMouseEnter = () => handleLineHover(true, orangePoint, orangeLine, '#ffc684')
const onOrangeMouseLeave = () => handleLineHover(false, orangePoint, orangeLine, '#ffc684')
</script>
