<template>
  <section class="after-service">
    <div class="img-box">
      <img src="../../../assets/img/metier/service/1.webp" alt="" srcset="" />
      <div class="hint">情境示意圖</div>
    </div>
    <div class="main-box">
      <div class="top-box">
        <div class="zh-title">線上服務，時刻守護</div>
        <div class="en-title">ONLINE CUSTOMER SERVICE</div>
        <div class="content">
          大熊建設相信，房子完工不是結束，而視為是品牌服務的開端。<br />
          自民國96年規劃即時回覆系統，24小時線上服務，更與時俱進，<br />
          推出E化客服APP系統，簽約後就立刻啟動服務。<br />
          從住戶購屋、交屋，到實際入住，都親力親為、全程服務。
        </div>
      </div>
      <div class="bottom-box">
        <div class="item-1234-box item-box">
          <div class="item">
            <div class="number">1</div>
            <div class="text">繳費進度<br />看的清</div>
          </div>
          <div class="item">
            <div class="number">2</div>
            <div class="text">工程進度<br />看得見</div>
          </div>
          <div class="item">
            <div class="number">3</div>
            <div class="text">精品設備<br />樣樣列</div>
          </div>
          <div class="item">
            <div class="number">4</div>
            <div class="text">線上即可<br />填寫需求清單</div>
          </div>
        </div>
        <div class="item-567-box item-box">
          <div class="item">
            <div class="number">5</div>
            <div class="text">客變&amp;客戶<br />問答詳細明確</div>
          </div>
          <div class="item">
            <div class="number">6</div>
            <div class="text">最新消息<br />一應俱全</div>
          </div>
          <div class="item">
            <div class="number">7</div>
            <div class="text">有問題，<br />專人解答</div>
          </div>
        </div>
      </div>
    </div>
    <FullScreen />
  </section>
</template>
<script setup lang="ts">
import '@/assets/scss/metier/_after-service.scss'
import FullScreen from '@/components/full-screen/FullScreen.vue'
import { onMounted } from 'vue'
import gsap from 'gsap'
import { SplitText } from 'gsap/SplitText'

onMounted(() => {
  const zhSplit = SplitText.create('.after-service .main-box .top-box .zh-title', {
    type: 'lines',
    linesClass: 'clip-title',
  })

  const enSplit = SplitText.create('.after-service .main-box .top-box .en-title', {
    type: 'lines',
    linesClass: 'clip-title',
  })

  const contentSplit = SplitText.create('.after-service .main-box .top-box .content', {
    type: 'lines',
    linesClass: 'clip-title',
  })

  const tl = gsap.timeline({})

  tl.to('.after-service .main-box', {
    duration: 1,
    clipPath: 'inset(0%)',
    scale: 1,
  })
    .from(
      zhSplit.lines,
      {
        duration: 1,
        y: 70,
      },
      '<0.45',
    )
    .from(
      enSplit.lines,
      {
        duration: 1,
        y: 70,
      },
      '<0.3',
    )
    .from(
      contentSplit.lines,
      {
        duration: 1,
        y: 70,
        opacity: 0,
        stagger: 0.08,
      },
      '<0.3',
    )
    .from(
      '.after-service .main-box .bottom-box .item-box .item div',
      {
        duration: 1,
        x: -90,
        opacity: 0,
        stagger: 0.08,
      },
      '<0.3',
    )
})
</script>
