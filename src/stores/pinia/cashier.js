import { defineStore } from 'pinia'

export const useCashier = defineStore('cashier', {
  state: () => ({ n: 0 }),
})
