<template>
  <ViewFixed id="method-view">
    <router-view></router-view>
  </ViewFixed>
</template>

<script setup lang="ts">
import { RouterView } from 'vue-router'
import ViewFixed from '@/components/view-fixed/ViewFixed.vue'
</script>

<style>
#method-view {
  background-color: #f4f3ec;
  width: 100%;
  height: 100svh;
  overflow: hidden;
}
</style>
