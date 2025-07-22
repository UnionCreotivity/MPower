<template>
  <div class="mrt-group">
    <div class="red-line mrt-line">
      <img src="/src/assets/img/metro/red_line.webp" alt="red_line" />
    </div>
    <div class="green-line mrt-line" @click="$emit('open-green-line')">
      <img src="/src/assets/img/metro/green_line.svg" alt="green_line" />
    </div>
    <div class="blue-line mrt-line">
      <img src="/src/assets/img/metro/blue_line.webp" alt="blue_line" />
    </div>
    <div class="orange-line mrt-line">
      <img src="/src/assets/img/metro/orange_line.webp" alt="orange_line" />
    </div>
  </div>
</template>

<script setup lang="ts"></script>
