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

    <table class="table">
      <thead>
        <tr>
          <th>Date</th>
          <th>Description</th>
          <th>Client</th>
          <th class="text-end">Prix HT</th>
          <th class="text-end">Prix TTC</th>
          <th class="text-end">Actions</th>
        </tr>
      </thead>
      <tbody>
        <tr>
          <td class="align-middle">Date</td>
          <td class="align-middle">Description</td>
          <td class="align-middle">Client</td>
          <td class="align-middle text-end">Prix HT</td>
          <td class="align-middle text-end">Prix TTC</td>
          <td class="align-middle d-flex gap-2 justify-content-end align-items-center">
            <button class="btn btn-outline-danger">
              <i class="fa-solid fa-trash me-2" />Supprimer
            </button>
            <button class="btn btn-outline-info"><i class="fa-solid fa-pen me-2" />Editer</button>
          </td>
        </tr>
      </tbody>
    </table>

    <pre>
      {{ bills }}
    </pre>
  </div>
</template>

<script>
import { bills } from '@/seeds/bills.js'
export default {
  data() {
    return {
      bills
    }
  }
}
</script>

<style scoped></style>
