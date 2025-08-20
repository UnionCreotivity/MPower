<template>
  <section class="portfolio-view">
    <img src="../../../assets/img/metier/portfolio/dot_line.png" alt="dot_line" class="dot-line" />
    <img src="../../../assets/img/metier/portfolio/tree.webp" alt="" class="tree" />
    <div class="top-box">
      <div class="en-title">PORTFOLIO</div>
      <div class="zh-title">自住為先，百年傳承品質</div>
      <div class="content">
        以透天產品起家，奠定紮實的基礎，推出大樓產品。<br />
        以綠能環保為目標，堅持注入生活美學，打造「品質、生態、永續」建築作品。
      </div>
    </div>

    <div class="bottom-box">
      <div class="item">
        <div class="img-box">
          <img src="../../../assets/img/metier/portfolio/1.webp" alt="" srcset="" />
        </div>
        <div class="year">
          <div>2008</div>
        </div>
        <div class="name">大熊春天</div>
        <div class="local">台中西屯區/別墅透天</div>
      </div>
      <div class="item">
        <div class="img-box">
          <img src="../../../assets/img/metier/portfolio/2.webp" alt="" srcset="" />
        </div>
        <div class="year">
          <div>2017</div>
        </div>
        <div class="name">大熊藏鋒</div>
        <div class="local">彰化員林/別墅透天</div>
        <div class="icon">
          <img src="../../../assets/img/metier/portfolio/silver.webp" alt="" srcset="" />
        </div>
        <div class="text">義大利【A’Design】<br />國際設計大獎<br />景觀規劃 銀獎</div>
      </div>
      <div class="item">
        <div class="img-box">
          <img src="../../../assets/img/metier/portfolio/3.webp" alt="" srcset="" />
        </div>
        <div class="year">
          <div>2017</div>
        </div>
        <div class="name">大熊康橋</div>
        <div class="local">台中東區/大樓</div>
        <div class="icon">
          <img src="../../../assets/img/metier/portfolio/copper.webp" alt="" srcset="" />
        </div>
        <div class="text">義大利【A’Design】<br />國際設計大獎<br />公設室內設計 銅獎</div>
      </div>
      <div class="item">
        <div class="img-box">
          <img src="../../../assets/img/metier/portfolio/4.webp" alt="" srcset="" />
        </div>
        <div class="year">
          <div>2021</div>
        </div>
        <div class="name">熊立方</div>
        <div class="local">台中潭子區/大樓</div>
      </div>
      <div class="item">
        <div class="img-box">
          <img src="../../../assets/img/metier/portfolio/5.webp" alt="" srcset="" />
        </div>
        <div class="year">
          <div>2024</div>
        </div>
        <div class="name">熊PRO</div>
        <div class="local">台中南區/大樓</div>
      </div>

      <div class="item">
        <div class="img-box">
          <img src="../../../assets/img/metier/portfolio/6.webp" alt="" srcset="" />
        </div>
        <div class="year">
          <div>2026</div>
        </div>
        <div class="name">JIA55</div>
        <div class="local">台中14期/大樓</div>
      </div>
    </div>

    <FullScreen />
  </section>
</template>
<script setup lang="ts">
import '@/assets/scss/metier/_portfolio.scss'
import FullScreen from '@/components/full-screen/FullScreen.vue'
</script>
