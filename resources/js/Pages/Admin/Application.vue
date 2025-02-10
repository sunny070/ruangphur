<template>
    <q-page padding>
        <!-- Flash Success/Error Messages -->
        <q-banner v-if="flash?.success" class="bg-green-4 text-white" dense>
            {{ flash.success }}
        </q-banner>
        <q-banner v-if="flash?.error" class="bg-red-4 text-white" dense>
            {{ flash.error }}
        </q-banner>

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

        <!-- Filter Buttons and Search Bar -->
        <div class="q-my-md grid grid-cols-1 md:grid-cols-2 gap-4">
            <div class="flex flex-col sm:flex-row gap-2">
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
            <div class="">
                <!-- Action buttons (only visible when at least one checkbox is selected) -->
                <div v-if="showActionButtons" class="flex flex-col sm:flex-row gap-2">
                    <q-btn style="border-radius: 8px" size="md" flat outlined
                        class="q-btn-custom flex items-center justify-center hover:bg-[#3A424A] hover:text-white"
                        @click="toggleSelectAll">
                        <q-icon name="check" size="16px" class="q-mr-xs" />
                        <span>Select All</span>
                    </q-btn>

                    <q-btn style="border-radius: 8px" size="md" flat outlined
                        class="q-btn-custom flex items-center justify-center hover:bg-[#3A424A] hover:text-white"
                        @click="approveAll" :disabled="!selectedApplications.length">
                        <q-icon name="check_circle" size="16px" class="q-mr-xs" />
                        <span>Approve All</span>
                    </q-btn>
                    <q-btn style="border-radius: 8px" size="md" flat outlined
                        class="q-btn-custom flex items-center justify-center hover:bg-[#3A424A] hover:text-white"
                        @click="rejectAll" :disabled="!selectedApplications.length">
                        <q-icon name="cancel" size="16px" class="q-mr-xs" />
                        <span>Reject All</span>
                    </q-btn>
                    <!-- <q-btn style="border-radius: 8px" size="md" flat outlined
                        class="q-btn-custom flex items-center justify-center hover:bg-[#3A424A] hover:text-white"
                        @click="approveAll" :disabled="!selectedApplications.length">
                        <q-icon name="check_circle" size="16px" class="q-mr-xs" />
                        <span>Approve All</span>
                    </q-btn>
                    <q-btn style="border-radius: 8px" size="md" flat outlined
                        class="q-btn-custom flex items-center justify-center hover:bg-[#3A424A] hover:text-white"
                        @click="rejectAll" :disabled="!selectedApplications.length">
                        <q-icon name="cancel" size="16px" class="q-mr-xs" />
                        <span>Reject All</span>
                    </q-btn> -->
                </div>
            </div>
            <div class="flex justify-end pr-16">
                <q-btn size="sm" flat outlined class="q-btn-custom flex items-center justify-center" style="
                        color: #000;
                        width: 100px;
                        height: 40px;
                        border-radius: 8px;
                    " @click="printTable">
                    <q-icon name="print" size="16px" class="q-mr-xs" />
                    <span>Print</span>
                </q-btn>
                <q-btn size="sm" flat outlined class="q-btn-custom flex items-center justify-center" style="
                        color: #000;
                        width: 100px;
                        height: 40px;
                        border-radius: 8px;
                    " @click="exportToExcel">
                    <q-icon name="ios_share" size="16px" class="q-mr-xs" />
                    <span>Export</span>
                </q-btn>
                <q-select style="
                        color: #000;
                        width: 160px;
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
        <div ref="printSection" class="overflow-x-auto table-responsive">
            <table class="q-table q-table__grid w-full">
                <thead>
                    <tr class="bg-[#3A424A] text-white">
                        <th></th>
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
                                'status-incoming':
                                    application?.status === 'Pending',
                                'status-approved':
                                    application?.status === 'Approved',
                                'status-paid':
                                    application?.status === 'Paid',
                                'status-rejected':
                                    application?.status === 'Rejected',
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
                                        <q-item-section avatar>
                                            <q-icon size="sm" name="visibility" />
                                        </q-item-section>
                                        <q-item-section>View</q-item-section>
                                    </q-item>

                                    <q-item clickable class="action-btn" @click="openEditDialog(application)">
                                        <q-item-section avatar>
                                            <q-icon name="edit" />
                                        </q-item-section>
                                        <q-item-section>Edit/Update</q-item-section>
                                    </q-item>

                                    <q-item clickable class="action-btn" @click="
                                        deleteApplication(application.id)
                                        ">
                                        <q-item-section avatar>
                                            <q-icon name="delete" />
                                        </q-item-section>
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

        <q-dialog v-model="editDialog">
            <q-card class="w-[411px] h-[822px] rounded-md">
                <q-card-section>
                    <q-form @submit.prevent="handleSubmit">
                        <!-- Step 1: Deceased Details -->
                        <div v-if="currentStep === 1">
                            <p class="text-center w-[242px] h-[17px] flex-shrink-0 rounded-[20px] bg-[#E9E9E9] mb-8">
                                Ruang Phurh MITTHI Chungchang
                            </p>
                            <q-input v-model="editableApplication.deceased.name" label="Mitthi hming" outlined dense
                                class="q-mb-md" />
                            <q-input v-model="editableApplication.deceased.relative_name
                                " label="A chhungte hming" outlined dense class="q-mb-md" />
                            <q-input type="date" v-model="editableApplication.deceased.dob"
                                label="Mitthi Pianni leh thla" outlined dense class="q-mb-md" />
                            <!-- {{ editableApplication.deceased.district.name }} -->
                            <q-select v-model="editableApplication.deceased.district.name"
                                :options="dropdowns.districts" option-label="name" option-value="id" label="District"
                                outlined dense class="q-mb-md" />
                            <q-input v-model="editableApplication.deceased.locality" label="Locality" outlined dense
                                class="q-mb-md" />

                            <q-select v-model="editableApplication.deceased.constituency.name"
                                :options="dropdowns.constituencies" option-label="name" option-value="id"
                                label="Constituency" outlined dense class="q-mb-md" />


                            <q-input type="datetime-local" v-model="editableApplication.deceased.time_of_death
                                " label="Thih ni leh darkar" outlined dense class="q-mb-md" />
                            <q-input v-model="editableApplication.deceased.place_of_death
                                " label="Thihna hmun" outlined dense class="q-mb-md" />
                        </div>

                        <!-- Step 2: Transport Details -->
                        <div v-if="currentStep === 2">
                            <p class="text-center w-[242px] h-[17px] flex-shrink-0 rounded-[20px] bg-[#E9E9E9] mb-8">
                                Ruang Phurh leh Motor Chungchang
                            </p>
                            <!-- {{ editableApplication.transport.source_district.name }} -->
                            <!-- <q-select v-model="editableApplication.transport.source_district.name"
                                :options="dropdowns.districts" option-label="name" option-value="id"
                                label="Ruang phurh tanna tur District awmna" outlined dense class="q-mb-md" /> -->
                            <q-select v-model="editableApplication.transport.source_district"
                                :options="dropdowns.districts" option-label="name" option-value="id"
                                label="Ruang phurh tanna tur District awmna" outlined dense class="q-mb-md" />


                            <q-input v-model="editableApplication.transport.source_locality"
                                label="Ruang chhuah veng/khua thlanna" outlined dense class="q-mb-md" />



                            <q-select v-model="editableApplication.transport.destination_district"
                                :options="dropdowns.districts" option-label="name" option-value="id"
                                label="Ruang zalhna tur District awmna" outlined dense class="q-mb-md" />

                            <!-- <q-select v-model="editableApplication.transport.destination_district.name"
                                :options="dropdowns.districts" option-label="name" option-value="id"
                                label="Ruang zalhna tur District awmna" outlined dense class="q-mb-md" /> -->

                            <q-input v-model="editableApplication.transport.destination_locality"
                                label="Ruang zalhna veng/khua thlanna" outlined dense class="q-mb-md" />

                            <q-input v-model="editableApplication.transport.distance" label="Distance (Km)" outlined
                                dense class="q-mb-md" />
                            <q-input v-model="editableApplication.transport.transport_cost
                                " label="Transport Cost" outlined dense class="q-mb-md" />
                            <q-input v-model="editableApplication.transport.vehicle_number
                                " label="Vehicle Number" outlined dense class="q-mb-md" />
                            <q-input v-model="editableApplication.transport.driver_name
                                " label="Driver Name" outlined dense class="q-mb-md" />
                            <q-input v-model="editableApplication.transport.driver_phone
                                " label="Driver Phone" outlined dense class="q-mb-md" />
                        </div>

                        <!-- Step 3: Applicant Details -->
                        <div v-if="currentStep === 3">
                            <q-input v-model="editableApplication.applicant.name" label="Applicant Name" outlined dense
                                class="q-mb-md" />
                            <q-input v-model="editableApplication.applicant.mobile" label="Mobile" outlined dense
                                class="q-mb-md" />
                            <q-select v-model="editableApplication.applicant.district.name"
                                :options="dropdowns.districts" option-label="name" option-value="id"
                                label="Ruang phurhna man diltu district" outlined dense class="q-mb-md" />
                            <q-input v-model="editableApplication.applicant.locality"
                                label="Ruang phurhna man diltu veng/khua" outlined dense class="q-mb-md" />
                            <q-input v-model="editableApplication.applicant.bank_name" label="Bank hming" outlined dense
                                class="q-mb-md" />

                            <q-input v-model="editableApplication.applicant.account_no
                                " label="Account No" outlined dense class="q-mb-md" />
                            <q-input v-model="editableApplication.applicant.ifsc_code
                                " label="IFSC Code" outlined dense class="q-mb-md" />
                                <!-- <q-file v-model="editableApplication.attachment.id_proof" label="ID Proof" outlined dense
                                class="q-mb-md" />
                            <q-file v-model="editableApplication.attachment.receipt" label="Receipt" outlined dense
                                class="q-mb-md" />
                            <q-file v-model="editableApplication.attachment.death_certificate" label="Death Certificate"
                                outlined dense class="q-mb-md" />
                            <q-file v-model="editableApplication.attachment.additional_document"
                                label="Additional Document" outlined dense class="q-mb-md" /> -->
                        </div>
                        

                        <!-- Navigation Buttons -->
                        <q-card-actions align="right">
                            <q-btn class="text-black" color="white" label="Cancel" v-close-popup />

                            <q-btn v-if="currentStep > 1" label="Previous" color="grey" @click="prevStep" />

                            <q-btn v-if="currentStep < 3" label="Next" color="black" @click="nextStep" />

                            <q-btn v-if="currentStep === 3" label="Submit" color="black" type="submit" />
                        </q-card-actions>
                    </q-form>
                </q-card-section>
            </q-card>
        </q-dialog>
    </q-page>
