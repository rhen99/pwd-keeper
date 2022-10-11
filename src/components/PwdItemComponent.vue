<script setup>
const props = defineProps(["passwordItem"]);
</script>

<template>
  <div>
    <p>
      {{ props.passwordItem.title }}
    </p>
    <a class="btn btn-primary" href="#">Copy</a>
    <a class="btn btn-secondary" href="#">Delete</a>
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
</style>
