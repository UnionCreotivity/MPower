<template>
  <section class="arial-view">
    <div class="img-box">
      <img src="/src/assets/img/metro/arial.webp" alt="" />
    </div>
    <div class="content-box">
      <div class="title">都會價值，默契串流</div>
      <div class="small-title">3核心3商圈3捷運，十分鐘同步擁有</div>
      <div class="content">
        生活十分鐘，距離縮短、時間讓步！七期+水湳+14期，3核心幕幕換景。<br />
        捷運綠線串聯繁華，3捷未來交匯。中清+崇德+北平，3商圈季季換新。<br />
        未來台中101置地廣場，國際購物滿足品味嚮往！
      </div>
    </div>
  </section>
</template>

<script setup lang="ts">
import { onMounted } from 'vue'
import gsap from 'gsap'

import '@/assets/scss/metro/_arial-photo.scss'
const initGsap = () => {
  const tl = gsap.timeline({})
  tl.fromTo(
    '.arial-view',
    {
      maskPosition: '200% -100%',
    },
    {
      maskPosition: '0% 100%',
      willChange: 'maskPosition',
      duration: 2.5,
    },
  )

    .fromTo(
      '.arial-view .img-box img',
      { scale: 1.3, filter: 'blur(10px) brightness(1.8)' },
      { duration: 1, scale: 1, filter: 'blur(0px) brightness(1)', ease: 'power1.inOut' },
      '<',
    )

    .from(
      '.arial-view .content-box div',
      {
        opacity: 0,
        y: 70,
        stagger: 0.15,
        duration: 1,
      },
      '<0.9',
    )
}
onMounted(() => {
  initGsap()
})
</script>

<style scoped></style>
