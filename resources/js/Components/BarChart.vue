<template>
  <div>
    <canvas ref="groupedBarChart"></canvas>
  </div>
</template>

<script setup>
import { ref, onMounted } from 'vue';
import Chart from 'chart.js/auto';

// Define props
const props = defineProps({
  labels: Array,
  pendingData: Array,
  approvedData: Array,
});

const groupedBarChart = ref(null);

onMounted(() => {
  const ctx = groupedBarChart.value.getContext('2d');

  new Chart(ctx, {
    type: 'bar', // Use a bar chart
    data: {
      labels: props.labels, // District names
      datasets: [
        {
          label: 'Pending', // Label for the first set of bars
          data: props.pendingData, // Pending application counts
          backgroundColor: '#FFB570', // Color for pending bars
          borderColor: '#FFB570', // Border color for pending bars
          borderWidth: 1, // Border width
        },
        {
          label: 'Approved', // Label for the second set of bars
          data: props.approvedData, // Approved application counts
          backgroundColor: '#00AA68', // Color for approved bars
          borderColor: '#00AA68', // Border color for approved bars
          borderWidth: 1, // Border width
        },
      ],
    },
    options: {
      responsive: true,
      plugins: {
        legend: {
          display: true, // Show the legend
          position: 'top', // Position the legend at the top
        },
      },
      scales: {
        x: {
          title: {
            display: true,
            text: 'Districts', // X-axis label
          },
          stacked: false, // Do not stack bars
        },
        y: {
          title: {
            display: true,
            text: 'Number of Applications', // Y-axis label
          },
          beginAtZero: true, // Start the Y-axis from 0
          stacked: false, // Do not stack bars
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