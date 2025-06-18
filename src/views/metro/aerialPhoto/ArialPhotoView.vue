<template>
  <section class="arial-view">
    <div class="img-box">
      <img src="/src/assets/img/metro/arial.webp" alt="" />
    </div>
  </section>
</template>

<script setup lang="ts">
import { onMounted } from 'vue'
import gsap from 'gsap'

import '@/assets/scss/metro/_arial-photo.scss'
const initGsap = () => {
  const tl = gsap.timeline({})
  tl.from('.arial-view .img-box img', {
    duration: 1,
    opacity: 0,
    filter: 'blur(5px)',
  })
}
onMounted(() => {
  initGsap()
})
</script>

<style scoped></style>
