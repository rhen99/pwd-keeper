<script setup>
import { reactive } from "vue";
import PwdListComponent from "../components/PwdListComponent.vue";

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
  <pwd-list-component :passwordList="passwordList" />
</template>

<style scoped></style>
