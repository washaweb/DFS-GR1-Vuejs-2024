<template>
  <main>
    <h1>Home</h1>
    <p>{{ toto }}</p>
    <p>{{ count }}</p>
    <p>
      <button class="btn btn-primary" @click="increment">Incrémenter le count du store</button>
    </p>
  </main>
</template>

<script>
import { useCounterStore } from '@/stores/counter.js'
import { mapActions, mapState } from 'pinia'

console.log(useCounterStore)
export default {
  data() {
    return {
      toto: 'test'
    }
  },
  computed: {
    ...mapState(useCounterStore, ['count'])
  },
  methods: {
    ...mapActions(useCounterStore, ['increment'])
  }
}
</script>
