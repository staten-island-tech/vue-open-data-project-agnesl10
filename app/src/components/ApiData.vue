<template>
  <div>
    <CardProps
      class="container flex flex-wrap justify-around flex-col items-center"
      v-for="(info, index) in deathArray"
      :key="index"
      :info="info"
    ></CardProps>
  </div>
</template>

<script setup>
import { ref } from 'vue'
import { onMounted } from 'vue'
import CardProps from '@/components/CardProps.vue'
const api = `https://data.cityofnewyork.us/resource/jb7j-dtam.json`
const deathArray = ref('')

async function getCauses() {
  try {
    //fetch returns a promise
    const response = await fetch(api)
    //gaurd clause
    if (response.status != 200) {
      throw new Error(response)
    } else {
      const data = await response.json()
      deathArray.value = data
      console.log(deathArray)
    }
  } catch (error) {
    console.log(error)
    alert('sorry, could not find the data')
  }
}
onMounted(() => {
  getCauses()
})
</script>

<style scoped>
.container {
  font-family: 'Cabin', sans-serif;
  font-optical-sizing: auto;
  font-weight: 400;
  font-style: normal;
}
</style>
