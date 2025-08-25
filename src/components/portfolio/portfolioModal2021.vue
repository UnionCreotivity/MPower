<template>
  <div class="portfolio-modal">
    <div class="overlay-close" @click="emit('close')"></div>
    <!-- 2021 -->
    <div class="portfolio-2021-box">
      <div class="left-img-box">
        <img src="../../assets/img/metier/portfolio/b_4_1.webp" alt="" srcset="" />
        <div class="hint">現場實景圖</div>
      </div>
      <div class="right-img-box">
        <div>
          <img src="../../assets/img/metier/portfolio/b_4_2.webp" alt="" srcset="" />
          <div class="hint">現場實景圖</div>
        </div>
        <div class="right-bottom-box">
          <img src="../../assets/img/metier/portfolio/b_4_3.webp" alt="" srcset="" />
          <div class="hint">現場實景圖</div>
        </div>
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
