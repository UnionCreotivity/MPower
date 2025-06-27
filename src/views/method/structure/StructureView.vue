<template>
  <section class="structure-view">
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

import StructureAlfaSafe from '@/components/method/structure/StructureAlfaSafe.vue'
import StructureAluminumForm from '@/components/method/structure/StructureAluminumForm.vue'
import StructureDoubleRebar from '@/components/method/structure/StructureDoubleRebar.vue'

const router = useRouter()
const goBack = () => router.push('/method')

const tabs = [
  { title: 'ALFA SAFE', component: StructureAlfaSafe },
  { title: '系統鋁膜', component: StructureAluminumForm },
  { title: '雙層鋼筋', component: StructureDoubleRebar },
  { title: 'SA續接器', component: StructureDoubleRebar },
  { title: '樓板整體粉光', component: StructureDoubleRebar },
]

const activeTab = ref(0)
</script>

<style scoped></style>
