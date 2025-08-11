<template>
  <div class="tlk-product-box">
    <div class="left-box">
      <div class="img-box">
        <img
          class="main-img"
          src="../../../assets/img/mansion/tlk/tlk_img_main2.webp"
          alt="tlk_img_main2"
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
          <div class="title-text">
            <div class="icon">
              <img :src="productList[activeIndex].iconImg" alt="" srcset="" />
            </div>
            <div class="text">{{ productList[activeIndex].title }}</div>
          </div>
          <div class="title-img-box">
            <img :src="productList[activeIndex].img" alt="product-title" />
          </div>
          <div class="content-box" v-html="productList[activeIndex].content" />
          <div v-if="productList[activeIndex]?.hasVideo" class="sakura-btn" @click="showVideoBox">
            <div>櫻花廚具</div>
          </div>
        </div>
      </transition>
    </div>

    <div class="overlay-close" @click="handleClose"></div>
  </div>
  <transition name="fade" mode="out-in">
    <div class="sakura-video" @click="handleCloseVideo" v-if="showVideo">
      <video
        src="../../../assets/img/mansion/sakura_video.mp4"
        autoplay
        muted
        playsinline
        controls
        loop
      ></video></div
  ></transition>
</template>

<script setup lang="ts">
import '@/assets/scss/mansion/tlk/_tlk-product.scss'
import { ref, onMounted } from 'vue'
import { useRouter } from 'vue-router'
import gsap from 'gsap'

const router = useRouter()
const activeIndex = ref(0) // 預設第一個顯示

const showVideo = ref(false)

const handleCloseVideo = () => {
  showVideo.value = false
}

const showVideoBox = () => {
  showVideo.value = true
}

const handleClose = () => {
  router.push('/mansionIndex')
}

