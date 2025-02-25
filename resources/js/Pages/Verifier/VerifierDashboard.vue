<template>
    <AdminLayout>
        <div class="p-6">
            <h1 class="text-2xl font-bold mb-6">Verifier Dashboard</h1>

            <!-- Debugging: Display statusCounts -->
            <!-- <pre>{{ statusCounts }}</pre> -->

            <!-- Status Counts -->
            <div class="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-5 gap-4">
                <div v-for="status in statusCards" :key="status.label"
                    :class="`w-full h-[78px] ${status.bgClass} ${status.textClass} p-4`">
                    <h6 class="text-sm sm:text-base font-black">
                        {{ status.count }}
                    </h6>
                    <p class="text-xs sm:text-sm">{{ status.label }}</p>
                </div>
            </div>

            <!-- Charts -->
            <div class="grid grid-cols-1 lg:grid-cols-2 gap-6 mb-6">
                <VerifierBarChart :chartData="chartData" />
                <CircularChart :labels="chartData.labels" :data="chartData.pendingData" />
            </div>

            <!-- Monthly Disbursement -->
             <div class="grid grid-cols-2">

                 <VerifierMonthlyAmountDisbursed :months="months" :amountDisbursedData="amountDisbursedData" />
                 
                 <!-- Top Applicants -->
                 <div class="col-12 col-md-6">
                     <q-card class="q-pa-md">
                        <p class="text-bold">Diltu tam dan (top 10)</p>
                        <p class="text-[#61646B]">Ruangphur diltu tam te</p>
                         <q-card-section>
                             <!-- <div class="text-h6">Top 10 Applicants</div> -->
                             <q-table :rows="topApplicants" :columns="applicantColumns" />
                            </q-card-section>
                        </q-card>
                    </div>
                </div>
            </div>
    </AdminLayout>
</template>

<script setup>
import AdminLayout from "@/Layouts/AdminLayout.vue";
import VerifierBarChart from "@/Components/Verifier/VerifierBarChart.vue";
import CircularChart from "@/Components/Verifier/VerifierCircularChart.vue";
import VerifierMonthlyAmountDisbursed from "@/Components/Verifier/VerifierMonthlyAmountDisbursed.vue";
// import VerifierTopApplicants from "@/Components/Verifier/VerifierTopApplicants.vue";
import { computed, onMounted } from "vue";

const props = defineProps({
    applications: Object,
    statusCounts: Object,
    chartData: Object,
    months: Array,
    labels: Array,
    data: Array,
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
        count: props.statusCounts.Verified || 0, // Fixed key
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

onMounted(() => {
    console.log('Status Counts:', props.statusCounts);
});
</script>