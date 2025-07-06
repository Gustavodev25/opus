import { createRouter, createWebHistory } from 'vue-router'
import TelaInicialView from '../views/TelaInicialView.vue'

const routes = [
  {
    path: '/',
    name: 'TelaInicial',
    component: TelaInicialView,
    // 1. Defina o título para esta rota específica
    meta: {
      title: 'Início - Opus Agencia' 
    }
  },
  // Exemplo para outra página:
  // {
  //   path: '/contato',
  //   name: 'Contato',
  //   component: ContatoView,
  //   meta: {
  //     title: 'Contato - Nome da Agência'
  //   }
  // }
]

const router = createRouter({
  history: createWebHistory(),
  routes
})

// 2. Esta função é executada antes de cada mudança de rota
router.beforeEach((to, from, next) => {
  // 'to' é a rota de destino.
  // Verifica se a rota de destino tem um título no 'meta'.
  if (to.meta.title) {
    document.title = to.meta.title; // Atualiza o título da aba do navegador
  } else {
    document.title = 'Nome Padrão da Agência'; // Um título padrão caso a rota não tenha um
  }
  next(); // Continua a navegação
})

export default router