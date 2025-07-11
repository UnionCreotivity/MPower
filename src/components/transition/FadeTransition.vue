<template>
  <Transition name="fade" appear>
    <slot></slot>
  </Transition>
</template>

<script setup lang="ts"></script>

<style scoped>
.fade-enter-from,
.fade-leave-to {
  opacity: 0;
  transform: scale(0.95);
}

.fade-enter-to,
.fade-leave-from {
  opacity: 1;
  transform: scale(1);
}

.fade-enter-active,
.fade-leave-active {
  transition: all 0.3s ease;
}
</style>
