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
    <div class="right-mark-text">INTIMATE</div>
  </section>
  <FullScreen />
</template>

<script setup lang="ts">
import '@/assets/scss/method/_method-page.scss'

import { ref, onMounted } from 'vue'
import { useRouter } from 'vue-router'

import IntimateFloorExhaust from '@/components/method/intimate/IntimateFloorExhaust.vue'
import IntimateMainTrap from '@/components/method/intimate/IntimateMainTrap.vue'
import IntimateEmergencyPower from '@/components/method/intimate/IntimateEmergencyPower.vue'
import IntimateWaterPressureTest from '@/components/method/intimate/IntimateWaterPressureTest.vue'
import IntimateRoom from '@/components/method/intimate/IntimateRoom.vue'
import IntimateCharging from '@/components/method/intimate/IntimateCharging.vue'
import IntimateKitchen from '@/components/method/intimate/IntimateKitchen.vue'
import FullScreen from '@/components/full-screen/FullScreen.vue'

const router = useRouter()
const goBack = () => router.push('/method')

const tabs = [
  { title: '當層排氣', component: IntimateFloorExhaust },
  { title: '總存水彎', component: IntimateMainTrap },
  { title: '緊急供電', component: IntimateEmergencyPower },
  { title: '客廳雙迴路', component: IntimateRoom },
  { title: '給水試壓', component: IntimateWaterPressureTest },
  { title: '預留充電管路', component: IntimateCharging },
  { title: '廚房垃圾設備', component: IntimateKitchen },
]

const activeTab = ref(0)

onMounted(() => {
  if (window.innerWidth <= 1400) return
  const backButton = document.querySelector('.back-button')
  const cursor = document.getElementById('custom-cursor')

  if (backButton && cursor) {
    backButton.addEventListener('mouseenter', () => {
      cursor.classList.add('cursor--hover')
    })

    backButton.addEventListener('mouseleave', () => {
      cursor.classList.remove('cursor--hover')
    })
    backButton.addEventListener('click', () => {
      cursor.classList.remove('cursor--hover')
    })
  }
})
</script>

<style scoped></style>
