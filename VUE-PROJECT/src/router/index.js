import { createRouter, createWebHistory } from "vue-router";
import Component from "@/views/Chapter1_Component.vue";
import Mustache from "@/views/Chapter2_Mustache.vue";
import DataBinding from "@/views/Chapter3_DataBinding.vue";
import Chapter4 from "@/views/Chapter4.vue";
import Chapter5 from "@/views/Chapter5.vue";

const router = createRouter({
  history: createWebHistory(import.meta.env.BASE_URL),
  routes: [
    {
      path: "/Chapter1_Component",
      component: Component,
    },
    {
      path: "/Chapter2_Mustache",
      component: Mustache,
    },
    {
      path: "/Chapter3_DataBinding",
      component: DataBinding,
    },
    {
      path: "/Chapter4",
      component: Chapter4,
    },
    {
      path: "/Chapter5",
      component: Chapter5,
    },
  ],
});

export default router;
// import export는 같이
