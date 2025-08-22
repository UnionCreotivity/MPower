<template>
  <div class="portfolio-modal">
    <div class="overlay-close" @click="$emit('close')"></div>
    <!-- 2008 -->
    <div class="single">
      <div class="img-box">
        <img src="../../assets/img/metier/portfolio/b_6.webp" alt="" srcset="" />
        <div class="hint">3D外觀圖</div>
      </div>
    </div>
  </div>

  <FullScreen :forceWhiteIcon="true" />
</template>
<script setup lang="ts">
import '@/assets/scss/portfolioModal/_portfolio-modal.scss'
import FullScreen from '@/components/full-screen/FullScreen.vue'
</script>
