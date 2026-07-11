import { createRouter, createWebHistory } from 'vue-router';

const router = createRouter({
  history: createWebHistory(import.meta.env.BASE_URL),
  routes: [
    {
      path: '/',
      name: 'home',
      component: () => import('@/pages/home-page/HomePage.vue'),
    },
    {
      path: '/intro',
      name: 'intro',
      component: () => import('@/pages/intro-page/IntroPage.vue'),
    },
  ],
});

export default router;
