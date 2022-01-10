<template>

      <form @submit.prevent="submit">
        <h1 class="h3 mb-3 fw-normal">Please sign in</h1>
        <input type="email" class="form-control" v-model="email" placeholder="Email">
        <input type="password" class="form-control" v-model="password" placeholder="Password">

        <button class="w-100 btn btn-lg btn-primary" type="submit">Sign in</button>

      </form>




</template>

<script>
import axios from 'axios'
export default {
  name: "Login",
  data() {
    return {
      email: '',
      password: ''
    }
  },
  methods: {
    submit() {
      const data = {
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
    }
  }
};
</script>

<style>


.form-signin {
  width: 100%;
  max-width: 330px;
  padding: 15px;
  margin: auto;
}

.form-signin .checkbox {
  font-weight: 400;
}

.form-signin .form-floating:focus-within {
  z-index: 2;
}

.form-signin input[type="email"] {
  margin-bottom: -1px;
  border-bottom-right-radius: 0;
  border-bottom-left-radius: 0;
}

.form-signin input[type="password"] {
  margin-bottom: 10px;
  border-top-left-radius: 0;
  border-top-right-radius: 0;
}

</style>