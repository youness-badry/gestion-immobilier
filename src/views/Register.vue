<template>
  <form @submit.prevent="submit">
    <h1 class="h3 mb-3 fw-normal">Please register</h1>
    <input v-model="name" class="form-control" placeholder="Name">
    <input v-model="email" type="email" class="form-control" placeholder="Email">
    <input v-model="password" type="password" class="form-control" placeholder="Password">

    <button class="w-100 btn btn-lg btn-primary" type="submit">Submit</button>
    <p>{{ name }}</p>
  </form>
</template>

<script>
import axios from 'axios'
export default {
  name: "Register",
  data() {
    return {
      name: "",
      email: "",
      password: "",

    };
  },
  methods: {
    submit() {
      const data = {
        name: this.name,
        email: this.email,
        password: this.password,
      };

      axios.post('http://localhost:8080/api/authentication/register',data)
          .then(
              res => {
                console.log(res);
              }
          ).catch(
            err => {
              console.log(err);
            }
      );

      this.$router.push('/login');
    }


  }


};
</script>

