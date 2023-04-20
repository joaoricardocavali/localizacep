import { createRouter, createWebHistory } from 'vue-router'
// @ts-ignore
import Home from '@/views/Home.vue'
// @ts-ignore
import Buscar from '@/views/Buscar.vue'

const router = createRouter({
  history: createWebHistory(import.meta.env.BASE_URL),
  routes: [
    {
      path: '/',
      name: 'home',
      component: Home
    },
    {
      path: '/buscar',
      name: 'buscar',
      component: Buscar
    }
  ]
})

export default router
