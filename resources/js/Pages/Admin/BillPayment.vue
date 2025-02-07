<template>
    <q-page padding>
        <!-- Flash Success/Error Messages -->
        <q-banner v-if="flash.success" class="bg-green-4 text-white" dense>
            {{ flash.success }}
        </q-banner>
        <q-banner v-if="flash.error" class="bg-red-4 text-white" dense>
            {{ flash.error }}
        </q-banner>
        <!--Status Tab -->
        <div class="q-my-md grid grid-cols-1 md:grid-cols-2 gap-4">
            <div class="flex flex-col sm:flex-row gap-2">

                <q-btn size="" label="Bill Pek tur" flat :class="currentFilter === 'Approved'
                    ? 'active-button'
                    : 'inactive-button'
                    " @click="setFilter('Approved')" />
                <q-btn label="Deposit to Bank" flat :class="currentFilter === 'Paid'
                    ? 'active-button'
                    : 'inactive-button'
                    " @click="setFilter('Paid')" />

                <q-btn label="Rejected" flat :class="currentFilter === 'Rejected'
                    ? 'active-button'
                    : 'inactive-button'
                    " @click="setFilter('Rejected')" />
            </div>
            <div class="flex justify-end">
                <q-input rounded="2lg" outlined dense bottom-slots v-model="searchQuery" label="Search"
                    class="w-full max-w-md">
                    <template v-slot:append>
                        <q-icon v-if="searchQuery !== ''" name="close" @click="searchQuery = ''"
                            class="cursor-pointer" />
                        <q-icon name="search" />
                    </template>
                </q-input>
            </div>
        </div>
        <hr class="my-4 border-border bg-[#F0F0F0]" />
        <!-- Status Action -->

        <div class="grid grid-cols-1 md:grid-cols-2 gap-4">
            <div>
                <!-- Action buttons (only visible when at least one checkbox is selected) -->
                <div v-if="showActionButtons" class="flex">
                    <q-btn style="border-radius: 8px" size="md" flat outlined class="q-btn-custom flex items-center justify-center hover:bg-[#3A424A] hover:text-white"
                        @click="toggleSelectAll">
                        <q-icon name="check" size="16px" class="q-mr-xs" />
                        <span>Select All</span>
                    </q-btn>
                    <q-btn style="border-radius: 8px" size="md" flat outlined class="q-btn-custom flex items-center justify-center hover:bg-[#3A424A] hover:text-white"
                        @click="approveAll" :disabled="!selectedApplications.length">
                        <q-icon name="check_circle" size="16px" class="q-mr-xs" />
                        <span>Process for Deposit</span>
                    </q-btn>
                    <q-btn style="border-radius: 8px" size="md" flat outlined class="q-btn-custom flex items-center justify-center hover:bg-[#3A424A] hover:text-white"
                        @click="rejectAll" :disabled="!selectedApplications.length">
                        <q-icon name="cancel" size="16px" class="q-mr-xs" />
                        <span>Reject</span>
                    </q-btn>
                </div>
            </div>
            <div class="flex justify-end pr-16">
                <q-btn size="sm" flat outlined class="q-btn-custom flex items-center justify-center" style="
                        color: #000;
                        width: 100px;
                        height: 40px;
                        flex-shrink: 0;
                        border-radius: 8px;
                        background: transparent;
                    ">
                    <q-icon name="print" size="16px" class="q-mr-xs" />
                    <span>Print</span>
                </q-btn>
                <q-btn size="sm" flat outlined class="q-btn-custom flex items-center justify-center" style="
                        color: #000;
                        width: 100px;
                        height: 40px;
                        flex-shrink: 0;
                        border-radius: 8px;

                        background: transparent;
                    ">
                    <q-icon name="ios_share" size="16px" class="q-mr-xs" />
                    <span>Export</span>
                </q-btn>

            </div>
        </div>
        <!-- Applications Table -->
        <div class="table-responsive">
            <table class="q-table q-table__grid q-mb-lg">
                <thead class="bg-[#3A424A] text-white font-bold h-[30px] w-full text-[11px]">
                    <tr>
                        <th>

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
                                'status-approved': application?.status === 'Approved',
                                'status-paid': application?.status === 'Paid',
                                'status-rejected': application?.status === 'Rejected'
                            }" class="status-badge">
                                {{ application?.status }}
                            </div>
                        </td>
                        
                        <td>{{ application?.created_at }}</td>
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
                                    <q-item class="action-btn" @click="
                                        deleteApplication(application.id)
                                        ">
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

// Reactive data for selected applications
const selectedApplications = ref([]);
// Show buttons only when at least one checkbox is selected
const showActionButtons = computed(() => selectedApplications.value.length > 0);

const filterByDistrict = () => {
    // If a district is selected, filter applications by district
    if (selectedDistrict.value) {
        filteredApplications.value = props.applications.filter(
            (application) =>
                application.deceased.district.name === selectedDistrict.value
        );
    } else {
        // If no district is selected, show all applications
        filteredApplications.value = props.applications;
    }
};

const loadDistrictOptions = () => {
    // Assuming applications have a district field
    const districts = [
        ...new Set(
            props.applications.map(
                (application) => application.deceased.district.name
            )
        ),
    ];
    districtOptions.value = districts.map((district) => ({
        label: district,
        value: district,
    }));
};

// Call loadDistrictOptions when the component is mounted
onMounted(loadDistrictOptions);

const filteredApplications = computed(() => {
    let filtered = props.applications;

    // Apply status filter
    if (currentFilter.value !== "All") {
        filtered = filtered.filter(application => application.status === currentFilter.value);
    }

    // Apply search filter
    if (searchQuery.value) {
        filtered = filtered.filter(application =>
            application.application_no?.toString().includes(searchQuery.value) ||
            application.deceased?.name?.toLowerCase().includes(searchQuery.value.toLowerCase()) ||
            application.applicant?.name?.toLowerCase().includes(searchQuery.value.toLowerCase()) ||
            application.deceased?.district?.name?.toLowerCase().includes(searchQuery.value.toLowerCase())
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

// Handle Select All checkbox change
const toggleSelectAll = () => {
    if (selectedApplications.value.length === filteredApplications.value.length) {
        selectedApplications.value = [];
    } else {
        selectedApplications.value = filteredApplications.value.map(application => application.id);
    }
};
// Handle the "Select All" action
const selectAll = () => {
    selectedApplications.value = filteredApplications.map(
        (application) => application.id
    );
};

const approveAll = async () => {
    if (selectedApplications.value.length > 0) {
        try {
            await $inertia.post('/admin/bill/paymet-all', {
                ids: selectedApplications.value,
            }, {
                onSuccess: () => {
                    selectedApplications.value = [];
                },
            });
        } catch (error) {
            console.error('Error processing payments:', error);
        }
    }
};

// Handle the "Reject All" action
const rejectAll = async () => {
    if (selectedApplications.value.length > 0) {
        try {
            await $inertia.post('/admin/bill/reject-all', {
                ids: selectedApplications.value,
            }, {
                onSuccess: () => {
                    selectedApplications.value = [];
                },
            });
        } catch (error) {
            console.error('Error rejecting applications:', error);
        }
    }
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
    width: 120px;
    height: 30px;
    background: #3a424a;
    color: #ffffff;
    border-radius: 8px;
    border: 1px solid #5b656f;
    font-size: 12px;
}

.inactive-button {
    width: 120px;
    height: 30px;

    background: transparent;
    color: #5b656f;
    border-radius: 8px;
}

.action-btn {
    width: 129px;
    height: 34px;

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

.status-paid {
    background: #e8f4fc;
    color: #2196f3;
}
</style>
