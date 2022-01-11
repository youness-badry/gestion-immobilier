<template>
  <div id="app">
    <v-app id="inspire">
      <v-app id="inspire">
        <v-navigation-drawer
            v-model="drawer"
            app
            clipped
        >
          <v-list dense>
            <v-list-item
                v-for="item in items"
                :key="item.text"
                link
            >
              <v-list-item-action>
                <v-icon>{{ item.icon }}</v-icon>
              </v-list-item-action>
              <v-list-item-content>
                <v-list-item-title>
                  {{ item.text }}
                </v-list-item-title>
              </v-list-item-content>
            </v-list-item>
            <v-list-group
                no-action
                sub-group
                value="true"
            >
              <template v-slot:activator>
                <v-list-item-content>
                  <v-list-item-title>Admin</v-list-item-title>
                </v-list-item-content>
              </template>

              <v-list-item
                  link
              >
                <v-list-item-title>List de</v-list-item-title>
                <v-list-item-icon>
                  <v-icon>mdi-book</v-icon>
                </v-list-item-icon>
              </v-list-item>
            </v-list-group>

          </v-list>
        </v-navigation-drawer>

        <v-app-bar
            app
            clipped-left
            color="red"
            dense
        >
          <v-app-bar-nav-icon @click.stop="drawer = !drawer"></v-app-bar-nav-icon>
          <v-icon
              class="mx-4"
              large
          >
            mdi-home-city
          </v-icon>
          <v-toolbar-title class="mr-12 align-center">
            <span class="title">Immobilier</span>
          </v-toolbar-title>
          <v-spacer></v-spacer>
          <v-row
              align="center"
              style="max-width: 650px"
          >
              youness
          </v-row>
        </v-app-bar>

        <v-main>
          <v-container class="fill-height">
            <router-view />
          </v-container>
        </v-main>
      </v-app>
    </v-app>
  </div>
</template>

<script>

export default {
  name: 'App',
  data: () => ({
    drawer: null,
    items: [
      { icon: 'mdi-trending-up', text: 'Most Popular' },
      { icon: 'mdi-youtube-subscription', text: 'Subscriptions' },
      { icon: 'mdi-history', text: 'History' },
      { icon: 'mdi-playlist-play', text: 'Playlists' },
      { icon: 'mdi-clock', text: 'Watch Later' },
    ],
    items2: [
      { picture: 28, text: 'Joseph' },
      { picture: 38, text: 'Apple' },
      { picture: 48, text: 'Xbox Ahoy' },
      { picture: 58, text: 'Nokia' },
      { picture: 78, text: 'MKBHD' },
    ],
  }),
};
</script>
