<script setup>
import { ref } from "vue";
const isWriteClass = ref(false);
const inputValue = ref("");
const toggleIsWriteClass = () => (isWriteClass.value = true);
const checkOnBlur = () =>
  inputValue.value === "" ? (isWriteClass.value = false) : null;
</script>

<template>
  <form>
    <div class="form-inline">
      <div class="form-group" :class="{ write: isWriteClass }">
        <label for="login">Enter Login Password</label>
        <input
          type="password"
          id="login"
          v-model="inputValue"
          @focus="toggleIsWriteClass"
          @blur="checkOnBlur"
        />
      </div>
      <div class="form-group">
        <button class="btn btn-primary">Login</button>
      </div>
    </div>
  </form>
</template>

<style scoped>
form {
  width: 70%;
  margin: auto;
}
.form-inline {
  display: flex;
}
.form-group:nth-child(1) {
  position: relative;
  flex: 1;
}
.form-group:nth-child(2) {
  align-self: end;
  margin-left: 10px;
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
  top: -30%;
  color: hsl(0, 79%, 58%);
}
.write input {
  border-color: hsl(0, 79%, 58%);
}
</style>
