<template>
  <div>
    <div>
      <p>Email: {{ user.email }}</p>
      <p>Nome: {{ user.name }}</p>
      <p>Role: {{ user.role }}</p>
    </div>
    <div class="update">
      <input type="email" v-model="newUser.email" /><br />
      <input type="text" v-model="newUser.name" /><br />
      <input type="number" v-model="newUser.role" disabled /><br />
      <button @click="updateUser">Atualizar</button>
    </div>
  </div>
</template>
<script>
import axios from "axios";

export default {
  data() {
    return {
      userId: null,
      user: {
        name: "",
        email: "",
        role: 0,
      },
      newUser: {
        name: "",
        email: "",
        role: 0,
      },
    };
  },
  mounted() {
    this.fetchData();
  },

  methods: {
    fetchData() {
      this.userId = this.$route.params.id;
      console.log(this.userId);
      axios
        .get(`http://localhost:3330/user/${this.userId}`)
        .then((response) => {
          this.user = response.data;
        })
        .catch((err) => {
          console.error("Erro ao buscar os dados do Usuario!");
        });
    },
    updateUser() {
      console.log(this.newUser);
      axios
        .put(`http://localhost:3330/user/${this.userId}`, { ...this.newUser })
        .then(() => {
          this.user = { ...this.newUser };
          alert("Usuario atualizado com sucesso!");
        })
        .catch((err) => {
          console.error("Falha ao atualizar user", err);
          alert("Houve um erro ao atualizar");
        });
    },
  },
};
</script>
<style>
</style>