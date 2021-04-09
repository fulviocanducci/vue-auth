import Vue from "vue";
import VueRouter from "vue-router";

import rule from "./rule";

Vue.use(VueRouter);

import { home, login, profile } from "../pages";

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
    {
      name: "profile",
      path: "/profile",
      component: profile,
    },
  ],
});

router.beforeEach(rule);

export default router;
