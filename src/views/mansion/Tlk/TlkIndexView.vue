<template>
  <section class="tlk-view mansion-content-view">
    <div class="tlk-icon">
      <img src="../../../assets/img/mansion/tlk/tlk_icon.svg" alt="" srcset="" />
    </div>
    <div class="tab-box" :class="{ 'is-product-tab': tabs[activeTab].component === TlkProduct }">
      <div
        v-for="(tab, index) in tabs"
        :key="tab.title"
        :class="{ active: activeTab === index }"
        @click="activeTab = index"
      >
        {{ tab.title }}
      </div>
    </div>

    <transition name="fade" mode="out-in">
      <component :is="tabs[activeTab].component" :key="activeTab" />
    </transition>
    <FullScreen />
  </section>
</template>

<script setup lang="ts">
import '@/assets/scss/mansion/tlk/_tlk-index.scss'
import { ref } from 'vue'
import TlkBrand from '@/components/mansion/tlk/TlkBrand.vue'
import TlkProduct from '@/components/mansion/tlk/TlkProduct.vue'
import FullScreen from '@/components/full-screen/FullScreen.vue'

const activeTab = ref(0)

const tabs = [
  { title: '品牌介紹', component: TlkBrand },
  { title: '產品介紹', component: TlkProduct },
]
</script>

<style scoped></style>
