<template>
    <q-page padding>
        <!-- Flash Success/Error Messages -->
        <q-banner v-if="flash.success" class="bg-green-4 text-white" dense>
            {{ flash.success }}
        </q-banner>
        <q-banner v-if="flash.error" class="bg-red-4 text-white" dense>
            {{ flash.error }}
        </q-banner>

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

        <!-- Status Tab -->
        <div class="q-my-md grid grid-cols-1 md:grid-cols-2 gap-4">
            <div class="q-my-md flex gap-16">
                <q-btn label="All" flat :class="currentFilter === 'All' ? 'active-button' : 'inactive-button'"
                    @click="setFilter('All')" />
                <q-btn label="Incoming" flat :class="currentFilter === 'Incoming' ? 'active-button' : 'inactive-button'"
                    @click="setFilter('Incoming')" />
                <q-btn label="Verified" flat :class="currentFilter === 'Verified' ? 'active-button' : 'inactive-button'"
                    @click="setFilter('Verified')" />
                <q-btn label="Rejected" flat :class="currentFilter === 'Rejected' ? 'active-button' : 'inactive-button'"
                    @click="setFilter('Rejected')" />
            </div>
            <div class="flex justify-end">
                <q-input rounded="lg" outlined dense bottom-slots v-model="searchQuery" label="Search"
                    class="w-full max-w-md">
                    <template v-slot:append>
                        <q-icon v-if="searchQuery !== ''" name="close" @click="searchQuery = ''"
                            class="cursor-pointer" />
                        <q-icon name="search" />
                    </template>
                </q-input>
            </div>
        </div>

        <!-- Status Action -->
        <div class="grid grid-cols-1 md:grid-cols-2 gap-4">
            <div>
                <!-- Action buttons (only visible when at least one checkbox is selected) -->
                <div v-if="showActionButtons" class="flex">
                    <q-btn style="border-radius: 8px" size="md" flat outlined
                        class="q-btn-custom flex items-center justify-center" @click="toggleSelectAll">
                        <q-icon name="check" size="16px" class="q-mr-xs" />
                        <span>Select All</span>
                    </q-btn>
                    <q-btn style="border-radius: 8px" size="md" flat outlined
                        class="q-btn-custom flex items-center justify-center" @click="approveAll"
                        :disabled="!selectedApplications.length">
                        <q-icon name="check_circle" size="16px" class="q-mr-xs" />
                        <span>Verify All</span>
                    </q-btn>
                    <q-btn style="border-radius: 8px" size="md" flat outlined
                        class="q-btn-custom flex items-center justify-center" @click="rejectAll"
                        :disabled="!selectedApplications.length">
                        <q-icon name="cancel" size="16px" class="q-mr-xs" />
                        <span>Reject All</span>
                    </q-btn>
                </div>
            </div>
            <div class="flex justify-end pr-16">
                <q-btn size="sm" flat outlined class="q-btn-custom flex items-center justify-center"
                    @click="printTable">
                    <q-icon name="print" size="16px" class="q-mr-xs" />
                    <span>Print</span>
                </q-btn>
                <q-btn size="sm" flat outlined class="q-btn-custom flex items-center justify-center"
                    @click="exportTable">
                    <q-icon name="ios_share" size="16px" class="q-mr-xs" />
                    <span>Export</span>
                </q-btn>
                <q-select
                    style="color: #000; width: 128px; height: 40px; flex-shrink: 0; border-radius: 8px; border: 1px solid black; background: transparent;"
                    v-model="selectedDistrict" :options="districtOptions" label="Select District" outlined dense
                    class="q-mb-md" @input="filterByDistrict" />
            </div>
        </div>

        <!-- Applications Table -->
        <div class="table-responsive">
            <table class="q-table q-table__grid q-mb-lg">
                <thead class="bg-[#3A424A] text-white font-bold h-[30px] w-full text-[11px]">
                    <tr>
                        <th>
                            <!-- <input type="checkbox" v-model="selectAllCheckbox" @change="toggleSelectAll" /> -->
                        </th>
                        <th>APPLICANT ID</th>
                        <th>MITTHI HMING</th>
                        <th>MITTHI KHUA</th>
                        <th>KILOMETER</th>
                        <th>AMOUNT</th>
                        <th>DIL SAKTU</th>
                        <th>DILTU PHONE NO</th>
                        <th>STATUS</th>
                        <th>DIL NI</th>
                        <th>ACTIONS</th>
                    </tr>
                </thead>
                <tbody>
                    <tr v-for="application in filteredApplications" :key="application.id">
                        <td>
                            <input type="checkbox" v-model="selectedApplications" :value="application.id" />
                        </td>
                        <td>{{ application?.application_no }}</td>
                        <td>{{ application?.deceased?.name }}</td>
                        <td>{{ application?.deceased?.district?.name }}</td>
                        <td>{{ application?.transport?.distance }}</td>
                        <td>{{ application?.transport?.transport_cost }}</td>
                        <td>{{ application?.applicant?.name }}</td>
                        <td>{{ application?.applicant?.mobile }}</td>
                        <td>
                            <div :class="{
                                'status-incoming': application?.status === 'Pending',
                                'status-rejected': application?.status === 'Rejected',
                                'status-approved': application?.status === 'Verified',
                            }" class="status-badge">
                                {{ application?.status }}
                            </div>
                        </td>
                        <td>{{ formatDate(application?.created_at) }}</td>
                        <td>
                            <q-btn flat icon="more_vert" :style="buttonStyle" />
                            <q-menu>
                                <q-list>
                                    <q-item clickable class="action-btn" @click="viewApplication(application.id)">
                                        <q-item-section>View</q-item-section>
                                    </q-item>
                                    <q-item class="action-btn" @click="editApplication(application.id)">
                                        <q-item-section>Edit/Update</q-item-section>
                                    </q-item>
                                    <q-item class="action-btn" @click="deleteApplication(application.id)">
                                        <q-item-section>Delete</q-item-section>
                                    </q-item>
                                </q-list>
                            </q-menu>
                        </td>
                    </tr>
                </tbody>
            </table>
        </div>
    </q-page>
