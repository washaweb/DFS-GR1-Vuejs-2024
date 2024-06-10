import { createRouter, createWebHistory } from 'vue-router'
import PlanetsView from '../views/PlanetsView.vue'

const router = createRouter({
  history: createWebHistory(import.meta.env.BASE_URL),
  routes: [
    {
      path: '/',
      redirect: '/planets/1'
    },
    {
      path: '/planets',
      alias: '/planets/:page',
      name: 'home',
      component: PlanetsView
    },
    {
      path: '/planet/:uid',
      name: 'planet',
      props: true,
      component: () => import('../views/PlanetView.vue')
    },
    {
      path: '/characters',
      name: 'characters',
      component: () => import('../views/CharactersView.vue')
    }
  ]
})

export default router
