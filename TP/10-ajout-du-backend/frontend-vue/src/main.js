import './assets/main.css'

import { createApp } from 'vue'
// on importe pinia
import { createPinia } from 'pinia'
//import du plugin axios
import axiosPlugin from '@/plugins/axios.js'

import App from './App.vue'
import router from './router'
// on déclare une instance de pinia
const pinia = createPinia()

const app = createApp(App)
// on déclare le plugin axios comme dépendance de notre application
app.use(axiosPlugin)
// on injecte le $http dans les stores de pinia
pinia.use(({ store }) => {
  store.$http = app.config.globalProperties.$http
})
app.use(pinia)
app.use(router)

app.mount('#app')
