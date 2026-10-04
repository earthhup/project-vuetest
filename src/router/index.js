import { createRouter, createWebHistory } from 'vue-router'
import HomeView from '../views/HomeView.vue'

const routes = [
  {
    path: '/',
    name: 'home',
    component: HomeView
  },
    {
      path: '/about',
      name: 'about',
      
      component: () => import( '../views/AboutView.vue')
    },
      {
      path: '/contact',
      name: 'contact',
      
      component: () => import( '../views/Contact.vue')
    },
    {
      path: '/grade',
      name: 'grade',
      
      component: () => import( '../views/Grade.vue')
    },
    {
      path: '/gold',
      name: 'gold',
      
      component: () => import( '../views/Gold.vue')
    },
    {
      path: '/product_api',
      name: 'product_api',
      
      component: () => import( '../views/Product_api.vue')
    },
    {
      path: '/users',
      name: 'users',
      
      component: () => import( '../views/Users.vue')
    },
    {
      path: '/product_table',
      name: 'product_table',
      
      component: () => import( '../views/Product_table.vue')
    }
]

const router = createRouter({
  history: createWebHistory(process.env.BASE_URL),
  routes
})

export default router
