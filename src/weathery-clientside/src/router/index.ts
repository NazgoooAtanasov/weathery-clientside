import { createRouter, createWebHistory, RouteRecordRaw } from 'vue-router';
const Register = () => import('@/components/Auth/Register.vue');
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
  },
  {
    path: '/register',
    component: Register
  }
]

const router = createRouter({
  history: createWebHistory(process.env.BASE_URL),
  routes
})

export default router
