<template>
  <article :id="props.title" style="height: 100%">
    <Menu />
    <slot></slot>
  </article>
</template>

<script setup lang="ts">
import Menu from '../menu/Menu.vue'

const props = defineProps(['title'])
</script>

<style scoped></style>
