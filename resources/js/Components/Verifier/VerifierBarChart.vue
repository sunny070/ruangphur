<template>
  <div class="p-4 bg-white rounded-lg shadow">
      <h3 class="text-lg font-semibold mb-4">Applications by District</h3>
      <div class="h-96">
          <canvas ref="chart"></canvas>
      </div>
  </div>
</template>

<script setup>
import { ref, onMounted, watch } from 'vue';
import { Chart } from 'chart.js/auto';

const props = defineProps(['chartData']);
const chart = ref(null);
let chartInstance = null;

onMounted(() => {
  console.log('Chart Data:', props.chartData);
  renderChart();
});

watch(props.chartData, () => {
  renderChart();
});

const renderChart = () => {
  if (chartInstance) {
      chartInstance.destroy(); // Destroy existing chart
  }
  if (chart.value) {
      chartInstance = new Chart(chart.value.getContext('2d'), {
          type: 'bar',
          data: {
              labels: props.chartData.labels || [],
              datasets: [
                  {
                      label: 'Pending Applications',
                      data: props.chartData.pendingData || [],
                      backgroundColor: '#FD7900',
                      borderWidth: 0,
                  },
                  {
                      label: 'Verified Applications',
                      data: props.chartData.verifiedData || [],
                      backgroundColor: '#00AA68',
                      borderWidth: 0,
                  },
              ],
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