</template>

<script setup>
import { defineProps, ref, computed, onMounted } from "vue";
import { router as $inertia } from "@inertiajs/vue3";
import * as XLSX from "xlsx"; // Import SheetJS library
import AdminLayout from "@/Layouts/AdminLayout.vue";
// import useForm from "@inertiajs/vue3";

defineOptions({
    layout: AdminLayout,
});

// Props passed from the parent (admin controller)
const props = defineProps({
    applications: Array,
    statusCounts: Object,
    flash: Object,
    dropdowns: Object,
});

// Reactive references
const editDialog = ref(false);
const currentStep = ref(1);
const editableApplication = ref({
    deceased: {},
    transport: {},
    applicant: {},

});
    //attachment: {
    //id_proof: null,
    //receipt: null,
    //death_certificate: null,
    //additional_document: null,
  //},

// Function to open the edit dialog and populate the data
const openEditDialog = (application) => {
    editableApplication.value = JSON.parse(JSON.stringify(application)); // Deep copy to avoid modifying the original
    currentStep.value = 1; // Reset step to first
    editDialog.value = true;
};

// const handleSubmit = () => {
//   useForm(editableApplication.value).put(`/admin/applications/${editableApplication.value.id}`, {
//     onSuccess: () => {
//       editDialog.value = false;
//     },
//   });
// };
// Function to handle form submission
const handleSubmit = () => {
    $inertia.put(
        `/application/${editableApplication.value.id}`,
        editableApplication.value,
        {
            onSuccess: () => {
                editDialog.value = false;
            },
        }
    );
};

