<template>
  <v-row justify="center" align="center">
    <v-container class="py-0" fill-height fluid>
      <v-row class="py-0" align="center" justify="center">
        <v-col>
          <v-card class="mx-auto py-4" max-width="560" outlined>
            <v-card-title class="px-6"> Register </v-card-title>

            <v-card-text class="px-6 py-0">
              <v-form
                ref="registerForm"
                lazy-validation
                @keyup.native.enter="submit"
              >
                <v-text-field
                  v-model="userName"
                  label="Name"
                  name="name"
                  outlined
                />
                <v-text-field
                  v-model="email"
                  label="Email"
                  name="email"
                  outlined
                />
                <v-text-field
                  v-model="password"
                  type="password"
                  name="password"
                  label="Password"
                  outlined
                />
                <v-text-field
                  v-model="telephone"
                  label="Telephone"
                  name="telephone"
                  outlined
                />
                <v-select
                  :items="['admin', 'user']"
                  label="Role"
                  outlined
                ></v-select>
                <v-text-field
                  v-model="adresse"
                  label="Adresse"
                  name="adresse"
                  outlined
                />
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
    </v-container>
  </v-row>
</template>

<script>
export default {
  name: "Register",
  data() {
    return {
      userName: "",
      email: "",
      password: "",
      telephone: "",
      role: "",
      adresse: "",
    };
  },
  methods: {
    submit() {
      const data = {
        userName: this.userName,
        email: this.email,
        password: this.password,
        telephone: this.telephone,
        role: this.role,
        adresse: this.adresse,
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
    },
  },
};
</script>
