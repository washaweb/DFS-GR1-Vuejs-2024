import { bills } from '@/seeds/bills.js'
import { defineStore } from 'pinia'
export const useBillStore = defineStore('bill', {
  state: () => ({
    bills,
    bill: null
  }),
  getters: {},
  actions: {
    // récupère une bill dans le store bill au moment de l'édition
    setBill(id) {
      this.bill = this.bills.find((b) => b.id == id)
    },
    // recherche la facture correspondante dans le store, et enregistre les modifications
    onUpdateBill(bill) {
      console.log(bill)
      const i = this.bills.findIndex((b) => b.id === bill.id)
      // je mets à jout les données dans le store bills
      this.bills[i] = { ...bill }
      // je vidange la donnée d'édition d'une bill
      this.bill = null
    },

    onDeleteBill(bill) {
      // on recherche l'index de la facture à supprimer, et on retourne un nouveau tableau de bills sans celle-ci
      this.bills = this.bills.filter((b) => b.id !== bill.id)
    }
  }
})
