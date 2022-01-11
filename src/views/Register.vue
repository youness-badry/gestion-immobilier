<template>
  <form @submit.prevent="submit">
    <h1 class="h3 mb-3 fw-normal">Please register</h1>
    <input v-model="userName" class="form-control mb-1" placeholder="Name" >
    <input v-model="email" type="email" class="form-control mb-1" placeholder="Email">
    <input v-model="password" type="password" class="form-control mb-1" placeholder="Password">
    <input v-model="telephone" class="form-control mb-1" placeholder="Telephone">
    <div class="input-group mb-1">
      <span class="input-group-text" id="select">Role</span>
      <select v-model="role" class="form-select" aria-label="Default select" aria-describedby="select">
        <option value="USER">USER</option>
        <option value="ADMIN">ADMIN</option>
      </select>
    </div>
    <input v-model="adresse" class="form-control mb-1" placeholder="Adresse">

    <button class="w-100 btn btn-lg btn-primary" type="submit">Submit</button>

  </form>
</template>

<script>
import axios from 'axios'
export default {
  name: "Register",
  data() {
    return {
      userName: "",
      email: "",
      password: "",
      telephone: "",
      role: "",
      adresse: ""

    };
  },
  methods: {
    submit() {
      const data = {
        userName: this.userName,
        email: this.email,
        password:this.password,
        telephone: this.telephone,
        role: this.role,
        adresse: this.adresse,
      };

      axios.post('api/authentication/register',data)
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

