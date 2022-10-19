<script setup>
import PasswordItemComponent from "./PasswordItemComponent.vue";
const props = defineProps(["passwordList"]);
</script>

<template>
  <password-item-component
    v-for="(password, index) in props.passwordList"
    :key="index"
    :passwordItem="password"
  />
</template>

<style scoped></style>
