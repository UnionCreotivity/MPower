<template>
  <section class="team-person-view team-three-view">
    <div class="overlay-close" @click="goBack"></div>

    <div class="left-box">
      <div class="img-box">
        <img src="../../assets/img/team/three_img2.webp" alt="" srcset="" />
      </div>
    </div>
    <div class="right-box">
      <div class="en-title">LANDSCAPE</div>
      <div class="name-box">
        <div class="text">
          景觀大師 /
          <div class="name">日禧設計</div>
        </div>
      </div>
      <div class="content-box">
        日禧設計致力於景觀、展覽與商業空間的整合設計。團隊匯聚來自都市規劃、博物館展策、品牌視覺等多元領域的專業人才，擅長從文化、空間與環境三者出發，打造具體驗感與敘事性的空間場域。設計風格強調自然語彙的融合、場域精神的延伸與創意策展的跨界整合。
      </div>

      <div class="content-box">
        <div class="title">代表作品</div>
        <div class="item-img">
          <div class="item">
            <div class="img-box">
              <img src="../../assets/img/team/three_p_1.webp" alt="" srcset="" />
            </div>
            <div class="name">台中商業銀行總部</div>
          </div>
          <div class="item">
            <div class="img-box">
              <img src="../../assets/img/team/three_p_2.webp" alt="" srcset="" />
            </div>
            <div class="name">龍巖安泰/富岡</div>
          </div>
          <div class="item">
            <div class="img-box">
              <img src="../../assets/img/team/three_p_3.webp" alt="" srcset="" />
            </div>
            <div class="name">巧克力夢工廠</div>
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
