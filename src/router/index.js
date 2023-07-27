import { createRouter, createWebHistory } from 'vue-router'

const router = createRouter({
  history: createWebHistory(),
  routes: [
    {
      path: '/play/:name?',
      name: 'play',
      component: () => import('../views/Play/Play.vue')
    },
    {
      path: '/',
      name: 'home',
      component: () => import('../views/Home.vue')
    },
    {
      path: '/signin',
      name: 'signin',
      component: () => import('../views/SignIn/SignIn.vue')
    },
    {
      path: '/signup',
      name: 'signup',
      component: () => import('../views/SignUp/SignUp.vue')
    },

  ]
})

export default router
