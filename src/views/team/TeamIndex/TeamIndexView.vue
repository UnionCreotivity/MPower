<template>
  <section class="team-menu-view">
    <div class="title-box">
      <div class="zh">專業大師團隊｜</div>
      <div class="en">PROFESSIONAL TEAM</div>
    </div>

    <div class="menu-box">
      <div class="item" @click="goTo('teamOne')">
        <img class="bg bg1" src="../../../assets/img/team/bg.png" alt="bg" srcset="" />
        <div class="name-box name-box1">
          <div class="text">建築大師</div>
          <div class="name">
            <img src="../../../assets/img/team/one_name.png" alt="one_name" srcset="" />
          </div>
        </div>
        <div class="person-box person-box1">
          <img src="../../../assets/img/team/one_img.webp" alt="one_img" srcset="" />
        </div>
      </div>

      <div class="item" @click="goTo('teamTwo')">
        <img class="bg bg2" src="../../../assets/img/team/bg.png" alt="bg" srcset="" />
        <div class="name-box name-box2">
          <div class="text">公設大師</div>
          <div class="name">
            <img src="../../../assets/img/team/two_name.png" alt="two_name" srcset="" />
          </div>
        </div>
        <div class="person-box person-box2">
          <img src="../../../assets/img/team/two_img.webp" alt="two_img" srcset="" />
        </div>
      </div>

      <div class="item" @click="goTo('teamThree')">
        <img class="bg bg3" src="../../../assets/img/team/bg.png" alt="bg" srcset="" />
        <div class="name-box name-box3">
          <div class="text">景觀大師</div>
          <div class="name">
            <img src="../../../assets/img/team/three_name.png" alt="three_name" srcset="" />
          </div>
        </div>
        <div class="person-box person-box3">
          <img src="../../../assets/img/team/three_img.webp" alt="three_img" srcset="" />
        </div>
      </div>
    </div>
    <FullScreen />
  </section>
</template>

<script setup lang="ts">
import '@/assets/scss/team/_team-menu.scss'
import FullScreen from '@/components/full-screen/FullScreen.vue'
import { onMounted } from 'vue'
import { useRouter } from 'vue-router'
import { gsap } from 'gsap'
import { SplitText } from 'gsap/SplitText'

const router = useRouter()

const goTo = (type: string) => {
  router.push(`/master/${type}`)
}

const initGsap = () => {
  const titleSplits = gsap.utils.toArray('.team-menu-view .title-box .en') as HTMLElement[]
  const mainSplit = SplitText.create(titleSplits, {
    type: 'chars,words,lines',
    linesClass: 'clip-text',
  })

  const titleZHSplits = gsap.utils.toArray('.team-menu-view .title-box .zh') as HTMLElement[]
  const zhSplit = SplitText.create(titleZHSplits, {
    type: 'chars,words,lines',
    linesClass: 'clip-text',
  })

  const tl = gsap.timeline({})
  tl.fromTo(
    mainSplit.chars,
    {
      'will-change': 'opacity, transform',
      transformOrigin: '50% 100%',
      opacity: 0,
      scale: 2,
      rotationY: -90,
    },
    {
      duration: 2.5,
      ease: 'expo',
      opacity: 1,
      scale: 1,
      rotationY: 0,
      stagger: { each: 0.06, from: 'start' },
    },
    '<0.5',
  )
    .from(
      zhSplit.chars,
      {
        rotationY: -90,
        autoAlpha: 0,
        y: '100',
        transformOrigin: '50% 100%',
        duration: 1,
        stagger: { each: 0.06, from: 'start' },
      },
      '<0.35',
    )

    .to(
      '.bg1',
      {
        clipPath: 'inset(0% 0% 0% 0%)',
        duration: 1,
        ease: 'power1.inOut',
      },
      '<0.3',
    )
    .to(
      '.person-box1',
      {
        clipPath: 'inset(0% 0% 0% 0%)',
        duration: 0.8,
        scale: 1,
        ease: 'power1.inOut',
      },
      '<0.1',
    )
    .from(
      '.team-menu-view .menu-box .item .name-box1',
      {
        autoAlpha: 0,
        y: '100',
        duration: 1,
        stagger: 0.1,
      },
      '<0.15',
    )

    .to(
      '.bg2',
      {
        clipPath: 'inset(0% 0% 0% 0%)',
        duration: 1,
        ease: 'power1.inOut',
      },
      '<0.3',
    )
    .to(
      '.person-box2',
      {
        clipPath: 'inset(0% 0% 0% 0%)',
        duration: 0.8,
        scale: 1,
        ease: 'power1.inOut',
      },
      '<0.1',
    )
    .from(
      '.team-menu-view .menu-box .item .name-box2',
      {
        autoAlpha: 0,
        y: '100',
        duration: 1,
        stagger: 0.1,
      },
      '<0.15',
    )

    .to(
      '.bg3',
      {
        clipPath: 'inset(0% 0% 0% 0%)',
        duration: 1,
        ease: 'power1.inOut',
      },
      '<0.3',
    )
    .to(
      '.person-box3',
      {
        clipPath: 'inset(0% 0% 0% 0%)',
        duration: 0.8,
        scale: 1,
        ease: 'power1.inOut',
      },
      '<0.1',
    )
    .from(
      '.team-menu-view .menu-box .item .name-box3',
      {
        autoAlpha: 0,
        y: '100',
        duration: 1,
        stagger: 0.1,
      },
      '<0.15',
    )
}

onMounted(() => {
  initGsap()
})
</script>

<style scoped></style>
