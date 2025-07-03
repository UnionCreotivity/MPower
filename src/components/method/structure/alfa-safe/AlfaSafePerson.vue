<template>
  <div class="method-content-box person-content-box">
    <div class="left-box">
      <img
        class="method-img"
        src="../../../../assets/img/method/structure/person.webp"
        alt=""
        srcset=""
      />
    </div>
    <div class="right-box">
      <img class="alfa" src="../../../../assets/img/method/alfa.svg" alt="" />
      <div class="title-box">
        榮獲國家發明金獎的建築工法<br />戴雲發XALFA SAFE｜重新定義建築安全標準
      </div>
      <div class="content-box">
        <div class="content">
          榮獲《國家發明金獎》的 Alfa Safe 耐震系統工法，為建築界唯一獲得
          發明金牌的結構技術。收錄於《臺灣建築五十年》技術專書，代表台灣
          建築工法的歷史進程與創新高度。此系統由結構權威 戴雲發技師研發，
          徹底優化傳統綁紮構造，讓建築不只更穩固，更值得信賴。
        </div>
        <span>Alfa Safe耐震系統工法四大提升(創新)</span>
        <ul>
          <li>System系統規則化 : 同根鋼筋連續不間斷彎紮一體成型。</li>
          <li>Standard規格標準化 : 鋼筋均先嚴密規劃加工，標準一致。</li>
          <li>Simple防呆配件化 : 配件式組裝可避免人為疏失，綁紮精準。</li>
          <li>Speed作業效率化 : 施作前進行完備的前置作業，提升效率。</li>
        </ul>
      </div>
      <div class="arrow-box">
        <div class="prev" @click="$emit('prev')">
          <img src="../../../../assets/img/prev.svg" alt="prev" />
        </div>
        <div class="next" @click="$emit('next')">
          <img src="../../../../assets/img/next.svg" alt="next" />
        </div>
      </div>
    </div>
  </div>
</template>

<script setup lang="ts">
import { onMounted } from 'vue'
import { gsap } from 'gsap'

const initGsap = () => {
  const tl = gsap.timeline({ id: 'method' })

  tl.from(
    '.method-content-box .right-box .alfa,.method-content-box .right-box .title-box, .method-content-box .right-box .content-box,.person-content-box .right-box .content-box ul',
    {
      filter: 'blur(8px)',
      opacity: 0,
      ease: 'power1.inOut',
      stagger: 0.2,
      duration: 1,
    },
  )
    .from(
      '#method-view .arrow-box',
      {
        filter: 'blur(8px)',
        opacity: 0,
        ease: 'power1.inOut',
        stagger: 0.2,
        duration: 1,
      },
      '<0.8',
    )
    .fromTo(
      '.method-img',
      {
        filter: 'brightness(3)',
        opacity: 0,
      },
      {
        filter: 'brightness(1)',
        opacity: 1,

        duration: 1.5,
        ease: 'back.inOut(1)',
      },
      '<0.1',
    )
}

onMounted(() => {
  initGsap()
})
</script>
