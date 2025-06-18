import { createRouter, createWebHistory } from "vue-router";
import Component from "@/views/Component.vue";
import Mustache from "@/views/Mustache.vue";

const router = createRouter({
  history: createWebHistory(import.meta.env.BASE_URL),
  routes: [
    {
      path: "/component",
      component: Component,
    },
    {
      path: "/mustache",
      component: Mustache,
    },
  ],
});

export default router;
// impoert export는 같이
