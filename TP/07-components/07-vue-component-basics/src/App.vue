<template>
  <div class="container py-5">
    <h1>Hello vue</h1>
    <CounterButton />
    <CounterButton />
    <CounterButton />

    <h2>Liste de billets de blog exemple</h2>

    <!-- Exercice, boucler sur la liste de posts pour afficher le titre et la description de chaque objet contenu dans le tableau posts[] -->
    <BlogPostItem
      v-for="post in posts"
      :key="post.id"
      :title="post.title"
      :description="post.description"
    />

    <!-- exemple avec un type number et pas de description : -->
    <BlogPostItem :title="1234" />

    <h2>Slots de composants</h2>

    <SimpleCard title="Card title example">
      <!-- ici le contenu est récupéré dans la balise slot du composant SimpleCard -->
      <p>Exemple de contenu hérité du parent dans la carte</p>
      <template #footer>
        <!-- ici on vise le slot qui a le nom "footer" -->
        <p>contenu du footer</p>
      </template>
    </SimpleCard>

    <!-- exemple 2 en remplaçant le contenu du slot header -->
    <SimpleCard>
      <!-- pour décrire le slot visé on peut utiliser soit v-slot:name, soit #name -->
      <template v-slot:header>
        <h4 class="text-danger mb-0">Coucou</h4>
      </template>
      <p>test</p>
    </SimpleCard>
  </div>
</template>

<script>
// on importe le composant depuis le dossier src => @
import BlogPostItem from '@/components/BlogPostItem.vue'
import CounterButton from '@/components/CounterButton.vue'
import SimpleCard from '@/components/SimpleCard.vue'

export default {
  // il faut déclarer le composant en tant que dépendance
  components: {
    CounterButton,
    BlogPostItem,
    SimpleCard
  },
  data() {
    return {
      posts: [
        {
          id: 1,
          title: 'Article 1',
          description: 'lorem ipsum fortis...'
        },
        {
          id: 2,
          title: 'Article 2',
          description: 'dolorem ipsum fortis...'
        },
        {
          id: 3,
          title: 'Article 3',
          description: 'autre texte exemple...'
        }
      ]
    }
  }
}
</script>

<style scoped></style>
