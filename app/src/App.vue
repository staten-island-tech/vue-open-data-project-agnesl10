<template>
  <div>
    <div class="route items-center text-center">
      <h1 class="header text-5xl text-center p-5">NYC Leading Causes of Death</h1>
      <nav class="text-center items-center">
        <RouterLink
          class="bg-[#9ca3af] text-black px-4 py-2 rounded-md transition duration-300 hover:bg-[#4b5563] items-center m-20"
          to="/"
          >Home</RouterLink
        >
        <RouterLink
          class="bg-[#9ca3af] text-black px-4 py-2 rounded-md transition duration-300 hover:bg-[#4b5563] items-center m-20"
          to="/chartone"
          >Top Causes Chart</RouterLink
        >
        <RouterLink
          class="bg-[#9ca3af] text-black px-4 py-2 rounded-md transition duration-300 hover:bg-[#4b5563] items-center m-20"
          to="/charttwo"
          >Percent of Races Chart</RouterLink
        >
      </nav>
    </div>
    <RouterView />
  </div>
</template>

<script setup>
import { RouterLink, RouterView } from 'vue-router'
</script>

<style scoped>
.route {
  font-family: 'Cabin', sans-serif;
  font-optical-sizing: auto;
  font-weight: 400;
  font-style: normal;
}
.header {
  font-weight: 500;
}
nav {
  font-style: italic;
}
</style>
