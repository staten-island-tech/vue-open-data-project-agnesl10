<template>
  <div class="p-6">
    <h2 class="text-3xl text-center p-5">Deaths by Ethnicity in NYC</h2>
    <div class="max-w-2xl mx-auto p-4 bg-white rounded-lg shadow-md">
      <Bar v-if="chartData" :data="chartData" :options="chartOptions" />
    </div>
  </div>
</template>

<script setup>
import { ref, onMounted } from 'vue';
import { Bar } from 'vue-chartjs';
import { Chart as ChartJS, Title, Tooltip, Legend, BarElement, CategoryScale, LinearScale } from 'chart.js';

ChartJS.register(Title, Tooltip, Legend, BarElement, CategoryScale, LinearScale);

const chartData = ref(null);
const chartOptions = {
  responsive: true,
  plugins: {
    legend: {
      display: false
    }
  },
  scales: {
    y: {
      beginAtZero: true
    }
  }
};

const fetchData = async () => {
  try {
    const response = await fetch('https://data.cityofnewyork.us/resource/uvxr-2jwn.json');
    const data = await response.json();
    
    const ethnicityCounts = {};
    data.forEach(entry => {
      const ethnicity = entry.race_ethnicity;
      if (ethnicity) {
        ethnicityCounts[ethnicity] = (ethnicityCounts[ethnicity] || 0) + parseInt(entry.deaths);
      }
    });
    
    const labels = Object.keys(ethnicityCounts);
    const values = Object.values(ethnicityCounts);
    
    chartData.value = {
      labels,
      datasets: [{
        label: 'Number of Deaths',
        data: values,
        backgroundColor: ['#44403c', '#57534e', '#6d6a65', '#78716c', '#8c8580'],
      }]
    };
  } catch (error) {
    console.error('Error fetching data:', error);
  }
};

onMounted(fetchData);
</script>

<style scoped>
div, 
Bar{
  font-family: 'Cabin', sans-serif;
  font-optical-sizing: auto;
  font-weight: 400;
  font-style: normal;
}
</style>
