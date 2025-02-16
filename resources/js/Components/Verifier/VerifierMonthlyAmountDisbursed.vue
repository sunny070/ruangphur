<template>
  <div class="p-4 bg-white rounded-lg shadow">
      <h3 class="text-lg font-semibold mb-4">Monthly Amount Disbursed</h3>
      <div class="h-96">
          <canvas ref="chart"></canvas>
      </div>
  </div>
</template>

<script setup>
import { ref, onMounted, watch } from 'vue';
import { Chart } from 'chart.js/auto'; // Import Chart instead of Line

const props = defineProps(['months', 'amountDisbursedData']);
const chart = ref(null);
let chartInstance = null;

onMounted(() => {
  renderChart();
});

watch(props, () => {
  renderChart();
});

const renderChart = () => {
  if (chartInstance) {
      chartInstance.destroy(); // Destroy existing chart instance
  }
  if (chart.value) {
      chartInstance = new Chart(chart.value.getContext('2d'), {
          type: 'line', // Specify the chart type as 'line'
          data: {
              labels: props.months,
              datasets: [{
                  label: 'Amount Disbursed',
                  data: props.amountDisbursedData,
                  borderColor: '#404CF1',
                  backgroundColor: 'rgba(64, 76, 241, 0.2)',
                  tension: 0.4,
                  fill: true,
              }],
          },
          options: {
              responsive: true,
              maintainAspectRatio: false,
              scales: {
                  y: { beginAtZero: true },
              },
          },
      });
  }
};
</script>