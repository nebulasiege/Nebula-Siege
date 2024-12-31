import { createRouter, createWebHashHistory } from 'vue-router'
import HomeView from '../views/HomeView.vue'
import SignUp from '@/components/SignUp.vue'
import LogIn from '@/components/LogIn.vue'
import AccountView from '../views/AccountView.vue'

const routes = [
  {
    path: '/',
    name: 'home',
    component: HomeView
  },
  {
    path: '/about',
    name: 'about',
    component: () => import(/* webpackChunkName: "about" */ '../views/AboutView.vue')
  },
  {
    path: '/sign-up',
    name: 'SignUp',
    component: SignUp
  },  
  {
    path: '/Account',
    name: 'Account',
    component: AccountView
  }, 
  {
    path: '/Login',
    name: 'Login',
    component: LogIn
  }
]

const router = createRouter({
  history: createWebHashHistory(),
  routes
})

export default router
