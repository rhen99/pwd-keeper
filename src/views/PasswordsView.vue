<script setup>
import { reactive } from "vue";
import PasswordListComponent from "../components/PasswordListComponent.vue";
import AddPasswordComponent from "../components/AddPasswordComponent.vue";

const passwordList = reactive([
  {
    title: "Password 1",
    password: "12345",
  },
  {
    title: "Password 2",
    password: "12345",
  },
  {
    title: "Password 3",
    password: "12345",
  },
  {
    title: "Password 4",
    password: "12345",
  },
]);
</script>

<template>
  <div class="container">
    <div>
      <button class="btn btn-primary">Add Password</button>
    </div>
    <add-password-component />
    <password-list-component :passwordList="passwordList" />
  </div>
</template>

<style scoped>
.container div:first-child {
  padding: 1.5rem 0;
}
</style>
