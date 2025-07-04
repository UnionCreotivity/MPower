<template>
  <div className="glow">
    <div v-for="item in dot" :key="item.key" className="glow-dot" :style="[item]"></div>
  </div>
</template>

<script setup lang="ts">
defineOptions({
  name: 'GlowEffect',
})
const props = defineProps(['parentLength'])

interface DOT {
  left: string
  scale: number
  animationDuration: string
  animationDelay: string
  key: string
}
import { ref, onMounted } from 'vue'
import { nanoid } from 'nanoid'

const length = ref(30)

const dot = ref<DOT[]>([])

onMounted(() => {
  if (props.parentLength) {
    length.value = props.parentLength
  }
  for (let i = 0; i < length.value; i++) {
    dot.value.push({
      left: Math.floor(Math.random() * 100) + '%',
      scale: Math.random() * 1.5 + 0.3,
      animationDuration: Math.random() * 7 + 3 + 's',
      animationDelay: Math.random() * 6 + 's',
      key: nanoid(),
    })
  }
})
</script>

<style>
.glow {
  position: absolute;
  transform-origin: center bottom;
  overflow: hidden;
  width: 10vw;
  height: 7vw;
  top: 75%;
  left: 46%;
}

.glow .dot {
  position: absolute;
  width: 0.2vw;
  height: 0.2vw;
  border-radius: 50%;
  background-color: color;
  box-shadow: 0 0 10px 2.5px;
  animation-name: glow;
  animation-timing-function: linear;
  animation-fill-mode: forwards;
  animation-iteration-count: infinite;
  bottom: -20px;
}
.glow .glow-dot {
  position: absolute;
  width: 0.2vw;
  height: 0.2vw;
  border-radius: 50%;
  background-color: white;
  box-shadow: rgb(255, 255, 255) 0px 0px 10px 2.5px;
  animation-name: glow;
  animation-timing-function: linear;
  animation-fill-mode: forwards;
  animation-iteration-count: infinite;
  bottom: -20px;
  z-index: 10;
}
@keyframes glow {
  0% {
    bottom: 0%;
  }
  100% {
    bottom: 100%;
  }
}
.glow img {
  position: absolute;
  left: 0;
  bottom: 0;
  width: 100%;
  height: 100%;
}
</style>
