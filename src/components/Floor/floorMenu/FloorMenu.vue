<template>
  <div class="floor-menu">
    <div class="floor-box">
      <div class="floor-title">FLOOR</div>
      <div
        v-for="floor in floorList"
        :key="floor"
        class="floor"
        @click="$emit('selectFloor', floor)"
      >
        {{ floor }}
      </div>
    </div>
  </div>
</template>

<script setup lang="ts">
import '@/assets/scss/building/_building-view.scss'
import { ref } from 'vue'

const floorList = ['R1', '3F-12F', '2F', '1F', 'B1', 'B2', 'B3', 'B4']
</script>

<style lang="scss"></style>
