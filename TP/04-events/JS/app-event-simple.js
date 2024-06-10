
import { createApp } from 'https://unpkg.com/vue@3/dist/vue.esm-browser.js'

createApp({
  data() {
    return {
      count: 0,
      text: "Exemple de texte"
    }
  },
  methods: {
    onClickBtn(){

    }
  }
}).mount('#app')