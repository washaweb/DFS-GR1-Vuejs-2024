
import { createApp } from 'https://unpkg.com/vue@3/dist/vue.esm-browser.js'

createApp({
  data() {
    return {
      title: 'Hello Vue!',
      zoo: ['lion', 'girafe', 'elephant', 'tigre', 'crocodile', 'gorille'],
      user: {
        nom: 'Doe',
        prenom: 'John',
        age: 18,
        enfants: ['Paul', 'Marie', 'Jane'],
      },
      imageExemple: 'images/img-1.jpg',
      imageTitle: "Titre de l'image exemple",
      nomDeClasse: 'font-weight-bold'
    }
  }
}).mount('#app')