</template>

<script setup>
import { defineProps, ref, computed, onMounted } from "vue";
import { router as $inertia } from "@inertiajs/vue3";
import * as XLSX from 'xlsx';
import AdminLayout from "@/Layouts/AdminLayout.vue";
import dayjs from 'dayjs';

defineOptions({
    layout: AdminLayout,
});

const props = defineProps({
    applications: Array,
    statusCounts: Object,
    flash: Object,
});

const selectedDistrict = ref(null);
const districtOptions = ref([]);
const searchQuery = ref("");
const currentFilter = ref("All");
const selectedApplications = ref([]);
const selectAllCheckbox = ref(false);
const formatDate = (date) => {
  return dayjs(date).format('dddd, MMMM D, YYYY h:mm A'); // Change this to your desired format
};
const showActionButtons = computed(() => selectedApplications.value.length > 0);

const toggleSelectAll = () => {
    if (selectedApplications.value.length === filteredApplications.value.length) {
        selectedApplications.value = [];
        selectAllCheckbox.value = false;
    } else {
        selectedApplications.value = filteredApplications.value.map(app => app.id);
        selectAllCheckbox.value = true;
    }
};

const filterByDistrict = () => {
    if (selectedDistrict.value) {
        filteredApplications.value = props.applications.filter(application =>
            application.deceased.district.name === selectedDistrict.value
        );
    } else {
        filteredApplications.value = props.applications;
    }
};

const loadDistrictOptions = () => {
    const districts = [...new Set(props.applications.map(application => application.deceased.district.name))];
    districtOptions.value = districts.map(district => ({ label: district, value: district }));
};

onMounted(loadDistrictOptions);

