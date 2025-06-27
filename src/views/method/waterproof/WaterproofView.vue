<template>
  <section class="waterproof-view">
    <button class="back-button" @click="goBack">← 上一個目錄</button>
    <h2>防水工法內容</h2>
    <p>這裡是防水工法的詳細說明內容...</p>
  </section>
</template>

<script setup lang="ts">
import { useRouter } from 'vue-router'
const router = useRouter()
const goBack = () => router.push('/method')
</script>

<style scoped>
.back-button {
  margin-bottom: 1rem;
  cursor: pointer;
  background: none;
  border: none;
  font-size: 1rem;
  color: #333;
}
</style>
