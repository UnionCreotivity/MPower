<template>
  <div class="mrt-group">
    <div class="red-line mrt-line">
      <img src="/src/assets/img/metro/red_line.webp" alt="紅線" />
    </div>
    <div class="green-line mrt-line">
      <img src="/src/assets/img/metro/green_line.webp" alt="綠線" />
    </div>
    <div class="blue-line mrt-line">
      <img src="/src/assets/img/metro/blue_line.webp" alt="藍線" />
    </div>
    <div class="orange-line mrt-line">
      <img src="/src/assets/img/metro/orange_line.webp" alt="橘線" />
    </div>
  </div>
</template>

<script setup lang="ts">
// 可放入動畫或互動邏輯
</script>

<style scoped>
.mrt-group {
  /* 你想要的整體樣式 */
}

.mrt-line img {
  max-width: 100%;
  display: block;
}
</style>
