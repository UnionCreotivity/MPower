<template>
  <div class="method-content-box">
    <div class="left-box">
      <video
        src="../../../assets/img/method/DoubleRebar.mp4"
        autoplay
        muted
        playsinline
        controls
        loop
        class="left-video"
      ></video>
    </div>
    <div class="right-box">
      <div class="title-box">雙層鋼筋</div>
      <div class="content-box">
        <div class="content">
          於梁、板等結構內配置上下兩層鋼筋，主要用於大跨距或承重需求較高的構造，能增加抗彎矩及分配應力，提升整體結構安全性與耐用度，是高層或特殊結構常用做法。
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
  )
}

onMounted(() => {
  initGsap()
})
</script>

<style scoped></style>
