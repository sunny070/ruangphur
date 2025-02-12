<script setup>
import AuthenticatedLayout from "@/Layouts/AuthenticatedLayout.vue";
import AdminLayout from "@/Layouts/AdminLayout.vue";
import { ref, onMounted, computed } from "vue";
import { usePage } from "@inertiajs/vue3";
import { Head } from "@inertiajs/vue3";
import BarChart from "@/Components/BarChart.vue";
import CircularChart from '@/Components/CircularChart.vue';
import { watch } from "vue";
import VueApexCharts from "vue3-apexcharts";




defineOptions({
    layout: AdminLayout,
});
const props = defineProps({
    applications: Object,
    statusCounts: Object,
    topApplicants: Array,
    chartData: Object,
    labels: Array,
    data: Array,
    totalDisbursed: Number,
    amountDisbursedData: Array,
    months: Array,
});

const statusCards = computed(() => [
    {
        label: "Incoming",
        count: props.statusCounts.Incoming || 0,
        bgClass: "bg-[#FFF7EF]",
        textClass: "text-[#FD7900]",
    },
    {
        label: "Approved",
        count: props.statusCounts.Approved || 0,
        bgClass: "bg-[#EEFFF8]",
        textClass: "text-[#00AA68]",
    },
    {
        label: "Rejected",
        count: props.statusCounts.Rejected || 0,
        bgClass: "bg-[#FFF2F2]",
        textClass: "text-[#FE6262]",
    },
    {
        label: "Pending",
        count: props.statusCounts.Pending || 0,
        bgClass: "bg-[#F2F8FF]",
        textClass: "text-[#404CF1]",
    },
    {
        label: "Amount Disbursed",
        count: `₹${new Intl.NumberFormat('en-IN').format(props.totalDisbursed)}`,
        bgClass: "bg-[#F2FBFF]",
        textClass: "text-[#00AEFF]",
    }
]);
// const statusCounts = ref(props.statusCounts);
const amountDisbursedChartOptions = ref({
    chart: {
        type: 'bar',
        height: 350,
        toolbar: { show: false }
    },
    plotOptions: {
        bar: {
            borderRadius: 4,
            columnWidth: '70%',
        }
    },
    dataLabels: { enabled: false },
    series: [],
    xaxis: {
        categories: [],
        labels: { style: { fontSize: '12px' } }
    },
    yaxis: {
        labels: {
            formatter: (value) => `₹${new Intl.NumberFormat('en-IN').format(value)}`
        }
    },
    colors: ['#00AA68'],
    grid: { borderColor: '#f1f1f1' }
});
watch(() => props.amountDisbursedData, (newData) => {
    if (newData && newData.length) {
        amountDisbursedChartOptions.value.series = [{
            name: "Amount Disbursed",
            data: newData
        }];
        amountDisbursedChartOptions.value.xaxis.categories = props.months;
    }
}, { immediate: true });


const topApplicants = ref(props.topApplicants);
onMounted(() => {
    console.log('Disbursement Data:', props.amountDisbursedData);
    console.log('Months:', props.months);
});
const applicantColumns = [
    { name: "name", label: "Name", field: "name" },
    { name: "count", label: "Applications", field: "count" },
];
</script>

<template>

    <Head title="Dashboard" />

    <q-page class="q-pa-md">
        <!-- Status Cards -->


        <div class="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-5 gap-4">
            <div v-for="status in statusCards" :key="status.label"
                :class="`w-full h-[78px] ${status.bgClass} ${status.textClass} text-center`">
                <h6 class="text-sm sm:text-base font-bold">
                    {{ status.count }}
                </h6>
                <p class="text-xs sm:text-sm">{{ status.label }}</p>
            </div>
        </div>
        <!-- <div class="row q-col-gutter-md">
            <div class="col-12 col-md-3" v-for="(count, status) in statusCounts" :key="status">
                <q-card class="q-pa-md">
                    <q-card-section>
                        <div class="text-h6">{{ status }}</div>
                        <div class="text-h4">{{ count }}</div>
                    </q-card-section>
                </q-card>
            </div>
        </div> -->

        <!-- Charts Section -->
        <div class="row q-col-gutter-md q-mt-md">
            <div class="col-12">
                <q-card class="q-pa-md">
                    <q-card-section>
                        <h3 class="text-lg font-semibold">Ruangphur Dil dan</h3>
                        <p class="text-sm text-gray-600">District tin a dil dan</p>
                        <div class="row q-col-gutter-md">
                            <div class="col-12 col-md-6">
                                <BarChart :labels="chartData.labels" :pendingData="chartData.pendingData"
                                    :approvedData="chartData.approvedData" />
                            </div>
                            <div class="col-12 col-md-6">
                                <CircularChart :labels="chartData.labels" :data="chartData.pendingData" />
                            </div>
                        </div>
                    </q-card-section>
                </q-card>
            </div>
        </div>

        <!-- Amount Disbursed and Top Applicants -->
        <div class="row q-col-gutter-md q-mt-md">
            <div class="col-12">
                <q-card class="q-pa-md">
                    <q-card-section>
                        <div class="text-h6">Monthly Amount Disbursed</div>
                        <div  v-if="amountDisbursedChartOptions.series.length" class="chart-container">
                            <q-chart :options="amountDisbursedChartOptions" :series="amountDisbursedChartOptions.series" />
                        </div>
                        <div v-else class="text-caption text-grey">
                            No disbursement data available
                        </div>
                    </q-card-section>
                </q-card>
            </div>

            <div class="col-12 col-md-6">
                <q-card class="q-pa-md">
                    <q-card-section>
                        <div class="text-h6">Top 10 Applicants</div>
                        <q-table :rows="topApplicants" :columns="applicantColumns" />
                    </q-card-section>
                </q-card>
            </div>
        </div>
    </q-page>
</template>

<style scoped>
/* Custom styles for charts */
.q-card {
    height: 100%;
}

.q-chart,
.BarChart,
.CircularChart {
    height: 200px;
    /* Adjust height as needed */
    width: 50%;
}

.chart-container {
    height: 350px;
    width: 100%;
}


/* Responsive adjustments */
@media (max-width: 768px) {
    .q-card {
        margin-bottom: 16px;
    }

    .q-chart,
    .BarChart,
    .CircularChart {
        height: 200px;
        /* Smaller height for mobile */
    }

    .chart-container {
        height: 250px;
    }
}
</style>