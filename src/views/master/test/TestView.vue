<template>
  <section class="test-view">
    <video autoplay loop muted preload="auto" width="640" height="360" :src="videoSrc"></video>
  </section>
</template>

<script setup lang="ts">
import '@/assets/scss/metro/_arial-photo.scss'
const videoSrc = '/videos/test.mp4'
</script>

<style scoped></style>
