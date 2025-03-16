<template>
  <div>
    <ApiData v-for="info in data" :key="info.leading_cause" :info="info">
      <h1>{{ info.leading_cause }}</h1></ApiData>
  </div>
</template>

<script setup>
/* import { Bar } from 'vue-chartjs' */
import ApiData from '@/components/ApiData.vue'
/* import {
  Chart as ChartJS,
  Title,
  Tooltip,
  Legend,
  BarElement,
  CategoryScale,
  LinearScale,
} from 'chart.js'

ChartJS.register(Title, Tooltip, Legend, BarElement, CategoryScale, LinearScale) */
</script>

<style scoped></style>
