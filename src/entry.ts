import Vue from "vue";
import Router from "vue-router";
import app from "./app.vue";

Vue.use(Router);

const routes = [
  { path: "/", component: app },
  { path: "/places/:placeId", component: app },
];

const router = new Router({ routes: routes, mode: "history" });

new Vue({
  el: "#app",
  router: router,
  render: h => h("router-view"),
});
