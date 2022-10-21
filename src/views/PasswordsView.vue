<script setup>
import { reactive, ref } from "vue";
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

const addPasswordModalOpen = ref(false);

const openPasswordModal = () => (addPasswordModalOpen.value = true);
const closePasswordModal = () => (addPasswordModalOpen.value = false);
</script>

<template>
  <div class="container">
    <div>
      <button class="btn btn-primary" @click="openPasswordModal">
        Add Password
      </button>
    </div>
    <add-password-component
      :open="addPasswordModalOpen"
      @close="closePasswordModal"
    />
    <password-list-component :passwordList="passwordList" />
  </div>
</template>

<style scoped>
.container div:first-child {
  padding: 1.5rem 0;
}
</style>
