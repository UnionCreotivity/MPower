<template>
  <section class="team-person-view team-two-view">
    <div class="overlay-close" @click="goBack"></div>

    <div class="left-box">
      <div class="img-box">
        <img src="../../assets/img/team/two_img2.webp" alt="" srcset="" />
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
          <div class="item">
            <div class="img-box">
              <img src="../../assets/img/team/two_p_1.webp" alt="" srcset="" />
            </div>
            <div class="name">琢白･雍景</div>
          </div>
          <div class="item">
            <div class="img-box">
              <img src="../../assets/img/team/two_p_2.webp" alt="" srcset="" />
            </div>
            <div class="name">雍睦</div>
          </div>
          <div class="item">
            <div class="img-box">
              <img src="../../assets/img/team/two_p_3.webp" alt="" srcset="" />
            </div>
            <div class="name">睿格</div>
          </div>
        </div>
      </div>
    </div>

    <FullScreen />
  </section>
</template>

<script setup lang="ts">
import '@/assets/scss/team/_team-content.scss'
import FullScreen from '@/components/full-screen/FullScreen.vue'
import { onMounted } from 'vue'
import { useRouter } from 'vue-router'
import { gsap } from 'gsap'
import { SplitText } from 'gsap/SplitText'

const router = useRouter()
const goBack = () => router.push('/master/teamIndex')
</script>

<style scoped></style>
