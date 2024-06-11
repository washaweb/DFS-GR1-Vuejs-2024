<template>
  <div class="card">
    <div class="card-header">Panier ({{ qty }})</div>
    <div class="card-body">
      <button @click="$emit('onEmptyCart')" class="btn btn-danger">Vider le panier</button>
    </div>
  </div>
</template>

<script>
export default {
  props: {
    qty: {
      type: Number,
      default: 0
    }
  },
  emits: ['onEmptyCart']
}
</script>

<style lang="scss" scoped></style>
