<template>
  <div id="app">
    <v-app id="inspire">
      <v-app id="inspire">
        <v-navigation-drawer
          v-if="$store.getters.isAuthenticated"
          v-model="drawer"
          app
          clipped
        >
          <sidebar />
        </v-navigation-drawer>
        <v-app-bar app color="grey lighten-3" dense clipped-left>
          <v-app-bar-nav-icon
            @click.stop="drawer = !drawer"
            v-if="$store.getters.isAuthenticated"
          ></v-app-bar-nav-icon>
          <v-icon class="mx-4" large> mdi-home-city </v-icon>
          <v-toolbar-title class="mr-12 align-center">
            <span class="title">Immobilier</span>
          </v-toolbar-title>
          <v-spacer></v-spacer>
          <v-btn v-if="$store.getters.isAuthenticated">My account</v-btn>
          <v-row v-else align="center" justify="end" style="max-width: 650px">
            <div class="my-2 mr-3">
              <v-btn small color="primary" dark to="/register">
                Register
              </v-btn>
            </div>
            <div class="my-2 mr-3">
              <v-btn small color="primary" dark to="/login"> Login </v-btn>
            </div>
          </v-row>
        </v-app-bar>
        <v-main>
          <v-container>
            <router-view />
          </v-container>
        </v-main>
      </v-app>
    </v-app>
  </div>
</template>

<script>
import Sidebar from "@/components/Sidebar";
export default {
  name: "App",
  components: { Sidebar },

  data: () => ({
    drawer: null,
    items: [
      { icon: "mdi-trending-up", text: "Most Popular" },
      { icon: "mdi-youtube-subscription", text: "Subscriptions" },
      { icon: "mdi-history", text: "History" },
      { icon: "mdi-playlist-play", text: "Playlists" },
      { icon: "mdi-clock", text: "Watch Later" },
    ],
    items2: [
      { picture: 28, text: "Joseph" },
      { picture: 38, text: "Apple" },
      { picture: 48, text: "Xbox Ahoy" },
      { picture: 58, text: "Nokia" },
      { picture: 78, text: "MKBHD" },
    ],
    loginType: "user",
  }),
  created() {
    this.$store.dispatch("checkLoggedIn");
  },
};
</script>
