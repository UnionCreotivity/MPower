<template>
  <ViewFixed id="calculator-index-view">
    <router-view></router-view>
    <FullScreen />
  </ViewFixed>
</template>

<script setup lang="ts">
import { RouterView } from 'vue-router'
import ViewFixed from '@/components/view-fixed/ViewFixed.vue'
import FullScreen from '@/components/full-screen/FullScreen.vue'
</script>

<style>
#calculator-index-view {
  background-color: #f4f3ec;
  width: 100%;
  height: 100svh;
  overflow: hidden;
}
</style>
