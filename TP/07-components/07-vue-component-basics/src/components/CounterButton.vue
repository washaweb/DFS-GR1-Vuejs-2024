<template>
  <div>
    <button class="btn btn-primary mb-2" @click="count++">Compteur: {{ count }}</button>
  </div>
</template>

<script>
export default {
  data() {
    return {
      count: 0
    }
  }
}
</script>

<style scoped></style>