// const handleSubmit = () => {
//   // Handle file uploads and form submission
//   // You can use FormData to send files to the server
//   const formData = new FormData();
//   formData.append('id_proof', editableApplication.value.attachment.id_proof);
//   formData.append('receipt', editableApplication.value.attachment.receipt);
//   formData.append('death_certificate', editableApplication.value.attachment.death_certificate);
//   formData.append('additional_document', editableApplication.value.attachment.additional_document);

//   // Append other fields as needed
//   // ...

//   // Submit the form data to the server
//   $inertia.put(
//         `/application/${editableApplication.value.id}`,
//         editableApplication.value,
//         {
//             onSuccess: () => {
//                 editDialog.value = false;
//             },
//         }
//     );
// };

// Step navigation functions
const nextStep = () => {
    if (currentStep.value < 4) currentStep.value++;
};
const prevStep = () => {
    if (currentStep.value > 1) currentStep.value--;
};
const districtFilteredApplications = ref([]);
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
    if (
        selectedApplications.value.length === filteredApplications.value.length
    ) {
        // Deselect all
        selectedApplications.value = [];
        selectAllCheckbox.value = false;
    } else {
        // Select all
        selectedApplications.value = filteredApplications.value.map(
            (app) => app.id
        );
        selectAllCheckbox.value = true;
    }
};

