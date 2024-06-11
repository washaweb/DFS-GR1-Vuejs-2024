<template>
  <div>
    <h3>{{ title }}</h3>
    <p>{{ description }}</p>
  </div>
</template>

<script>
export default {
  // props: ['title', 'description']
  props: {
    title: {
      // on accepte plusieurs format de données
      type: [String, Number],
      required: true
    },
    // si la valeur de description est vide, prend la valeur par défaut :
    description: {
      type: String,
      default: 'Pas de description...'
    }
  }
}
</script>

<style scoped></style>
