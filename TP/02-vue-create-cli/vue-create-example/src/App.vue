<template>
  <main>
    <h1>{{ title }}</h1>
  </main>
</template>

<script>
export default {
  data() {
    return {
      title: 'Hello Vue!'
    }
  }
}
</script>

<style scoped>
h1 {
  color: red;
}
</style>
