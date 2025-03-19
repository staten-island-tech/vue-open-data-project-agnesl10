<template>
  <div
    class="card w-3xs h-3xs rounded-2xl bg-stone-400 items-center text-center m-3 justify-between flex flex-col p-3"
  >
    <h1 class="text-xl">{{ info.year }}</h1>
    <h2>Cause : {{ info.leading_cause }}</h2>
    <h3>Race : {{ info.race_ethnicity }}</h3>
    <h3>Gender : {{ info.sex }}</h3>
  </div>
</template>

<script setup>
defineProps({
  info: Object,
})
</script>

<style scoped></style>