const productList = [
  {
    iconImg: '',
    title: '雷射封邊',
    img: new URL('@/assets/img/mansion/tlk/leiser.webp', import.meta.url).href,
    hasVideo: false,
    content: `
      與熱熔膠技術不同，高能量雷射熔化封邊帶上的超薄功能層，然後通過輥軸將封邊帶黏合到家具面板上，形成無縫邊緣，確保持久且防潮的連接。<br /><br />
      搭配E1櫃體板材<br />
      • 具有防潮、耐壓、耐撞、低甲醛等特性。<br />
      • 環保建材、抗變強度佳。
    `,
  },
  {
    iconImg: new URL('@/assets/img/mansion/tlk/blum.svg', import.meta.url).href,
    title: '多功能式專利鉸鏈',
    img: new URL('@/assets/img/mansion/tlk/blum2.webp', import.meta.url).href,
    hasVideo: false,
    content: `
     <ul class="ul-box">
      <li>可調式緩衝鉸鍊門開107度</li>
      <li>開關200,000次</li>
      <li>通過DIN檢驗測試合格</li>
      <li>消費者可因個人使用力道習慣或門板材質重量，進行鉸鍊緩衝力道調整</li>
     </ul>
    `,
  },
  {
    iconImg: new URL('@/assets/img/mansion/tlk/sakura.png', import.meta.url).href,
    title: '櫻花AI升降靜音油機',
    img: new URL('@/assets/img/mansion/tlk/sakura.webp', import.meta.url).href,
    hasVideo: true,
    content: `
    <div class="sakura-content-box">
      <ul class="ul-box">
        <li>AI智能風控科技，自動調節最適風量</li>
        <li>熱感偵測技術，不限爐具隨心搭配</li>
        <li>進煙口自動下降，排煙更即時</li>
        <li>渦輪變頻科技，Turbo大吸力吸更淨</li>
        <li>靜音除味功能，安靜舒適排除油煙餘味</li>
        <li>256點偵測，大量蒐集溫度數據</li>
      </ul>
    
    </div>
    `,
  },
  {
    iconImg: new URL('@/assets/img/mansion/tlk/svago.svg', import.meta.url).href,
    title: '橫式雙口IH感應爐',
    img: new URL('@/assets/img/mansion/tlk/svago.webp', import.meta.url).href,
    hasVideo: true,
    content: `
    <div class="sakura-content-box">
      <div class="top-box">
        <div class="left">
        • 9段火力，滑動觸控<br />
        • 小火持續加熱功能<br />
        • 1分鐘-3小時定時設定<br />
        • 2小時超時自動關機<br />
        • Stop&Go暫停功能<br />
        </div>
        <div class="right">
        • 操作方式：觸控+滑動式<br />
        • 自動鍋具檢測<br />
        • 餘溫警示與兒童安全鎖<br />
        • 感應鍋徑最小12公分
        </div>
      </div>
    
    </div>
    `,
  },
  {
    iconImg: new URL('@/assets/img/mansion/tlk/bosch.svg', import.meta.url).href,
    title: '全嵌式洗碗機',
    img: new URL('@/assets/img/mansion/tlk/bosch.webp', import.meta.url).href,
    hasVideo: false,
    content: `
    <ul class="ul-box">
      <li>熱能交換裝置：提升烘乾效果並保護餐具。</li>
      <li>投影燈：顯示洗程進行中，即使關上門也可知道機器是否正在運行。</li>
      <li>加強烘乾：提升塑膠餐具的烘乾效果。</li>
      <li>上碗籃3段式調整：靈活調整，為大型餐具提供足夠空間。</li>
      <li>自動偵測漏水系統避免滲漏影響其他傢俱或電器，為家居增添多一重保障。</li>
    </ul>
    `,
  },
  {
    iconImg: new URL('@/assets/img/mansion/tlk/sakura.png', import.meta.url).href,
    title: '廚房不鏽鋼無鉛伸縮龍頭',
    img: new URL('@/assets/img/mansion/tlk/sakura2.webp', import.meta.url).href,
    hasVideo: false,
    content: `
    <ul class="ul-box">
      <li>符合CNS8088，飲水用水龍頭規範，健康無鉛。</li>
      <li>採用西班牙精密陶瓷閥芯，品質穩定有保障。</li>
      <li>配置瑞士進口NEOPERL起泡器，出水柔和。</li>
      <li>不鏽鋼S U S 3 0 4材質，健康安全。</li>
      <li>伸縮抽拉出水口設計，兩段式(增壓噴霧/水柱)
      出水模式選擇。</li>
    </ul>
    `,
  },
  {
    iconImg: new URL('@/assets/img/mansion/tlk/sakura.png', import.meta.url).href,
    title: '不鏽鋼單槽手工方型水槽組',
    img: new URL('@/assets/img/mansion/tlk/sakura3.webp', import.meta.url).href,
    hasVideo: false,
    content: `
      • 底部處理：噴塗防汗漆+貼附消音墊。<br />
      • 防蟑防臭存水排水管組。
    `,
  },
  {
    iconImg: new URL('@/assets/img/mansion/tlk/blum.svg', import.meta.url).href,
    title: '抽屜系統',
    img: new URL('@/assets/img/mansion/tlk/blum.webp', import.meta.url).href,
    hasVideo: false,
    content: `
      • 承重50公斤/開關60,000次<br />
      • 全開式抽屜靜音緩衝<br />
      • 開關無噪音、生活更優雅
    `,
  },
  {
    iconImg: new URL('@/assets/img/mansion/tlk/sakura.png', import.meta.url).href,
    title: '石英石檯面',
    img: new URL('@/assets/img/mansion/tlk/sakura4.webp', import.meta.url).href,
    hasVideo: false,
    content: `
    <ul class="ul-box">
      <li>高耐刮：莫氏硬度高達6.0~7.0，不易因刀具使用而留下刮痕，維持長久如新。</li>
      <li>高耐熱：熔點高達1600°C，面對鍋具高溫、爐火加熱也不易變形或軟化，使用安心。</li>
      <li>高耐污：表面緻密，吸水率低於0.05%，不易滲透髒污，輕輕一擦即恢復潔淨光澤。</li>
      <li>高耐蝕：優異的抗酸鹼性能，長期使用也不會產生變色或褪色問題，歷久彌新。</li>
    </ul>
    `,
  },
  {
    iconImg: '',
    title: '感應掛架櫃下燈',
    img: new URL('@/assets/img/mansion/tlk/light.webp', import.meta.url).href,
    hasVideo: false,
    content: `
    <ul class="ul-box">
      <li>內建觸控感應開關、台灣製造、可搭配掛架使用</li>
    </ul>
    `,
  },
  {
    iconImg: '',
    title: '置物架、紙巾架',
    img: new URL('@/assets/img/mansion/tlk/shelf.webp', import.meta.url).href,
    hasVideo: false,
    content: `
    <ul class="ul-box">
      <li>鐵板噴塗特殊漆+防水抗貝特板</li>
    </ul>
    `,
  },
]

onMounted(() => {
  const tl = gsap.timeline({})

  tl.fromTo(
    '.tlk-product-box .left-box',
    {
      autoAlpha: 0,
      clipPath: 'inset(0 100% 0 0)',
    },
    {
      clipPath: 'inset(0 0% 0 0)',
      duration: 1,
      autoAlpha: 1,
    },
  )
    .fromTo(
      '.tlk-product-box .left-box img',
      {
        scale: 1.2,
      },
      {
        scale: 1,
        duration: 1,
      },
      '<',
    )
    .from(
      '.tlk-product-box .right-box div',
      {
        autoAlpha: 0,
        y: 70,
        duration: 1,
        stagger: 0.3,
      },
      '<0.5',
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
