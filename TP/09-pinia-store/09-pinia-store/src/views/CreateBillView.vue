<template>
  <div>
    <h1>Create a new bill</h1>
    <p>{{ count }}</p>
    <p>double: {{ doubleCount }}</p>
    <p><input type="number" class="form-control" v-model="count" /></p>
    <p>
      <button class="btn btn-primary" @click="increment">Incrémenter le count du store</button>
    </p>
  </div>
</template>

<script>
import { useCounterStore } from '@/stores/counter.js'
import { mapActions, mapState, mapWritableState } from 'pinia'
export default {
  computed: {
    ...mapState(useCounterStore, ['doubleCount']),
    ...mapWritableState(useCounterStore, ['count'])
  },
  methods: {
    ...mapActions(useCounterStore, ['increment'])
  }
}
</script>

<style scoped></style>
