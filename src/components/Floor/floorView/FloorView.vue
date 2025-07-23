<template>
  <div class="floor-view">
    <transition name="fade" mode="out-in">
      <img :key="mainImage" :src="mainImage" alt="floor image" />
    </transition>
  </div>

  <div class="daytime" @click="mainImage = buildingImg">
    <img src="../../../assets/img/building/daytime.png" alt="daytime" />
  </div>

  <div class="night" @click="mainImage = nightImg">
    <img src="../../../assets/img/building/night.png" alt="night" />
  </div>
</template>

<script setup lang="ts">
import { ref } from 'vue'

const buildingImg = new URL('@/assets/img/building/building.webp', import.meta.url).href
const nightImg = new URL('@/assets/img/building/night.webp', import.meta.url).href

const mainImage = ref(buildingImg)
</script>
