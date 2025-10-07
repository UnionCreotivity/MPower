<template>
  <section class="team-person-view">
    <div class="overlay-close" @click="goBack"></div>

    <div class="left-box">
      <div class="img-box">
        <img src="../../assets/img/team/one_img.webp" alt="" srcset="" />
      </div>
    </div>
    <div class="right-box">
      <div class="en-title">ARCHITECTURE</div>
      <div class="name-box">
        <div class="text">
          建築大師 /
          <div class="name">莊鴻儒</div>
          設計師
        </div>
      </div>
      <div class="content-box">
        秉持人本理性的實用精神，融合光、風、水、綠、土等自然語彙，追求因地制宜的空間整合。作品風格清晰、個性鮮明，讓建築成為承載生活與故事的場域，展現空間的生命力與延續性。
      </div>

      <div class="content-box">
        <div class="title">經歷</div>
        <div class="content">
          • 莊鴻儒建築師事務所 主持建築師 (2001-至今)<br />
          • 臺中市建築經營協會 理事 (2020)<br />
          • 台中市室內設計裝修商業同業公會 理事(2019-2021)
        </div>
      </div>

      <div class="content-box">
        <div class="title">學歷</div>
        <div class="content">
          • 淡江大學 建築學系 學士<br />
          • 成功大學 建築研究所 碩士
        </div>
      </div>

      <div class="content-box">
        <div class="title">代表作品</div>
        <div class="item-img">
          <div
            class="item"
            v-for="(project, index) in projects"
            :key="index"
            @click="openFullscreen(project.fullImg)"
          >
            <div class="img-box">
              <img :src="project.thumb" alt="" />
            </div>
            <div class="name">{{ project.name }}</div>
          </div>
        </div>
      </div>
    </div>

    <!-- 作品大圖 -->
    <transition name="fade">
      <div class="img-box-overlay" v-if="isImgBox" @click="closeImgBox">
        <div class="img-box-content">
          <img :src="currentImg" />
        </div>
      </div>
    </transition>
    <FullScreen />
  </section>
</template>

<script setup lang="ts">
import '@/assets/scss/team/_team-content.scss'
import FullScreen from '@/components/full-screen/FullScreen.vue'
import { ref } from 'vue'
import { useRouter } from 'vue-router'
import { gsap } from 'gsap'
import { SplitText } from 'gsap/SplitText'

const router = useRouter()
const goBack = () => router.push('/master/teamIndex')

// 大圖
const isImgBox = ref(false)
const currentImg = ref('')

// 作品資料
const projects = [
  {
    name: '精銳巴黎之心',
    thumb: new URL('@/assets/img/team/one_p_1.webp', import.meta.url).href,
    fullImg: new URL('@/assets/img/team/one_p_b_1.webp', import.meta.url).href,
  },
  {
    name: '義昌興精蒔講義',
    thumb: new URL('@/assets/img/team/one_p_2.webp', import.meta.url).href,
    fullImg: new URL('@/assets/img/team/one_p_b_2.webp', import.meta.url).href,
  },
  {
    name: '帝璟謙和',
    thumb: new URL('@/assets/img/team/one_p_3.webp', import.meta.url).href,
    fullImg: new URL('@/assets/img/team/one_p_b_3.webp', import.meta.url).href,
  },
]

const openFullscreen = (img: string) => {
  currentImg.value = img
  isImgBox.value = true
}

const closeImgBox = () => {
  gsap.to('.img-box-content img', {
    opacity: 0,
    duration: 0.4,
    ease: 'power2.in',
    onComplete: () => {
      isImgBox.value = false
      currentImg.value = ''
    },
  })
}
</script>

<style scoped></style>
