<template>
  <table class="table">
    <thead>
      <tr>
        <!-- pour personnaliser éventuellement l'entête du tableau, on pourra utiliser le slot thead avec <template #thead></template> -->
        <slot name="thead">
          <th>Date</th>
          <th>Description</th>
          <th>Client</th>
          <th class="text-end">Prix HT</th>
          <th class="text-end">Prix TTC</th>
          <th class="text-end">Actions</th>
        </slot>
      </tr>
    </thead>
    <tbody>
      <!-- affichage des lignes de tableau -->
      <slot />
    </tbody>
  </table>
</template>

<script>
export default {}
</script>

<style scoped></style>
