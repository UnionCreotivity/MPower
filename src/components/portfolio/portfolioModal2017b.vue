<template>
  <div class="portfolio-modal">
    <div class="overlay-close" @click="emit('close')"></div>
    <!-- 2017 大熊康橋 -->
    <div class="portfolio-2017-box">
      <div class="img-box">
        <img src="../../assets/img/metier/portfolio/b_3.webp" alt="b_3" srcset="" />
        <div class="hint">現場實景圖</div>
      </div>
      <img src="../../assets/img/metier/portfolio/3_item.webp" alt="3_item" class="item" />
    </div>
  </div>
</template>
<script setup lang="ts">
import '@/assets/scss/portfolioModal/_portfolio-modal.scss'

const emit = defineEmits<{
  (e: 'close'): void
}>()
</script>
