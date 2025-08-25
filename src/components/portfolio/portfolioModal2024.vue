<template>
  <div class="portfolio-modal">
    <div class="overlay-close" @click="emit('close')"></div>
    <!-- 2024 -->
    <div class="portfolio-2024-box">
      <div class="img-box">
        <img src="../../assets/img/metier/portfolio/b_5.webp" alt="" srcset="" />
      </div>
    </div>
  </div>
</template>
<script setup lang="ts">
import '@/assets/scss/portfolioModal/_portfolio-modal.scss'

const emit = defineEmits<{
  (e: 'close'): void
}>()
</script>
