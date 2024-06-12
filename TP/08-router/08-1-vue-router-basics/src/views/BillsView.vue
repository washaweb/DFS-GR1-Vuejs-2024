<template>
  <div>
    <!-- titre et bouton ajouter -->
    <div class="row border-bottom pb-3 mb-3">
      <div class="col">
        <h1 class="h3"><i class="fa-solid fa-angle-down me-2" />Bills list</h1>
      </div>
      <div class="col text-end">
        <button class="btn btn-outline-primary">
          <i class="fa-solid fa-plus-circle me-2" />
          Ajouter une facture
        </button>
      </div>
    </div>

    <TableList>
      <!-- exemple pour personnaliser les th du tableau TableList : -->
      <!-- <template #thead>
        <th>test</th>
        <th>test</th>
        <th>test</th>
        <th>test</th>
        <th>test</th>
        <th>test</th>
      </template> -->
      <BillTableRow
        v-for="bill in bills"
        :key="bill.id"
        :bill="bill"
        @edit="onEditBill($event)"
        @delete="onDeleteBill($event)"
      />
    </TableList>
    <pre>
      {{ bills }}
    </pre>
  </div>
</template>

<script>
import TableList from '@/components/TableList/TableList.vue'
import BillTableRow from '@/components/TableList/BillTableRow.vue'
import { bills } from '@/seeds/bills.js'
export default {
  components: {
    TableList,
    BillTableRow
  },
  data() {
    return {
      bills
    }
  },
  methods: {
    onEditBill(bill) {
      console.log('edit bill with id: ', bill.id)
    },
    onDeleteBill(bill) {
      // on recherche l'index de la facture à supprimer, et on retourne un nouveau tableau de bills sans celle-ci
      this.bills = this.bills.filter((b) => b.id !== bill.id)
    }
  }
}
</script>

<style scoped></style>
