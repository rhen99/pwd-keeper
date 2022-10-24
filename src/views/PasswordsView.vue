<script setup>
import { ref } from "vue";
import PasswordListComponent from "../components/PasswordListComponent.vue";
import AddPasswordComponent from "../components/AddPasswordComponent.vue";

const props = defineProps(["userKey"]);

const passwordList = ref(JSON.parse(localStorage.getItem(props.userKey)));

const addPasswordModalOpen = ref(false);

const openPasswordModal = () => (addPasswordModalOpen.value = true);
const closePasswordModal = () => (addPasswordModalOpen.value = false);
const addPassword = (newPassword) => {
  const passwordDoc = JSON.parse(localStorage.getItem(props.userKey));
  if (!passwordDoc) {
    return alert("Passwords not found.");
  }
  const newPasswordDoc = [...passwordDoc, newPassword];

  localStorage.setItem(props.userKey, JSON.stringify(newPasswordDoc));

  passwordList.value = [...newPasswordDoc];
};
const deletePassword = (id) => {
  const passwordDoc = JSON.parse(localStorage.getItem(props.userKey));
  if (!passwordDoc) {
    return alert("Passwords not found.");
  }
  const newPasswordDoc = passwordDoc.filter((doc) => doc.id !== id);

  localStorage.setItem(props.userKey, JSON.stringify(newPasswordDoc));

  passwordList.value = [...newPasswordDoc];
};
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
      @add-password="addPassword"
    />
    <password-list-component
      :passwordList="passwordList"
      v-if="passwordList.length > 0"
      @delete-item="deletePassword"
    />
    <p v-else>No passwords saved.</p>
  </div>
</template>

<style scoped>
.container div:first-child {
  padding: 1.5rem 0;
}
p {
  font-size: 20px;
}
</style>
