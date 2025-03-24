<template>
  <div class="p-6">
    <h2 class="text-3xl text-center p-5">Leading Causes of Death in NYC</h2>
    <div class="max-w-lg mx-auto p-4 bg-white rounded-lg shadow-md">
      <Pie v-if="chartData" :data="chartData" :options="chartOptions" />
    </div>
  </div>
</template>

<script setup>
import { ref, onMounted } from 'vue';
import { Pie } from 'vue-chartjs';
import { Chart as ChartJS, Title, Tooltip, Legend, ArcElement, CategoryScale } from 'chart.js';

ChartJS.register(Title, Tooltip, Legend, ArcElement, CategoryScale);

const chartData = ref(null);
const chartOptions = {
  responsive: true,
  plugins: {
    legend: {
      position: 'top'
    }
  }
};

const fetchData = async () => {
  try {
    const response = await fetch('https://data.cityofnewyork.us/resource/uvxr-2jwn.json');
    const data = await response.json();
    
    const causeCounts = {};
    data.forEach(entry => {
      const cause = entry.leading_cause;
      if (cause) {
        causeCounts[cause] = (causeCounts[cause] || 0) + parseInt(entry.deaths);
      }
    });
    
    const labels = Object.keys(causeCounts).slice(0, 5);
    const values = Object.values(causeCounts).slice(0, 5);
    
    chartData.value = {
      labels,
      datasets: [{
        data: values,
        backgroundColor: ['#1f2937', '#374151', '#4b5563', '#6b7280', '#9ca3af'], // Same colors as Bar chart
      }]
    };
  } catch (error) {
    console.error('Error fetching data:', error);
  }
};

onMounted(fetchData);
</script>

<style scoped>
div * {
  font-family: 'Cabin', sans-serif;
  font-optical-sizing: auto;
  font-weight: 400;
  font-style: normal;
}
</style>
