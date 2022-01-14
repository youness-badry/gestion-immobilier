import Vue from "vue";
import VueRouter from "vue-router";

import Login from "@/views/Login";
import Home from "@/views/Home";
import Register from "@/views/Register";
import UserHome from "@/views/Home";
import Annonces from "@/views/Annonces";
import PostAnnonce from "@/views/PostAnnonce";
import AnnoncesReserves from "@/views/AnnoncesReserves";
import ContratsSignes from "@/views/ContratsSignes";
import MesAnnonces from "@/views/MesAnnonces";
import ListeContrats from "@/views/ListeContrats";
import ListeUtilisateurs from "@/views/ListeUtilisateurs";

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
  {
    path: "/annonces",
    name: "Annonces",
    component: Annonces,
  },
  {
    path: "/poster-annonce",
    name: "PosterAnnonce",
    component: PostAnnonce,
  },
  {
    path: "/mes-annonces",
    name: "MesAnnonces",
    component: MesAnnonces,
  },
  {
    path: "/annonces-reserves",
    name: "AnnoncesReserves",
    component: AnnoncesReserves,
  },
  {
    path: "/contrats-signes",
    name: "ContratsSignes",
    component: ContratsSignes,
  },
  {
    path: "/liste-contrats",
    name: "ListeContrats",
    component: ListeContrats,
  },
  {
    path: "/liste-utilisateurs",
    name: "ListeUtilisateurs",
    component: ListeUtilisateurs,
  },
];

const router = new VueRouter({
  mode: "history",
  routes,
});

export default router;
