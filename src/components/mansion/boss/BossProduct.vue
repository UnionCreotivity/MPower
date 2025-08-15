<template>
  <div class="boss-product-box">
    <div class="left-box">
      <div class="img-box">
        <img
          class="main-img"
          src="../../../assets/img/mansion/boss/boss_img_main2.webp"
          alt="boss_img_main2"
        />
        <div class="hint">情境示意圖</div>
      </div>
    </div>
    <!-- dots -->
    <div
      v-for="(pIndex, dotIndex) in dotList"
      :key="dotIndex"
      :class="['dot', `dot${dotIndex + 1}`, { active: activeIndex === dotIndex }]"
      @click="handleDotClick(dotIndex)"
    >
      <img src="../../../assets/img/mansion/tlk/dot.svg" alt="dot" />
    </div>
    <div class="right-box">
      <transition name="fade" mode="out-in">
        <div v-if="currentProduct" :key="activeIndex" class="product-box">
          <template v-if="!isTopBottomBox(currentProduct.content)">
            <div class="title-text">
              <div class="icon">
                <img :src="currentProduct.iconImg" alt="" />
              </div>
              <div class="text">{{ currentProduct.title }}</div>
            </div>
            <div class="title-img-box">
              <img :src="currentProduct.img" alt="" />
            </div>
          </template>

          <div class="content-box" v-html="currentProduct.content" />
        </div>
      </transition>
    </div>

    <div class="overlay-close" @click="handleClose"></div>
  </div>
</template>

<script setup lang="ts">
import '@/assets/scss/mansion/boss/_boss-product.scss'
import { ref, onMounted, computed } from 'vue'
import { useRouter } from 'vue-router'
import gsap from 'gsap'

const router = useRouter()

const handleClose = () => {
  router.push('/mansionIndex')
}
const dur1 = new URL('@/assets/img/mansion/boss/3.webp', import.meta.url).href
const dur2 = new URL('@/assets/img/mansion/boss/4.webp', import.meta.url).href
const icon = new URL('@/assets/img/mansion/logo.png', import.meta.url).href
const productList = [
  {
    iconImg: new URL('@/assets/img/mansion/logo.png', import.meta.url).href,
    title: '不銹鋼面盆龍頭',
    img: new URL('@/assets/img/mansion/boss/1.webp', import.meta.url).href,
    hasVideo: false,
    content: `
    <ul class="ul-box">
      <li>304不鏽鋼本體：無鉛無毒，安心用水</li>
      <li>SEDAL陶瓷閥芯：壽命達100萬次，歐美雙認證</li>
      <li>NEOPERL起波器：德製柔順出水，節水達60%</li>
      <li>內建濾網接頭：阻擋雜質，延長壽命</li>
      <li>精密CNC加工：台灣設計製造，品質穩定</li>
      <li>霧面消光黑：抗指紋、易清潔，風格出眾</li>
     </ul>
    `,
  },
  {
    iconImg: new URL('@/assets/img/mansion/logo.png', import.meta.url).href,
    title: '沐浴龍頭',
    img: new URL('@/assets/img/mansion/boss/2.webp', import.meta.url).href,
    hasVideo: false,
    content: `
    <ul class="ul-box">
      <li>304不鏽鋼材質，無鉛健康、耐腐蝕</li>
      <li>SEDAL陶瓷閥芯，壽命達100萬次</li>
      <li>NEOPERL起波器，出水柔順又節水</li>
      <li>PVD消光黑塗層，耐磨抗氧化</li>
      <li>內建濾網接頭，防堵雜質</li>
      <li>台灣製＋CNC精工，品質穩定耐用</li>
     </ul>
    `,
  },
  {
    iconImg: '',
    title: '',
    img: '',
    hasVideo: false,
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
            <div class="title">不鏽鋼衣鉤</div>
            <ul class="ul-box">
              <li>304不鏽鋼</li>
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
            <div class="title">高級滑桿附平台</span></div>
            <ul class="ul-box">
              <li>304不鏽鋼</li>
              <li>可自由調整高度</li>
            </ul>
          </div>
        </div>
      </div>
    `,
  },
]
const isTopBottomBox = (content: string) => {
  return content.includes('top-bottom-box')
}
// dotList 控制畫面上的圓點順序（可重複）
const dotList = [
  0, // dot 1 → product[0]
  1, // dot 2 → product[1]
  2, // dot 3 → product[2]
  2, // dot 4 → 還是 product[2]（顯示一樣的內容）
]

const activeIndex = ref(0)

const currentProduct = computed(() => {
  return productList[dotList[activeIndex.value]]
})
// 切換 dot
const handleDotClick = (dotIndex: number) => {
  activeIndex.value = dotIndex
}

onMounted(() => {
  // 左側進場動畫
  const tl = gsap.timeline()
  tl.fromTo(
    '.boss-product-box .left-box',
    { autoAlpha: 0, clipPath: 'inset(0 100% 0 0)' },
    { autoAlpha: 1, clipPath: 'inset(0 0% 0 0)', duration: 1 },
  )
    .fromTo('.boss-product-box .left-box img', { scale: 1.2 }, { scale: 1, duration: 1 }, '<')
    .from('.boss-product-box .dot', { autoAlpha: 0, duration: 1 }, '<0.8')
    .from(
      '.boss-product-box .right-box .product-box div',
      {
        autoAlpha: 0,
        y: 70,
        duration: 1,
        stagger: 0.2,
      },
      '<-0.3',
    )
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
