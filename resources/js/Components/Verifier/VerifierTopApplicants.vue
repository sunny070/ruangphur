<template>
  <div class="p-4 bg-white rounded-lg shadow">
      <h3 class="text-lg font-semibold mb-4">Top Applicants</h3>
      <div class="h-96">
          <canvas ref="chartCanvas"></canvas>
      </div>
  </div>
</template>

<script setup>
import { ref, onMounted, watch } from 'vue';
import { Chart } from 'chart.js/auto'; // Import Chart with an uppercase C

const props = defineProps(['topApplicants']);
const chartCanvas = ref(null); // Renamed to avoid conflict with Chart
let chartInstance = null; // Store the chart instance

onMounted(() => {
  renderChart();
});

watch(props.topApplicants, () => {
  renderChart();
});

const renderChart = () => {
  if (chartInstance) {
      chartInstance.destroy(); // Destroy existing chart instance
  }
  if (chartCanvas.value) {
      chartInstance = new Chart(chartCanvas.value.getContext('2d'), {
          type: 'bar', // Specify the chart type as 'bar'
          data: {
              labels: props.topApplicants.map(a => a.name),
              datasets: [{
                  label: 'Applications Submitted',
                  data: props.topApplicants.map(a => a.count),
                  backgroundColor: '#00AA68',
                  borderWidth: 0,
              }],
          },
          options: {
              indexAxis: 'y', // Horizontal bar chart
              responsive: true,
              maintainAspectRatio: false,
              scales: {
                  x: { beginAtZero: true },
              },
          },
      });
  }
};
</script>