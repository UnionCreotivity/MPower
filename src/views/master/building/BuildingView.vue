<template>
  <section class="building-view">
    <FloorView
      @selectFloor="handleSelectFloor"
      v-if="!selectedFloor"
      @switchMode="mode = $event"
      :mode="mode"
    />
    <FloorMenu @selectFloor="handleSelectFloor" :mode="mode" />
    <FloorDetail v-if="selectedFloor" :floor="selectedFloor" @close="closeDetail" />
  </section>
</template>

<script setup lang="ts">
import { ref } from 'vue'
import FloorView from '../../../components/Floor/floorView/FloorView.vue'
import FloorMenu from '../../../components/Floor/floorMenu/FloorMenu.vue'
import FloorDetail from '../../../components/Floor/floorDetail/FloorDetail.vue'
import '@/assets/scss/building/_building-view.scss'

const selectedFloor = ref<string | null>(null)
const mode = ref<'day' | 'night'>('day') // ← 這行一定要加

function closeDetail() {
  selectedFloor.value = null;
  mode.value='day'; // 返回主視圖時重設為日間模式
}

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
