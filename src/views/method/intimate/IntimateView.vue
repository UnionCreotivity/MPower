<template>
  <section class="intimate-view method-tab-view">
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

import CommingSoon from '@/components/comingsoon/ComingSoon.vue'

const router = useRouter()
const goBack = () => router.push('/method')

const tabs = [
  { title: '當層排氣', component: CommingSoon },
  { title: '總存水彎', component: CommingSoon },
  { title: '緊急供電', component: CommingSoon },
  { title: '地下室美化', component: CommingSoon },
  { title: '給水試壓', component: CommingSoon },
  { title: '2F獨立管道', component: CommingSoon },
  { title: '預留充電管路', component: CommingSoon },
  { title: '廚房垃圾設備', component: CommingSoon },
]

const activeTab = ref(0)
</script>

<style scoped></style>
