<template>
  <div class="method-content-box">
    <div class="left-box">
      <video
        src="../../../assets/img/method/EmergencyPower.mp4"
        autoplay
        muted
        playsinline
        controls
        loop
        class="left-video"
      ></video>
    </div>
    <div class="right-box">
      <div class="title-box">緊急供電</div>
      <div class="content-box">
        <div class="content">
          因應難以預料的停電、限電問題，社區備有不斷電系統，提供電梯及緊急照明之用，另於每戶廚房冰箱區及弱電箱各配置1組紅色電源插座停電時可立即作用，確保電力不中斷。
        </div>
      </div>
    </div>
  </div>
</template>

<script setup lang="ts">
import { onMounted } from 'vue'
import { gsap } from 'gsap'

const initGsap = () => {
  const tl = gsap.timeline({})

  tl.fromTo(
    '.left-video',
    {
      opacity: 0,
    },
    {
      opacity: 1,
      duration: 2,
    },
  ).from(
    '#method-view .method-content-box .right-box div',
    {
      filter: 'blur(8px)',
      opacity: 0,
      ease: 'power1.inOut',
      stagger: 0.15,
      duration: 1,
    },
    '<0.3',
  )
}

onMounted(() => {
  initGsap()
})
</script>

<style scoped></style>
