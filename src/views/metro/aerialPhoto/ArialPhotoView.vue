<template>
  <section class="arial-view" id="content-box-container">
    <img class="front-cloud1" src="/src/assets/img/metro/cloud8.png" alt="cloud8" style="--i: 2" />

    <div class="img-box">
      <picture>
        <source srcset="/src/assets/img/metro/tablet.webp" media="(max-width: 1400px)" />
        <img src="/src/assets/img/metro/arial.webp" alt="" class="arial-img" />
      </picture>

      <video class="light-video" autoplay loop muted playsinline>
        <source
          src="https://ws.srl.tw/cs/2024050617332581/img/img2024050718025926.mp4"
          type="video/mp4"
        />
      </video>

      <!-- 下面可切換的圖層 -->
      <TransitionGroup name="fade" tag="div">
        <component
          v-for="(comp, i) in currentLayerComponents"
          :is="comp"
          :key="i"
          @open-green-line="showGreenLine = true"
        />
      </TransitionGroup>
    </div>

    <div class="tab-box">
      <div
        v-for="(tab, index) in tabs"
        :key="tab.title"
        :class="{ active: index === currentIndex }"
        @click="switchContent(index)"
      >
        {{ tab.title }}
      </div>
      <div class="house-number-tab" @click="showHouseNumber = true">門牌價值</div>
    </div>

    <div v-for="(content, i) in filteredContentData" :key="currentIndex" class="content-box active">
      <div class="title">{{ content.title }}</div>
      <div class="small-title">{{ content.subtitle }}</div>
      <div class="content" v-html="content.content"></div>
    </div>

    <Transition appear @before-enter="onBeforeEnter" @enter="onEnter" @leave="onLeave">
      <HouseNumber v-if="showHouseNumber" @close="showHouseNumber = false" />
    </Transition>

    <!-- 綠線詳細視窗 -->
    <Transition appear @before-enter="onBeforeEnter" @enter="onEnter" @leave="onLeave">
      <GreenLine v-if="showGreenLine" @close="showGreenLine = false" />
    </Transition>
  </section>
</template>

<script setup lang="ts">
import { ref, computed, onMounted, nextTick, watch } from 'vue'
import { useRoute } from 'vue-router'
import { SplitText } from 'gsap/SplitText'
import gsap from 'gsap'

import HouseNumber from '@/components/metro/HouseNumber.vue'
import MrtGroup from '@/components/metro/MrtGroup.vue'
import BusinessGroup from '@/components/metro/BusinessGroup.vue'
import CoreGroup from '@/components/metro/CoreGroup.vue'
import GreenLine from '@/components/metro/GreenLine.vue'
import '@/assets/scss/metro/_arial-photo.scss'

gsap.registerPlugin(SplitText)

const showGreenLine = ref(false)
const isAnimating = ref(false)
const showHouseNumber = ref(false)
const route = useRoute()
const currentIndex = ref(0)

const tabs = [
  { title: '空拍鳥瞰' },
  { title: '軌道經濟' },
  { title: '金軸核心' },
  { title: '繁華商圈' },
]

const contentData = ref([
  {
    title: '都市發展，接軌未來',
    subtitle: '3捷運3商圈3核心，十分鐘同步擁有',
    content: `
    生活十分鐘，文心一條通！綠線+橘線+紅線，3捷運未來匯聚。<br />
    中清+崇德+北平，3商圈繁華不斷。七期+水湳+14期，3核心<br />
    風光相映。未來台中101置地廣場，國際購物滿足品味嚮往！<br />
    `,
  },
  {
    title: '移動價值，無限增殖',
    subtitle: '3捷運，繁榮軌跡匯聚',
    content: `
    綠線｜目前完工計畫延伸彰化、<br />
    橘線｜直通台中國際機場定案，<br />
    紅線｜貫穿崇德路發展性預議，<br />
    台中之最，三捷融匯，核心地段。<br />
    城市路網串聯開創經濟發展新格局！
    `,
  },
  {
    title: '政經中心，百貨在即',
    subtitle: '3核心，繁盛四方齊騁',
    content: `
    七期新市政｜新光三越、大遠百水湳經貿園區｜綠美圖、國際會展中心，<br />
    十四期重劃｜洲際漢神、超巨蛋滿足您對都市生活的期許及嚮往，只要<br />
    10分鐘，掌握核心大台中！
    `,
  },
  {
    title: '生活合圍，繁華共見',
    subtitle: '3商圈，繁華一脈相連',
    content: `
    北平、崇德、中清三大生活圈合圍，<br />
    從熟悉日常、精品消費到商務往來。<br />
    北平商圈，店家雲集，巷弄飄香；<br />
    崇德樞紐，商機蓬勃，人潮不歇；<br />
    中清主幹，生活購物，機能齊備。<br />
    無需奔波，即可滿足日常所需的食尚美好。
    `,
  },
])

