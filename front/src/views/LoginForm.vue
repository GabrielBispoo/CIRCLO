<template>
  <div class="main-register">
    <div>
      <h1>Login de Usuario</h1>
    </div>
    <hr />
    <div class="columns is-mobile is-centered">
      <div class="colum is half">
        <div v-if="error !== null">
          <div class="notification is-danger is-light">
            {{ error }}
          </div>
        </div>
        <input
          type="email"
          class="input is-link"
          placeholder="email"
          name="email"
          id="email"
          required
          v-model="email"
        />
        <input
          class="input is-link"
          type="password"
          placeholder="senha"
          name="password"
          id="password"
          required
          v-model="password"
        />
        <a href="/registro">Ainda não possui conta?</a><br />
        <button @click="logar" class="button is-success">Logar</button>
      </div>
    </div>
  </div>
</template>

<script>
import axios from "axios";
export default {
  data() {
    return {
      email: "",
      password: "",
      error: null,
      token: undefined,
    };
  },
  methods: {
    logar() {
      axios
        .post("http://localhost:3330/user/login", {
          email: this.email,
          password: this.password,
        })
        .then((res) => {
          console.log(res);
          this.token = res.data.token;
          document.cookie =
            "token=" +
            encodeURIComponent(this.token) +
            "; expires=" +
            new Date(Date.now() + 12 * 60 * 60 * 1000).toUTCString() +
            "; path=/";

          document.cookie =
            "email=" +
            this.email +
            "; expires=" +
            new Date(Date.now() + 12 * 60 * 60 * 1000).toUTCString() +
            "; path=/";
          this.$router.push({ name: "Home" });
        })
        .catch((err) => {
          console.log(err.response.data.error);
          this.error = err.response.data.error;
        });
    },
  },
};
</script>

<style>
</style>