import { bills } from '@/seeds/bills.js'
import { defineStore } from 'pinia'
export const useBillStore = defineStore('bill', {
  state: () => ({
    bills
  }),
  getters: {},
  actions: {}
})
