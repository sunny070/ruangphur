<template>
    <q-page padding>
        <Head title="Bills" />
        <!-- Flash Success/Error Messages -->
        <q-banner v-if="flash.success" class="bg-green-4 text-white" dense>
            {{ flash.success }}
        </q-banner>
        <q-banner v-if="flash.error" class="bg-red-4 text-white" dense>
            {{ flash.error }}
        </q-banner>
        <h1 class="text-2xl font-bold mb-6">Bill Payment</h1>
        <!--Status Tab -->
        <div class="q-my-md grid grid-cols-1 md:grid-cols-2 gap-4">
            <!-- <div class="flex flex-col sm:flex-row gap-2">
                <q-btn
                    size=""
                    label="Bill Pek tur"
                    flat
                    :class="
                        currentFilter === 'Approved'
                            ? 'active-button'
                            : 'inactive-button'
                    "
                    @click="setFilter('Approved')"
                />
                <q-btn
                    label="Deposit to Bank"
                    flat
                    :class="
                        currentFilter === 'Processed'
                            ? 'active-button'
                            : 'inactive-button'
                    "
                    @click="setFilter('Processed')"
                />

                <q-btn
                    label="Rejected"
                    flat
                    :class="
                        currentFilter === 'Rejected'
                            ? 'active-button'
                            : 'inactive-button'
                    "
                    @click="setFilter('Rejected')"
                />
            </div> -->
            
        </div>
        <hr class="my-4 border-border bg-[#F0F0F0]" />
        <!-- Status Action -->

        <div class="grid grid-cols-1 md:grid-cols-2 gap-4">
            <div>
                <!-- Action buttons (only visible when at least one checkbox is selected) -->
                <div class="">
                <q-input color="dark"
                    rounded="2lg"
                    outlined
                    dense
                    bottom-slots
                    v-model="searchQuery"
                    label="Search"
                    class="w-full max-w-md"
                >
                    <template v-slot:append>
                        <q-icon
                            v-if="searchQuery !== ''"
                            name="close"
                            @click="searchQuery = ''"
                            class="cursor-pointer"
                        />
                        <q-icon name="search" />
                    </template>
                </q-input>
            </div>
            </div>
            <div class="flex justify-end pr-16">
                <q-btn
                    size="sm"
                    flat
                    outlined
                    class="q-btn-custom flex items-center justify-center"
                    style="
                        color: #000;
                        width: 100px;
                        height: 40px;
                        flex-shrink: 0;
                        border-radius: 8px;
                        background: transparent;
                    "
                    @click="printTable"
                >
                    <q-icon name="print" size="16px" class="q-mr-xs" />
                    <span>Print</span>
                </q-btn>
                <!-- <q-btn
                    size="sm"
                    flat
                    outlined
                    class="q-btn-custom flex items-center justify-center"
                    style="
                        color: #000;
                        width: 100px;
                        height: 40px;
                        flex-shrink: 0;
                        border-radius: 8px;

                        background: transparent;
                    "
                    @click="exportToExcel"
                >
                    <q-icon name="ios_share" size="16px" class="q-mr-xs" />
                    <span>Export</span>
                </q-btn> -->
            </div>
        </div>
        <!-- Applications Table -->
        <div ref="printSection" class="rounded-lg overflow-x-auto table-responsive">
            <table class="q-table q-table__grid q-mb-lg">
                <thead
                    class="bg-[#3A424A] text-white font-bold h-[30px] w-full text-[11px]"
                >
                    <tr class="bg-[#3A424A] text-white">
                        
                        <th>Sl.No.</th>
                        <th>APPLICATION NO.</th>
                        <th>APPLICANT NAME</th>
                        <th>ADDRESS</th>
                        <th>CONTACT No.</th>
                        <th>MITTHI KHUA</th>
                        <th>PLACE OF DEATH</th>

                        <th>KILOMETER</th>
                        <th>AMOUNT CLAIMED</th>

                        <th>ACCOUNT No. OF CLAIMANT</th>
                        <th>IFSC</th>
                        <th>STATUS</th>
                        <th>DIL NI</th>
                        <th class="no-print">ACTIONS</th>
                        <th class="print-only">Signature</th>
                        <!-- New Signature Column -->
                    </tr>
                </thead>
                <tbody v-if="filteredApplications.length">
                    <tr
                        v-for="(application, index) in filteredApplications"
                        :key="application.id"
                    >
                        
                        <td>{{ index + 1 }}</td>
                        <!-- Serial number, starting from 1 -->
                        <td>{{ application?.application_no }}</td>
                        <td>{{ application?.applicant?.name }}</td>
                        <td>{{ application?.applicant?.locality }}</td>
                        <td>{{ application?.applicant?.mobile }}</td>
                        <td>{{ application?.deceased?.district?.name }}</td>
                        <td>{{ application?.deceased?.place_of_death }}</td>
                        <td>{{ application?.transport?.distance }}</td>
                        <td>{{ application?.transport?.transport_cost }}</td>
                        <td>{{ application?.applicant?.account_no }}</td>
                        <td>{{ application?.applicant?.ifsc_code }}</td>
                        <td>
                            <div
                                :class="{
                                    'status-incoming':
                                        application?.status === 'Pending',
                                    'status-rejected':
                                        application?.status === 'Rejected',
                                    'status-approved':
                                        application?.status === 'Approved',
                                    'status-paid':
                                        application?.status === 'Processed',
                                }"
                                class="status-badge"
                            >
                                {{ application?.status }}
                            </div>
                        </td>
                        <td>{{ formatDate(application?.created_at) }}</td>
                        <td class="no-print">
                            <q-btn flat icon="more_vert" :style="buttonStyle" />
                            <q-menu>
                                <q-list>
                                    <q-item
                                        clickable
                                        class="action-btn"
                                        @click="viewApplication(application.id)"
                                    >
                                        <q-item-section avatar>
                                            <q-icon
                                                size="sm"
                                                name="visibility"
                                            />
                                        </q-item-section>
                                        <q-item-section>View</q-item-section>
                                    </q-item>
                                    <!-- <q-item
                                        class="action-btn"
                                        @click="editApplication(application.id)"
                                    >
                                    <q-item-section avatar>
                                            <q-icon name="edit" />
                                        </q-item-section>
                                        <q-item-section
                                            >Edit/Update</q-item-section
                                        >
                                    </q-item> -->
                                    <q-item
                                        clickable
                                        class="action-btn"
                                        @click="
                                            deleteApplication(application.id)
                                        "
                                    >
                                        <q-item-section avatar>
                                            <q-icon name="delete" />
                                        </q-item-section>
                                        <q-item-section>Delete</q-item-section>
                                    </q-item>
                                </q-list>
                            </q-menu>
                        </td>
                        <td class="print-only"></td>
                        <!-- Empty Signature Column -->
                    </tr>
                </tbody>
            </table>
        </div>
    </q-page>
