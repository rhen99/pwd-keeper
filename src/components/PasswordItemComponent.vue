<script setup>
defineProps(["passwordItem"]);
defineEmits(["delete"]);
</script>

<template>
  <div>
    <p>
      {{ passwordItem.title }}
    </p>
    <a class="btn btn-primary" href="#">Copy</a>
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
