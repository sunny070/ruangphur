<template>
  <div>
    <canvas ref="circularChart"></canvas>
  </div>
</template>

<script setup>
import { ref, onMounted } from 'vue';
import Chart from 'chart.js/auto';

// Define props
const props = defineProps({
  labels: Array,
  data: Array,
});

const circularChart = ref(null);

onMounted(() => {
  const ctx = circularChart.value.getContext('2d');

  new Chart(ctx, {
    type: 'pie', // Use a doughnut chart (or 'pie' for a pie chart)
    data: {
      labels: props.labels, // District names
      datasets: [
        {
          label: 'Pending Applications',
          data: props.data, // Pending application counts
          backgroundColor: [
            '#FF6384', '#36A2EB', '#FFCE56', '#4BC0C0', '#9966FF', '#FF9F40', '#C9CBCF', '#FFB570', '#00AA68', '#8A2BE2',
          ], // Colors for each district
          borderColor: '#FFFFFF', // Border color for the segments
          borderWidth: 2, // Border width
        },
      ],
    },
    options: {
      responsive: true,
      plugins: {
        legend: {
          display: true, // Show the legend
          position: 'bottom', // Position the legend at the bottom
        },
        title: {
          display: true,
          text: 'Mitthi Record: Pending Applications by District', // Chart title
        },
      },
    },
  });
});
</script>

<style scoped>
canvas {
  max-width: 100%;
  height: auto;
}
</style>