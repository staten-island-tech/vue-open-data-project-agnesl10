<template>
  <div class="card">
    <h1>{{ info.year }}</h1>
    <h2>{{ info.leading_cause }}</h2>
    <h2>{{ info.sex }}</h2>
  </div>
</template>

<script setup>
defineProps({
  info: Object,
})
</script>

<style scoped></style>
