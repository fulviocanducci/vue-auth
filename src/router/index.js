import Vue from "vue";
import VueRouter from "vue-router";

Vue.use(VueRouter);

import { home, login } from "../pages";

const router = new VueRouter({
  routes: [
    {
      name: "home",
      path: "/",
      component: home,
    },
    {
      name: "login",
      path: "/login",
      component: login,
    },
  ],
});

router.beforeEach((to, from, next) => {
  //   if (to !== "login") {
  //     return next();
  //   }
  next();
});

export default router;
