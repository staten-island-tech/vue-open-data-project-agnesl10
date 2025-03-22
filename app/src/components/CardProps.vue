<template>
    <div
    class="card w-[23vw] h-[12vw] mx-[5px] flex flex-row justify-center items-center text-center rounded-2xl bg-stone-400 p-4 shadow-lg"
  >
    <h1 class="text-xl mb-5">{{ info.year }}</h1>
    <h3 class="mb-5">Cause : {{ info.leading_cause }}</h3>
    <h4 class="mb-5">Race : {{ info.race_ethnicity }}</h4>
    <h4 class="">Gender : {{ info.sex }}</h4>
  </div>
</template>

<script setup>
defineProps({
  info: Object,
})
</script>

<style scoped></style>
