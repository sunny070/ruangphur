<template>
    <div>
        <h1>User Report</h1>

        <!-- Filters Section -->
        <div class="filters">
            <select v-model="filters.status">
                <option value="">All Statuses</option>
                <option
                    v-for="status in dropdowns.statuses"
                    :key="status"
                    :value="status"
                >
                    {{ status }}
                </option>
            </select>

            <select v-model="filters.constituency_id">
                <option value="">All Constituencies</option>
                <option
                    v-for="constituency in dropdowns.constituencies"
                    :key="constituency.id"
                    :value="constituency.id"
                >
                    {{ constituency.name }}
                </option>
            </select>

            <input
                type="date"
                v-model="filters.start_date"
                placeholder="Start Date"
            />
            <input
                type="date"
                v-model="filters.end_date"
                placeholder="End Date"
            />

            <button @click="fetchApplications">Apply Filters</button>
            <button @click="exportReport">Export to Excel</button>
        </div>

        <!-- Applications Table -->
        <table>
            <thead>
                <tr>
                    <th>ID</th>
                    <th>Applicant Name</th>
                    <th>Deceased Name</th>
                    <th>Status</th>
                    <th>Created At</th>
                    <!-- Add more columns as needed -->
                </tr>
            </thead>
            <tbody>
                <tr v-for="application in applications" :key="application.id">
                    <td>{{ application.id }}</td>
                    <td>{{ application.applicant.name }}</td>
                    <td>{{ application.deceased.name }}</td>
                    <td>{{ application.status }}</td>
                    <td>{{ application.created_at }}</td>
                    <!-- Add more columns as needed -->
                </tr>
            </tbody>
        </table>
    </div>
</template>

<script setup>
import { ref, onMounted } from "vue";
import axios from "axios";
import { Inertia } from "@inertiajs/inertia";
import AdminLayout from "@/Layouts/AdminLayout.vue";

// Define the layout
defineOptions({
    layout: AdminLayout,
});

// Define props
const props = defineProps({
    dropdowns: Object, // Passed from the backend
    initialFilters: Object, // Passed from the backend
    initialApplications: Array, // Passed from the backend
});

// Reactive state
const filters = ref({ ...props.initialFilters });
const applications = ref([...props.initialApplications]);

// Fetch applications based on filters
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

// Export report to Excel
const exportReport = () => {
    Inertia.get("/verifier/export", filters.value, {
        responseType: "blob",
    });
};

// Fetch applications on component mount
onMounted(() => {
    fetchApplications();
});
</script>

<style scoped>
.filters {
    margin-bottom: 20px;
}

.filters select,
.filters input {
    margin-right: 10px;
}

table {
    width: 100%;
    border-collapse: collapse;
}

th,
td {
    padding: 10px;
    border: 1px solid #ddd;
    text-align: left;
}

th {
    background-color: #f4f4f4;
}
</style>
