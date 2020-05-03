import Vue from "vue";
import VueRouter from "vue-router";

Vue.use(VueRouter);

const routes = [
  {
    path: "/",
    redirect: "Login"
  },
  {
    path: "/Login",
    name: "Login",
    component: () => import("../views/login/Login")
  },
  {
    path: "/Carousel",
    name: "Carousel",
    component: () => import("../components/Carousel")
  },

];

const router = new VueRouter({
  routes
});

export default router;
