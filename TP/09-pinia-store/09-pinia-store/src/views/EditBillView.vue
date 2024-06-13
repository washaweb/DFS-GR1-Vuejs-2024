<template>
  <div v-if="bill && bill.id">
    <!-- titre et bouton ajouter -->
    <div class="row border-bottom pb-3 mb-3">
      <div class="col">
        <h1 class="h3"><i class="fa-solid fa-angle-down me-2" />Editer une facture</h1>
      </div>
      <div class="col text-end">
        <button @click="onDeleteBill(bill.id)" class="btn btn-outline-danger">
          <i class="fa-solid fa-trash me-2" />
          Supprimer la facture
        </button>
      </div>
    </div>

    <div class="row">
      <div class="col-md-4">
        <div class="form-floating mb-3">
          <input
            type="text"
            name="billnum"
            id="billnum"
            v-model="bill.billnum"
            class="form-control"
            placeholder="Facture N°"
            :class="{ 'is-invalid': !bill.billnum }"
          />
          <label for="billnum" class="form-label">Facture N°</label>
        </div>
        <div class="form-floating mb-3">
          <input
            type="date"
            name="date"
            id="date"
            class="form-control"
            placeholder="Date"
            format="yyyy-MM-dd"
            v-model="bill.date"
            :class="{ 'is-invalid': !bill.date }"
          />
          <label for="date" class="form-label">Émise le</label>
        </div>
        <div class="form-floating mb-3">
          <select
            type="text"
            name="client"
            id="client"
            class="form-control"
            placeholder="Client"
            v-model="bill.client"
            :class="{ 'is-invalid': !bill.client }"
          >
            <option value="">Veuillez choisir un client</option>
            <option v-for="client in clients" :value="client" :key="client.idclient">
              {{ client.firstName }} {{ client.lastName }}
            </option>
          </select>
          <label for="client" class="form-label">Client</label>
        </div>
      </div>
      <div class="col-md-8">
        <div class="form-floating mb-3">
          <input
            type="text"
            name="description"
            id="description"
            class="form-control"
            placeholder="Description"
            v-model="bill.description"
            :class="{ 'is-invalid': !bill.description }"
          />
          <label for="description" class="form-label">Description</label>
        </div>
      </div>
    </div>
    <TableList>
      <template #thead>
        <th class="th-actions">Actions</th>
        <th class="th-prestation">Prestation</th>
        <th class="th-quantite">Quantité</th>
        <th class="th-montant-ht">Montant U. HT</th>
        <th class="th-montant-total">Montant Total</th>
      </template>

      <!-- debut prestations -->

      <!-- <PrestationTableRow
        v-for="(prestation, index) in bill.prestations"
        :key="index"
        :prestation="prestation"
        @add="onAddPrestation(index)"
        @remove="onRemovePrestation(index)"
        @change="bill.prestations[index] = { ...$event }"
      /> -->

      <tr v-for="(prestation, index) in bill.prestations" :key="index">
        <td class="align-middle">
          <button @click="onAddPrestation(index)" class="btn text-body-tertiary">
            <i class="fa-solid fa-circle-plus" /><span class="visually-hidden"
              >Ajouter une prestation</span
            >
          </button>
          <button @click="onRemovePrestation(index)" class="btn text-danger">
            <i class="fa-solid fa-trash" /><span class="visually-hidden"
              >Supprimer une prestation</span
            >
          </button>
        </td>
        <td>
          <div class="form-floating">
            <input
              type="text"
              :name="'prestation-' + index"
              :id="'prestation-' + index"
              class="form-control"
              placeholder="Prestation"
              v-model="prestation.description"
              :class="{ 'is-invalid': !prestation.description }"
            />
            <label :for="'prestation-' + index" class="form-label">Prestation</label>
          </div>
        </td>
        <td>
          <div class="form-floating">
            <input
              type="number"
              min="0"
              step="1"
              :name="'quantity-' + index"
              :id="'quantity-' + index"
              class="form-control"
              placeholder="quantity"
              v-model="prestation.qty"
              :class="{ 'is-invalid': !prestation.qty }"
            />
            <label :for="'quantity' + index" class="form-label">Quantité</label>
          </div>
        </td>
        <td>
          <div class="form-floating">
            <input
              type="number"
              min="0"
              :name="'amount-ht' + index"
              :id="'amount-ht' + index"
              class="form-control"
              placeholder="amount-ht"
              v-model="prestation.price"
              :class="{ 'is-invalid': !prestation.price }"
            />
            <label :for="'amount-ht' + index" class="form-label">Montant U.</label>
          </div>
        </td>
        <td>
          <div class="form-floating">
            <input
              type="number"
              min="0"
              step="1"
              name="total-row"
              :id="'total-row' + index"
              class="form-control"
              placeholder="total-row"
              disabled
              :value="totalRow(index)"
            />
            <label :for="'amount-ht' + index" class="form-label">Montant Total</label>
          </div>
        </td>
      </tr>
      <!-- fin prestations -->
      <tr>
        <th colspan="4" class="align-middle text-end">Remises</th>
        <td>
          <div class="form-floating">
            <input
              type="number"
              min="0"
              step="1"
              name="discount"
              id="discount"
              class="form-control"
              placeholder="discount"
              v-model="bill.discount"
            />
            <label for="discount" class="form-label">Remise</label>
          </div>
        </td>
      </tr>
      <tr>
        <th colspan="4" class="align-middle text-end">Déjà payé</th>
        <td>
          <div class="form-floating">
            <input
              type="number"
              min="0"
              step="1"
              name="paid"
              id="paid"
              class="form-control"
              placeholder="paid"
              v-model="bill.paid"
            />
            <label for="paid" class="form-label">Déjà payé</label>
          </div>
        </td>
      </tr>
      <tr>
        <th colspan="4" class="align-middle text-end">Total HT</th>
        <td>
          <div class="form-floating">
            <input
              type="number"
              min="0"
              step="1"
              disabled
              name="global-total-ht"
              id="global-total-ht"
              class="form-control"
              placeholder="global-total-ht"
              v-model="bill.totalHT"
            />
            <label for="global-total-ht" class="form-label">Total HT</label>
          </div>
        </td>
      </tr>
      <tr>
        <th colspan="4" class="align-middle text-end">TVA</th>
        <td>
          <div class="form-floating">
            <input
              type="number"
              min="0"
              step="1"
              name="tva"
              id="tva"
              disabled
              class="form-control"
              placeholder="tva"
              v-model="bill.tva"
            />
            <label for="tva" class="form-label">TVA (20%)</label>
          </div>
        </td>
      </tr>
      <tr>
        <th colspan="4" class="align-middle text-end">Total TTC</th>
        <td>
          <div class="form-floating">
            <input
              type="number"
              min="0"
              step="1"
              name="grand-total-ttc"
              id="grand-total-ttc"
              disabled
              class="form-control"
              v-model="bill.totalTTC"
              placeholder="grand-total-ttc"
            />
            <label for="grand-total-ttc" class="form-label">Total TTC</label>
          </div>
        </td>
      </tr>
    </TableList>

    <p class="text-end">
      <button
        @click="submitForm()"
        :disabled="formInvalid"
        class="btn btn-outline-primary btn-lg px-5"
      >
        <i class="fa-solid fa-save me-2" />Enregistrer
      </button>
    </p>
    <!-- 1ère manière de récupérer des paramètres de la route : -->
    <pre>{{ bill }}</pre>
  </div>
