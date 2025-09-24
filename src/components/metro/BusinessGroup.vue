<template>
  <div class="business-group">
    <img
      class="zhong-qing-point line-point"
      ref="zhongQingPoint"
      src="../../assets/img/life/point.svg"
      alt="zhongQingPoint"
      @click="$emit('open-zhong-qing')"
    />
    <img
      class="bei-ping-point line-point"
      ref="beiPingPoint"
      src="../../assets/img/life/point.svg"
      alt="beiPingPoint"
      @click="$emit('open-bei-ping')"
    />
    <img
      class="chong-de-point line-point"
      ref="chongDePoint"
      src="../../assets/img/life/point.svg"
      alt="chongDePoint"
      @click="$emit('open-chong-de')"
    />

    <div class="tab3-img1 business-line">
      <img src="@/assets/img/metro/tab3_1.png" alt="tab3_1" />
    </div>
    <div class="tab3-img2 business-line">
      <img src="@/assets/img/metro/tab3_2.png" alt="tab3_2" />
    </div>
    <div class="tab3-img3 business-line">
      <img src="@/assets/img/metro/tab3_3.png" alt="tab3_3" />
    </div>

    <div class="tab3-line-bg">
      <img src="@/assets/img/metro/tab3_bgline.png" alt="" srcset="" />
    </div>
  </div>
</template>

<script setup lang="ts">
import { onMounted } from 'vue'
import gsap from 'gsap'

const imgAni = () => {
  const tl = gsap.timeline({ delay: 0.3 })

  tl.fromTo(
    '.arial-view .img-box .tab3-img1,.arial-view .img-box .tab3-img2,.arial-view .img-box .tab3-img3',
    {
      maskPosition: '0 200%',
    },
    { maskPosition: '0% 0%', duration: 1 },
  )
}

onMounted(() => {
  imgAni()
})
</script>

<style scoped>
.business-line img {
  max-width: 100%;
  display: block;
}
</style>
