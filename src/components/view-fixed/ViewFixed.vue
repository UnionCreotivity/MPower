<template>
  <article :id="props.title" style="height: 100%">
    <Menu />
    <FullScreen />
    <slot></slot>
  </article>
</template>

<script setup lang="ts">
import Menu from '../menu/Menu.vue'
import FullScreen from '../full-screen/FullScreen.vue'

const props = defineProps(['title'])
</script>

<style scoped></style>
