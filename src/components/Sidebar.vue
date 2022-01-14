<template>
  <v-list dense class="ml-n3">
    <v-list-group no-action sub-group value="true">
      <template v-slot:activator>
        <v-list-item-content>
          <v-list-item-title>Gérer annonce</v-list-item-title>
        </v-list-item-content>
      </template>

      <v-list-item to="/annonces">
        <v-list-item-title>Annonces</v-list-item-title>
      </v-list-item>
      <v-list-item to="/poster-annonce">
        <v-list-item-title>Poster une annonce</v-list-item-title>
      </v-list-item>
      <v-list-item to="/mes-annonces">
        <v-list-item-title>Mes annonces</v-list-item-title>
      </v-list-item>
    </v-list-group>
    <v-list-group no-action sub-group value="true">
      <template v-slot:activator>
        <v-list-item-content>
          <v-list-item-title>Gérer contrat</v-list-item-title>
        </v-list-item-content>
      </template>

      <v-list-item to="/annonces-reserves">
        <v-list-item-title>Annonces réservées</v-list-item-title>
      </v-list-item>
      <v-list-item to="/contrats-signes">
        <v-list-item-title>Contrats signés</v-list-item-title>
      </v-list-item>
      <v-list-item to="/liste-contrats">
        <v-list-item-title>Liste des contrats</v-list-item-title>
      </v-list-item>
    </v-list-group>
    <v-list-group no-action sub-group value="true">
      <template v-slot:activator>
        <v-list-item-content>
          <v-list-item-title>Gérer utilisateur</v-list-item-title>
        </v-list-item-content>
      </template>

      <v-list-item to="/liste-utilisateurs">
        <v-list-item-title>Liste des utilisateurs</v-list-item-title>
      </v-list-item>
    </v-list-group>
  </v-list>
</template>

<script>
export default {
  name: "SidebarUser",
  data() {
    return {};
  },
};
</script>

<style scoped></style>
