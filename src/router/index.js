import { createRouter, createWebHistory } from 'vue-router';
import routes from './routes.js';

const router = createRouter({
  history: createWebHistory('/Cyberpank/'),
  routes,
});

export default router;