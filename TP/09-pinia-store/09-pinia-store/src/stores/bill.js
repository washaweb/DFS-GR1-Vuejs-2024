import { bills } from '@/seeds/bills.js'
import { defineStore } from 'pinia'
// on a installé la librairie uuid avec npm i uuid afin de pouvoir l'utiliser ici
import { v4 as uuidv4 } from 'uuid'

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

    // Créer une nouvelle facture
    onCreateBill(bill) {
      // j'ajoute une nouvelle facture dans le tableau des bills, en ajoutant au passage un id unique grâce à la méthode importée uuidv4() depuis le package uuid
      this.bills.push({ ...bill, id: uuidv4() })
    },

    onDeleteBill(bill) {
      // on recherche l'index de la facture à supprimer, et on retourne un nouveau tableau de bills sans celle-ci
      this.bills = this.bills.filter((b) => b.id !== bill.id)
    }
  }
})
