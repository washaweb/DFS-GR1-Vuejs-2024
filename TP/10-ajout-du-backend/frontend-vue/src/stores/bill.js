import { bills } from '@/seeds/bills.js'
import { defineStore } from 'pinia'
// on a installé la librairie uuid avec npm i uuid afin de pouvoir l'utiliser ici
export const useBillStore = defineStore('bill', {
  state: () => ({
    bills,
    bill: null
  }),
  getters: {},
  actions: {
    // récupère les données depuis l'API : fonction asynchrone
    async getAllBills() {
      const response = await this.$http.get('/bills')
      this.bills = response.data
    },

    // récupère une bill dans le store bill au moment de l'édition
    async setBill(id) {
      // si l'id est égal à -1, cela veut dire que l'on veut créer une nouvelle facture, donc on ne récupère pas de facture dans le store bill
      if (id == '-1') {
        this.bill = {
          id: -1,
          billnum: '',
          description: '',
          date: '',
          client: {},
          prestations: [
            {
              description: '',
              qty: 1,
              price: 600.0
            }
          ],
          discount: 0,
          paid: 0,
          totalHT: 0,
          tva: 20,
          totalTTC: 0
        }
      } else {
        // si je modifie une bill, je fais un appel à l"API pour récupérer les données :
        const response = await this.$http.get('/bills/' + id)
        this.bill = response.data
      }
    },
    // recherche la facture correspondante dans le store, et enregistre les modifications
    async onUpdateBill(bill) {
      const response = await this.$http.patch('/bills/' + bill.id, bill)
      console.log(response.data)
      // je vidange la donnée d'édition d'une bill
      this.bill = null
      await this.getAllBills()
    },

    // Créer une nouvelle facture
    async onCreateBill(bill) {
      // j'ajoute une nouvelle facture dans le tableau des bills, en ajoutant au passage un id unique grâce à la méthode importée uuidv4() depuis le package uuid
      const response = await this.$http.post('/bills', bill)
      console.log(response.data)
      this.bill = null
      await this.getAllBills()
    },

    async onDeleteBill(bill) {
      // on recherche l'index de la facture à supprimer, et on retourne un nouveau tableau de bills sans celle-ci
      const response = await this.$http.delete('/bills/' + bill.id)
      console.log(response.data)
      // pour raffraichir la liste des factures, je relance la méthode getAllBills()
      await this.getAllBills()
    }
  }
})
