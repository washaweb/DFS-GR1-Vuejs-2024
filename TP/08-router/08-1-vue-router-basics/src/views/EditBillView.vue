<template>
  <div>
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
            class="form-control"
            placeholder="Facture N°"
          />
          <label for="billnum" class="form-label">Facture N°</label>
        </div>
        <div class="form-floating mb-3">
          <input type="text" name="date" id="date" class="form-control" placeholder="Date" />
          <label for="date" class="form-label">Émise le</label>
        </div>
        <div class="form-floating mb-3">
          <input type="text" name="client" id="client" class="form-control" placeholder="Client" />
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
          />
          <label for="description" class="form-label">Description</label>
        </div>
      </div>
    </div>
    <table class="table"></table>
    <!-- 1ère manière de récupérer des paramètres de la route : -->
    <pre>{{ $route.params.id }}</pre>
    <pre>{{ id }}</pre>
    <pre>{{ bill }}</pre>
  </div>
</template>

<script>
import { bills } from '@/seeds/bills.js'

export default {
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

<style scoped></style>
