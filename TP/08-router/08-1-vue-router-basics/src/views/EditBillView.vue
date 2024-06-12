<template>
  <div>
    <h1>Edit bill</h1>

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
