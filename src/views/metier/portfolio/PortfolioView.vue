<template>
  <section class="portfolio-view">
    <img src="../../../assets/img/metier/portfolio/dot_line.png" alt="dot_line" class="dot-line" />

    <img src="../../../assets/img/metier/portfolio/tree.webp" alt="" class="tree" />
    <div class="top-box">
      <div class="en-title">PORTFOLIO</div>
      <div class="zh-title">自住為先，百年傳承品質</div>
      <div class="content">
        以透天產品起家，奠定紮實的基礎，推出大樓產品。<br />
        以綠能環保為目標，堅持注入生活美學，打造「品質、生態、永續」建築作品。
      </div>
    </div>

    <div class="bottom-box">
      <div class="item" @click="showPortfolioModal2008 = true">
        <div class="img-box">
          <img src="../../../assets/img/metier/portfolio/1.webp" alt="" srcset="" />
        </div>
        <div class="year">
          <div>2008</div>
        </div>
        <div class="name">大熊春天</div>
        <div class="local">台中西屯區/別墅透天</div>
      </div>
      <div class="item" @click="showportfolioModal2017a = true">
        <div class="img-box">
          <img src="../../../assets/img/metier/portfolio/2.webp" alt="" srcset="" />
        </div>
        <div class="year">
          <div>2017</div>
        </div>
        <div class="name">大熊藏鋒</div>
        <div class="local">彰化員林/別墅透天</div>
        <div class="icon">
          <img src="../../../assets/img/metier/portfolio/silver.webp" alt="" srcset="" />
        </div>
        <div class="text">義大利【A’Design】<br />國際設計大獎<br />景觀規劃 銀獎</div>
      </div>
      <div class="item" @click="showportfolioModal2017b = true">
        <div class="img-box">
          <img src="../../../assets/img/metier/portfolio/3.webp" alt="" srcset="" />
        </div>
        <div class="year">
          <div>2017</div>
        </div>
        <div class="name">大熊康橋</div>
        <div class="local">台中東區/大樓</div>
        <div class="icon">
          <img src="../../../assets/img/metier/portfolio/copper.webp" alt="" srcset="" />
        </div>
        <div class="text">義大利【A’Design】<br />國際設計大獎<br />公設室內設計 銅獎</div>
      </div>
      <div class="item" @click="showportfolioModal2021 = true">
        <div class="img-box">
          <img src="../../../assets/img/metier/portfolio/4.webp" alt="" srcset="" />
        </div>
        <div class="year">
          <div>2021</div>
        </div>
        <div class="name">熊立方</div>
        <div class="local">台中潭子區/大樓</div>
      </div>
      <div class="item" @click="showPortfolioModal2024 = true">
        <div class="img-box">
          <img src="../../../assets/img/metier/portfolio/5.webp" alt="" srcset="" />
        </div>
        <div class="year">
          <div>2024</div>
        </div>
        <div class="name">熊PRO</div>
        <div class="local">台中南區/大樓</div>
      </div>
      <div class="item" @click="showPortfolioModal2026 = true">
        <div class="img-box">
          <img src="../../../assets/img/metier/portfolio/6.webp" alt="" srcset="" />
        </div>
        <div class="year">
          <div>2026</div>
        </div>
        <div class="name">JIA55</div>
        <div class="local">台中14期/大樓</div>
      </div>
    </div>

    <PortfolioModal2008 v-if="showPortfolioModal2008" @close="showPortfolioModal2008 = false" />
    <PortfolioModal2024 v-if="showPortfolioModal2024" @close="showPortfolioModal2024 = false" />
    <portfolioModal2017a v-if="showportfolioModal2017a" @close="showportfolioModal2017a = false" />
    <portfolioModal2017b v-if="showportfolioModal2017b" @close="showportfolioModal2017b = false" />
    <portfolioModal2021 v-if="showportfolioModal2021" @close="showportfolioModal2021 = false" />
    <portfolioModal2026 v-if="showPortfolioModal2026" @close="showPortfolioModal2026 = false" />
  </section>
  <FullScreen />
