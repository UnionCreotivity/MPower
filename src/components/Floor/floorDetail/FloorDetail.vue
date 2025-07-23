<template>
  <div class="floor-detail">
    <div class="close-btn" @click="$emit('close')">
      <img src="../../../assets/img/other/x.svg" alt="" srcset="" />
    </div>

    <div class="main-box">
      <div class="decorate">FLOOR PLAN</div>
      <div class="left-box">
        <img :src="currentFloor.textImg" />
      </div>
      <div class="right-box">
        <img :src="currentFloor.img" :alt="floor" />
      </div>
    </div>
  </div>
</template>

<script setup lang="ts">
import { computed } from 'vue'

const props = defineProps<{ floor: string }>()

// 所有樓層對應資料
const floorDetailMap: Record<string, { img: string; textImg: string }> = {
  '2F': {
    img: new URL('@/assets/img/building/2f.webp', import.meta.url).href,
    textImg: new URL('@/assets/img/building/2f_text.svg', import.meta.url).href,
  },
  '3F': {
    img: new URL('@/assets/img/building/3f12f.webp', import.meta.url).href,
    textImg: new URL('@/assets/img/building/3f12f_text.svg', import.meta.url).href,
  },
  '4F': {
    img: new URL('@/assets/img/building/3f12f.webp', import.meta.url).href,
    textImg: new URL('@/assets/img/building/3f12f_text.svg', import.meta.url).href,
  },
  '5F': {
    img: new URL('@/assets/img/building/3f12f.webp', import.meta.url).href,
    textImg: new URL('@/assets/img/building/3f12f_text.svg', import.meta.url).href,
  },
  '6F': {
    img: new URL('@/assets/img/building/3f12f.webp', import.meta.url).href,
    textImg: new URL('@/assets/img/building/3f12f_text.svg', import.meta.url).href,
  },
  '7F': {
    img: new URL('@/assets/img/building/3f12f.webp', import.meta.url).href,
    textImg: new URL('@/assets/img/building/3f12f_text.svg', import.meta.url).href,
  },
  '8F': {
    img: new URL('@/assets/img/building/3f12f.webp', import.meta.url).href,
    textImg: new URL('@/assets/img/building/3f12f_text.svg', import.meta.url).href,
  },
  '9F': {
    img: new URL('@/assets/img/building/3f12f.webp', import.meta.url).href,
    textImg: new URL('@/assets/img/building/3f12f_text.svg', import.meta.url).href,
  },
  '10F': {
    img: new URL('@/assets/img/building/3f12f.webp', import.meta.url).href,
    textImg: new URL('@/assets/img/building/3f12f_text.svg', import.meta.url).href,
  },
  '11F': {
    img: new URL('@/assets/img/building/3f12f.webp', import.meta.url).href,
    textImg: new URL('@/assets/img/building/3f12f_text.svg', import.meta.url).href,
  },
  '12F': {
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

// 根據傳入樓層取資料
const currentFloor = computed(() => floorDetailMap[props.floor])
</script>
