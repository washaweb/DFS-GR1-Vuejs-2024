<template>
  <tr v-if="form && form.price">
    <td class="align-middle">
      <button @click="$emit('add')" class="btn text-body-tertiary">
        <i class="fa-solid fa-circle-plus" /><span class="visually-hidden"
          >Ajouter une prestation</span
        >
      </button>
      <button @click="$emit('remove')" class="btn text-danger">
        <i class="fa-solid fa-trash" /><span class="visually-hidden">Supprimer une prestation</span>
      </button>
    </td>
    <td>
      <div class="form-floating">
        <input
          type="text"
          name="prestation"
          id="prestation"
          class="form-control"
          placeholder="Prestation"
          v-model="form.description"
          :class="{ 'is-invalid': !form.description }"
        />
        <label for="prestation" class="form-label">Prestation</label>
      </div>
    </td>
    <td>
      <div class="form-floating">
        <input
          type="number"
          min="0"
          step="1"
          name="quantity"
          id="quantity"
          class="form-control"
          placeholder="quantity"
          v-model="form.qty"
          :class="{ 'is-invalid': !form.qty }"
        />
        <label for="quantity" class="form-label">Quantité</label>
      </div>
    </td>
    <td>
      <div class="form-floating">
        <input
          type="number"
          min="0"
          name="amount-ht"
          id="amount-ht"
          class="form-control"
          placeholder="amount-ht"
          v-model="form.price"
          :class="{ 'is-invalid': !form.price }"
        />
        <label for="amount-ht" class="form-label">Montant U.</label>
      </div>
    </td>
    <td>
      <div class="form-floating">
        <input
          type="number"
          min="0"
          step="1"
          name="total-row"
          id="total-row"
          class="form-control"
          placeholder="total-row"
          disabled
          :value="totalRow"
        />
        <label for="amount-ht" class="form-label">Montant Total</label>
      </div>
    </td>
  </tr>
</template>

<script>
export default {
  props: {
    prestation: {
      type: Object,
      required: true
    }
  },
  emits: ['change', 'add', 'remove'],
  data() {
    return {
      form: null
    }
  },
  mounted() {
    this.form = { ...this.prestation }
  },

  computed: {
    totalRow() {
      // on pourrait pousser jusqu'à afficher une donnée formatée avec numeral.js (voir http://numeraljs.com/)
      return this.form.price * this.form.qty
    }
  },
  watch: {
    form: {
      handler(newPrestation) {
        // console.log(newPrestation)
        this.$emit('change', newPrestation)
      },
      deep: true
    }
    // "form.price": function(newValue) {
    //   this.form.total = newValue * this.form.qty
    // },
  }
}
</script>

<style scoped></style>
