<template>
  <div class="method-wrapper">
    <transition name="fade" mode="out-in">
      <component
        :is="currentComponent"
        :key="currentIndex"
        @next="nextComponent"
        @prev="prevComponent"
      />
    </transition>
  </div>
</template>

<script setup lang="ts">
import { ref, computed } from 'vue'
import AlfaSafeCICS from '@/components/method/structure/alfa-safe/AlfaSafeCICS.vue'
import AlfaSafeSWCM from '@/components/method/structure/alfa-safe/AlfaSafeSWCM.vue'
import AlfaSafePerson from '@/components/method/structure/alfa-safe/AlfaSafePerson.vue'

// 所有元件放進陣列
const components = [AlfaSafePerson, AlfaSafeCICS, AlfaSafeSWCM]

// 當前 index
const currentIndex = ref(0)

// 計算當前要顯示的元件
const currentComponent = computed(() => components[currentIndex.value])

// 切換上一個
function prevComponent() {
  currentIndex.value = (currentIndex.value - 1 + components.length) % components.length
}

// 切換下一個
function nextComponent() {
  currentIndex.value = (currentIndex.value + 1) % components.length
}
</script>
<style scoped>
/* 淡入淡出動畫 */
.fade-enter-active,
.fade-leave-active {
  transition: opacity 0.5s ease;
}
.fade-enter-from,
.fade-leave-to {
  opacity: 0;
}
</style>
