import { createRouter, createWebHashHistory } from 'vue-router'
import Home from '../views/Home.vue'
import Login from '../views/Auth/Login.vue'
import Register from '../views/Auth/Register.vue'
import Dashboard from '../views/Dashboard.vue'

const routes = [
  {
    path: '/',
    name: 'Home',
    component: Home
  },
  {
    path: '/Login',
    name: 'Login',
    component: Login
  },
  {
    path: '/Register',
    name: 'Register',
    component: Register
  },
  {
    path: '/Dashboard',
    name: 'Dashboard',
    component: Dashboard,
    meta:{
      requiresAuth:true
    }
  }
 
]

const router = createRouter({
  history: createWebHashHistory(),
  routes
})



export default router
