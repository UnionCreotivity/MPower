<template>
  <div class="portfolio-modal">
    <div class="overlay-close" @click="$emit('close')"></div>
    <!-- 2008 -->
    <div class="portfolio-2008-box">
      <div class="img-box">
        <img src="../../assets/img/metier/portfolio/b_1_1.webp" alt="" srcset="" />
      </div>
      <div class="img-box">
        <img src="../../assets/img/metier/portfolio/b_1_2.webp" alt="" srcset="" />
      </div>
      <div class="img-box">
        <img src="../../assets/img/metier/portfolio/b_1_3.webp" alt="" srcset="" />
      </div>
    </div>
    <div class="hint">現場實景圖</div>
  </div>
</template>
<script setup lang="ts">
import '@/assets/scss/portfolioModal/_portfolio-modal.scss'
</script>
