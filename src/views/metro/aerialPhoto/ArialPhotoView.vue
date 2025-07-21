<template>
  <section class="arial-view">
    <div class="img-box">
      <picture>
        <source srcset="/src/assets/img/metro/tablet.webp" media="(max-width: 1400px)" />
        <img src="/src/assets/img/metro/arial.webp" alt="" />
      </picture>
      <video class="light-video" autoplay loop muted playsinline>
        <source
          src="https://ws.srl.tw/cs/2024050617332581/img/img2024050718025926.mp4"
          type="video/mp4"
        />
      </video>

      <!-- 軌道經濟物件 -->
      <div class="red-line mrt-line">
        <img src="/src/assets/img/metro/red_line.webp" alt="" srcset="" />
      </div>
      <div class="green-line mrt-line">
        <img src="/src/assets/img/metro/green_line.webp" alt="" srcset="" />
      </div>
      <div class="blue-line mrt-line">
        <img src="/src/assets/img/metro/blue_line.webp" alt="" srcset="" />
      </div>
      <div class="orange-line mrt-line">
        <img src="/src/assets/img/metro/orange_line.webp" alt="" srcset="" />
      </div>

      <!-- 繁華商圈物件 -->
      <div class="tab3-img1">
        <img src="/src/assets/img/metro/tab3_1.png" alt="" srcset="" />
      </div>
      <div class="tab3-img2">
        <img src="/src/assets/img/metro/tab3_2.png" alt="" srcset="" />
      </div>
      <div class="tab3-img3">
        <img src="/src/assets/img/metro/tab3_3.png" alt="" srcset="" />
      </div>

      <!-- 金軸核心物件 -->
      <div class="tab4-img1">
        <img src="/src/assets/img/metro/tab4_1.png" alt="" srcset="" />
      </div>
      <div class="tab4-img2">
        <img src="/src/assets/img/metro/tab4_2.png" alt="" srcset="" />
      </div>
      <div class="tab4-img3">
        <img src="/src/assets/img/metro/tab4_3.png" alt="" srcset="" />
      </div>
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
  </section>
</template>

<script setup lang="ts">
import { ref, computed, onMounted, nextTick } from 'vue'
import gsap from 'gsap'
import { SplitText } from 'gsap/SplitText'
import HouseNumber from '@/components/metro/HouseNumber.vue'
import '@/assets/scss/metro/_arial-photo.scss'

gsap.registerPlugin(SplitText)

const isAnimating = ref(false)
const showHouseNumber = ref(false)

const tabs = [
  { title: '空拍鳥瞰' },
  { title: '軌道經濟' },
  { title: '繁華商圈' },
  { title: '金軸核心' },
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
  {
    title: '政經中心，百貨在即',
    subtitle: '3核心，繁盛四方齊騁',
    content: `
    七期新市政｜新光三越、大遠百水湳經貿園區｜綠美圖、國際會展中心，<br />
    十四期重劃｜洲際漢神、超巨蛋滿足您對都市生活的期許及嚮往，只要<br />
    10分鐘，掌握核心大台中！
    `,
  },
])

const currentIndex = ref(0)

// 這是解決 ESLint 警告，讓 v-for 用篩選過只有一筆的陣列
const filteredContentData = computed(() => [contentData.value[currentIndex.value]])

const switchContent = (index: number) => {
  if (isAnimating.value || index === currentIndex.value) return
  isAnimating.value = true
  currentIndex.value = index
  showHouseNumber.value = false // 每次點 tab 都先關掉 HouseNumber
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
  const tl = gsap.timeline({ delay: 0.1 })
  tl.fromTo(
    '.arial-view .img-box img',
    { clipPath: 'inset(100% 0% 0% 0%)', opacity: 0 },
    {
      clipPath: 'inset(0% 0% 0% 0%)',
      duration: 1,
      opacity: 1,
    },
  )
    .fromTo(
      '.arial-view .img-box img',
      { scale: 1.3, filter: 'blur(10px) brightness(1.8)' },
      { duration: 1, scale: 1, filter: 'blur(0px) brightness(1)', ease: 'power1.inOut' },
      '<',
    )
    .from('.light-video', {
      opacity: 0,
      duration: 1,
    })
    .from(
      splitbTitle.chars,
      {
        y: 70,
        opacity: 0,
        duration: 1,
        ease: 'power2.out',
        stagger: { each: 0.05, from: 'start' },
      },
      '<-0.2',
    )
    .from(
      smallTitleSplit.lines,
      {
        y: 70,
        opacity: 0,
        duration: 1,
        ease: 'power2.out',
      },
      '<0.5',
    )
    .from(
      contentSplit.lines,
      {
        y: 70,
        opacity: 0,
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

  // 取得裡面要動畫的元素
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
    duration: 0.6,
    ease: 'power2.out',
    onComplete: done,
  })
}

const onLeave = (el: Element, done: () => void) => {
  gsap.to(el, {
    opacity: 0,
    duration: 0.5,
    ease: 'power2.inOut',
    onComplete: done,
  })
}

onMounted(() => {
  initGsap()
})
</script>

<style scoped></style>