</template>

<script setup>
import { defineProps, ref, computed, onMounted } from "vue";
import { router as $inertia,Head } from "@inertiajs/vue3";
import AdminLayout from "@/Layouts/AdminLayout.vue";
import dayjs from "dayjs";
import * as XLSX from "xlsx"; // Import SheetJS library

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
const formatDate = (date) => {
    return dayjs(date).format("dddd, MMMM D, YYYY h:mm A"); // Change this to your desired format
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
        filtered = filtered.filter(
            (application) => application.status === currentFilter.value
        );
    }

    // Apply search filter
    if (searchQuery.value) {
        filtered = filtered.filter(
            (application) =>
                application.application_no
                    ?.toString()
                    .includes(searchQuery.value) ||
                application.deceased?.name
                    ?.toLowerCase()
                    .includes(searchQuery.value.toLowerCase()) ||
                application.applicant?.name
                    ?.toLowerCase()
                    .includes(searchQuery.value.toLowerCase()) ||
                application.deceased?.district?.name
                    ?.toLowerCase()
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
    $inertia.get(route("bill.show", applicationId));
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
    if (
        selectedApplications.value.length === filteredApplications.value.length
    ) {
        selectedApplications.value = [];
    } else {
        selectedApplications.value = filteredApplications.value.map(
            (application) => application.id
        );
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
            await $inertia.post(
                "/admin/bill/paymet-all",
                {
                    ids: selectedApplications.value,
                },
                {
                    onSuccess: () => {
                        selectedApplications.value = [];
                    },
                }
            );
        } catch (error) {
            console.error("Error processing payments:", error);
        }
    }
};

// Handle the "Reject All" action
const rejectAll = async () => {
    if (selectedApplications.value.length > 0) {
        try {
            await $inertia.post(
                "/admin/bill/reject-all",
                {
                    ids: selectedApplications.value,
                },
                {
                    onSuccess: () => {
                        selectedApplications.value = [];
                    },
                }
            );
        } catch (error) {
            console.error("Error rejecting applications:", error);
        }
    }
};

const printTable = () => {
    // Clone the table element
    const table = document.querySelector(".q-table");
    const clone = table.cloneNode(true);

    // Remove the checkbox and action columns
    const noPrintColumns = clone.querySelectorAll(".no-print");
    noPrintColumns.forEach((column) => column.remove());

    // Create a new window and write the modified table to it
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
            <body>
                ${clone.outerHTML}
            </body>
        </html>
    `);
    printWindow.document.close();
    printWindow.print();
};

const exportToExcel = () => {
    const data = filteredApplications.value.map((app) => ({
        "Applicant NO.": app?.application_no,
        "APPLICANT NAME.": app?.applicant?.name,
        "ADDRESS.": app?.applicant?.locality,
        "CONTACT No.": app?.applicant?.mobile,
        "MITTHI KHUA": app?.deceased?.district?.name,
        "PLACE OF DEATH.": app?.deceased?.place_of_death,

        " KILOMETER.": app?.transport?.distance,
        "AMOUNT CLAIMED": app?.transport?.transport_cost,
        "ACCOUNT No. OF CLAIMANT": app?.applicant?.account_no,
        IFSC: app?.applicant?.ifsc_code,

        " Status": app?.status,
        "Date Created": app?.created_at,
        Signature: "",
    }));

    const worksheet = XLSX.utils.json_to_sheet(data);
    const workbook = XLSX.utils.book_new();
    XLSX.utils.book_append_sheet(workbook, worksheet, "Applications");

    const timestamp = new Date().toISOString().slice(0, 10); // Add timestamp
    XLSX.writeFile(workbook, `Applications_${timestamp}.xlsx`);
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
    height: auto;
    background: #3a424a;
    color: #ffffff;
    border-radius: 8px;
    border: 1px solid #5b656f;
    font-size: 12px;
}

.inactive-button {
    width: 120px;
    height: auto;

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
