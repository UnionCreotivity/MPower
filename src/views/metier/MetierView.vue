<template>
  <ViewFixed id="metier-view">
    <div class="tab-box">
      <div
        v-for="tab in tabs"
        :key="tab.name"
        :class="{ active: $route.name === tab.name }"
        @click="go(tab.name)"
      >
        {{ tab.title }}
      </div>
    </div>
    <router-view> </router-view>
  </ViewFixed>
</template>

<script setup lang="ts">
import { RouterView, useRouter } from 'vue-router'
import ViewFixed from '@/components/view-fixed/ViewFixed.vue'
import '@/assets/scss/metier/_metier-view.scss'

const router = useRouter()

const tabs = [
  { title: '營建起家', name: 'build-origin' },
  { title: '三心二藝', name: 'brand-value' },
  { title: '歷年業績', name: 'portfolio' },
  { title: '售後服務', name: 'after-service' },
]

const go = (name: string) => {
  router.push({ name })
}
</script>
