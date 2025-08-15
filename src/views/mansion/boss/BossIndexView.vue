<template>
  <section class="boss-view mansion-content-view">
    <div class="tab-box" :class="{ 'is-product-tab': tabs[activeTab].component === BossProduct }">
      <div
        v-for="(tab, index) in tabs"
        :key="tab.title"
        :class="{ active: activeTab === index }"
        @click="activeTab = index"
      >
        {{ tab.title }}
      </div>
    </div>

    <component :is="tabs[activeTab].component" :key="activeTab" />

    <FullScreen />
  </section>
</template>

<script setup lang="ts">
import '@/assets/scss/mansion/boss/_boss-index.scss'
import { ref } from 'vue'
import BossBrand from '@/components/mansion/boss/BossBrand.vue'
import BossProduct from '@/components/mansion/boss/BossProduct.vue'
import FullScreen from '@/components/full-screen/FullScreen.vue'

const activeTab = ref(0)

const tabs = [
  { title: '品牌介紹', component: BossBrand },
  { title: '產品介紹', component: BossProduct },
]
</script>

<style scoped></style>
