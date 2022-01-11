<template>
    <Sidebar />

</template>

<script>
import axios from "axios";
import Sidebar from "@/components/Sidebar";
export default {
  name: "UserHome",
  components: { Sidebar },
  created() {

    const config = {
      headers: {
        'Authorization': 'Bearer '+localStorage.getItem('access_token')
      }
    }
    axios.get('http://localhost:8080/api/users/userById?id='+10,config)
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