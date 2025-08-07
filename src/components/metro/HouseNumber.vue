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

      <div class="content" ref="content">
        文心首排所在，地段已無複製。<br />
        門牌無聲，卻深藏識別。<br />
        十餘金控匯聚，金融一條街。<br />
        能瞬移全城，也能靜觀繁華。<br />
        這片珍稀留白，為少數先見者預留。<br />
        台中移動生活圈首選，步伐所至皆生活風景。
      </div>
    </div>

    <div class="hint">情境示意圖</div>
  </div>
</template>

<script setup lang="ts">
import { ref, onMounted, defineEmits } from 'vue'
import gsap from 'gsap'
import SplitText from 'gsap/SplitText'

import '@/assets/scss/metro/_house-number.scss'

gsap.registerPlugin(SplitText)
const content = ref<HTMLElement | null>(null)

const emit = defineEmits(['close'])

const imgAni = () => {
  const tl = gsap.timeline({})
  const splitContent = new SplitText(content.value, { type: 'lines' })
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
        duration: 1,
        opacity: 0,
        scale: 1.4,
        ease: 'power0.in',
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
      '<0.35',
    )
    .fromTo(
      splitContent.lines,
      {
        autoAlpha: 0,
        y: '80',
      },
      { y: '0', duration: 1, autoAlpha: 1, stagger: 0.1 },
      '<0.3',
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
