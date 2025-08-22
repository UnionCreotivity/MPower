<template>
  <section class="build-origin">
    <div class="top-box">
      <div class="left">
        <img
          class="line"
          src="../../../assets/img/metier/build-origin/line.png"
          alt="line"
          srcset=""
        />
        <div class="icon">
          <img src="../../../assets/img/metier/build-origin/bear.webp" alt="" srcset="" />
        </div>
        <div class="title-box">
          <div class="title" ref="title">真正好住懂住<br />大熊擇學昇華</div>
          <div class="en-title" ref="enTitle">
            BUILT FROM<br />
            CONSTRUCTION
          </div>
        </div>
      </div>

      <div class="right" ref="content">
        精華擇地學，不只便捷更是稀有。<br />
        延續14期繁華，又一精選地段。<br />
        公設美學輕奢為上，精準格局風光為美。<br />
        近30年築跡，ESG永續思維。<br />
        大熊建築昇華，為少數知者打造藏家。
      </div>
    </div>
    <div class="bottom-box">
      <div class="img-box">
        <img src="../../../assets/img/metier/build-origin/1.webp" alt="" srcset="" />
        <div class="hint">情境示意圖</div>
      </div>
    </div>
    <FullScreen :forceWhiteIcon="true" />
  </section>
</template>

<script setup lang="ts">
import '@/assets/scss/metier/_build-origin.scss'
import FullScreen from '@/components/full-screen/FullScreen.vue'
import { ref, onMounted } from 'vue'
import gsap from 'gsap'
import SplitText from 'gsap/SplitText'
import CustomEase from 'gsap/CustomEase'
gsap.registerPlugin(CustomEase)
CustomEase.create('imageEase', '0.85,0,0.15,1')

gsap.registerPlugin(SplitText)
const title = ref<HTMLElement | null>(null)
const enTitle = ref<HTMLElement | null>(null)
const content = ref<HTMLElement | null>(null)

onMounted(() => {
  const tl = gsap.timeline({})

  const splitTitle = new SplitText(title.value, { type: 'chars' })
  const splitenTitle = new SplitText(enTitle.value, { type: 'chars' })
  const splitContent = new SplitText(content.value, { type: 'lines' })

  tl.from('.build-origin .top-box .left .icon', {
    duration: 1,
    opacity: 0,
  })
    .from(
      splitTitle.chars,
      {
        duration: 1,
        y: 50,
        opacity: 0,
        stagger: 0.05,
      },
      '<',
    )
    .from(
      splitenTitle.chars,
      {
        duration: 1.2,
        opacity: 0,
        y: 80,
        rotateY: 90,
        stagger: 0.02,
      },
      '<0.35',
    )
    .from(
      splitContent.lines,
      {
        duration: 1,
        opacity: 0,
        y: 80,
        stagger: 0.15,
      },
      '<0.3',
    )
    .to(
      '.build-origin .top-box .left .line',
      {
        maskPosition: '0% 0%',
        duration: 1,
      },
      '<0.6',
    )

    .to(
      '.build-origin .bottom-box .img-box img',
      {
        scale: 1,
        autoAlpha: 1,
        duration: 1.3,
        ease: 'power0.inOut',
        filter: 'blur(0px)',
      },
      '<',
    )
})
</script>
