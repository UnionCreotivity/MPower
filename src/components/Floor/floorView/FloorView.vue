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

  <div class="bg-text">FLOOR PLAN</div>
  <div class="hint">3D外觀示意圖</div>

  <div class="content-box">
    <div class="title">俐落線條．理性構築</div>
    <div class="small-title">以實用為本，少即是多，藏即是顯</div>
    <div class="content">
      理性人本為筆，書寫出生活的實用秩序。<br />
      每一筆俐落，回應城市節奏的韻律。<br />
      留白沉靜，留下城市呼吸的間隙。<br />
      低戶數、高隱私；齊質44戶，內斂布局。<br />
      當空間開始理解人，生活從容生根。
    </div>
    <img class="icon" src="../../../assets/img/building/icon.svg" alt="icon" srcset="" />
  </div>
</template>

<script setup lang="ts">
import { ref } from 'vue'

const buildingImg = new URL('@/assets/img/building/building.webp', import.meta.url).href
const nightImg = new URL('@/assets/img/building/night.webp', import.meta.url).href

const mainImage = ref(buildingImg)
</script>
