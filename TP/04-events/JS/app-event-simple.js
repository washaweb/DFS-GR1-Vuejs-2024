
import { createApp } from 'https://unpkg.com/vue@3/dist/vue.esm-browser.js'

createApp({
  data() {
    return {
      count: 0,
      text: "John Doe",
      bgColor: 'white',
    }
  },
  // les methodes accessibles dans la vue doivent être déclarées ici :
  methods: {
    onDecrementCount() {
      // dans une déclaration de méthode, on doit faire références aux variables de datas avec le mot-clé 'this'
      this.count--
    }
  }
}).mount('#app')