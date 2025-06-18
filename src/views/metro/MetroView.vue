<template>
  <ViewFixed id="metro-view">
    <router-view></router-view>
  </ViewFixed>
</template>

<script setup lang="ts">
import { RouterView } from 'vue-router'
import ViewFixed from '@/components/view-fixed/ViewFixed.vue'
</script>

<style>
#metro-view {
  background-color: #faf8f0;
  width: 100%;
  height: 100svh;
  overflow: hidden;
}
</style>
