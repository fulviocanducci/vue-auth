import Vue from "vue";

import routers from "./routers";

Vue.config.productionTip = false;

new Vue({
  router: routers,
  el: "#app",
});
