<template>
  <div class="method-content-box">
    <div class="left-box">
      <video
        src="../../../assets/img/method/FloorExhaust.mp4"
        autoplay
        muted
        playsinline
        controls
        loop
        class="left-video"
      ></video>
    </div>
    <div class="right-box">
      <div class="title-box">當層排氣</div>
      <div class="content-box">
        <div class="content">
          <div>
            傳統衛浴間空氣，僅賴貫通全棟的小管道間，各樓層排氣全集中到頂樓排出，易發生排氣不良的狀況。
          </div>
          <div>
            本案採「當層排氣」設計，各戶衛浴擁有自己的獨立排氣孔，隨時保持衛浴空氣對外流通，最重要的是從此不再有上下樓層臭氣相通的困擾，居家品質大幅提升。
          </div>
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
