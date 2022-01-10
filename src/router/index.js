import Vue from "vue";
import VueRouter from "vue-router";

import Login from "@/views/Login";
import Home from "@/views/Home";
import Register from "@/views/Register";

Vue.use(VueRouter);

const routes = [

  {
    path: "",
    name: "Home",
    component: Home,
  },
  {
    path: "/login",
    name: "Login",
    component: Login,
  },
  {
    path: "/register",
    name: "Register",
    component: Register,
  },
];

const router = new VueRouter({
  routes,
});

export default router;
