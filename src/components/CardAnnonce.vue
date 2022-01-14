<template>
  <v-card class="mx-auto my-12" max-width="374">
    <v-img
      height="250"
      src="https://cdn.vuetifyjs.com/images/cards/cooking.png"
    ></v-img>

    <v-card-title v-text="annonce.titre"></v-card-title>
    <v-card-subtitle>
      Publiée par : {{ annonce.user_post.username }}, le
      {{ annonce.date_annonce }}
    </v-card-subtitle>
    <v-card-text>
      <v-chip class="ma-2" v-text="annonce.immobilier.categorie"> </v-chip>
      <v-chip class="ma-2" v-text="annonce.type"> </v-chip>
    </v-card-text>

    <v-card-actions
      v-if="isCreator(annonce.user_post.id)"
      class="d-flex justify-space-between"
    >
      <v-btn
        v-if="annonce.etat_reservation === 'reserve'"
        color="green lighten-2"
        text
        @click="supprimer"
        outlined
      >
        Confirmer
      </v-btn>
      <v-btn color="red lighten-2" text @click="reserve" outlined>
        Supprimer
      </v-btn>
    </v-card-actions>
    <v-card-actions v-else class="d-flex justify-space-between">
      <div
        v-text="annonce.immobilier.prix + ' DH'"
        class="text-h6 text-primary"
      ></div>
      <v-btn color="deep-purple lighten-2" text @click="reserve" outlined>
        Reserve
      </v-btn>
    </v-card-actions>
  </v-card>
</template>

<script>
export default {
  name: "CardAnnonce",
  props: {
    annonce: {
      type: Object,
      required: true,
    },
  },
  methods: {
    reserve() {
      console.log("Reserving annonce..");
    },
    supprimer() {},
    isCreator(id) {
      return this.$store.state.user.id_user === id;
    },
  },
};
</script>

<style scoped></style>
