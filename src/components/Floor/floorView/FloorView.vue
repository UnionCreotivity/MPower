<template>
  <div class="floor-view-box">
    <div class="floor-view">
      <img :key="mainImage" :src="mainImage" alt="floor image" />
    </div>

    <div class="daytime" @click="switchImage('day')">
      <img src="../../../assets/img/building/daytime.png" alt="daytime" />
    </div>

    <div class="night" @click="switchImage('night')">
      <img src="../../../assets/img/building/night.png" alt="night" />
    </div>

    <div class="bg-text">FLOOR PLAN</div>
    <div class="hint">3D外觀示意圖</div>

    <div class="content-box">
      <div class="title" ref="title">俐落線條．理性構築</div>
      <div class="small-title" ref="smallTitle">
        以實用為本，少即是多，藏即是顯
        <div class="line"></div>
      </div>

      <div class="content" ref="content">
        理性人本為筆，書寫出生活的實用秩序。<br />
        每一筆俐落，回應城市節奏的韻律。<br />
        留白沉靜，留下城市呼吸的間隙。<br />
        低戶數、高隱私；齊質44戶，內斂布局。<br />
        當空間開始理解人，生活從容生根。
      </div>
      <img class="icon" src="../../../assets/img/building/icon.svg" alt="icon" srcset="" />
    </div>
    <FullScreen :forceWhiteIcon="true" />
  </div>
</template>

<script setup lang="ts">
import { ref, onMounted } from 'vue'
import FullScreen from '@/components/full-screen/FullScreen.vue'
import gsap from 'gsap'
import SplitText from 'gsap/SplitText'
gsap.registerPlugin(SplitText)

const buildingImg = new URL('@/assets/img/building/building.webp', import.meta.url).href
const nightImg = new URL('@/assets/img/building/building_night.webp', import.meta.url).href
const mainImage = ref(buildingImg)

const title = ref<HTMLElement | null>(null)
const smallTitle = ref<HTMLElement | null>(null)
const content = ref<HTMLElement | null>(null)
const switchImage = (mode: 'day' | 'night') => {
  mainImage.value = mode === 'day' ? buildingImg : nightImg
}
onMounted(() => {
  const split = new SplitText(title.value, { type: 'chars' })
  const chars = split.chars
  const splsplitSmallTitle = new SplitText(smallTitle.value, { type: 'chars' })
  const splitContent = new SplitText(content.value, { type: 'lines' })

  const tl = gsap.timeline({})
  tl.fromTo(
    '.building-view .floor-view img',
    {
      scale: 1.3,
      autoAlpha: 0,
      filter: 'brightness(2) blur(6px)',
    },
    {
      filter: 'brightness(1) blur(0px)',
      duration: 1,
      scale: 1,
      autoAlpha: 1,
    },
  )
    .fromTo(
      chars,
      {
        'will-change': 'transform',
        transformOrigin: '50% 100%',
        scaleY: 0,
        autoAlpha: 0,
      },
      {
        duration: 0.4,
        autoAlpha: 1,
        scaleY: 1,
        stagger: 0.05,
      },
      '<0.55',
    )
    .fromTo(
      splsplitSmallTitle.chars,
      {
        'will-change': 'transform',
        transformOrigin: '50% 100%',
        scaleY: 0,
        autoAlpha: 0,
      },
      {
        duration: 0.4,
        autoAlpha: 1,
        scaleY: 1,
        stagger: 0.05,
      },
      '<0.25',
    )
    .from(
      '.building-view .line',
      {
        autoAlpha: 0,
        duration: 0.7,
      },
      '<0.1',
    )

    .fromTo(
      [splitContent.lines[0], splitContent.lines[2], splitContent.lines[4]],
      {
        filter: 'blur(6px)',
        autoAlpha: 0,
        x: 70,
      },
      { x: 0, filter: 'blur(0px)', duration: 1, autoAlpha: 1 },
      '<0.5',
    )
    .fromTo(
      [splitContent.lines[1], splitContent.lines[3]],
      { filter: 'blur(6px)', autoAlpha: 0, x: '-70' },
      { x: 0, duration: 1, filter: 'blur(0px)', autoAlpha: 1 },
      '<0.1',
    )
    .from(
      '.building-view .content-box .icon',
      {
        scale: 1.1,
        y: 70,
        autoAlpha: 0,
        duration: 0.7,
      },
      '<0.55',
    )

  gsap.set(chars, { color: '#af8b73' })

  gsap.to(chars, {
    color: '#604c3f',
    stagger: {
      each: 0.15,
      repeat: -1,
      yoyo: true,
    },
    duration: 1.25,
    ease: 'power1.inOut',
  })
})
</script>
