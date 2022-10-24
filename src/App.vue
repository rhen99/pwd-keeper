<script setup>
import { ref } from "vue";
import HeaderComponent from "./components/HeaderComponent.vue";
import PasswordsView from "./views/PasswordsView.vue";
import LoginView from "./views/LoginView.vue";

const userKey = ref("");

const setUserKey = (key) => (userKey.value = key);
</script>

<template>
  <header-component />
  <passwords-view v-if="userKey !== ''" />
  <login-view @set-user="setUserKey" v-else />
</template>

<style scoped></style>
