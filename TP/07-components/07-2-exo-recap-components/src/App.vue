<template>
  <main class="container py-4">
    <h1>Hello vue</h1>

    <div class="row">
      <div class="col-10 d-flex gap-2 flex-wrap">
        <!-- on boucle sur la liste des produits, pour chaque produit, on aura un composant CartProduct dans lequel on injecte la donnée product, qui sera récupérée à l'intérieur du composant sous la props 'item' -->
        <CartProduct
          @addToCart="cartQty++"
          v-for="product in products"
          :key="product.id"
          :item="product"
        />
      </div>

      <div class="col-2 cart-sticky">
        <CartDisplay class="cart-sticky-card" @onEmptyCart="cartQty = 0" :qty="cartQty" />
      </div>
    </div>
  </main>
</template>

<script>
import CartDisplay from '@/components/CartDisplay.vue'
import CartProduct from '@/components/CartProduct.vue'
import { products } from '@/seeds/products.js'

export default {
  components: {
    CartProduct,
    CartDisplay
  },
  data() {
    return {
      cartQty: 0,
      // c'est comme si on écrivait products: products
      products //ici products vient de la constante exporté depuis @/seeds/products
    }
  }
}
</script>

<style scoped>
.cart-sticky {
  position: relative;
}
.cart-sticky-card {
  position: sticky;
  top: 1rem;
  left: 0;
  right: 0;
}
</style>
