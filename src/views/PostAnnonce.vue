<template>
  <v-row class="py-0" align="center" justify="center">
    <v-col>
      <v-card class="mx-auto py-4" max-width="560" outlined>
        <v-card-title class="px-6">Poster annonce </v-card-title>

        <v-card-text class="px-6 py-0">
          <v-form
            ref="registerForm"
            lazy-validation
            @keyup.native.enter="submit"
          >
            <v-text-field v-model="titre" label="Titre" name="titre" outlined />
            <v-select
              v-model="categorie"
              :items="['Maison', 'Villa', 'Appartement']"
              label="Categorie"
              outlined
            ></v-select>
            <v-select
              v-model="type"
              :items="['Location', 'Vente']"
              label="Type"
              outlined
            ></v-select>
            <v-text-field v-model="prix" label="Prix" name="prix" outlined />
          </v-form>
        </v-card-text>
        <v-card-actions class="px-6">
          <v-row>
            <v-col>
              <v-btn
                class="mt-4 mr-4"
                block
                large
                color="primary"
                @click="submit"
              >
                Submit
              </v-btn>
            </v-col>
          </v-row>
        </v-card-actions>
      </v-card>
    </v-col>
  </v-row>
</template>

<script>
export default {
  name: "PostAnnonce",
  data() {
    return {
      titre: "",
      categorie: "",
      prix: 0,
      type: "",
    };
  },
  methods: {
    /*submit() {
      const data = {
        titre: this.titre,
        categorie: this.categorie,
        prix: this.prix,
        type: this.type,
      };

      this.$http
        .post("api/authentication/register", data)
        .then((res) => {
          console.log(res);
          this.$router.push("/login");
        })
        .catch((err) => {
          console.log(err);
        });
    },*/
  },
};
</script>

<style scoped></style>