const currentLayerComponents = computed(() => {
  if (currentIndex.value === 0) {
    // 空拍鳥瞰，三個一起顯示
    return [MrtGroup, CoreGroup, BusinessGroup]
  }

  switch (currentIndex.value) {
    case 1:
      return [MrtGroup]
    case 2:
      return [CoreGroup]
    case 3:
      return [BusinessGroup]

    default:
      return []
  }
})

const filteredContentData = computed(() => [contentData.value[currentIndex.value]])

const switchContent = (index: number) => {
  if (isAnimating.value || index === currentIndex.value) return
  isAnimating.value = true
  currentIndex.value = index
  showHouseNumber.value = false
  changeContent()
  isAnimating.value = false
}

const initGsap = () => {
  const splitbTitle = SplitText.create('.arial-view .content-box .title', {
    type: 'chars,words,lines',
    linesClass: 'clip-text',
  })
  const smallTitleSplit = SplitText.create('.small-title', {
    type: 'chars,words,lines',
    linesClass: 'clip-text',
  })
  const contentSplit = SplitText.create('.content', {
    type: 'chars,words,lines',
    linesClass: 'clip-text',
  })

  const tl = gsap.timeline({})
  tl.from('.img-box', {
    autoAlpha: 0,
    duration: 1,
    ease: 'power1.inOut',
  })
    .from(splitbTitle.chars, {
      y: 70,
      autoAlpha: 0,
      duration: 1,
      ease: 'power2.out',
      stagger: { each: 0.05, from: 'start' },
    })
    .from(
      smallTitleSplit.lines,
      {
        y: 70,
        autoAlpha: 0,
        duration: 1,
        ease: 'power2.out',
      },
      '<0.5',
    )
    .from(
      contentSplit.lines,
      {
        y: 70,
        autoAlpha: 0,
        duration: 1,
        ease: 'power2.out',
        stagger: { each: 0.15, from: 'start' },
      },
      '<0.3',
    )
}

const changeContent = async () => {
  await nextTick()
  const activeBox = document.querySelector('.content-box.active')

  if (!activeBox) {
    return
  }

  const title = activeBox.querySelector('.title')
  const smallTitle = activeBox.querySelector('.small-title')
  const content = activeBox.querySelector('.content')

  const tl = gsap.timeline({})

  tl.from(
    title,
    {
      y: 70,
      opacity: 0,
      duration: 1,
      ease: 'power2.out',
    },
    '<0.15',
  )
    .from(
      smallTitle,
      {
        y: 70,
        opacity: 0,
        duration: 1,
        ease: 'power2.out',
      },
      '<0.15',
    )
    .from(
      content,
      {
        y: 70,
        opacity: 0,
        duration: 1,
        ease: 'power2.out',
      },
      '<0.15',
    )

  return tl
}

const onBeforeEnter = (el: Element) => {
  gsap.set(el, { opacity: 0 })
}

const onEnter = (el: Element, done: () => void) => {
  gsap.to(el, {
    opacity: 1,
    duration: 0.5,
    ease: 'power2.out',
    onComplete: done,
  })
}

const onLeave = (el: Element, done: () => void) => {
  gsap.to(el, {
    opacity: 0,
    duration: 0.4,
    ease: 'power2.inOut',
    onComplete: done,
  })
}

// onMounted(() => {
//   const tabFromQuery = parseInt(route.query.tab as string)
//   if (!isNaN(tabFromQuery) && tabFromQuery >= 0 && tabFromQuery < tabs.length) {
//     currentIndex.value = tabFromQuery
//   } else {
//     currentIndex.value = 0
//   }
//   initGsap()
// })

onMounted(() => {
  const tabFromQuery = parseInt(route.query.tab as string)
  if (!isNaN(tabFromQuery)) {
    if (tabFromQuery === 4) {
      showHouseNumber.value = true
    } else if (tabFromQuery >= 0 && tabFromQuery < tabs.length) {
      currentIndex.value = tabFromQuery
    } else {
      currentIndex.value = 0
      showHouseNumber.value = false
    }
  } else {
    currentIndex.value = 0
    showHouseNumber.value = false
  }
  initGsap()
})

watch(
  () => route.query.tab,

  (newVal) => {
    const tab = parseInt(newVal as string)
    if (!isNaN(tab)) {
      console.log(tab)
      if (tab === 4) {
        showHouseNumber.value = true
      } else if (tab >= 0 && tab < tabs.length) {
        currentIndex.value = tab
        showHouseNumber.value = false
      }
    }
  },
)
</script>

<style scoped>
.fade-enter-active,
.fade-leave-active {
  transition: opacity 0.5s ease;
}
.fade-enter-from,
.fade-leave-to {
  opacity: 0;
}
.fade-enter-to,
.fade-leave-from {
  opacity: 1;
}
</style>
