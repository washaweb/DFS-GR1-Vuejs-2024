
import { createApp } from 'https://unpkg.com/vue@3/dist/vue.esm-browser.js'

createApp({
  data() {
    return {
      todos: [
        {
          id: 1,
          text: 'Learn JavaScript',
          done: false,
        },
        {
          id: 2,
          text: 'Learn Vue',
          done: true,
        },
        {
          id: 3,
          text: 'Build something awesome',
          done: false,
        },
        {
          id: 4,
          text: 'Profit',
          done: false,
        },
        {
          id: 5,
          text: 'Profit',
          done: false,
        }
      ],
    }
  }
}).mount('#app')