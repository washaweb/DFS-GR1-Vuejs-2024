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
    {
      path: '/edit-bill',
      name: 'edit-bill',
      component: () => import('../views/EditBillView.vue')
    },
    {
      path: '/create-bill',
      name: 'create-bill',
      component: () => import('../views/CreateBillView.vue')
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
