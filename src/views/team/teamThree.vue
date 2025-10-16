<template>
  <section class="team-person-view team-three-view">
    <div class="overlay-close" @click="goBack"></div>

    <div class="left-box">
      <div class="img-box">
        <img src="../../assets/img/team/three_img.webp" alt="" srcset="" />
      </div>
    </div>
    <div class="right-box">
      <div class="en-title">LANDSCAPE</div>
      <div class="name-box">
        <div class="text">
          景觀大師 /
          <div class="name">LAURA HUANG</div>
        </div>
      </div>
      <div class="content-box">
        日禧設計致力於景觀、展覽與商業空間的整合設計。團隊匯聚來自都市規劃、博物館展策、品牌視覺等多元領域的專業人才，擅長從文化、空間與環境三者出發，打造具體驗感與敘事性的空間場域。設計風格強調自然語彙的融合、場域精神的延伸與創意策展的跨界整合。
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
import { onMounted, ref } from 'vue'
import { useRouter } from 'vue-router'
import { gsap } from 'gsap'

const router = useRouter()
const goBack = () => router.push('/master/teamIndex')

// 大圖
const isImgBox = ref(false)
const currentImg = ref('')

// 作品資料
const projects = [
  {
    name: '台中商業銀行總部',
    thumb: new URL('@/assets/img/team/three_p_1.webp', import.meta.url).href,
    fullImg: new URL('@/assets/img/team/three_p_b_1.webp', import.meta.url).href,
  },
  {
    name: '龍巖安泰/富岡',
    thumb: new URL('@/assets/img/team/three_p_2.webp', import.meta.url).href,
    fullImg: new URL('@/assets/img/team/three_p_b_2.webp', import.meta.url).href,
  },
  {
    name: '巧克力夢工廠',
    thumb: new URL('@/assets/img/team/three_p_3.webp', import.meta.url).href,
    fullImg: new URL('@/assets/img/team/three_p_b_3.webp', import.meta.url).href,
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

onMounted(() => {
  const tl = gsap.timeline({})

  tl.from('.team-person-view .left-box .img-box', {
    duration: 1,
    x: '-100',
    opacity: 0,
  })
    .from(
      '.team-person-view .right-box .en-title,.team-person-view .right-box .name-box',
      {
        duration: 0.8,
        y: '100',
        opacity: 0,
        stagger: 0.15,
      },
      '<0.3',
    )
    .from(
      '.content-box',
      {
        duration: 1,
        y: '100',
        opacity: 0,
        stagger: 0.15,
      },
      '<0.3',
    )
})
</script>

<style scoped></style>
