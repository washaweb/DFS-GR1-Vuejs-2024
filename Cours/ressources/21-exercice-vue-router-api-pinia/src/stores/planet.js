import { acceptHMRUpdate, defineStore } from 'pinia'

export const usePlanetStore = defineStore('planet', {
  // fonctionne comme le data d'un composant
  state: () => ({
    loading: false,
    planets: [],
    totalPages: 1
  }),

  getters: {
    // fonctionne comme les computed d'un composant
  },

  // fonctionne comme les methods d'un composant
  actions: {
    async getList(page, limit) {
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

      this.loading = false
    }
  }
})

// Permet le rechargement dynamique du store : Assurez-vous d'utiliser la bonne définition du store courant, `usePlanetStore` ici.
if (import.meta.hot) {
  import.meta.hot.accept(acceptHMRUpdate(usePlanetStore, import.meta.hot))
}

/*
// Pour utiliser ce store dans un composant

import { usePlanetStore } from '@/stores/planet'
import { mapStores } from 'pinia'

// le code du composant
export default {
  computed: {
    // on utilise mapStores pour importer le store dans le composant
    ...mapStores(usePlanetStore)
  },

  mounted() {
    console.log(this.planetStore.page) // state du store "planet"
    this.planetStore.getList(1, 10) // action du store "planet"
  }
}
*/