</template>

<script>
// import PrestationTableRow from '@/components/TableList/PrestationTableRow.vue'
import TableList from '@/components/TableList/TableList.vue'
import { bills } from '@/seeds/bills.js'
import { clients } from '@/seeds/clients.js'

const prestationInterface = {
  description: '',
  price: 0,
  qty: 1
}

export default {
  components: {
    // PrestationTableRow,
    TableList
  },
  props: {
    id: {
      type: [String, Number],
      required: true
    }
  },
  data() {
    return {
      bill: {},
      clients
    }
  },
  computed: {
    formInvalid() {
      return !this.bill.client || !this.bill.billnum || !this.bill.date || !this.bill.description
    },
    totalRow() {
      return (index) => {
        const prestation = this.bill.prestations[index]
        return prestation.qty * prestation.price
      }
    }
  },
  mounted() {
    this.bill = bills.find((bill) => bill.id == this.id)
  },
  methods: {
    onAddPrestation(index) {
      // ajout d'une prestation sous l'élément courant dans le tableau
      this.bill.prestations.splice(index, 0, { ...prestationInterface })
    },
    onRemovePrestation(index) {
      console.log(index)
      // suppression d'une prestation
      //
      this.bill.prestations.splice(index, 1)
    },
    updateTotal() {
      this.bill.totalHT = 0
      for (const prestation of this.bill.prestations) {
        this.bill.totalHT += prestation.qty * prestation.price
      }
      this.bill.totalTTC =
        this.bill.totalHT +
        (this.bill.totalHT * this.bill.tva) / 100 -
        this.bill.discount -
        this.bill.paid
    },

    // soumission du formulaire d'édition
    submitForm() {
      console.log(this.bill)
    },
    // suppression de la bill
    onDeleteBill(id) {
      console.log(id)
    }
  },
  watch: {
    'bill.prestations': {
      handler() {
        this.updateTotal()
      },
      deep: true
    },
    'bill.discount'() {
      this.updateTotal()
    },
    'bill.paid'() {
      this.updateTotal()
    }
  }
}
</script>

<style scoped>
.table .th-actions {
  width: 10%;
}
.table .th-prestation {
  width: 44%;
}
.table .th-quantite {
  width: 10%;
}
.table .th-montant-ht,
.table .th-montant-total {
  width: 18%;
}
</style>
