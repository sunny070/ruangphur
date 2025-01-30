<template>
    <div>
      <canvas ref="barChart"></canvas>
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
  
  const barChart = ref(null);
  
  onMounted(() => {
    const ctx = barChart.value.getContext('2d');
  
    new Chart(ctx, {
      type: 'bar',
      data: {
        labels: props.labels, // Use labels from props
        datasets: [
          {
            label: 'Dilna Lut (Pending)',
            data: props.pendingData, // Use pendingData from props
            backgroundColor: '#FFB570', // Color for pending
          },
          {
            label: 'Approved',
            data: props.approvedData, // Use approvedData from props
            backgroundColor: '#00AA68', // Color for approved
          },
        ],
      },
      options: {
        responsive: true,
        scales: {
          x: {
            stacked: true, // Stacked bars
          },
          y: {
            stacked: true, // Stacked bars
            beginAtZero: true,
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