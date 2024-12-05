import { createRouter, createWebHistory } from 'vue-router';
import DashboardView from '../components/Dashboard';
import LoginView from '../components/Auth/Login';
import RegisterView from '../components/Auth/Register';

const routes = [
  {
    path: '/',
    name: 'Dashboard',
    component: DashboardView,
  },
  {
    path: '/login',
    name: 'Login',
    component: LoginView,
  },
  {
    path: '/register',
    name: 'Register',
    component: RegisterView,
  },
];

const router = createRouter({
  history: createWebHistory(),
  routes,
});

export default router;
