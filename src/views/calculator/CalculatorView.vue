<template>
  <section class="loan-view">
    <Menu />
    <FullScreen />
    <div class="title-box">房貸試算</div>
    <div class="loan-view-container">
      <div class="loan-view-left">
        <div class="loan-view-bottom">
          <div class="loan-view-input-container">
            <div class="loan-input-item floor-select">
              <div>樓層戶別：</div>
              <div class="loan-input">
                <select name="household-type">
                  <option value="a">A</option>
                  <option value="b">B</option>
                  <option value="c">C</option>
                  <option value="d">D</option>
                </select>
                <span>戶</span>
                <input
                  type="number"
                  id="floor"
                  min="0"
                  max="1000000000"
                  v-model="loanInputModel.floor"
                  @click.stop="checkClick('floor')"
                />
                <span>樓</span>
              </div>
            </div>

            <div class="loan-input-item">
              <div>戶別價格：</div>
              <div class="loan-input">
                <input
                  type="number"
                  id="householdPrice"
                  min="0"
                  max="1000000000"
                  v-model="loanInputModel.householdPrice"
                  @click.stop="checkClick('householdPrice')"
                />
                <p>萬元</p>
              </div>
            </div>

            <div class="loan-input-item">
              <div>車　位　：</div>
              <div class="loan-input">
                <input
                  type="number"
                  id="carAmount"
                  min="0"
                  max="100000"
                  v-model="loanInputModel.carAmount"
                  @click.stop="checkClick('carAmount')"
                />
              </div>
            </div>

            <div class="loan-input-item">
              <div>車位價格：</div>
              <div class="loan-input">
                <input
                  type="number"
                  id="carPrice"
                  min="0"
                  max="1000000000"
                  v-model="loanInputModel.carPrice"
                  @click.stop="checkClick('carPrice')"
                />
                <p>萬元</p>
              </div>
            </div>

            <div class="loan-input-item">
              <div>總 金 額 ：</div>
              <div class="loan-input">
                <input type="number" id="total" v-model="loanInputModel.total" readonly />
                <p>萬元</p>
              </div>
            </div>

            <div class="loan-click-item">
              <div class="loan-click-clear">
                <button type="button" @click.stop="cleanClick">清除</button>
              </div>
              <div class="loan-click-cal">
                <button type="button" @click.stop="submitClick">試算</button>
              </div>
              <div class="loan-click-print">
                <button type="button" @click.prevent="handlePrint">列印</button>
              </div>
            </div>
          </div>

          <LoanResult />
        </div>
      </div>
      <LoanCal
        @keyboard-click="keyboardClick"
        @keyboard-back-click="keyboardBackClick"
        @submit-click="submitClick"
      />
    </div>
  </section>

  <div class="print-box">
    <div class="logo-box">
      <img src="../../assets/img/home/logo.svg" alt="" srcset="" />
    </div>
    <div class="top-box">
      <div class="info-item">
        <div class="title">樓層戶別</div>
        <div class="info">A</div>
      </div>
      <div class="info-item">
        <div class="title">戶別價格</div>
        <div class="row">
          <div class="info"></div>
          <div class="text">萬元</div>
        </div>
      </div>
      <div class="info-item">
        <div class="title">車　　位</div>
        <div class="info"></div>
      </div>
      <div class="info-item">
        <div class="title">車位價格</div>
        <div class="row">
          <div class="info"></div>
          <div class="text">萬元</div>
        </div>
      </div>
      <div class="info-item">
        <div class="title">總 金 額</div>
        <div class="row">
          <div class="info">100</div>
          <div class="text">萬元</div>
        </div>
      </div>
    </div>

    <!--  -->
    <div class="bottom-box">
      <div class="info-item">
        <div class="title">訂　金　：</div>
        <div class="info"></div>
        <div class="text">萬元</div>
      </div>
      <div class="info-item">
        <div class="title">交 屋 款 ：</div>
        <div class="info"></div>
        <div class="text">萬元</div>
      </div>
      <div class="info-item">
        <div class="title">簽 約 金 ：</div>
        <div class="info"></div>
        <div class="text">萬元</div>
      </div>
      <div class="info-item">
        <div class="title">自備金額：</div>
        <div class="info"></div>
        <div class="text">萬元</div>
      </div>

      <div class="info-item">
        <div class="title">開 工 款 ：</div>
        <div class="info"></div>
        <div class="text">萬元</div>
      </div>
      <div class="info-item">
        <div class="title">貸款金額：</div>
        <div class="info"></div>
        <div class="text">萬元</div>
      </div>
      <div class="info-item">
        <div class="title">結構完成：</div>
        <div class="info"></div>
        <div class="text">萬元</div>
      </div>
    </div>

    <div class="hint-box">
      <div>
        備註:<br />
        1.本付款表之坪數、價格需以正式訂購單為主。<br />
        2.買方應於簽約時繳納暫收款，暫收款內容包含：所有權移轉登記規費、印花稅、代書費、<br />
        代辦手續費、貸款保險費、每戶新台幣貳拾萬元管理基金、預繳社區管理費六個月..等<br />
        (多退少補)。<br />
        3.本付款表銀行貸款之成數、利率，需視客戶當時信用狀況而定。
      </div>
    </div>

    <div class="date-box">
      <div class="title">日期：</div>
      <div class="date"></div>
    </div>
  </div>
