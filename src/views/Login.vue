<template>
  <v-row justify="center" align="center">
    <v-container class="py-0" fill-height fluid>
      <v-row class="py-0" align="center" justify="center">
        <v-col>
          <v-card class="mx-auto py-4" max-width="560" outlined>
            <v-card-title class="px-6"> Login </v-card-title>

            <v-card-text class="px-6 py-0">
              <v-form
                ref="loginForm"
                lazy-validation
                @keyup.native.enter="submit"
              >
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
                  label="password"
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
                    Login
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
  name: "Login",
  data() {
    return {
      email: "",
      password: "",
    };
  },
  methods: {
    submit() {
      this.$store.dispatch("login", {
        password: this.password,
        email: this.email,
      });
    },
  },
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
