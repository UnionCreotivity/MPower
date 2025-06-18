<template>
  <TransitionGroup name="fade-item">
    <slot></slot>
  </TransitionGroup>
</template>

<script setup lang="ts"></script>

<style lang="scss">
.fade-item-enter-from,
.fade-item-leave-to {
  opacity: 0;
}

.fade-item-enter-to,
.fade-item-leave-from {
  opacity: 1;
}

.fade-item-enter-active,
.fade-item-leave-active {
  transition: all 0.5s;
}
.fade-item-leave-active {
  position: absolute;
}
</style>
