import axios from 'axios'

const axiosInstance = axios.create({
  baseURL: 'http://localhost:3000',
  headers: {
    'Content-Type': 'application/json'
  }
})

export default {
  install: (app) => {
    // configure the $axios global property
    app.config.globalProperties.$http = { ...axiosInstance }
    // plus tard dans l'applications, on pourra utiliser this.$http.get(...)
  }
}
