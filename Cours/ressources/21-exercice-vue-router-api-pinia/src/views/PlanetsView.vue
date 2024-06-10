<template>
  <main>
    <h1>Les planètes de Star Wars</h1>

    <p><strong>Exercice noté:</strong> personnalisez le rendu de cette page</p>

    <section style="min-height: 540px">
      <div v-if="loading" class="loading my-3">loading...</div>

      <ul v-else class="list-group mb-0">
        <li
          class="list-group-item d-flex justify-content-between align-items-center"
          v-for="planet in planets"
          :key="planet.uid"
        >
          <span>{{ planet.name }}</span>
          <RouterLink class="btn btn-sm btn-primary" :to="`/planet/${planet.uid}`"
            >Show details</RouterLink
          >
        </li>
      </ul>
    </section>

    <nav aria-label="Navigation" class="my-4 d-flex justify-content-between align-items-center">
      <ul class="pagination">
        <!-- previous link -->
        <li class="page-item" v-if="page - 1 > 0">
          <router-link class="page-link" :to="`/planets/${page - 1}`">Page précédente</router-link>
        </li>
        <li v-else class="page-item disabled">
          <a class="page-link">Page précédente</a>
        </li>
        <!-- next link -->
        <li v-if="page + 1 <= totalPages" class="page-item">
          <router-link class="page-link" :to="`/planets/${page + 1}`">Page suivante</router-link>
        </li>
        <li v-else class="page-item disabled">
          <a class="page-link">Page suivante</a>
        </li>
      </ul>

      <div>page {{ page }} sur {{ totalPages }}</div>
    </nav>
  </main>
</template>

<script>
import { RouterLink } from 'vue-router'
export default {
  components: {
    RouterLink
  },
  data() {
    return {
      loading: false,
      limit: 10,
      totalPages: 1,
      planets: [
        // {
        //   uid: 1,
        //   name: 'Tatooine'
        // },
        // {
        //   uid: 2,
        //   name: 'Alderaan'
        // },
        // {
        //   uid: 3,
        //   name: 'Yavin'
        // }
      ]
    }
  },
  computed: {
    page() {
      // définit une valeur par défaut si le paramètre est manquant, sinon retourne le paramètre page de la route (le signe + converti une String qui contient un chiffre en Number)
      return +this.$route.params.page || 1
    }
  },
  mounted() {
    // appel de la méthode qui charge les données au premier chargement du composant
    this.getList(this.page, this.limit)
  },
  methods: {
    async getList(page, limit) {
      // active le chargement
      this.loading = true

      // on appelle l'api de StarWars SWAPi, les paramètre de la route déterminent les informations reçues (voir la documentation de l'API ici https://swapi.tech/documentation)
      const response = await this.$http.get(
        `https://www.swapi.tech/api/planets?page=${page}&limit=${limit}`
      )

      // on reçoit les données
      console.log(response.data)

      // on transfère les données qui nous intéressent dans la data de la vue
      this.planets = [...response.data.results]

      // ici on calcule le nombre total des page en fonction du nombre de résultat reçu et du nombre de résultat par page
      this.totalPages = Math.floor(response.data.total_records / limit) + 1

      // désactive le chargement
      this.loading = false
    }
  },
  // on surveille (watch) le changement de route afin de recharger les données en fonction de la page courante (this.page)
  // la page courante vient d'une computed properties (voir plus haut les computed) basée sur le paramètre de la route this.$route.params.page
  watch: {
    $route() {
      // à chaque changement de route, on recharge les données avec le nouveau paramètre this.page
      this.getList(this.page, this.limit)
    }
  }
}
</script>
