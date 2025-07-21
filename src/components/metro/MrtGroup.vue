<template>
  <div class="mrt-group">
    <div class="red-line mrt-line">
      <img src="/src/assets/img/metro/red_line.webp" alt="紅線" />
    </div>
    <div class="green-line mrt-line" @click="$emit('open-green-line')">
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

<script setup lang="ts"></script>