</template>

<script setup lang="ts">
import { ref, onMounted, watch } from 'vue'
import { useLoanStore } from '@/stores/loanStore'
import LoanCal from '@/components/loan/LoanCal.vue'
import LoanResult from '@/components/loan/LoanResult.vue'
import Menu from '../../components/menu/Menu.vue'
import FullScreen from '@/components/full-screen/FullScreen.vue'

import gsap from 'gsap'

import '@/assets/scss/loan/loan.scss'

const nowInputId = ref('')

const loanInputModel = ref({
  floor: 0,
  householdPrice: 0,
  carAmount: 0,
  carPrice: 0,
  total: 0,
  allowance: 'none',
})

const targetMap: Record<string, 'floor' | 'householdPrice' | 'carAmount' | 'carPrice' | 'total'> = {
  floor: 'floor',
  householdPrice: 'householdPrice',
  carAmount: 'carAmount',
  carPrice: 'carPrice',
  total: 'total',
}

const loanStore = useLoanStore()

const checkClick = (id: string) => {
  nowInputId.value = id
}

const keyboardClick = (num: string) => {
  const key = targetMap[nowInputId.value]
  if (!key) return
  const inputNum = num

  const modelTemp = loanInputModel.value[key].toString() + inputNum
  const total = Math.floor(Number(modelTemp))
  loanInputModel.value[key] = total
}

const keyboardBackClick = () => {
  const key = targetMap[nowInputId.value]
  if (!key) return
  const temp = loanInputModel.value[key].toString()
  if (temp.length === 0) return

  loanInputModel.value[key] = Math.floor(Number(temp.slice(0, length - 1)))
}

const submitClick = () => {
  loanStore.loanCalc(loanInputModel.value)

  console.log(loanInputModel.value)
}

const cleanClick = () => {
  loanInputModel.value = {
    floor: 0,
    householdPrice: 0,
    carAmount: 0,
    carPrice: 0,
    total: 0, // total 為 0，LoanResult 顯示 deposit 就會是 0
    allowance: 'none',
  }
  loanStore.cleanAll() // store deposit 保持 100000
}

//總金額
watch(
  () => [loanInputModel.value.householdPrice, loanInputModel.value.carPrice],
  ([newHousehold, newCar]) => {
    loanInputModel.value.total = newHousehold + newCar
  },
)

onMounted(() => {
  const tl = gsap.timeline({ delay: 0.15 })
  tl.fromTo(
    '.loan-view',
    {
      maskPosition: '200% 0',
    },
    {
      maskPosition: '0% 0%',
      duration: 1.5,
      // ease: 'cubic-bezier(0.65, 0.05, 0.36, 1)',
      ease: 'power1.inOut',
    },
  )
})

const handlePrint = () => {
  window.print()
}
</script>

<style scoped></style>
