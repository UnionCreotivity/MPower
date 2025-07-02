<template>
  <div class="method-content-box">
    <div class="left-box">
      <video
        src="../../../assets/img/method/WaterPressureTest.mp4"
        autoplay
        muted
        playsinline
        controls
        loop
        class="left-video"
      ></video>
    </div>
    <div class="right-box">
      <div class="title-box">給水試壓</div>
      <div class="content-box">
        <div class="content">
          完成管路安裝後，利用加壓設備對給水或 排水管線進行加壓測試，檢查是否有漏水、
          鬆脫或接頭不密合等問題。試壓可確保管路系統的氣密性與耐壓性，是驗收前必要工序，有助避免日後滲漏造成牆體或地坪損壞，維護用水安全與建物品質。
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
