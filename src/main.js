import Vue from "vue";

import router from "./router";
import "./utils/bootstrap";

Vue.config.productionTip = false;

import store from "./utils/store";

new Vue({
  router,
  store,
  components: {
    "nav-bar": require("./components/NavBar").default,
  },
  el: "#app",
});
