import { ref } from 'vue'
import { defineStore } from 'pinia'

interface CalFormVal {
  floor: number
  householdPrice: number
  carAmount: number
  carPrice: number
  total: number,
  allowance: string
}

const toMoneyStyle = (num: number) => {
  return num.toLocaleString('zh-TW', {
    minimumFractionDigits: 0,
    maximumFractionDigits: 0,
  })
}

export const useLoanStore = defineStore('loan', () => {
  const state = ref({
    deposit: 10, // 固定十萬
    sign: '',
    construction: '',
    license: '',
    delivery: '',
    ownMoney: '', //自備款
    loanMoney: '',
    monthlyCost: '',
    kickOff: '', //開工款
    tax: '', //契稅
    interestRepayment: '',
    allowancePeriodCost: '',
    afterAllowancePeriodCost: '',
    salesMan: '',
    allAllowance: '',
  })
  function loanCalc(val: CalFormVal) {

    const depositInWan = 10
    const total = val.total

    // 簽約金 = 總額*8% - 訂金
    const sign = Math.ceil(total * 0.08) - depositInWan

    // 開工款
    const kickOff = Math.ceil(total * 0.02)

    // 交屋款
    const delivery = Math.ceil(total * 0.05)

    // 貸款
    const loanMoney = Math.floor(total * 0.8)

    // 自備款
    const ownMoney = Math.ceil(total * 0.2)

    // 結構完成款
    const license = ownMoney - kickOff - delivery - depositInWan - sign

    state.value.sign = toMoneyStyle(sign)
    state.value.kickOff = toMoneyStyle(kickOff)
    state.value.delivery = toMoneyStyle(delivery)
    state.value.loanMoney = toMoneyStyle(loanMoney)
    state.value.ownMoney = toMoneyStyle(ownMoney)
    state.value.license = toMoneyStyle(license)
  }

  function cleanAll() {

    state.value.sign = ''
    state.value.construction = ''
    state.value.license = ''
    state.value.delivery = ''
    state.value.ownMoney = '' //自備款
    state.value.loanMoney = ''
    state.value.monthlyCost = ''
    state.value.kickOff = '' //開工款
    state.value.tax = '' //契稅
    state.value.interestRepayment = ''
    state.value.allowancePeriodCost = ''
    state.value.afterAllowancePeriodCost = ''
    state.value.salesMan = ''
    state.value.allAllowance = ''
  }

  return { state, loanCalc, cleanAll }
})
