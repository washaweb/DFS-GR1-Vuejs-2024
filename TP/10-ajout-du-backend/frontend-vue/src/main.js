import './assets/main.css'

import { createApp } from 'vue'
// on importe pinia
import { createPinia } from 'pinia'

import App from './App.vue'
import router from './router'
// on déclare une instance de pinia
const pinia = createPinia()

const app = createApp(App)
app.use(pinia)
app.use(router)

app.mount('#app')
