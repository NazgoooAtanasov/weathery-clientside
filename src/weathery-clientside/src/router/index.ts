import { createRouter, createWebHistory, RouteRecordRaw } from 'vue-router';
const Home = () => import('@/components/Home/Home.vue');

const routes: Array<RouteRecordRaw> = [
  {
    path: '/',
    component: Home
  }
]

const router = createRouter({
  history: createWebHistory(process.env.BASE_URL),
  routes
})

export default router
