<script setup>
const props = defineProps(["passwordItem"]);
</script>

<template>
  <p>{{ props.passwordItem.title }} - {{ props.passwordItem.password }}</p>
</template>

<style scoped></style>
