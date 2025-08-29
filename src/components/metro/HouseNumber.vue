<template>
  <div class="number-box">
    <div class="overlay-close" @click="closeWithAnimation"></div>
    <div class="img-box">
      <img src="../../assets/img/metro/door_bg.webp" alt="door_bg" srcset="" />
    </div>

    <div class="number-content-box">
      <div class="title-box">
        <div class="title">
          <div class="img-40">
            <img src="../../assets/img/metro/40.png" alt="40" srcset="" />
          </div>
          米文心金融大道，門牌身段
        </div>
        <div class="small-title">
          <img src="../../assets/img/metro/number_title.png" alt="number_title" srcset="" />
        </div>
      </div>
    </div>

    <div class="hint">情境示意圖</div>
  </div>
</template>

<script setup lang="ts">
import { onMounted, defineEmits } from 'vue'
import gsap from 'gsap'
import SplitText from 'gsap/SplitText'

import '@/assets/scss/metro/_house-number.scss'

gsap.registerPlugin(SplitText)

const emit = defineEmits(['close'])

const imgAni = () => {
  const tl = gsap.timeline({})

  tl.fromTo(
    '.number-box',
    {
      maskPosition: '200% 0',
    },
    {
      maskPosition: '0% 0%',
      duration: 1.5,
      ease: 'cubic-bezier(0.64, 0.03, 0.07, 0.97)',
    },
  )
    .from(
      '.number-box .img-box img',
      {
        duration: 1.2,
        opacity: 0,

        scale: 1.4,

        ease: 'power1.inOut',
      },
      '<0.2',
    )
    .from(
      '#metro-view .number-box .number-content-box .title-box div',
      {
        duration: 1,
        opacity: 0,
        y: '80',
        stagger: 0.08,
      },
      '<0.5',
    )
}

const closeWithAnimation = () => {
  const tl = gsap.timeline({
    onComplete: () => {
      emit('close') // 動畫結束後再真正關閉
    },
  })

  tl.to('.number-box', {
    maskPosition: '200% 0',
    duration: 1.2,
    ease: 'cubic-bezier(0.64, 0.03, 0.07, 0.97)',
  })
}

// 初始化時先呼叫一次
onMounted(async () => {
  imgAni()
})
</script>

<style scoped></style>
