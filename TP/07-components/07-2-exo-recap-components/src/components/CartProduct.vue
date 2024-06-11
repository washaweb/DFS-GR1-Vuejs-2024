<template>
  <div class="card product-item mb-2">
    <img
      :src="item.variants[selectedImage].variantImage"
      class="card-img-top"
      alt="image produit"
    />
    <div class="card-body">
      <div class="d-flex gap-2 mb-2">
        <div
          class="variant-item"
          v-for="(variant, index) in item.variants"
          :key="variant.variantId"
          @click="selectedImage = index"
        >
          <div class="color-variant" :style="{ backgroundColor: variant.variantColor }" />
          <p>Stock : {{ variant.variantQuantity }}</p>
        </div>
      </div>
      <h2 class="mb-0">{{ item.product }}</h2>
      <p>Marque: {{ item.brand }}</p>
      <ul>
        <li v-for="(detail, index) in item.details" :key="index + '-' + detail">{{ detail }}</li>
      </ul>
    </div>
    <div class="card-footer">
      <button @click="$emit('addToCart')" class="btn btn-primary">Ajouter au panier</button>
    </div>
  </div>
</template>

<script>
export default {
  props: {
    item: {
      type: Object,
      required: true
    }
  },
  emits: ['addToCart'],
  data() {
    return {
      selectedImage: 0
    }
  },
  mounted() {
    this.selectedImage = this.item.selectedVariant
  }
}
</script>

<style scoped>
.variant-item {
  width: 100px;
}
.color-variant {
  width: 60px;
  height: 60px;
  border: 3px solid gray;
  cursor: pointer;
}
.color-variant:hover,
.color-variant:focus {
  border-color: red;
}
</style>
