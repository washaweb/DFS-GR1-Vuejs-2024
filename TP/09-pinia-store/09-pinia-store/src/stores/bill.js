import { bills } from '@/seeds/bills.js'
import { defineStore } from 'pinia'
export const useBillStore = defineStore('bill', {
  state: () => ({
    bills
  }),
  getters: {},
  actions: {
    // recherche la facture correspondante dans le store, et enregistre les modifications
    onUpdateBill(bill) {
      console.log(bill)
      const i = this.bills.findIndex((b) => b.id === bill.id)
      this.bills[i] = { ...bill }
    },

    onDeleteBill(bill) {
      // on recherche l'index de la facture à supprimer, et on retourne un nouveau tableau de bills sans celle-ci
      this.bills = this.bills.filter((b) => b.id !== bill.id)
    }
  }
})
