import { createRouter, createWebHistory } from "vue-router";



const router = createRouter({
  history: createWebHistory(import.meta.env.BASE_URL),
  routes: [
    {
      path: "/login",
      name: "login",
      component: () => import('@/views/LoginView.vue'),
    },
    {
      path: "/",
      name: "home",
      component: () => import('@/views/HomeView.vue'),
    },
    {
      path: "/redirect",
      name: "redirect",
      component: ()=>import('@/views/RedirectView.vue'),

    },
    {
      path: "/dashboard",
      name: "Dashboard",
      component: () => import('@/views/DashboardView.vue'),

    },
    {
      path: "/favorite",
      name: "favorite",
      component: () => import('@/views/favoriteView.vue'),
    },
    {
      path: "/show/:id",
      component: () => import("@/views/showView.vue"),
    },
  ],
  linkActiveClass: 'active-link',
});

export default router;
