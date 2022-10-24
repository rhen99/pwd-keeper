<script setup>
import { ref } from "vue";
import HeaderComponent from "./components/HeaderComponent.vue";
import PasswordsView from "./views/PasswordsView.vue";
import LoginView from "./views/LoginView.vue";

const userKey = ref("");

const setUserKey = (key) => {
  if (!localStorage.getItem(key)) {
    if (confirm("This set was not found. Do you want to create a new one?")) {
      localStorage.setItem(key, JSON.stringify([]));
      userKey.value = key;
    } else {
      return;
    }
  } else {
    userKey.value = key;
  }
};
</script>

<template>
  <header-component />
  <passwords-view v-if="userKey !== ''" />
  <login-view @set-user="setUserKey" v-else />
</template>

<style scoped></style>
