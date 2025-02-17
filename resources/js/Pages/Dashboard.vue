<script setup>
import AuthenticatedLayout from "@/Layouts/AuthenticatedLayout.vue";
import AdminLayout from "@/Layouts/AdminLayout.vue";
import { ref, onMounted, computed } from "vue";
import { usePage } from "@inertiajs/vue3";
import { Head } from "@inertiajs/vue3";
import BarChart from "@/Components/BarChart.vue";
import MonthlyAmountDisbursed from "@/Components/MonthlyAmountDisbursed.vue";
import CircularChart from "@/Components/CircularChart.vue";
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
        count: `₹${new Intl.NumberFormat("en-IN").format(
            props.totalDisbursed
        )}`,
        bgClass: "bg-[#F2FBFF]",
        textClass: "text-[#00AEFF]",
    },
]);
// const statusCounts = ref(props.statusCounts);
const amountDisbursedChartOptions = ref({
    chart: {
        type: "bar",
        height: 350,
        toolbar: { show: false },
    },
    plotOptions: {
        bar: {
            borderRadius: 4,
            columnWidth: "70%",
        },
    },
    dataLabels: { enabled: false },
    series: [],
    xaxis: {
        categories: [],
        labels: { style: { fontSize: "12px" } },
    },
    yaxis: {
        labels: {
            formatter: (value) =>
                `₹${new Intl.NumberFormat("en-IN").format(value)}`,
        },
    },
    colors: ["#00AA68"],
    grid: { borderColor: "#f1f1f1" },
});
watch(
    () => props.amountDisbursedData,
    (newData) => {
        if (newData && newData.length) {
            amountDisbursedChartOptions.value.series = [
                {
                    name: "Amount Disbursed",
                    data: newData,
                },
            ];
            amountDisbursedChartOptions.value.xaxis.categories = props.months;
        }
    },
    { immediate: true }
);

const topApplicants = ref(props.topApplicants);
onMounted(() => {
    console.log("Disbursement Data:", props.amountDisbursedData);
    console.log("Months:", props.months);
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
        <div class="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-5 gap-3 sm:gap-4 mb-6">
            <div
                v-for="status in statusCards"
                :key="status.label"
                :class="`p-3 rounded-lg ${status.bgClass} ${status.textClass} text-center flex flex-col justify-center`"
            >
                <h6 class="text-sm font-bold mb-1">{{ status.count }}</h6>
                <p class="text-xs opacity-90">{{ status.label }}</p>
            </div>
        </div>

        <!-- Charts Section -->
        <div class="grid grid-cols-1 lg:grid-cols-2 gap-4 sm:gap-6 mb-6">
            <div class="chart-container">
                <BarChart
                    :labels="chartData.labels"
                    :pendingData="chartData.pendingData"
                    :approvedData="chartData.approvedData"
                    class="h-full"
                />
            </div>
            <div class="circular-chart-container">
                <CircularChart
                    :labels="chartData.labels"
                    :data="chartData.pendingData"
                    class="h-full"
                />
            </div>
        </div>

        <!-- Amount Disbursed and Top Applicants -->
        <div class="grid grid-cols-1 md:grid-cols-2 gap-4 sm:gap-6">
            <div>
                <MonthlyAmountDisbursed
                    :months="months"
                    :amountDisbursedData="amountDisbursedData"
                    class="h-full"
                />
            </div>
            
            <q-card class="h-full">
                <q-card-section>
                    <h6 class="text-h6 q-mb-4">Top 10 Applicants</h6>
                    <q-table
                        :rows="topApplicants"
                        :columns="applicantColumns"
                        flat
                        bordered
                        hide-pagination
                        :rows-per-page-options="[0]"
                        class="sticky-header-table"
                    />
                </q-card-section>
            </q-card>
        </div>
    </q-page>
</template>

<style scoped>
.chart-container {
    height: 300px;
    min-height: 300px;
}
.circular-chart-container{
    height: 500px;
}

@media (max-width: 768px) {
    .chart-container {
        height: 250px;
        min-height: 250px;
    }
}

.sticky-header-table {
    height: calc(300px - 48px);
}

@media (max-width: 768px) {
    .sticky-header-table {
        height: auto;
        max-width: 100%;
        overflow-x: auto;
    }
}
</style>