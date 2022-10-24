<script setup>
import PasswordItemComponent from "./PasswordItemComponent.vue";
defineProps(["passwordList"]);
defineEmits(["delete-item"]);
</script>

<template>
  <password-item-component
    @delete="(id) => $emit('delete-item', id)"
    v-for="password in passwordList"
    :key="password.id"
    :passwordItem="password"
  />
</template>

<style scoped></style>
