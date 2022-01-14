<template>
  <v-row>
    <v-col v-for="(annonce, index) in annonces" :key="index" cols="3">
      <card-annonce :annonce="annonce"></card-annonce>
    </v-col>
  </v-row>
</template>

<script>
import CardAnnonce from "@/components/CardAnnonce";
export default {
  name: "Annonces",
  components: {
    CardAnnonce,
  },
  data() {
    return {
      annonces: [
        {
          id_annonce: 1,
          immobilier: {
            id_immobilier: 1,
            categorie: "Appartement",
            prix: 7250,
          },
          user_post: { id: 4, username: "yassine" },
          user_reserve: { id: 7, username: "anass" },
          titre: "titre 1",
          type: "Location",
          date_annonce: "12/02/2021",
          etat_validation: "valide",
          etat_reservation: "non reserve",
        },
        {
          id_annonce: 2,
          immobilier: {
            id_immobilier: 1,
            categorie: "Appartement",
            prix: 7250,
          },
          user_post: { id: 4, username: "yassine" },
          user_reserve: { id: 7, username: "anass" },
          titre: "titre 1",
          type: "Location",
          date_annonce: "12/02/2021",
          etat_validation: "valide",
          etat_reservation: "non reserve",
        },
        {
          id_annonce: 3,
          immobilier: {
            id_immobilier: 1,
            categorie: "Appartement",
            prix: 7250,
          },
          user_post: { id: 4, username: "yassine" },
          user_reserve: { id: 7, username: "anass" },
          titre: "titre 1",
          type: "Location",
          date_annonce: "12/02/2021",
          etat_validation: "valide",
          etat_reservation: "non reserve",
        },
      ],
    };
  },
};
</script>

<style scoped></style>
