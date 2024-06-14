<template>
  <div class="container py-4">
    <!-- Exercice : ajouter une page billList 
        - ajouter un nouveau template de page BillList.vue dans le dossier src/views
        - configurer un nouvelle route dans le tableau des routes (fichier src/router/index.js)
        - ajouter un bouton qui permet de naviguer vers cette route (en utilisant le composant RouterLink)
        - la valeur to="" du routerLink doit correspondre à la valeur du path que vous aurez défini dans l'objet de la route, ici "/bills", dans le tableau du router (fichier src/router/index.js)
        -->

    <PageHeader />

    <div class="border p-4 rounded-bottom shadow bg-white">
      <RouterView />
    </div>
  </div>
</template>

<script>
import PageHeader from '@/components/PageHeader.vue'
import { RouterView } from 'vue-router'

export default {
  components: {
    PageHeader,
    // RouterLink,
    RouterView
  }
}
</script>

<style scoped></style>
