<template>
  <div>
    <CardProps class="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-5 gap-4 p-4" v-for="(info, index) in deathArray" :key="index" :info="info"></CardProps>
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

<style scoped></style>
