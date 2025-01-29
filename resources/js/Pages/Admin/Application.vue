<template>
    <q-page padding>
        <!-- Flash Success/Error Messages -->
        <q-banner v-if="flash.success" class="bg-green-4 text-white" dense>
            {{ flash.success }}
        </q-banner>
        <q-banner v-if="flash.error" class="bg-red-4 text-white" dense>
            {{ flash.error }}
        </q-banner>

        <!-- Search Bar -->

        <!-- <q-input
            outlined
            clearable
            dense
            bottom-slots
            v-model="searchQuery"
            label="Search"
            class="w-full max-w-md"
        >
            <template v-slot:append>
                <q-icon
                    v-if="text !== ''"
                    name="close"
                    @click="text = ''"
                    class="cursor-pointer"
                />
                <q-icon name="search" />
            </template>
</q-input> -->

        <!-- Status Counts -->

        <div></div>
        <!-- <div class="flex justify-evenly items-center">
            <div v-for="status in statusCards" :key="status.label"
                :class="`w-[190px] h-[78px] text-center ${status.bgClass} ${status.textClass}`">
                <h6 class="text-bold">{{ status.count }}</h6>
                <p>{{ status.label }}</p>
            </div>
        </div> -->
        <div class="flex justify-evenly items-center">
            <div class="w-[190px] h-[78px] bg-[#FFF7EF] text-[#FD7900] text-center">
                <h6 class="text-bold">106</h6>
                <p>incoming</p>
            </div>
            <div class="w-[190px] h-[78px] bg-[#EEFFF8] text-[#00AA68]">1</div>
            <div class="w-[190px] h-[78px] bg-[#FFF2F2] text-[#FE6262]">1</div>
            <div class="w-[190px] h-[78px] bg-[#F2F8FF] text-[#404CF1]">1</div>
            <div class="w-[190px] h-[78px] bg-[#F2FBFF] text-[#00AEFF]">1</div>
        </div>
        <!--Status Tab -->
        <div class="q-my-md flex gap-16">
            <q-btn label="All" flat :class="currentFilter === 'All'
                ? 'active-button'
                : 'inactive-button'
                " @click="setFilter('All')" />
            <q-btn label="Incoming" flat :class="currentFilter === 'Incoming'
                ? 'active-button'
                : 'inactive-button'
                " @click="setFilter('Incoming')" />
            <q-btn label="Approved" flat :class="currentFilter === 'Approved'
                ? 'active-button'
                : 'inactive-button'
                " @click="setFilter('Approved')" />
            <q-btn label="Rejected" flat :class="currentFilter === 'Rejected'
                ? 'active-button'
                : 'inactive-button'
                " @click="setFilter('Rejected')" />
        </div>

        <!-- Status Action -->

        <div class="grid md:grid-cols-2">
            <div class="">
                <!-- Action buttons (only visible when at least one checkbox is selected) -->
                <div v-if="showActionButtons" class="flex">
                    <q-btn size="sm" flat outlined class="q-btn-custom flex items-center justify-center"
                        @click="toggleSelectAll">
                        <q-icon name="check" size="16px" class="q-mr-xs" />
                        <span>Select All</span>
                    </q-btn>
                    <q-btn size="sm" flat outlined class="q-btn-custom flex items-center justify-center"
                        @click="approveAll" :disabled="!selectedApplications.length">
                        <q-icon name="check_circle" size="16px" class="q-mr-xs" />
                        <span>Approve All</span>
                    </q-btn>
                    <q-btn size="sm" flat outlined class="q-btn-custom flex items-center justify-center"
                        @click="rejectAll" :disabled="!selectedApplications.length">
                        <q-icon name="cancel" size="16px" class="q-mr-xs" />
                        <span>Reject All</span>
                    </q-btn>
                </div>
            </div>
            <div class="flex ">
                <q-btn size="sm" flat outlined class="q-btn-custom flex items-center justify-center"
                style="color: #000; width: 100px; height: 40px; border-radius: 8px;"
                @click="printTable">
                <q-icon name="print" size="16px" class="q-mr-xs" />
                <span>Print</span>
            </q-btn>
            <q-btn size="sm" flat outlined class="q-btn-custom flex items-center justify-center"
                style="color: #000; width: 100px; height: 40px; border-radius: 8px;"
                @click="exportToExcel">
                <q-icon name="ios_share" size="16px" class="q-mr-xs" />
                <span>Export</span>
            </q-btn>
                <q-select style="
                        color: #000;
                        width: 128px;
                        height: 40px;
                        flex-shrink: 0;
                        border-radius: 8px;
                        border: 1px solid black;
                        background: transparent;
                    " v-model="selectedDistrict" :options="districtOptions" label="Select District" outlined dense
                    class="q-mb-md" @input="filterByDistrict" />
            </div>
        </div>
        <!-- Applications Table -->
        <div ref="printSection" class="table-responsive">
            <table class="q-table q-table__grid q-mb-lg">
                <thead>
                    <tr>
                        <th>
                            <input type="checkbox" v-model="selectAllCheckbox" @change="toggleSelectAll" />
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
                <tbody v-if="filteredApplications.length">
                    <tr v-for="application in filteredApplications" :key="application.id">
                        <td>
                            <input type="checkbox" :value="application.id" v-model="selectedApplications" />
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
                                'status-approved': application?.status === 'Approved',
                            }" class="status-badge">
                                {{ application?.status }}
                            </div>
                        </td>
                        <td>{{ application?.created_at }}</td>
                        <td>
                            <q-btn flat icon="more_vert" />
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
                <tbody v-else>
                    <tr>
                        <td colspan="11" class="text-center text-gray-500">
                            No applications found.
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
import * as XLSX from "xlsx"; // Import SheetJS library
import AdminLayout from "@/Layouts/AdminLayout.vue";

