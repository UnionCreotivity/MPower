<template>
  <section class="team-menu-view">
    <div class="overlay-close" @click="goBack"></div>
    <FullScreen />
  </section>
</template>

<script setup lang="ts">
import '@/assets/scss/team/_team-content.scss'
import FullScreen from '@/components/full-screen/FullScreen.vue'
import { onMounted } from 'vue'
import { useRouter } from 'vue-router'
import { gsap } from 'gsap'
import { SplitText } from 'gsap/SplitText'

const router = useRouter()
const goBack = () => router.push('/master/teamIndex')
</script>

<style scoped></style>