</template>
<script setup lang="ts">
import '@/assets/scss/metier/_portfolio.scss'
import FullScreen from '@/components/full-screen/FullScreen.vue'
import PortfolioModal2008 from '@/components/portfolio/portfolioModal2008.vue'
import PortfolioModal2024 from '@/components/portfolio/portfolioModal2024.vue'
import portfolioModal2017a from '@/components/portfolio/portfolioModal2017a.vue'
import portfolioModal2017b from '@/components/portfolio/portfolioModal2017b.vue'
import portfolioModal2021 from '@/components/portfolio/portfolioModal2021.vue'
import portfolioModal2026 from '@/components/portfolio/portfolioModal2026.vue'

import { onMounted, ref } from 'vue'
import gsap from 'gsap'
import { SplitText } from 'gsap/SplitText'
import CustomEase from 'gsap/CustomEase'

const showPortfolioModal2008 = ref(false)
const showPortfolioModal2024 = ref(false)
const showportfolioModal2017a = ref(false)
const showportfolioModal2017b = ref(false)
const showportfolioModal2021 = ref(false)
const showPortfolioModal2026 = ref(false)

onMounted(() => {
  const enSplit = SplitText.create('.portfolio-view .top-box .en-title', {
    type: 'chars,words,lines',
    linesClass: 'clip-text',
  })

  const zhSplit = SplitText.create('.portfolio-view .top-box .zh-title', {
    type: 'chars,words,lines',
    linesClass: 'clip-text',
  })
  gsap.registerPlugin(CustomEase)
  CustomEase.create('maskEase', '0.25, 1, 0.5, 1')

  const tl = gsap.timeline({})

  tl.from(
    enSplit.chars,
    {
      y: 70,
      filter: 'blur(5px)',
      autoAlpha: 0,
      duration: 0.5,
      stagger: { each: 0.05, from: 'center' },
    },
    '<0.5',
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
      '.portfolio-view .top-box .zh-title',
      {
        y: 70,

        autoAlpha: 0,
        duration: 1,
      },
      '<0.15',
    )
    .from(
      '.portfolio-view .top-box .content',
      {
        y: 70,
        filter: 'blur(5px)',
        autoAlpha: 0,
        duration: 1,
      },
      '<0.3',
    )
    .fromTo(
      '.portfolio-view .bottom-box .item .img-box',
      {
        maskPosition: '200% -100%',
      },
      {
        duration: 1,
        maskPosition: '0% 100%',
        ease: 'maskEase',
        stagger: 0.2,
      },
      '<0.3',
    )

    .fromTo(
      '.portfolio-view .dot-line',
      {
        x: '10%',
        autoAlpha: 0,
        // maskPosition: '200% 0',
      },
      {
        // maskPosition: '0% 0%',
        duration: 1.5,
        x: '0%',
        autoAlpha: 1,
      },
      '<0.15',
    )
    .from(
      '.portfolio-view .bottom-box .item .year',
      {
        x: 70,

        autoAlpha: 0,
        stagger: 0.2,
        duration: 1,
      },
      '<0.3',
    )
    .from(
      '.portfolio-view .bottom-box .item .name',
      {
        x: 70,

        autoAlpha: 0,
        stagger: 0.2,
        duration: 1,
      },
      '<0.3',
    )

    .from(
      '.portfolio-view .bottom-box .item .local',
      {
        x: 70,

        autoAlpha: 0,
        stagger: 0.2,
        duration: 1,
      },
      '<0.3',
    )

    .from(
      '.portfolio-view .bottom-box .item .icon',
      {
        y: 70,

        autoAlpha: 0,

        duration: 1,
      },
      '<0.3',
    )

    .from(
      '.portfolio-view .bottom-box .item .text',
      {
        y: 70,

        autoAlpha: 0,

        duration: 1,
      },
      '<0.45',
    )
})
</script>
