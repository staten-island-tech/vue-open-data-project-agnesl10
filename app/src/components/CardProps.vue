<template>
  <div
    class="card w-3xs h-3xs rounded-2xl bg-stone-400 items-center text-center m-3 justify-between flex flex-row p-3"
  >
    <h1 class="text-xl">{{ info.year }}</h1>
    <h3>Cause : {{ info.leading_cause }}</h3>
    <h4>Race : {{ info.race_ethnicity }}</h4>
    <h4>Gender : {{ info.sex }}</h4>
  </div>
</template>

<script setup>
defineProps({
  info: Object,
})
</script>

<style scoped></style>
