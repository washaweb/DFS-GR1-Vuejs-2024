<template>
  <div v-if="bill && bill.id">
    <!-- titre et bouton ajouter -->
    <div class="row border-bottom pb-3 mb-3">
      <div class="col">
        <h1 class="h3"><i class="fa-solid fa-angle-down me-2" />Editer une facture</h1>
      </div>
      <div class="col text-end">
        <button class="btn btn-outline-danger">
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
          />
          <label for="date" class="form-label">Émise le</label>
        </div>
        <div class="form-floating mb-3">
          <input
            type="text"
            name="client"
            id="client"
            class="form-control"
            placeholder="Client"
            v-model="bill.client"
          />
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
      <PrestationTableRow
        v-for="(prestation, index) in bill.prestations"
        :key="index + '-' + prestation.price"
        :prestation="prestation"
      />
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
      <button class="btn btn-outline-primary btn-lg px-5">
        <i class="fa-solid fa-save me-2" />Enregistrer
      </button>
    </p>
    <!-- 1ère manière de récupérer des paramètres de la route : -->
    <pre>{{ $route.params.id }}</pre>
    <pre>{{ id }}</pre>
    <pre>{{ bill }}</pre>
  </div>
</template>

<script>
import TableList from '@/components/TableList/TableList.vue'
import PrestationTableRow from '@/components/TableList/PrestationTableRow.vue'
import { bills } from '@/seeds/bills.js'

export default {
  components: {
    PrestationTableRow,
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
      bill: {}
    }
  },
  mounted() {
    this.bill = bills.find((bill) => bill.id == this.id)
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
