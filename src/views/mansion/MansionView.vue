<template>
  <ViewFixed id="masion-view">
    <router-view></router-view>
  </ViewFixed>
</template>

<script setup lang="ts">
import { RouterView } from 'vue-router'
import ViewFixed from '@/components/view-fixed/ViewFixed.vue'
</script>

<style lang="scss">
#masion-view {
  background-color: #f4f3ec;
  width: 100%;
  height: 100svh;
  overflow: hidden;
  @media all and (max-width: 1400px) {
    height: 100%;
    display: flex;
    flex-direction: column;
    justify-content: center;
  }
}
</style>
