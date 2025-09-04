<template>
  <div class="mansion-single-swiper">
    <Swiper
      :modules="[Navigation]"
      navigation
      :speed="800"
      :loop="false"
      class="mansion-single-swiper-container"
    >
      <!-- Slide 1: Lock Content -->
      <SwiperSlide>
        <div class="lock-content-box mansion-single-box">
          <div class="overlay-close" @click="handleClose"></div>
          <img src="../../../assets/img/mansion/3.svg" alt="" class="lock-icon" />
          <div class="left-box">
            <video
              src="../../../assets/img/mansion/lock/lock.mp4"
              autoplay
              muted
              playsinline
              controls
              loop
              class="left-video"
            ></video>
          </div>
          <div class="right-box">
            <div class="title-text">
              <div class="text">指紋辨識電子鎖</div>
            </div>
            <div class="title-img-box">
              <img src="../../../assets/img/mansion/lock/waferlock_img.webp" alt="" />
            </div>
            <div class="content-box">
              <ul class="ul-box">
                <li>金屬面板、把手，電鍍防腐銹處理</li>
                <li>美規鎖匣通過美國UL及ANSI一級鎖認證</li>
                <li>門鎖通過台灣 CNS60A防火認證</li>
                <li>四種開門方式 (指紋辨識 / 感應卡 / 觸控密碼 / 機械鑰匙)</li>
                <li>採用銀行等級3D防偽指紋晶片</li>
                <li>開關門及電力不足時，會有語音告知</li>
                <li>可選擇中文語音、英文語音、無語音三種模式</li>
                <li>滑蓋設計，附有隱藏式備用機械鑰匙</li>
                <li>外部可用 9V 電池暫時供電開門</li>
                <li>使用者可自行以母卡管理卡片、密碼、指紋</li>
                <li>卡片感應格式支援 Mifare Classic / Desire</li>
              </ul>
            </div>
          </div>
        </div>
      </SwiperSlide>

      <!-- Slide 2: Ehome Content -->
      <SwiperSlide>
        <div class="ehome-content-box mansion-single-box">
          <div class="overlay-close" @click="handleClose"></div>
          <img src="../../../assets/img/mansion/3.svg" alt="" class="lock-icon" />
          <div class="left-box">
            <div class="img-box">
              <img src="../../../assets/img/mansion/e_home/3.webp" alt="" />
              <div class="hint">情境示意圖</div>
            </div>
          </div>
          <div class="right-box">
            <div class="top-bottom-box">
              <div class="top-box">
                <div class="left-img">
                  <img src="../../../assets/img/mansion/e_home/1.webp" alt="" />
                </div>
                <div class="right-content-box">
                  <div class="title">全網型影像室內對講主機</div>
                  <ul class="ul-box">
                    <li>具密碼設定及解除大門防盜保全功能</li>
                    <li>戶對戶對講，可與鄰居通話</li>
                    <li>連接公共攝影機可監看指定區域影像</li>
                    <li>即時社區公告、緊急訊息及訪客訊息</li>
                    <li>可開啟公共大門門禁</li>
                    <li>可分別與管理員、訪客對講</li>
                    <li>主機具有緊急求救押扣功能</li>
                  </ul>
                </div>
              </div>
              <div class="bottom-box">
                <div class="left-img">
                  <img src="../../../assets/img/mansion/e_home/2.webp" alt="" />
                </div>
                <div class="right-content-box">
                  <div class="title">多功能門口對講機</div>
                  <ul class="ul-box">
                    <li>內建讀卡機與影像語音對講功能</li>
                    <li>防水等級: IP66</li>
                    <li>具紅外線光源補光功能</li>
                    <li>使用卡片設定/解除防盜保全狀態</li>
                  </ul>
                </div>
              </div>
            </div>
          </div>
        </div>
      </SwiperSlide>
    </Swiper>
  </div>
  <FullScreen />
</template>

<script setup lang="ts">
import '@/assets/scss/mansion/mansion-single/_mansion-single.scss'
import FullScreen from '@/components/full-screen/FullScreen.vue'
import { useRouter } from 'vue-router'
import { onMounted } from 'vue'
import gsap from 'gsap'
import { Swiper, SwiperSlide } from 'swiper/vue'
import { Navigation } from 'swiper/modules'
import 'swiper/css'
import 'swiper/css/navigation'

const router = useRouter()

const handleClose = () => {
  router.push('/mansionIndex')
}

onMounted(() => {
  // 可以把動畫放在每個 slide 進場時觸發
  const tl = gsap.timeline({})
  tl.fromTo(
    '.swiper-slide-active .left-box',
    { maskPosition: '200% 0' },
    { maskPosition: '0% 0%', duration: 1, ease: 'power1.inOut' },
  )
    .fromTo(
      '.swiper-slide-active .left-box img,.swiper-slide-active .left-box video',
      { scale: 1.2 },
      { scale: 1, duration: 1 },
      '<',
    )
    .from(
      '.swiper-slide-active .right-box .title-text,.swiper-slide-active .right-box .title-img-box',
      { autoAlpha: 0, y: 70, duration: 1, stagger: 0.3 },
      '<0.3',
    )
    .from(
      '.swiper-slide-active .right-box .content-box ul li',
      { autoAlpha: 0, y: 70, duration: 1, stagger: 0.1 },
      '<0.3',
    )
})
</script>

<style scoped>
.mansion-single-swiper-container {
  position: relative;
}
.swiper-button-prev,
.swiper-button-next {
  color: #000; /* 可自行換顏色 */
}
</style>
