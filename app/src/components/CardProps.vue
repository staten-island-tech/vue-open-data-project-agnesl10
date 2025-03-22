<template>
  <div class="container flex flex-wrap gap-4 p-4">
    <div
    class="card card w-full sm:w-1/2 lg:w-1/3 rounded-2xl bg-stone-400 items-center text-center p-4"
  >
    <h1 class="text-xl">{{ info.year }}</h1>
    <h3>Cause : {{ info.leading_cause }}</h3>
    <h4>Race : {{ info.race_ethnicity }}</h4>
    <h4>Gender : {{ info.sex }}</h4>
  </div>
  </div>
</template>

<script setup>
defineProps({
  info: Object,
})
</script>

<style scoped></style>
