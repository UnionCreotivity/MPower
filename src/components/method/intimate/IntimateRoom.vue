<template>
  <div class="method-content-box">
    <div class="left-box">
      <video
        src="../../../assets/img/method/LivingRoom.mp4"
        autoplay
        muted
        playsinline
        controls
        loop
        class="left-video"
      ></video>
    </div>
    <div class="right-box">
      <div class="title-box">客廳雙迴路</div>
      <div class="content-box">
        <div class="content">
          客廳雙邊皆設置迴路，客廳電視與家電用品，可隨自身需求雙邊自由擺設。
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
    '<0.1',
  )
}

onMounted(() => {
  initGsap()
})
</script>

<style scoped></style>