const filterByDistrict = () => {
    if (selectedDistrict.value) {
        districtFilteredApplications.value = props.applications.filter(
            (application) =>
                application.deceased.district.name === selectedDistrict.value
        );
    } else {
        districtFilteredApplications.value = props.applications;
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

// Handle the "Approve All" action
const approveAll = async () => {
    if (selectedApplications.value.length > 0) {
        try {
            await $inertia.post(
                "/admin/applications/approve-all",
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

// Handle the "Reject All" action
const rejectAll = async () => {
    if (selectedApplications.value.length > 0) {
        try {
            await $inertia.post(
                "/admin/applications/reject-all",
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

// Print the table
const printTable = () => {
    const printContents = document.querySelector(".table-responsive").innerHTML;
    const printWindow = window.open("", "", "width=800,height=600");
    printWindow.document.write(`
        <html>
            <head>
                <title>Print Table</title>
                <style>
                    table {
                        width: 100%;
                        border-collapse: collapse;
                    }
                    th, td {
                        padding: 8px 12px;
                        text-align: left;
                        border-bottom: 1px solid #ddd;
                    }
                    th {
                        background-color: #3A424A;
                        color: white;
                        font-weight: bold;
                    }
                </style>
            </head>
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
        Kilometer: app?.transport?.distance,
        Amount: app?.transport?.transport_cost,
        "Applicant Name": app?.applicant?.name,
        "Applicant Phone": app?.applicant?.mobile,
        Status: app?.status,
        "Date Created": app?.created_at,
    }));

    const worksheet = XLSX.utils.json_to_sheet(data);
    const workbook = XLSX.utils.book_new();
    XLSX.utils.book_append_sheet(workbook, worksheet, "Applications");

    const timestamp = new Date().toISOString().slice(0, 10); // Add timestamp
    XLSX.writeFile(workbook, `Applications_${timestamp}.xlsx`);
};

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
        label: "Paid",
        count: props.statusCounts.Paid || 0,
        bgClass: "bg-[#F2FBFF]",
        textClass: "text-[#00AEFF]",
    },
]);

const deleteApplication = (id) => {
    if (confirm("Are you sure you want to delete this application?")) {
        $inertia.delete(`/applications/${id}`, {
            onSuccess: () => {
                // Optionally, show a success message or refresh the data
            },
        });
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

/* .action-btn {
    width: 120px;
    height: 34px;
    flex-shrink: 0;
    border-radius: 12px;
    border: 1px solid #eee;
    background: #fff;
}

.action-btn:hover {
    background: #e9f4ff;
} */

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

.status-paid {
    background: #e8f4fc;
    color: #2196f3;
}

.custom-btn {
    display: flex;
    justify-content: center;
    align-items: center;
}
</style>
