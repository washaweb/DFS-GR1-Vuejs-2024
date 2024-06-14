import { createRouter, createWebHistory } from 'vue-router'
import HomeView from '../views/HomeView.vue'

const router = createRouter({
  linkActiveClass: 'active text-primary border-bottom border-primary',
  linkExactActiveClass: 'active text-primary border-bottom border-primary border-3',
  history: createWebHistory(import.meta.env.BASE_URL),
  routes: [
    {
      path: '/',
      name: 'home',
      component: HomeView
    },
    {
      path: '/bills',
      name: 'bills',
      component: () => import('../views/BillsView.vue')
    },
    // l'ordre de déclaration des routes est important,
    // car c'est l'ordre dans lequel les routes sont testées
    // il faut toujours déclarer les routes les plus générales en premier, et de plus en plus précis
    {
      path: '/edit-bill',
      redirect: '/create-bill'
    },
    // ici on déclare une route dynamique avec un paramètre :id
    {
      path: '/edit-bill/:id',
      props: true, //sert à récupérer les paramètres sous la forme de props dans le composant de la vue
      name: 'edit-bill',
      component: () => import('../views/CreateEditBillView.vue')
    }
    // {
    //   path: '/about',
    //   name: 'about',
    //   // route level code-splitting
    //   // this generates a separate chunk (About.[hash].js) for this route
    //   // which is lazy-loaded when the route is visited.
    //   component: () => import('../views/AboutView.vue')
    // }
  ]
})

export default router
