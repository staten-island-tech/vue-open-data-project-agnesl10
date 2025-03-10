<template>
  <div></div>
</template>

<script setup>
import { Bar } from 'vue-chart.js'
import apiData from '@/components/ApiData'
import {
  Chart as ChartJS,
  Title,
  Tooltip,
  Legend,
  BarElement,
  CategoryScale,
  LinearScale,
} from 'chart.js'

ChartJS.register(Title, Tooltip, Legend, BarElement, CategoryScale, LinearScale)
</script>

<style scoped></style>
