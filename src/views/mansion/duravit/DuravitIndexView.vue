<template>
  <section class="duravit-view mansion-content-view">
    <div
      class="tab-box"
      :class="{ 'is-product-tab': tabs[activeTab].component === DuravitProduct }"
    >
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
import '@/assets/scss/mansion/duravit/_duravit-index.scss'
import { ref } from 'vue'
import DuravitBrand from '@/components/mansion/duravit/DuravitBrand.vue'
import DuravitProduct from '@/components/mansion/duravit/DuravitProduct.vue'
import FullScreen from '@/components/full-screen/FullScreen.vue'

const activeTab = ref(0)

const tabs = [
  { title: '品牌介紹', component: DuravitBrand },
  { title: '產品介紹', component: DuravitProduct },
]
</script>

<style scoped></style>
