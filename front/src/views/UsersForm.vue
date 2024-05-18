<template>
  <div class="main">
    <table class="table">
      <thead>
        <tr>
          <th>Nome</th>
          <th>Email</th>
          <th>Cargo</th>
          <th>Ações</th>
        </tr>
      </thead>
      <tbody v-for="user in users" :key="user.id">
        <td>{{ user.name }}</td>
        <td>{{ user.email }}</td>
        <td>
          <p v-if="user.role == 0" style="color: green">Cliente</p>
          <p v-else-if="user.role == 1" style="color: gold">Admin</p>
          <p v-else-if="user.role !== 1 && user.role !== 0" style="color: red">
            ERR: role {{ user.role }}
          </p>
        </td>
        <td>
          <a
            class="button is-success size"
            @click.prevent="redirectUpdate(user.id)"
            >Update</a
          >
          <button class="button is-danger size" @click="viewModal(user.id)">
            Delete
          </button>
        </td>
      </tbody>
    </table>

    <div :class="{ modal: true, 'is-active': showModal }">
      <div class="modal-background"></div>
      <div class="modal-content">
        <div class="card">
          <header>
            <p class="card-header-title">
              Você realmente quer deletar este usuario?
            </p>
          </header>
          <div class="card-content">
            <div class="content">Esta alteração não poderá ser desfeita...</div>
            <br />
            <time datetime="2024-02-26">20:30 PM - 26 Feb 2024</time>
          </div>
        </div>
        <footer class="card-footer">
          <a href="#" class="card-footer-item" @click="hideModal()">Cancelar</a>
          <a href="#" class="card-footer-item" @click="deleteUser()"
            >Sim, quero deletar!</a
          >
        </footer>
      </div>
      <button
        class="modal-close is-large"
        aria-label="close"
        @click="hideModal()"
      ></button>
    </div>
  </div>
</template>
<script>
import axios from "axios";

export default {
  data() {
    return {
      users: [],
      showModal: false,
      deleteUserId: -1,
    };
  },
  mounted() {
    this.fetchData();
  },

  methods: {
    fetchData() {
      axios
        .get(`http://localhost:3330/user/`)
        .then((response) => {
          this.users = response.data;

          console.log("fetch", this.users);
        })
        .catch((err) => {
          console.error("Erro ao buscar os dados do Usuario!");
        });
    },

    viewModal(id) {
      this.deleteUserId = id;
      this.showModal = true;
    },

    hideModal() {
      this.showModal = false;
    },

    deleteUser() {
      axios
        .delete(`http://localhost:3330/user/${this.deleteUserId}`)
        .then(() => {
          this.users = this.users.filter((u) => u.id !== this.deleteUserId);
          this.hideModal();
          console.log("Usuário deletado com sucesso!");
        })
        .catch((err) => {
          console.error("Erro ao deletar o usuário!");
        });
    },
    redirectUpdate(id) {
      const userId = id;
      const url = "/UserUpdate/" + userId;
      window.location.href = url;
      console.log("OK");
    },
  },
};
</script>
<style>
.main {
}
.cards {
  display: grid;
  grid-template-columns: repeat(auto-fill, minmax(200px, 1fr));
  grid-gap: 20px;
}
.card-custom {
  font-color: white;
  display: grid;
  grid-template-rows: max-content 200px 1fr;
  background: linear-gradient(90deg, rgb(139, 40, 0), rgb(168, 60, 16) 50%);
}

.size {
  width: 70%;
}
</style>