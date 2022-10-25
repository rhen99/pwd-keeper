<script setup>
import { ref } from "vue";
const props = defineProps(["passwordItem"]);
defineEmits(["delete"]);

const passwordValue = ref(props.passwordItem.password);
const copyPassword = () => {
  navigator.clipboard
    .writeText(passwordValue.value)
    .then(() => alert("Copied to clipbaord."))
    .catch(() => alert("Copy failed."));
};
</script>

<template>
  <div>
    <p>
      {{ passwordItem.title }}
    </p>
    <a class="btn btn-primary" href="#" @click.prevent="copyPassword">Copy</a>
    <a
      class="btn btn-secondary"
      @click.prevent="() => $emit('delete', passwordItem.id)"
      href="#"
      >Delete</a
    >
  </div>
</template>

<style scoped>
div {
  padding: 1rem 0;
  border-bottom: 1px solid #333;
}
p {
  font-size: 20px;
  padding-bottom: 0.8rem;
}
div:last-child {
  border: none;
}
.btn {
  margin: 0 5px;
}
</style>
