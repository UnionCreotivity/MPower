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
    <div class="right-mark-text">WATERPROOF</div>
  </section>
  <FullScreen />
</template>

<script setup lang="ts">
import '@/assets/scss/method/_method-page.scss'

import { ref, onMounted } from 'vue'
import { useRouter } from 'vue-router'

import WaterWindow from '@/components/method/waterproof/WaterWindow.vue'
import WaterBath from '@/components/method/waterproof/WaterBath.vue'
import WaterRoof from '@/components/method/waterproof/WaterRoof.vue'
import WaterWall from '@/components/method/waterproof/WaterWall.vue'
import FullScreen from '@/components/full-screen/FullScreen.vue'

const router = useRouter()
const goBack = () => router.push('/method')

const tabs = [
  { title: '窗框防水', component: WaterWindow },
  { title: '浴室防水', component: WaterBath },
  { title: '屋頂防水', component: WaterRoof },
  { title: '外牆防水', component: WaterWall },
]
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
const activeTab = ref(0)
</script>

<style scoped></style>
