<template>
<div
  class="card w-[23vw] h-[15vw] mx-[5px] flex flex-col justify-center items-center text-center rounded-2xl bg-[#9ca3af] p-4 shadow-lg overflow-hidden"
>   <h1 class="text-xl ">{{ info.year }}</h1>
    <h2 class="">Cause : {{ info.leading_cause }}</h2>
    <h3 class="">Race : {{ info.race_ethnicity }}</h3>
    <h4 class="">Gender : {{ info.sex }}</h4>
</div>
</template>

<script setup>
defineProps({
  info: Object,
})
</script>

<style scoped></style>