const filteredApplications = computed(() => {
    let filtered = props.applications;

    if (currentFilter.value === "Incoming") {
        filtered = filtered.filter(application => application.status === "Pending");
    } else if (currentFilter.value === "Verified") {
        filtered = filtered.filter(application => application.status === "Verified");
    } else if (currentFilter.value === "Rejected") {
        filtered = filtered.filter(application => application.status === "Rejected");
    }

    if (searchQuery.value) {
        filtered = filtered.filter(application =>
            application.application_no.toString().includes(searchQuery.value) ||
            application.deceased.name.toLowerCase().includes(searchQuery.value.toLowerCase())
        );
    }

    return filtered;
});

const setFilter = (filter) => {
    currentFilter.value = filter;
};

const approveAll = async () => {
    if (selectedApplications.value.length > 0) {
        try {
            await $inertia.post(
                "/verifier/applications/verify-all",
                {
                    ids: selectedApplications.value,
                },
                {
                    onSuccess: () => {
                        // Optionally, show a success message or refresh the data
                        selectedApplications.value = []; // Clear the selection
                    },
                }
            );
        } catch (error) {
            console.error("Error approving applications:", error);
        }
    }
};

const rejectAll = async () => {
    if (selectedApplications.value.length > 0) {
        try {
            await $inertia.post(
                "/verifier/applications/reject-all",
                {
                    ids: selectedApplications.value,
                },
                {
                    onSuccess: () => {
                        // Optionally, show a success message or refresh the data
                        selectedApplications.value = []; // Clear the selection
                    },
                }
            );
        } catch (error) {
            console.error("Error rejecting applications:", error);
        }
    }
};
const viewApplication = (applicationId) => {
    $inertia.get(route("applications.show", applicationId));
};

const editApplication = (applicationId) => {
    console.log("Edit application:", applicationId);
};

const deleteApplication = (applicationId) => {
    console.log("Delete application:", applicationId);
};

const printTable = () => {
    window.print();
};

const exportTable = () => {
    const data = filteredApplications.value.map(app => ({
        'APPLICANT ID': app.application_no,
        'MITTHI HMING': app.deceased.name,
        'MITTHI KHUA': app.deceased.district.name,
        'KILOMETER': app.transport.distance,
        'AMOUNT': app.transport.transport_cost,
        'DIL SAKTU': app.applicant.name,
        'DILTU PHONE NO': app.applicant.mobile,
        'STATUS': app.status,
        'DIL NI': app.created_at,
    }));

    const ws = XLSX.utils.json_to_sheet(data);
    const wb = XLSX.utils.book_new();
    XLSX.utils.book_append_sheet(wb, ws, "Applications");
    XLSX.writeFile(wb, "applications.xlsx");
};

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



<style>
.table-responsive {
    overflow-x: auto;
}

table {
    width: 100%;
    border-collapse: collapse;
}

th,
td {
    padding: 8px 12px;
    text-align: left;
    border-bottom: 1px solid #ddd;
}

th {
    background-color: #f8f9fa;
    font-weight: bold;
}

.q-btn {
    margin-right: 4px;
}

.active-button {
    width: 63px;
    height: 30px;
    flex-shrink: 0;
    background: #3a424a;
    color: #ffffff;
    border-radius: 8px;
    border: 1px solid #5b656f;
    font-size: 12px;
}

.inactive-button {
    width: 63px;
    height: 30px;
    flex-shrink: 0;
    background: transparent;
    color: #5b656f;
    border-radius: 8px;
}

.action-btn {
    width: 129px;
    height: 34px;
    flex-shrink: 0;
    /* border-radius: 12px; */
    border: 1px solid #eee;
    background: #fff;
}

.action-btn:hover {
    background: #e9f4ff;
}

.status-badge {
    width: 80px;
    height: 20px;
    flex-shrink: 0;
    border-radius: 20px;
    display: flex;
    justify-content: center;
    align-items: center;
    font-size: 12px;
    font-weight: bold;
}

.status-incoming {
    background: #faeadc;
    color: #fd7900;
}

.status-rejected {
    background: #fff2f2;
    color: #fe6262;
}

.status-approved {
    background: #dcfaee;
    color: #4caf50;
    /* Adjusted to a green shade for "Approved" */
}

.custom-btn {
    display: flex;
    justify-content: center;
    align-items: center;
}
</style>
