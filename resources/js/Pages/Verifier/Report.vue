<template>
    <q-page>
        <div class="p-6">
            <h1 class="text-2xl font-bold mb-6">User Report</h1>

            <form @submit.prevent="fetchApplications" class="mb-6 space-y-4 bg-white p-4 rounded-lg shadow">
                <div class="grid grid-cols-1 md:grid-cols-3 gap-4">
                    <div>
                        <label class="block text-sm font-medium text-gray-700">Status</label>
                        <select v-model="filters.status" class="mt-1 block w-full rounded-md border-gray-300 shadow-sm">
                            <option value="">All Statuses</option>
                            <option v-for="status in dropdowns.statuses" :key="status" :value="status">{{ status }}
                            </option>
                        </select>
                    </div>

                    <div>
                        <label class="block text-sm font-medium text-gray-700">Constituency</label>
                        <select v-model="filters.constituency_id" class="mt-1 block w-full rounded-md border-gray-300 shadow-sm">
                            <option value="">All Constituencies</option>
                            <option v-for="constituency in dropdowns.constituencies" :key="constituency.id" 
                                :value="constituency.id">
                                {{ constituency.name }}
                            </option>
                        </select>
                    </div>
                </div>

                <div class="grid grid-cols-1 md:grid-cols-2 gap-4">
                    <div>
                        <label class="block text-sm font-medium text-gray-700">Start Date</label>
                        <input type="date" v-model="filters.start_date"
                            class="mt-1 block w-full rounded-md border-gray-300 shadow-sm">
                    </div>

                    <div>
                        <label class="block text-sm font-medium text-gray-700">End Date</label>
                        <input type="date" v-model="filters.end_date"
                            class="mt-1 block w-full rounded-md border-gray-300 shadow-sm">
                    </div>
                </div>

                <div class="flex gap-4">
                    <button type="submit" class="px-4 py-2 bg-blue-600 text-white rounded-md hover:bg-blue-700">
                        Apply Filters
                    </button>

                    <button @click="exportReport" type="button"
                        class="px-4 py-2 bg-green-600 text-white rounded-md hover:bg-green-700">
                        Export to Excel
                    </button>
                </div>
            </form>

            <!-- Results Table -->
            <div class="bg-white rounded-lg overflow-x-auto table-responsive">
                <table class="q-table q-table__grid w-full">
                    <thead>
                        <tr class="bg-[#3A424A] text-white">
                            <th class="px-6 py-3 text-left text-xs font-medium uppercase">ID</th>
                            <th class="px-6 py-3 text-left text-xs font-medium uppercase">Status</th>
                            <th class="px-6 py-3 text-left text-xs font-medium uppercase">Applicant</th>
                            <th class="px-6 py-3 text-left text-xs font-medium uppercase">District</th>
                            <th class="px-6 py-3 text-left text-xs font-medium uppercase">Deceased</th>
                            <th class="px-6 py-3 text-left text-xs font-medium uppercase">Created At</th>
                        </tr>
                    </thead>
                    <tbody class="bg-white divide-y divide-gray-200">
                        <tr v-for="application in applications" :key="application.id">
                            <td class="px-6 py-4 whitespace-nowrap">{{ application.id }}</td>
                            <td class="px-6 py-4 whitespace-nowrap">
                                <span :class="statusBadgeClass(application.status)"
                                    class="px-2 py-1 rounded-full text-sm">
                                    {{ application.status }}
                                </span>
                            </td>
                            <td class="px-6 py-4 whitespace-nowrap">{{ application.applicant.name }}</td>
                            <td class="px-6 py-4 whitespace-nowrap">{{ application.applicant.district?.name || 'N/A' }}</td>
                            <td class="px-6 py-4 whitespace-nowrap">{{ application.deceased.name }}</td>
                            <td class="px-6 py-4 whitespace-nowrap">{{ 
                                new Date(application.created_at).toLocaleDateString() 
                            }}</td>
                        </tr>
                    </tbody>
                </table>
            </div>
        </div>
    </q-page>
</template>

<script setup>
import { ref, onMounted } from "vue";
import axios from "axios";
import { Inertia } from "@inertiajs/inertia";
import AdminLayout from "@/Layouts/AdminLayout.vue";

defineOptions({
    layout: AdminLayout,
});

const props = defineProps({
    dropdowns: Object,
    initialFilters: Object,
    initialApplications: {
        type: Array,
        default: () => [],
    },
});

const filters = ref({ ...props.initialFilters });
const applications = ref([...props.initialApplications]);

const fetchApplications = async () => {
    try {
        const response = await axios.get("/verifier/report", {
            params: filters.value,
        });
        applications.value = response.data.applications;
    } catch (error) {
        console.error("Error fetching applications:", error);
    }
};

const exportReport = () => {
    Inertia.get("/verifier/export", filters.value, {
        responseType: "blob",
    });
};

const statusBadgeClass = (status) => {
    const classes = {
        'Pending': 'bg-yellow-100 text-yellow-800',
        'Verified': 'bg-green-100 text-green-800',
        'Rejected': 'bg-red-100 text-red-800',
    };
    return classes[status] || 'bg-gray-100 text-gray-800';
};

onMounted(() => {
    fetchApplications();
});
</script>