<template>
  <form @submit.prevent="submit">
    <h1 class="h3 mb-3 fw-normal">Please register</h1>
    <input v-model="userInfos.name" class="form-control" placeholder="Name">
    <input v-model="userInfos.email" type="email" class="form-control" placeholder="Email">
    <input v-model="userInfos.password" type="password" class="form-control" placeholder="Password">

    <button class="w-100 btn btn-lg btn-primary" type="submit">Submit</button>
    <p>{{userInfos.name}}</p>
  </form>
</template>

<script>

export default {
  name: "Register",
  data() {
    return {
      userInfos: {
        name: "",
        email: "",
        password: "",
      },

    }
  },
  methods: {
    submit() {
      console.log(this.userInfos);
    },

  }



};
</script>

