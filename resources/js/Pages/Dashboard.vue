<script setup>
import AuthenticatedLayout from "@/Layouts/AuthenticatedLayout.vue";
import AdminLayout from "@/Layouts/AdminLayout.vue";
import { ref, onMounted } from "vue";
import { usePage } from "@inertiajs/vue3";
import { Head } from "@inertiajs/vue3";
import BarChart from "@/Components/BarChart.vue"; // Import the chart component

defineOptions({
    layout: AdminLayout,
});
const props = defineProps({
    applications: Object,
    statusCounts: Object,
    topApplicants: Array,
    chartData: Object, // Receive chartData from the backend
});

// const { props } = usePage();
const statusCounts = ref(props.statusCounts);
const topApplicants = ref(props.topApplicants);
const amountDisbursedChartOptions = ref({
    chart: {
        type: "bar",
    },
    series: [
        {
            name: "Amount Disbursed",
            data: props.amountDisbursedData,
        },
    ],
    xaxis: {
        categories: props.months,
    },
});

const applicantColumns = [
    { name: "name", label: "Name", field: "name" },
    { name: "count", label: "Applications", field: "count" },
];
</script>

<template>
    <Head title="Dashboard" />

    <q-page class="q-pa-md">
        <div class="row q-col-gutter-md">
            <!-- Status Cards -->
            <div
                class="col-12 col-md-3"
                v-for="(count, status) in statusCounts"
                :key="status"
            >
                <q-card>
                    <q-card-section>
                        <div class="text-h6">{{ status }}</div>
                        <div class="text-h4">{{ count }}</div>
                    </q-card-section>
                </q-card>
            </div>
        </div>
        <div class="py-12">
            <div class="mx-auto max-w-7xl sm:px-6 lg:px-8">
                <div class="overflow-hidden bg-white shadow-sm sm:rounded-lg">
                    <div class="p-6 text-gray-900">
                        <h3 class="text-lg font-semibold">Ruangphur Dil dan</h3>
                        <p class="text-sm text-gray-600">
                            District tin a dil dan
                        </p>
                        <BarChart
                            :labels="chartData.labels"
                            :pendingData="chartData.pendingData"
                            :approvedData="chartData.approvedData"
                        />
                    </div>
                </div>
            </div>
        </div>
        <!-- Charts and Tables -->
        <div class="row q-col-gutter-md q-mt-md">
            <div class="col-12 col-md-6">
                <q-card>
                    <q-card-section>
                        <div class="text-h6">Amount Disbursed</div>
                        <q-chart :options="amountDisbursedChartOptions" />
                    </q-card-section>
                </q-card>
            </div>

            <div class="col-12 col-md-6">
                <q-card>
                    <q-card-section>
                        <div class="text-h6">Top 10 Applicants</div>
                        <q-table
                            :rows="topApplicants"
                            :columns="applicantColumns"
                        />
                    </q-card-section>
                </q-card>
            </div>
        </div>
    </q-page>
</template>
