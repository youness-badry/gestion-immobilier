import Vue from "vue";
import VueRouter from "vue-router";


import Login from "@/views/Login";
import Home from "@/views/Home";
import Register from "@/views/Register";
import UserHome from "@/views/UserHome";

Vue.use(VueRouter);

const routes = [


  {
    path: "/home",
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
  {
    path: "/user",
    name: "UserHome",
    component: UserHome,
  },
];

const router = new VueRouter({
  mode: 'history',
  routes,
});

export default router;
