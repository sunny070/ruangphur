<template>
    <AdminLayout>
        <div class="p-6">
            <h1 class="text-2xl font-bold mb-6">Verifier Dashboard</h1>

            <!-- Status Counts -->
            <div class="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-5 gap-4">
            <div v-for="status in statusCards" :key="status.label"
                :class="`w-full h-[78px] ${status.bgClass} ${status.textClass} text-center`">
                <h6 class="text-sm sm:text-base font-bold">
                    {{ status.count }}
                </h6>
                <p class="text-xs sm:text-sm">{{ status.label }}</p>
            </div>
        </div>

            <!-- Charts -->
            <div class="grid grid-cols-1 lg:grid-cols-2 gap-6 mb-6">
                <BarChart :chartData="chartData" />
                <CircularChart :chartData="statusCounts" />
            </div>

            <!-- Monthly Disbursement -->
            <MonthlyAmountDisbursed :months="months" :amountDisbursedData="amountDisbursedData" />

            <!-- Top Applicants -->
            <TopApplicants :topApplicants="topApplicants" />
        </div>
    </AdminLayout>
</template>

<script setup>
import AdminLayout from "@/Layouts/AdminLayout.vue";
import BarChart from "@/Components/BarChart.vue";
import CircularChart from "@/Components/CircularChart.vue";
import { computed } from "vue";
// import MonthlyAmountDisbursed from "@/Components/Charts/MonthlyAmountDisbursed.vue";
// import TopApplicants from "@/Components/TopApplicants.vue";

const props =defineProps({
    statusCounts: Object,
    chartData: Object,
    months: Array,
    amountDisbursedData: Array,
    topApplicants: Array,
});


const statusCards = computed(() => [
    {
        label: "Incoming",
        count: props.statusCounts.Incoming || 0,
        bgClass: "bg-[#FFF7EF]",
        textClass: "text-[#FD7900]",
    },
    {
        label: "Verified",
        count: props.statusCounts.Verified || 0,
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
]);
</script>