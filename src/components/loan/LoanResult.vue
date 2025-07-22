<template>
  <!-- 結果 -->
  <div class="loan-view-result">
    <ul class="loan-result-col">
      <div class="left-box">
        <li class="loan-result-li">
          <div>訂金：</div>
          <div class="nember-box">
            <p class="loan-result-number">{{ state.deposit }}</p>
            <div class="loan-result-text">萬元</div>
          </div>
        </li>
        <li class="loan-result-li">
          <div>簽約金:</div>
          <div class="nember-box">
            <p class="loan-result-number">{{ state.sign }}</p>
            <div class="loan-result-text">萬元</div>
          </div>
        </li>
        <li class="loan-result-li">
          <div>開工款：</div>
          <div class="nember-box">
            <p class="loan-result-number">{{ state.kickOff }}</p>
            <div class="loan-result-text">萬元</div>
          </div>
        </li>
        <li class="loan-result-li">
          <div>工程款：</div>
          <div class="nember-box">
            <p class="loan-result-number">{{ state.construction }}</p>
            <div class="loan-result-text">萬元</div>
          </div>
        </li>
        <li class="loan-result-li">
          <div>契稅申報：</div>
          <div class="nember-box">
            <p class="loan-result-number">{{ state.tax }}</p>
            <div class="loan-result-text">萬元</div>
          </div>
        </li>
        <li class="loan-result-li">
          <div>交屋款：</div>
          <div class="nember-box">
            <p class="loan-result-number">{{ state.delivery }}</p>
            <div class="loan-result-text">萬元</div>
          </div>
        </li>
        <li class="loan-result-li">
          <div>自備金額：</div>
          <div class="nember-box">
            <p class="loan-result-number">{{ state.ownMoney }}</p>
            <div class="loan-result-text">萬元</div>
          </div>
        </li>
      </div>
      <div class="right-box">
        <li class="loan-result-li">
          <div>貸款金額:</div>
          <div class="nember-box">
            <p class="loan-result-number">{{ state.loanMoney }}</p>
            <div class="loan-result-text">萬元</div>
          </div>
        </li>
        <li class="loan-result-li" v-if="is_Allowance">
          <div>前三年寬限期：</div>
          <div class="nember-box">
            <p class="loan-result-number">{{ state.allowancePeriodCost }}</p>
            <div class="loan-result-text">月</div>
          </div>
        </li>
        <li class="loan-result-li">
          <div>本息均攤：</div>
          <div class="nember-box">
            <p class="loan-result-number">{{ all }}</p>
            <div class="loan-result-text">月</div>
          </div>
        </li>
      </div>
    </ul>
  </div>
</template>

<script setup lang="ts">
import { ref, watch, computed, onMounted } from 'vue'
import { useLoanStore } from '@/stores/loanStore'
import '@/assets/scss/live/loan-result.scss'
import { storeToRefs } from 'pinia'

const loanStore = useLoanStore()

const is_Allowance = ref(false)

// const {
//   deposit
// }=storeToRefs(loanStore)

const { state } = storeToRefs(loanStore)

watch(
  () => [state.value.allowancePeriodCost],
  () => {
    if (Number(state.value.allowancePeriodCost.replace(',', '')) > 0) {
      is_Allowance.value = true
    } else {
      is_Allowance.value = false
    }
  },
)

const all = computed(() => {
  return is_Allowance.value
    ? state.value.afterAllowancePeriodCost
    : Number(state.value.monthlyCost.replace(',', ''))
})

onMounted(() => {
  loanStore.cleanAll()
})
</script>

<style scoped></style>
