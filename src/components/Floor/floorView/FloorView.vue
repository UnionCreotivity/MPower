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
  <FullScreen :forceWhiteIcon="true" />
</template>

<script setup lang="ts">
import { ref, onMounted } from 'vue'
import FullScreen from '@/components/full-screen/FullScreen.vue'
import gsap from 'gsap'
const buildingImg = new URL('@/assets/img/building/building.webp', import.meta.url).href
const nightImg = new URL('@/assets/img/building/night.webp', import.meta.url).href

const mainImage = ref(buildingImg)

const initGsap = () => {
  const tl = gsap.timeline({})
  tl.fromTo(
    '.building-view .floor-view img',
    {
      autoAlpha: 0,
      filter: 'brightness(2) blur(6px)',
      scale: 1.3,
    },
    {
      filter: 'brightness(1) blur(0px)',
      duration: 1,
      scale: 1,
      autoAlpha: 1,
      ease: 'power1.inOut',
    },
  )
    .from(
      '.content-box div',
      {
        y: 80,
        autoAlpha: 0,
        duration: 1,
        stagger: { each: 0.15, from: 'start' },
      },
      '<0.3',
    )
    .from(
      '.building-view .content-box .icon',
      {
        y: 70,
        autoAlpha: 0,
        duration: 1,
      },
      '<0.55',
    )

    .from(
      '.building-view .bg-text',
      {
        x: 70,
        autoAlpha: 0,
        duration: 1,
      },
      '<0.3',
    )
}

onMounted(() => {
  initGsap()
})
</script>
