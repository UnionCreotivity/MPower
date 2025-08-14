<template>
  <div class="core-group">
    <div class="tab4-img1 core-line">
      <img src="/src/assets/img/metro/tab4_1.svg" alt="tab4_1" />
    </div>
    <div class="tab4-img2 core-line">
      <img src="/src/assets/img/metro/tab4_2.svg" alt="tab4_2" />
    </div>
    <div class="tab4-img3 core-line">
      <img src="/src/assets/img/metro/tab4_3.svg" alt="tab4_3" />
    </div>
  </div>
</template>

<script setup lang="ts">
import { onMounted } from 'vue'
import gsap from 'gsap'

const imgAni = () => {
  const tl = gsap.timeline({})

  tl.fromTo(
    '.core-group .tab4-img1,.core-group .tab4-img2,.core-group .tab4-img3',
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
.core-line img {
  max-width: 100%;
  display: block;
}
</style>
