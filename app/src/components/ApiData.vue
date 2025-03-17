<template>
  <div>
    <CardProps v-for="info in deathArray" :key="info.leading_cause" :info="info"></CardProps>
  </div>
</template>

<script setup>
import { ref } from 'vue'
import { onMounted } from 'vue'
import CardProps from '@/components/CardProps.vue'
const api = `https://data.cityofnewyork.us/resource/jb7j-dtam.json`
let deathArray = ref([])

async function getCauses() {
  try {
    //fetch returns a promise
    const response = await fetch(api)
    //gaurd clause
    if (response.status != 200) {
      throw new Error(response)
    } else {
      const data = await response.json()
      deathArray = data
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
