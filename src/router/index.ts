import { createRouter, createWebHistory, RouteRecordRaw } from "vue-router";
import Slider from "../views/slider.vue";
const routes: Array<RouteRecordRaw> = [
  {
    path: "/",
    name: "slider",
    component: Slider,
  },
];

const router = createRouter({
  history: createWebHistory(process.env.BASE_URL),
  routes,
});

export default router;
