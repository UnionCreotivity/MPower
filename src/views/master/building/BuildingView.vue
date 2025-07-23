<template>
  <section class="building-view">
    <FloorView @selectFloor="handleSelectFloor" v-if="!selectedFloor" />
    <FloorMenu @selectFloor="handleSelectFloor" />
  </section>
</template>

<script setup lang="ts">
import { ref } from 'vue'
import FloorView from '../../../components/Floor/floorView/FloorView.vue'
import FloorMenu from '../../../components/Floor/floorMenu/FloorMenu.vue'
import '@/assets/scss/building/_building-view.scss'

const selectedFloor = ref<string | null>(null)

function handleSelectFloor(floorId: string) {
  selectedFloor.value = floorId
}
</script>

<style lang="scss"></style>
