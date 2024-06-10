// le script doit être déclaré en module avec type="module" pour que l'import fonctionne

import { createApp } from 'https://unpkg.com/vue@3/dist/vue.esm-browser.js'

createApp({
  data() {
    return {
      title: 'Hello Vue!',
      nom: 'Doe',
      prenom: 'John',
    }
  }
}).mount('#app')