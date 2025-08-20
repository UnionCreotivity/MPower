<template>
  <section class="build-value">
    <div class="left-box">
      <div class="img-box">
        <img src="../../../assets/img/metier/brand-value/main.webp" alt="" srcset="" />
        <div class="hint">情境示意圖</div>
      </div>
    </div>

    <div class="right-box">
      <div class="title-box">
        <div class="en-title">BRAND VALUE</div>
        <div class="zh-title">三心二藝 上乘安心住宅</div>
      </div>
      <div class="content">
        從買房到入住，成家的人生大事一路相伴，以同理心的態度，<br />
        「三心二藝」的企業核心，不辜負居住者的心願。
      </div>
      <div class="top-item-box">
        <div class="item">
          <div class="img-box">
            <img src="../../../assets/img/metier/brand-value/1.svg" alt="" srcset="" />
          </div>
          <div class="title">誠</div>
          <div class="text">讓客戶感到安心<br />以誠為出發</div>
        </div>
        <div class="item">
          <div class="img-box">
            <img src="../../../assets/img/metier/brand-value/2.svg" alt="" srcset="" />
          </div>
          <div class="title">創意</div>
          <div class="text">讓客戶倍感貼心<br />以創意為動力</div>
        </div>
        <div class="item">
          <div class="img-box">
            <img src="../../../assets/img/metier/brand-value/3.svg" alt="" srcset="" />
          </div>
          <div class="title">客</div>
          <div class="text">讓客戶感受窩心<br />以客為尊</div>
        </div>
      </div>
      <div class="bottom-item-box">
        <div class="item">
          <div class="img-box">
            <img src="../../../assets/img/metier/brand-value/4.svg" alt="" srcset="" />
          </div>
          <div class="title">建築工藝</div>
          <div class="text">以「自住精神」<br />全力蓋好每棟房子</div>
        </div>
        <div class="item">
          <div class="img-box">
            <img src="../../../assets/img/metier/brand-value/5.svg" alt="" srcset="" />
          </div>
          <div class="title">空間創藝</div>
          <div class="text">事先為客戶考慮<br />最好的居住空間</div>
        </div>
      </div>
    </div>
    <FullScreen />
  </section>
</template>
<script setup lang="ts">
import '@/assets/scss/metier/_build-value.scss'
import FullScreen from '@/components/full-screen/FullScreen.vue'
import { onMounted } from 'vue'
import gsap from 'gsap'
import { SplitText } from 'gsap/SplitText'

onMounted(() => {
  const enSplit = SplitText.create('.build-value .right-box .title-box .en-title', {
    type: 'chars',
    linesClass: 'clip-text',
  })

  const zhSplit = SplitText.create('.build-value .right-box .title-box .zh-title', {
    type: 'chars',
    linesClass: 'clip-text',
  })

  const tl = gsap.timeline({})

  tl.to(
    '.build-value .left-box .img-box img',
    {
      duration: 1,
      clipPath: 'inset(0% 0% 0% 0%)',
      scale: 1,
    },
    '<0.1',
  )
    .from(
      enSplit.chars,
      {
        y: 70,
        filter: 'blur(5px)',
        autoAlpha: 0,
        duration: 0.5,
        stagger: { each: 0.05, from: 'center' },
      },
      '<0.3',
    )
    .from(
      zhSplit.chars,
      {
        y: 70,
        filter: 'blur(5px)',
        autoAlpha: 0,
        duration: 0.8,
        stagger: { each: 0.05, from: 'center' },
      },
      '<0.3',
    )
    .from(
      '.build-value .right-box .content',
      {
        y: 70,
        autoAlpha: 0,
        duration: 0.8,
      },
      '<0.4',
    )

    .fromTo(
      '.build-value .right-box .top-item-box .item .img-box img',
      { scale: 0, rotate: '-90deg' },
      {
        duration: 0.7,
        scale: 1,
        rotate: '0deg',
        stagger: 0.1,
      },
      '<0.3',
    )
    .from(
      '.build-value .right-box .top-item-box .item .title',
      {
        y: 70,
        autoAlpha: 0,
        duration: 0.8,
      },
      '<0.3',
    )
    .from(
      '.build-value .right-box .top-item-box .item .text',
      {
        y: 70,
        autoAlpha: 0,
        duration: 0.8,
      },
      '<0.3',
    )

    .fromTo(
      '.build-value .right-box .bottom-item-box .item .img-box img',
      { scale: 0, rotate: '-90deg' },
      {
        duration: 0.7,
        scale: 1,
        rotate: '0deg',
        stagger: 0.1,
      },
      '<0.3',
    )
    .from(
      '.build-value .right-box .bottom-item-box .item .title',
      {
        y: 70,
        autoAlpha: 0,
        duration: 0.8,
      },
      '<0.3',
    )

    .from(
      '.build-value .right-box .bottom-item-box .item .text',
      {
        y: 70,
        autoAlpha: 0,
        duration: 0.8,
      },
      '<0.3',
    )
})
</script>
