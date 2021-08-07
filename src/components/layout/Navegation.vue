<template>
  <nav class="navbar navbar-dark bg-dark" >
    <div class="container-fluid">
      <router-link class="navbar-brand" to="/">Empresa de Transporte</router-link>

      <div class="d-grid gap-2 d-md-flex justify-content-md-end">
        <router-link
          class="btn btn-outline-success me-md-2"
          type="button"
          to="./Register"
          >Sign up</router-link
        >

        <router-link class="btn btn-outline-success" type="button" to="./Login"
          >Log in</router-link
        >
      </div>
    </div>
  </nav>
  <nav class="navbar navbar-dark bg-dark" >
    <div class="container-fluid">
      <router-link class="navbar-brand" to="/">Empresa de Transporte</router-link>

      <div class="d-grid gap-2 d-md-flex justify-content-md-end">
        <span class="navbar-brand mb-0 h1">Usuario</span>
       <router-link  class="btn btn-outline-success me-md-2" type="button" to="./Login" @click.prevent="Logout()">Cerrar Sesion</router-link>
      </div>
    </div>
  </nav>
</template>


<script>
import firebase from "firebase";
export default {
  methods: {
    Logout() {
      firebase
        .auth()
        .signOut()
        .then(() => {
          this.$router.push({ name: "Login" });
        });
    },
  },
  created() {
    firebase.auth().onAuthStateChanged((user) => {
      if (user) {
        this.user = user;
      } else {
        this.user = null;
      }
    });
  },
};
</script>

<style scoped></style>
