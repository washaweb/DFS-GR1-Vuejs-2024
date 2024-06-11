
import { createApp } from 'https://unpkg.com/vue@3/dist/vue.esm-browser.js'

createApp({
  data() {
    return {
      cart: 0,
      productImg: 'https://picsum.photos/200/300?image=0',
    }
  },
  // les methodes accessibles dans la vue doivent être déclarées ici :
}).mount('#app')