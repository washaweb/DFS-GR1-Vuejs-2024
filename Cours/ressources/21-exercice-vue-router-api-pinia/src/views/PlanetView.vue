<template>
  <div v-if="loading">loading...</div>

  <!-- must wait for data to be loaded by the asyng function getItem() -->
  <article v-if="planet.properties && !loading">
    <h1>{{ planet.properties.name }}</h1>
  </article>

  <p>
    <strong>Exercice noté:</strong> personnalisez cette page pour afficher les données reçues de
    l'API
  </p>

  <pre>
    uid: {{ uid }}
    planet:  {{ planet }}
  </pre>
  <router-link class="btn btn-outline-primary" to="/">Retour à la liste</router-link>
</template>

<script>
export default {
  props: {
    uid: {
      type: [String, Number],
      required: true
    }
  },
  data() {
    return {
      loading: false,
      planet() {
        return {
          properties: {},
          description: 'Default description',
          uid: '-1'
        }
      }
    }
  },
  async mounted() {
    await this.getItem(this.uid)
  },
  methods: {
    async getItem(uid) {
      this.loading = true
      // or
      console.log(this.uid)
      const response = await this.$http.get(`https://www.swapi.tech/api/planets/${uid}`)
      console.log(response.data)
      this.planet = { ...response.data.result }

      this.loading = false
    }
  },
  watch: {
    $route() {
      this.getItem(this.uid)
    }
  }
}
</script>
