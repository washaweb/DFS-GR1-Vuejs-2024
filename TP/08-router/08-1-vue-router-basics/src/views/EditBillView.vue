<template>
  <div>
    <h1>Edit bill</h1>

    <!-- 1ère manière de récupérer des paramètres de la route : -->
    <pre>{{ $route.params.id }}</pre>
    <pre>{{ id }}</pre>
  </div>
</template>

<script>
export default {
  props: {
    id: {
      type: [String, Number],
      required: true
    }
  }
}
</script>

<style scoped></style>
