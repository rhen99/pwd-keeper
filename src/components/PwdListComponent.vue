<script setup>
import PwdItemComponent from "./PwdItemComponent.vue";
const props = defineProps(["passwordList"]);
</script>

<template>
  <div class="container">
    <pwd-item-component
      v-for="(password, index) in props.passwordList"
      :key="index"
      :passwordItem="password"
    />
  </div>
</template>

<style scoped></style>
