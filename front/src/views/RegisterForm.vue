<template>
  <div class="main-register">
    <div>
      <h1>Registro de Usuario</h1>
    </div>
    <hr />
    <div class="columns is-mobile is-centered">
      <div class="colum is half">
        <div v-if="error !== undefined">
          <div class="notification is-danger is-light">
            {{ error }}
          </div>
        </div>

        <input
          type="text"
          class="input is-link"
          placeholder="nome"
          name="name"
          id="name"
          required
          v-model="name"
        />
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
        <button @click="register" class="button is-success">Cadastrar</button>
      </div>
    </div>
  </div>
</template>

<script>
import axios from "axios";
export default {
  data() {
    return {
      name: "",
      email: "",
      password: "",
      error: undefined,
    };
  },
  methods: {
    register() {
      axios
        .post("http://localhost:3330/user", {
          name: this.name,
          email: this.email,
          password: this.password,
        })
        .then((res) => {
          console.log(res);
          this.$router.push({ name: "Login" });
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