
import { createApp } from 'https://unpkg.com/vue@3/dist/vue.esm-browser.js'

createApp({
  data() {
    return {
      count: 0,
      x: 0,
      y: 0,
      mouseListener: null,
    }
  },
  computed: {},
  // les hooks sont définits chacun dans une fonction qui est appelée automatiquement lorsque l'événement est déclenché, voir la liste des hooks disponibles ici: https://vuejs.org/api/composition-api-lifecycle.html#composition-api-lifecycle-hooks
  mounted() {
    console.log('App mounted!', this.count)
    this.mouseListener = document.addEventListener('mousemove', this.onMouseMove)
  },
  updated() {
    console.log('App updated!', this.count)
  },
  unmounted() {
    console.log('App unmounted!', this.count)
    document.removeEventListener('mousemove', this.onMouseMove)
    this.mouseListener = null
  },
  methods: {
    onMouseMove(e) {
      this.x = e.clientX
      this.y = e.clientY
    }
  }
}).mount('#app')