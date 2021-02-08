<template>
  <div class="home">
    <img alt="vue logo" src="../assets/logo.png" />
    <h1>This is the home page</h1>
    <div>
      <small>Not logged in?</small>
      <button type="button" @click="loginClick()">Login</button>
    </div>
  </div>
</template>

<script>
import { login } from "../utils/auth";
export default {
  name: "Home",
  methods: {
    loginClick() {
      login();
    },
  },
};
</script>