<script setup>
defineProps(["open"]);
const emit = defineEmits(["add-password", "close"]);
import { reactive } from "vue";
const passwordTitle = reactive({
  value: "",
  isActive: false,
});
const newPassword = reactive({
  value: "",
  isActive: false,
});
const confirmPassword = reactive({
  value: "",
  isActive: false,
});
const focusInput = (input) => (input.isActive = true);
const blurInput = (input) =>
  input.value === "" ? (input.isActive = false) : null;
const clearForm = () => {
  passwordTitle.value = "";
  newPassword.value = "";
  confirmPassword.value = "";
  passwordTitle.isActive = false;
  newPassword.isActive = false;
  confirmPassword.isActive = false;
};
const handleSubmit = () => {
  if (!passwordTitle.value || !newPassword.value || !confirmPassword.value) {
    return alert("Fill in all fields.");
  }
  if (newPassword.value !== confirmPassword.value) {
    return alert("Passwords don't match.");
  }
  emit("add-password", {
    id: Math.round(Math.random() * 1000000),
    title: passwordTitle.value,
    password: newPassword.value,
  });
  emit("close");
  clearForm();
};
</script>

<template>
  <div class="modal-backdrop" :class="{ open }">
    <div class="modal">
      <div class="modal-title">
        <h3>Add New Password</h3>
        <a href="#" @click.prevent="() => $emit('close')" class="modal-close"
          >&times;</a
        >
      </div>
      <div class="modal-body">
        <form @submit.prevent="handleSubmit">
          <div class="form-group" :class="{ write: passwordTitle.isActive }">
            <label for="password_title">Enter Title</label>
            <input
              type="text"
              v-model="passwordTitle.value"
              id="password_title"
              @focus="focusInput(passwordTitle)"
              @blur="blurInput(passwordTitle)"
            />
          </div>
          <div class="form-group" :class="{ write: newPassword.isActive }">
            <label for="new_password">Enter Password</label>
            <input
              type="password"
              v-model="newPassword.value"
              id="new_password"
              @focus="focusInput(newPassword)"
              @blur="blurInput(newPassword)"
            />
          </div>
          <div class="form-group" :class="{ write: confirmPassword.isActive }">
            <label for="confirm_password">Re-enter Password</label>
            <input
              type="password"
              v-model="confirmPassword.value"
              id="confirm_password"
              @focus="focusInput(confirmPassword)"
              @blur="blurInput(confirmPassword)"
            />
          </div>
          <div class="form-group">
            <button class="btn btn-primary">Submit Password</button>
          </div>
        </form>
      </div>
    </div>
  </div>
</template>
<style scoped>
.modal-backdrop {
  position: fixed;
  top: 0;
  left: 0;
  width: 100%;
  height: 100vh;
  background-color: hsla(0, 0%, 20%, 0.1);
  display: none;
}
.open {
  display: block;
}
.modal {
  background-color: #fff;
  width: 30%;
  margin: 3rem auto 0 auto;
  padding: 2rem;
  animation: show 300ms ease-in forwards;
}
.modal-title {
  position: relative;
}
.modal-close {
  position: absolute;
  right: 0;
  top: -30%;
  font-size: 30px;
  color: #333;
}
.modal-close:hover {
  color: #e93f3f;
}

.form-group {
  position: relative;
  padding: 1.5rem 0;
}

input {
  width: 100%;
  padding: 0.5rem;
  border: none;
  border-bottom: 1px solid #333;
  font-size: 19px;
}
input:focus {
  outline: none;
}
label {
  position: absolute;
  top: 30%;
  font-size: 17px;
  transition: top 300ms ease-out;
  color: #6e6e6e;
}
.write label {
  font-size: 13px;
  top: 0;
  color: hsl(0, 79%, 58%);
}
.write input {
  border-color: hsl(0, 79%, 58%);
}
@keyframes show {
  from {
    transform: translateY(-20px);
    opacity: 0;
  }
  to {
    transform: translateY(0);
    opacity: 1;
  }
}
</style>
