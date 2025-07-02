<template>
  <div class="method-content-box">
    <div class="left-box">
      <video
        src="../../../assets/img/method/FloorFinishing.mp4"
        autoplay
        muted
        playsinline
        controls
        loop
        class="left-video"
      ></video>
    </div>
    <div class="right-box">
      <div class="title-box">樓板整體粉光</div>
      <div class="content-box">
        <div class="content">
          樓板灌漿完成後，進行粉光作業，後續進行灑水養護，以防因混凝土水份快速蒸發產生龜裂现象。
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
