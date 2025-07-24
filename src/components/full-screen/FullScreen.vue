<template>
  <div class="full-screen" @click.stop="handleClick">
    <img :src="isWhiteFullIcon ? fullIconWhite : fullIconDefault" alt="" />
  </div>
</template>

<script setup lang="ts">
import screenfull from 'screenfull'
import { computed } from 'vue'
import { useRoute } from 'vue-router'

const route = useRoute()

const whiteMenuRoutes = ['buildling']
const isWhiteFullIcon = computed(() => whiteMenuRoutes.includes(route.name as string))
const fullIconDefault = new URL('@/assets/img/other/full-screen.svg', import.meta.url).href
const fullIconWhite = new URL('@/assets/img/other/full-screen-white.min.svg', import.meta.url).href

const handleClick = () => {
  setTimeout(() => {
    if (screenfull.isEnabled) {
      screenfull.toggle()
    }
  }, 50)
}
</script>

<style lang="scss" scoped>
.full-screen {
  position: absolute;
  right: 3vw;
  bottom: 5%;
  width: 3vw;
  height: 3vw;
  opacity: 0.5;
  z-index: 65;
  img {
    height: 100%;
  }
  @media screen and (max-width: 1400px) {
    width: 5vw;
    height: 5vw;
    bottom: 3%;
  }
}
</style>
