<template>
  <div class="duravit-product-box">
    <div class="left-box">
      <div class="img-box">
        <img
          class="main-img"
          src="../../../assets/img/mansion/duravit/dur_img_main2.webp"
          alt="duravit_img_main2"
        />
        <div class="hint">情境示意圖</div>
      </div>
    </div>

    <div
      v-for="(dot, index) in productList"
      :key="index"
      :class="['dot', `dot${index + 1}`, { active: activeIndex === index }]"
      @click="activeIndex = index"
    >
      <img src="../../../assets/img/mansion/tlk/dot.svg" alt="dot" />
    </div>
    <div class="right-box">
      <transition name="fade" mode="out-in">
        <div v-if="productList[activeIndex]" :key="activeIndex" class="product-box">
          <template v-if="!isTopBottomBox(productList[activeIndex].content)">
            <div class="title-text">
              <div class="icon">
                <img :src="productList[activeIndex].iconImg" alt="" />
              </div>
              <div class="text">{{ productList[activeIndex].title }}</div>
            </div>
            <div class="title-img-box">
              <img :src="productList[activeIndex].img" alt="" />
            </div>
          </template>

          <div class="content-box" v-html="productList[activeIndex].content" />
        </div>
      </transition>
    </div>

    <div class="overlay-close" @click="handleClose"></div>
  </div>
</template>

<script setup lang="ts">
import '@/assets/scss/mansion/duravit/_duravit-product.scss'
import { ref, onMounted, onUnmounted } from 'vue'
import { useRouter } from 'vue-router'
import gsap from 'gsap'

const dur1 = new URL('@/assets/img/mansion/duravit/dur_1.webp', import.meta.url).href
const dur2 = new URL('@/assets/img/mansion/duravit/dur_2.webp', import.meta.url).href
const icon = new URL('@/assets/img/mansion/2.svg', import.meta.url).href

const router = useRouter()
const activeIndex = ref(0) // 預設第一個顯示

const isTopBottomBox = (content: string) => {
  return content.includes('top-bottom-box')
}

const handleClose = () => {
  router.push('/mansionIndex')
}

const productList = [
  {
    iconImg: new URL('@/assets/img/mansion/2.svg', import.meta.url).href,
    title: '全自動智能馬桶',
    img: new URL('@/assets/img/mansion/duravit/dur_3.webp', import.meta.url).href,
    content: `
    <ul class="ul-box">
      <li>溫水清洗臀部，清潔力強，舒適衛生。</li>
      <li>為女性設計的溫柔清洗功能，呵護敏感部位。</li>
      <li>無邊框沖水設計，減少污垢堆積，易於清潔更衛生。</li>
      <li>清洗後自動吹乾，免用衛生紙，提升使用舒適度。</li>
      <li>冬天也不怕冰涼，提供恆溫座墊功能，體驗更貼心。</li>
      <li>智慧夜燈功能，夜間如廁柔和不刺眼。</li>
    </ul>
    `,
  },
  {
    iconImg: new URL('@/assets/img/mansion/6.svg', import.meta.url).href,
    title: '浴室暖風機',
    img: new URL('@/assets/img/mansion/duravit/lidrgear.webp', import.meta.url).href,
    content: `
    <ul class="ul-box">
      <li>多段功能一機搞定：暖風、涼風、乾燥、換氣</li>
      <li>智慧操作設計：LED 控制、濾網提醒、自動擋風門</li>
      <li>節能高效：節電乾燥＋高靜壓馬達維持風量</li>
      <li>安全可靠：八重防護機制給你安心使用</li>
    </ul>
    `,
  },

  {
    iconImg: '',
    title: '',
    img: '',
    content: `
    <div class="top-bottom-box">
        <div class="top-box">
          <div class="left-img">
            <img src="${dur1}" alt="" srcset="" />
          </div>
          <div class="right-content-box">
            <div class="icon">
              <img src="${icon}" alt="" srcset="" />
            </div>
            <div class="title">檯面式面盆<span>(主浴)</span></div>
            <ul class="ul-box">
              <li>簡約經典的矩形外型，提升設計感。</li>
              <li>WonderGliss 塗層實現長效潔淨。</li>
              <li>靈活適配龍頭組合，方便設計與更新。</li>
              <li>高質感陶瓷與表面處理，維持使用<br>美觀與耐用。</li>
            </ul>
          </div>
        </div>
        <div class="bottom-box">
          <div class="left-img">
            <img src="${dur2}" alt="" srcset="" />
          </div>
          <div class="right-content-box">
            <div class="icon">
              <img src="${icon}" alt="" srcset="" />
            </div>
            <div class="title">檯面式面盆<span>(次浴)</span></div>
            <ul class="ul-box">
              <li>時尚簡約的矩形設計，兼具<br>美感與實用性。</li>
              <li>高亮白釉面＋全施釉背部，<br>更易清潔無死角。</li>
              <li>配置一孔龍頭平台與溢水功能，<br>符合通用安裝需求。</li>
            </ul>
          </div>
        </div>
      </div>
    `,
  },
]

let tl: gsap.core.Timeline
onMounted(() => {
  tl = gsap.timeline()
  tl.fromTo(
    '.duravit-product-box .left-box',
    { autoAlpha: 0, clipPath: 'inset(0 100% 0 0)' },
    {
      clipPath: 'inset(0 0% 0 0)',
      duration: 1,
      autoAlpha: 1,
    },
  )
    .fromTo('.duravit-product-box .left-box img', { scale: 1.2 }, { scale: 1, duration: 1 }, '<')
    .from(
      '.duravit-product-box .dot',
      {
        autoAlpha: 0,
        duration: 1,
      },
      '<0.8',
    )

    .from(
      '.duravit-product-box .right-box .product-box div',
      {
        autoAlpha: 0,
        y: 70,
        duration: 1,
        stagger: 0.2,
      },
      '<-0.3',
    )
})

onUnmounted(() => {
  // 避免動畫還在跑時切換報錯
  if (tl) tl.kill()
})
</script>

<style scoped>
.fade-enter-active,
.fade-leave-active {
  transition: all 0.5s ease-in-out;
  filter: blur(0);
}
.fade-enter-from,
.fade-leave-to {
  opacity: 0;
  transform: translateY(50px);
  filter: blur(4px);
}
</style>
