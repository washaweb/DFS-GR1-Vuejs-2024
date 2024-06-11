
import { createApp } from 'https://unpkg.com/vue@3/dist/vue.esm-browser.js'

createApp({
  data() {
    return {
      cart: 0,
      firstname: "John",
      lastname: 'Doe',
    }
  },
  // les computed sont des fonctions qui retournent toujours quelque chose (une string, un number, un array, un objet, un boolean)
  // les computed sont considérées comme des variables dans le template (la vue), c'est à dire qu'il ne faut pas utiliser de parenthèses pour appeler la fonction:
  // on utilisera fullName et pas fullName()
  // Les computed sont automatiquement mises à jour lorsque l'une des variables auxquelle elle fait référence est mise à jour
  computed: {
    fullName() {
      return this.firstname + ' ' + this.lastname
    },
    outOfStock() {
      return this.cart >= 10
    },
    // on peut appeler d'autre computed dans une computed...
    superHero() {
      return this.fullName === 'Peter Parker'
    }
  },
  methods: {
    // contrairement à une computed, la méthode getFullName ne s'exécute que lorsqu'elle est appelée dans le template
    getFullName() {
      // on peut faire référence à une computed property dans le contrôleur, comme à une variable classique:
      return this.fullName
    }
  }
  // les methodes accessibles dans la vue doivent être déclarées ici :
}).mount('#app')