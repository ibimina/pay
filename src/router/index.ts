import { createRouter, createWebHistory } from 'vue-router'
import HomeView from '../views/HomeView.vue';
import DashView from '@/views/DashView.vue';


const router = createRouter({
  history: createWebHistory(import.meta.env.BASE_URL),
  routes: [
    {
      path: '/',
      name: 'home',
      component: HomeView
    },
    {
      path: "/dashboard",
      name: "dashboard",
      component: DashView
    }
  ]
})

export default router
