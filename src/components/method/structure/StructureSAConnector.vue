<template>
  <div class="method-content-box">
    <div class="left-box">
      <video
        src="../../../assets/img/method/SAConnector.mp4"
        autoplay
        muted
        playsinline
        controls
        loop
        class="left-video"
      ></video>
    </div>
    <div class="right-box">
      <div class="title-box">SA續接器</div>
      <div class="content-box">
        <div class="content">
          採用最高耐震等級-SA級續接器，與台灣高鐵、台北高雄捷運、台北101大樓、核能電廠一至四廠等相同產品與責任，並通過ISO9001-2000國際級標準檢驗。
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
