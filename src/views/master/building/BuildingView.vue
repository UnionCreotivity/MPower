<template>
  <section class="building-view">
    <FloorView @selectFloor="handleSelectFloor" v-if="!selectedFloor" />
    <FloorMenu @selectFloor="handleSelectFloor" />
    <FloorDetail v-if="selectedFloor" :floor="selectedFloor" @close="selectedFloor = null" />
  </section>
</template>

<script setup lang="ts">
import { ref } from 'vue'
import FloorView from '../../../components/Floor/floorView/FloorView.vue'
import FloorMenu from '../../../components/Floor/floorMenu/FloorMenu.vue'
import FloorDetail from '../../../components/Floor/floorDetail/FloorDetail.vue'
import '@/assets/scss/building/_building-view.scss'

const selectedFloor = ref<string | null>(null)

function handleSelectFloor(floorId: string) {
  selectedFloor.value = floorId
}
</script>

<style lang="scss">
.fade-enter-active,
.fade-leave-active {
  transition: all 0.8s ease-in-out;
}
.fade-enter-from,
.fade-leave-to {
  opacity: 0;
}
</style>
