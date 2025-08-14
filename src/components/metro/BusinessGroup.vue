<template>
  <div class="business-group">
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
  const tl = gsap.timeline({})

  tl.fromTo(
    '.arial-view .img-box .tab3-img1,.arial-view .img-box .tab3-img2,.arial-view .img-box .tab3-img3',
    {
      maskPosition: '0 200%',
    },
    { maskPosition: '0% 0%', duration: 1.5, ease: 'power1.inOut' },
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
