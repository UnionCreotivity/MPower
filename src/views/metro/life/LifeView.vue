<template>
  <div id="life-view">
    <div class="life-box">
      <div class="left-box">
        <div class="title-box">
          <div class="en">LIFE STYLE</div>
          <div class="big-zh">瞬移生活，時尚坐標</div>
          <div class="zh">3商圈，繁靜一脈即達</div>
        </div>
        <div class="content">
          北平、中清、崇德三大生活圈合圍，<br />
          從熟悉日常、精品消費到商務往來，<br />
          無需奔波，即可瞬移日常所需；<br />
          選擇生活場景，也選擇節奏美學。<br />
          真正時尚，不張揚，而自成路徑。
        </div>
        <div class="tab-item-box">
          <div
            class="tab-item"
            v-for="life in lifeList"
            :key="life.key"
            @click.stop="handleTag(life.key)"
            :class="tag === life.key ? 'active' : ''"
          >
            <div class="life-list-squre"></div>
            <div class="text">
              {{ life.zhName }}<span>{{ life.enName }}</span>
            </div>
          </div>
        </div>
      </div>
      <div class="right-box">
        <div class="img-box">
          <ScaleDrag :init="initXY" :max-ratio="2">
            <img
              class="main-map-img"
              src="../../../assets/img/life/life_main.webp"
              alt=""
              srcset=""
            />
            <Glow :parent-length="20" />
            <TransitionGroup name="fade" tag="div">
              <div
                class="life-view-point"
                v-for="point in filteredLifeData"
                :key="point.id"
                :class="[point.className, tag === point.tag ? 'active' : '']"
                @click="showFancybox(point)"
              >
                <div class="radiation">
                  <div class="circle"></div>
                  <div class="circle"></div>
                  <div class="circle"></div>
                </div>
                <img class="point-img" src="../../../assets/img/life/point.svg" alt="" />
              </div>
            </TransitionGroup>
          </ScaleDrag>
        </div>
      </div>
    </div>

    <FadeIn>
      <LifeFancybox v-if="fancyboxItem" :fancyItem="fancyboxItem" @show-fancybox="showFancybox" />
    </FadeIn>
  </div>
</template>

<script setup lang="ts">
import '@/assets/scss/metro/_life.scss'
import gsap from 'gsap'
import { onMounted, ref, computed } from 'vue'
import { lifeData } from './LifeData'
import CustomEase from 'gsap/CustomEase'
// import { lifeFancyData } from './LifeFancyData'
// import ViewFixed from '@/components/view-fixed/ViewFixed.vue'
import ScaleDrag from '@/components/scale-drag/ScaleDrag.vue'
import LifeFancybox from '@/components/life-fancybox/LifeFancybox.vue'
import FadeIn from '@/components/transition/FadeIn.vue'
import Glow from '@/components/glow-effect/GlowEffect.vue'

const tag = ref('')
const fancyboxItem = ref<{ key: string; image: string; txt: string }[] | null>(null)

gsap.registerPlugin(CustomEase)
CustomEase.create('myEase', '0.24,0.43,0.15,0.97')

const lifeList = [
  {
    key: 'rapid-transit',
    zhName: '交通樞紐',
    enName: 'RAPID TRANSIT',
  },
  {
    key: 'shopping-district',
    zhName: '繁華商圈',
    enName: 'SHOPPING DISTRICT',
  },
  {
    key: 'green-park',
    zhName: '公園綠意',
    enName: 'GREEN PARK',
  },
  {
    key: 'major-construction',
    zhName: '地標新篇',
    enName: 'EMERGING LANDMARKS',
  },
  // {
  //   key: 'cultural-district',
  //   zhName: '優質學區',
  //   enName: 'CULTURAL DISTRICT',
  // },
]

//篩選好 lifeData
const filteredLifeData = computed(() => lifeData.filter((point) => point.tag === tag.value))

const handleTag = (val: string) => {
  tag.value = tag.value === val ? '' : val
}

// eslint-disable-next-line @typescript-eslint/no-explicit-any
const showFancybox = (point?: any) => {
  if (!point || !point.image) {
    fancyboxItem.value = null // ← 關閉 Fancybox
    return
  }

  const images = Array.isArray(point.image) ? point.image : [point.image]
  fancyboxItem.value = images.map((img: string, i: number) => ({
    key: `${point.id}-${i}`,
    image: img,
    txt: point.txt || '',
  }))
}
const initXY = computed(() => {
  return window.innerWidth > 1400 ? { x: 300, y: -200 } : { x: 100, y: -100 }
})

onMounted(() => {
  const tl = gsap.timeline({ delay: 0.4 })
  tl.from('#life-view .life-box .left-box', {
    autoAlpha: 0,
    duration: 1,
  })

    .fromTo(
      '#life-view .life-box .right-box .img-box',
      {
        autoAlpha: 0,
        clipPath: 'inset(0 100% 0 0)', // 從右側完全遮住
      },
      {
        clipPath: 'inset(0 0% 0 0)', // 向左展開到完整顯示
        duration: 2,
        autoAlpha: 1,
      },
      '<0.15',
    )
    .from(
      '#life-view .life-box .right-box .img-box img',
      {
        scale: 1.2,
        duration: 1.5,
        ease: 'myEase',
        overwrite: true,
      },
      '<',
    )
    .from(
      '#life-view .life-box .right-box .life-view-point .point-img',
      {
        autoAlpha: 0,
        duration: 1,
        ease: 'power0.inOut',
        y: 20,
      },
      '<0.8',
    )
})
</script>

<style lang="scss">
#life-view {
  background-color: #e2e2e3;
  width: 100%;
  height: 100svh;
  overflow: hidden;
}
</style>
