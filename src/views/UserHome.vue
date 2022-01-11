<template>
  <v-container >
    <v-row >
    <v-col cols="3"> <CardAnnonce v-for="(annonce, index) in annonces" :key="index" :annonce="annonce"/></v-col>
    <v-col cols="9"> Test</v-col>

  </v-row>
  </v-container>


</template>

<script>
import Sidebar from "@/components/Sidebar";
import CardAnnonce from "@/components/CardAnnonce";
export default {
  name: "UserHome",
  components: {CardAnnonce },
  data() {
    return {
      annonces: [
        { title: 'test 1'},
        { title: 'test 2'},
        { title: 'test 3'},
      ]
    }
  },
  created() {


    this.$http.get('api/users/userById?id='+10)
        .then(
            res => {
              console.log(res);
              this.response = res;
            }
        ).catch(
        err => {
          console.log(err);
        }
    );
  }
};
</script>

<style scoped>

</style>