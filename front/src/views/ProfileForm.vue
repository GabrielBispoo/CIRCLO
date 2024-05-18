<template>
  <div>
    <p>Email: {{ user.email }}</p>
    <p>Nome: {{ user.name }}</p>
    <p>Role: {{ user.role }}</p>
  </div>
</template>
<script>
import axios from "axios";
import Cookies from "js-cookie";
export default {
  data() {
    return {
      user: {
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
      const email = Cookies.get("email");
      axios
        .get(`http://localhost:3330/user/${email}`)
        .then((response) => {
          this.user = response.data;
        })
        .catch((err) => {
          console.error("Erro ao buscar os dados do Usuario!");
        });
    },
  },
};
</script>
<style>
</style>