import { createRouter, createWebHistory } from 'vue-router'
// import HomeView from ''
import LoginPage from '../views/LoginPage.vue'
import HomePage from '../views/HomePage.vue'
import RegisterPage from '../views/RegisterPage.vue'
import TopupPage from '../views/TopupPage.vue'
import HistoryPage from '../views/HistoryPage.vue'

const router = createRouter({
  history: createWebHistory(import.meta.env.BASE_URL),
  routes: [
    {
      path: '/',
      name: 'home',
      component: HomePage,
      beforeEnter: () => {
        if (!localStorage.getItem('access_token')) {
          return { name: 'login' }
        }
      }
    },
    {
      path: '/topup/:id',
      name: 'topup',
      component: TopupPage,
      beforeEnter: () => {
        if (!localStorage.getItem('access_token')) {
          return { name: 'login' }
        }
      }
    },
    {
      path: '/login',
      name: 'login',
      component: LoginPage,
      beforeEnter: () => {
        if (localStorage.getItem('access_token')) {
          return { name: 'home' }
        }
      }
    },
    {
      path: '/register',
      name: 'register',
      component: RegisterPage,
      beforeEnter: () => {
        if (localStorage.getItem('access_token')) {
          return { name: 'home' }
        }
      }
    },
    {
      path: '/histories',
      name: 'histories',
      component: HistoryPage,
      beforeEnter: () => {
        if (!localStorage.getItem('access_token')) {
          return { name: 'login' }
        }
      }
    }
  ]
})

export default router
