import { createRouter, createWebHistory, RouteRecordRaw } from "vue-router";
import Slider from "../views/slider.vue";
const routes: Array<RouteRecordRaw> = [
  {
    path: "/",
    name: "slider",
    component: Slider,
  },
  {
    path: "/select",
    name: "select",
    component: () => import("../views/select.vue"),
  },
];

const router = createRouter({
  history: createWebHistory(process.env.BASE_URL),
  routes,
});

export default router;
