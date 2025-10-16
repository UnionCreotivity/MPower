<template>
  <section class="team-person-view team-two-view">
    <div class="overlay-close" @click="goBack"></div>

    <div class="left-box">
      <div class="img-box">
        <img src="../../assets/img/team/two_img.webp" alt="" srcset="" />
      </div>
    </div>
    <div class="right-box">
      <div class="en-title">INTERIOR</div>
      <div class="name-box">
        <div class="text">
          公設大師 /
          <div class="name">楊煥生</div>
          設計師
        </div>
      </div>
      <div class="content-box">
        擅長解構重組空間語彙，融合材質、光影與細節工藝，打造具識別性的空間風格。<br />
        設計關注空間與基地、環境的整體對話，作品屢獲iF、A’Design等國際獎項肯定，為亞洲設計領域備受矚目的指標人物。
      </div>

      <div class="content-box">
        <div class="title">經歷</div>
        <div class="content">
          • 2005-至今 YHS DESIGN 設計總監／共同創辦人<br />
          • 2021 受邀於台中伸保木業設計演講、PChouse Award 評審<br />
          • 2020–2021 主講「藝想之外」美學沙龍、《海爾世界趨勢講堂》<br />
          • 2019 擔任臺灣室內設計專技協會副理事長，參與上海設計周與海爾論壇演講<br />
          • 2018 發起「手繪美學」，擔任兩岸手繪獎執行長<br />
          • 2017 擔任臺灣室內設計周主題館〈本心相見〉策展人<br />
          • 2013–至今 擔任亞洲大學室內設計學系兼任／助理教授、講師<br />
          • 2012–2021 連續受邀擔任《INTERIOR DESIGN》《PChouse Award》等國際設計獎評審<br />
          • 2009 主導設計台北沐蘭精品旅館，奠定品牌聲譽
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
    name: '琢白･雍景',
    thumb: new URL('@/assets/img/team/two_p_1.webp', import.meta.url).href,
    fullImg: new URL('@/assets/img/team/two_p_b_1.webp', import.meta.url).href,
  },
  {
    name: '雍睦',
    thumb: new URL('@/assets/img/team/two_p_2.webp', import.meta.url).href,
    fullImg: new URL('@/assets/img/team/two_p_b_2.webp', import.meta.url).href,
  },
  {
    name: '睿格',
    thumb: new URL('@/assets/img/team/two_p_3.webp', import.meta.url).href,
    fullImg: new URL('@/assets/img/team/two_p_b_3.webp', import.meta.url).href,
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
