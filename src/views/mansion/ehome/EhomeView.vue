<template>
  <div class="ehome-content-box mansion-single-box">
    <div class="overlay-close" @click="handleClose"></div>
    <img src="../../../assets/img/mansion/3.svg" alt="" class="lock-icon" />
    <div class="left-box">
      <div class="img-box">
        <img src="../../../assets/img/mansion/e_home/3.webp" alt="" srcset="" />
        <div class="hint">情境示意圖</div>
      </div>
    </div>
    <div class="right-box">
      <div class="top-bottom-box">
        <div class="top-box">
          <div class="left-img">
            <img src="../../../assets/img/mansion/e_home/1.webp" alt="" srcset="" />
          </div>
          <div class="right-content-box">
            <div class="title">全網型影像室內對講主機</div>
            <ul class="ul-box">
              <li>具密碼設定及解除大門防盜保全功能</li>
              <li>戶對戶對講，可與鄰居通話</li>
              <li>連接公共攝影機可監看指定區域影像</li>
              <li>即時社區公告、緊急訊息及訪客訊息</li>
              <li>與大門口機通話中可開啟公共大門之門禁陽極鎖</li>
              <li>可分別與管理員、公共大門之訪客對講</li>
              <li>主機具有緊急求救押扣功能</li>
            </ul>
          </div>
        </div>
        <div class="bottom-box">
          <div class="left-img">
            <img src="../../../assets/img/mansion/e_home/2.webp" alt="" srcset="" />
          </div>
          <div class="right-content-box">
            <div class="title">多功能門口對講機</div>
            <ul class="ul-box">
              <li>多功能門口對講機</li>
              <li>內建讀卡機&與主機影像語音對講功能</li>
              <li>防水等級:以IP66等級設計</li>
              <li>具紅外線光源補光功能</li>
              <li>使用卡片設定/解除防盜保全警戒狀態</li>
            </ul>
          </div>
        </div>
      </div>
    </div>
    <FullScreen />
  </div>
</template>

<script setup lang="ts">
import '@/assets/scss/mansion/mansion-single/_mansion-single.scss'
import FullScreen from '@/components/full-screen/FullScreen.vue'
import { useRouter } from 'vue-router'
import { onMounted } from 'vue'
import gsap from 'gsap'

const router = useRouter()

const handleClose = () => {
  router.push('/mansionIndex')
}

onMounted(() => {
  const tl = gsap.timeline({})
  tl.fromTo(
    '.mansion-single-box .left-box',
    {
      maskPosition: '200% 0',
    },
    {
      maskPosition: '0% 0%',
      duration: 1,
      ease: 'power1.inOut',
    },
  )
    .from(
      '.ehome-content-box .right-box .top-bottom-box .top-box .left-img',
      {
        autoAlpha: 0,
        duration: 1,
        y: 30,
      },
      '<0.5',
    )
    .from(
      '.ehome-content-box .right-box .top-bottom-box .top-box .right-content-box .title,.ehome-content-box .right-box .top-bottom-box .top-box .right-content-box .ul-box',
      {
        autoAlpha: 0,
        duration: 1,
        y: 40,
        stagger: 0.3,
      },
      '<0.3',
    )
    .from(
      '.ehome-content-box .right-box .top-bottom-box .bottom-box .left-img',
      {
        autoAlpha: 0,
        duration: 1,
        y: 30,
      },
      '<0.2',
    )
    .from(
      '.ehome-content-box .right-box .top-bottom-box .bottom-box .right-content-box .title,.ehome-content-box .right-box .top-bottom-box .bottom-box .right-content-box .ul-box',
      {
        autoAlpha: 0,
        duration: 1,
        y: 40,
        stagger: 0.3,
      },
      '<0.2',
    )
})
</script>

<style scoped></style>
