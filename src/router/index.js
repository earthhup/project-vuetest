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
    }
]

const router = createRouter({
  history: createWebHistory(process.env.BASE_URL),
  routes
})

export default router
