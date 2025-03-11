<template>
  <div>
    <h1 v-for="info in data" :key="info.leading_cause" :info="info">{{ info.leading_cause }}</h1>
  </div>
</template>

<script setup>
const deathArray = ref([])
const api = `https://data.cityofnewyork.us/resource/jb7j-dtam.json`
async function getCauses() {
  try {
    //fetch returns a promise
    const response = await fetch(api)
    //gaurd clause
    if (response.status != 200) {
      throw new Error(response)
    } else {
      const data = await response.json()
      console.log(data)
    }
  } catch (error) {
    console.log(error)
    alert('sorry, could not find the data')
  }
}
getCauses()
</script>

<style scoped></style>
