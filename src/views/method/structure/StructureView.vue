<template>
  <section class="structure-view method-tab-view">
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

    <div class="right-mark-text">STRUCTURE</div>
  </section>
</template>

<script setup lang="ts">
import '@/assets/scss/method/_method-page.scss'

import { ref, onMounted } from 'vue'
import { useRouter } from 'vue-router'

import StructureAlfaSafe from '@/components/method/structure/StructureAlfaSafe.vue'
import StructureAluminumForm from '@/components/method/structure/StructureAluminumForm.vue'
import StructureDoubleRebar from '@/components/method/structure/StructureDoubleRebar.vue'
import StructureFloorFinishing from '@/components/method/structure/StructureFloorFinishing.vue'
import StructureSAConnector from '@/components/method/structure/StructureSAConnector.vue'

const router = useRouter()
const goBack = () => router.push('/method')

const tabs = [
  { title: 'ALFA SAFE', component: StructureAlfaSafe },
  { title: '筏式基礎', component: StructureAluminumForm },
  { title: '雙層鋼筋', component: StructureDoubleRebar },
  { title: 'SA續接器', component: StructureSAConnector },
  { title: '樓板整體粉光', component: StructureFloorFinishing },
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
