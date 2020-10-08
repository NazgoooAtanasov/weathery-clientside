import { createRouter, createWebHistory, RouteRecordRaw } from 'vue-router';
const Home = () => import('@/components/Home/Home.vue');
const Login = () => import('@/components/Auth/Login.vue');

const routes: Array<RouteRecordRaw> = [
  {
    path: '/',
    component: Home
  },
  {
    path: '/login',
    component: Login
  }
]

const router = createRouter({
  history: createWebHistory(process.env.BASE_URL),
  routes
})

export default router