defineOptions({
    layout: AdminLayout,
});



// Props passed from the parent (admin controller)
const props = defineProps({
    applications: Array,
    flash: Object,
});
const selectedDistrict = ref(null); // Reactive variable for the selected district
const districtOptions = ref([]); // Options for the district dropdown
// Reactive data for search query and filter
const searchQuery = ref("");
const currentFilter = ref("All");

const selectedApplications = ref([]); // Array to store selected application IDs

// Computed property to check if any application is selected
const showActionButtons = computed(() => selectedApplications.value.length > 0);

// Select/Deselect all logic
const selectAllCheckbox = ref(false);
const toggleSelectAll = () => {
    if (selectAllCheckbox.value) {
        // Select all application IDs
        selectedApplications.value = filteredApplications.map(app => app.id);
    } else {
        // Deselect all
        selectedApplications.value = [];
    }
};


const filterByDistrict = () => {
    // If a district is selected, filter applications by district
    if (selectedDistrict.value) {
        filteredApplications.value = props.applications.filter(application =>
            application.deceased.district.name === selectedDistrict.value
        );
    } else {
        // If no district is selected, show all applications
        filteredApplications.value = props.applications;
    }
};


const loadDistrictOptions = () => {
    // Assuming applications have a district field
    const districts = [...new Set(props.applications.map(application => application.deceased.district.name))];
    districtOptions.value = districts.map(district => ({ label: district, value: district }));
};

// Call loadDistrictOptions when the component is mounted
onMounted(loadDistrictOptions);

// Filtered applications based on search and status filter
const filteredApplications = computed(() => {
    let filtered = props.applications;

    // Apply status filter
    if (currentFilter.value === "Incoming") {
        filtered = filtered.filter(
            (application) => application.status === "Pending"
        );
    } else if (currentFilter.value === "Approved") {
        filtered = filtered.filter(
            (application) => application.status === "Approved"
        );
    } else if (currentFilter.value === "Rejected") {
        filtered = filtered.filter(
            (application) => application.status === "Rejected"
        );
    }

    // Apply search query filter
    if (searchQuery.value) {
        filtered = filtered.filter(
            (application) =>
                application.application_no
                    .toString()
                    .includes(searchQuery.value) ||
                application.deceased.name
                    .toLowerCase()
                    .includes(searchQuery.value.toLowerCase())
        );
    }

    return filtered;
});

// Set the current filter
const setFilter = (filter) => {
    currentFilter.value = filter;
};

const viewApplication = (applicationId) => {
    $inertia.get(route("applications.show", applicationId));
};

const editApplication = (applicationId) => {
    console.log("Edit application:", applicationId);
    // Navigate to edit page or show edit form
};

const deleteApplication = (applicationId) => {
    console.log("Delete application:", applicationId);
    // Call API or show confirmation dialog to delete
};




// Handle the "Approve All" action
const approveAll = () => {
    // Implement the logic for approving all selected applications
};

// Handle the "Reject All" action
const rejectAll = () => {
    // Implement the logic for rejecting all selected applications
};




// Print the table
const printTable = () => {
    const printContents = document.querySelector(".table-responsive").innerHTML;
    const printWindow = window.open("", "", "width=800,height=600");
    printWindow.document.write(`
        <html>
            <head><title>Print Table</title></head>
            <body>${printContents}</body>
        </html>
    `);
    printWindow.document.close();
    printWindow.print();
};


// Export table data to Excel
const exportToExcel = () => {
    const data = filteredApplications.value.map((app) => ({
        "Applicant ID": app?.application_no,
        "Deceased Name": app?.deceased?.name,
        "Deceased District": app?.deceased?.district?.name,
        "Kilometer": app?.transport?.distance,
        "Amount": app?.transport?.transport_cost,
        "Applicant Name": app?.applicant?.name,
        "Applicant Phone": app?.applicant?.mobile,
        "Status": app?.status,
        "Date Created": app?.created_at,
    }));

    const worksheet = XLSX.utils.json_to_sheet(data);
    const workbook = XLSX.utils.book_new();
    XLSX.utils.book_append_sheet(workbook, worksheet, "Applications");

    XLSX.writeFile(workbook, "Applications.xlsx");
};
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
