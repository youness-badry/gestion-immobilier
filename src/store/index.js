import Vue from "vue";
import Vuex from "vuex";
import router from "../router";
Vue.use(Vuex);

export default new Vuex.Store({
  state: {
    user: null,
    annonces: [],
  },
  getters: {
    isAuthenticated(state) {
      return !!state.user;
    },
    isAdmin(state) {
      return state.user.role == "ADMIN";
    },
    getReservedAnnonces(state) {
      return state.annonces.filter((annonce) => annonce.reserved == true);
    },
  },
  mutations: {
    setUser(state, user) {
      state.user = user;
    },
  },
  actions: {
    checkLoggedIn(context) {
      this._vm.$http
        .get("api/authentication/getInfos")
        .then((res) => {
          context.commit("setUser", res.data);
        })
        .catch((err) => {
          console.log(err);
        });
    },
    login(context, data) {
      console.log(context);
      const params = new URLSearchParams();
      params.append("username", data.email);
      params.append("password", data.password);

      const config = {
        headers: {
          "Content-Type": "application/x-www-form-urlencoded",
        },
      };
      this._vm.$http
        .post("api/login", params, config)
        .then((res) => {
          localStorage.setItem("access_token", res.data.access_token);

          const auth = "Bearer " + localStorage.getItem("access_token");
          this._vm.$http.defaults.headers.common["Authorization"] = auth;

          context.dispatch("checkLoggedIn");
          router.push("/home");
        })
        .catch((err) => {
          console.log(err);
        });
    },
  },
  modules: {},
});
