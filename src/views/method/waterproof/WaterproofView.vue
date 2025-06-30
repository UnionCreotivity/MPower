<template>
  <section class="waterproof-view method-tab-view">
    <div class="back-button" @click="goBack">
      <img src="../../../assets/img/method/x.svg" alt="" srcset="" />
    </div>

    <div class="tab-box">
      <div
        v-for="(tab, index) in tabs"
        :key="tab.title"
        :class="{ active: activeTab === index }"
        @click="activeTab = index"
      >
        {{ tab.title }}
      </div>
    </div>

    <component :is="tabs[activeTab].component" />
  </section>
</template>

<script setup lang="ts">
import '@/assets/scss/method/_method-page.scss'

import { ref } from 'vue'
import { useRouter } from 'vue-router'

import WaterWindow from '@/components/method/waterproof/WaterWindow.vue'
import WaterBath from '@/components/method/waterproof/WaterBath.vue'
import WaterRoof from '@/components/method/waterproof/WaterRoof.vue'

const router = useRouter()
const goBack = () => router.push('/method')

const tabs = [
  { title: '窗框防水', component: WaterWindow },
  { title: '浴室防水', component: WaterBath },
  { title: '頂樓防水', component: WaterRoof },
]

const activeTab = ref(0)
</script>

<style scoped></style>
