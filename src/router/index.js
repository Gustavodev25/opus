import { createRouter, createWebHistory } from 'vue-router'
import TelaInicialView from '../views/TelaInicialView.vue'

const routes = [
  {
    path: '/',
    name: 'TelaInicial',
    component: TelaInicialView
  }
]

const router = createRouter({
  history: createWebHistory(),
  routes
})

export default router
