<template>
    <q-page padding>
        <Head title="Application"/>
        <!-- Flash Success/Error Messages -->
        <q-banner v-if="flash.success" class="bg-green-4 text-white" dense>
            {{ flash.success }}
        </q-banner>
        <q-banner v-if="flash.error" class="bg-red-4 text-white" dense>
            {{ flash.error }}
        </q-banner>

        <!-- Status Counts -->
        <div
            class="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-5 gap-4"
        >
            <div
                v-for="status in statusCards"
                :key="status.label"
                :class="`w-full h-[78px] ${status.bgClass} ${status.textClass} p-4`"
            >
                <h6 class="text-lg sm:text-base font-black">
                    {{ status.count }}
                </h6>
                <p class="text-xs sm:text-sm">{{ status.label }}</p>
            </div>
        </div>

        <!-- Status Tab -->
        <!-- <div class="q-my-md grid grid-cols-1 md:grid-cols-2 gap-4">
            <div class="q-my-md flex gap-16">
                <q-btn label="All" flat :class="currentFilter === 'All'
                        ? 'active-button'
                        : 'inactive-button'
                    " @click="setFilter('All')" />
                <q-btn label="Incoming" flat :class="currentFilter === 'Incoming'
                        ? 'active-button'
                        : 'inactive-button'
                    " @click="setFilter('Incoming')" />
                <q-btn label="Verified" flat :class="currentFilter === 'Verified'
                        ? 'active-button'
                        : 'inactive-button'
                    " @click="setFilter('Verified')" />
                <q-btn label="Rejected" flat :class="currentFilter === 'Rejected'
                        ? 'active-button'
                        : 'inactive-button'
                    " @click="setFilter('Rejected')" />
            </div>
        </div> -->

        <!-- Status Action -->

        <div class="grid grid-cols-1 md:grid-cols-2 gap-4 pt-9">
            <div>
                <!-- Action buttons (only visible when at least one checkbox is selected) -->
                <div class="">
                    <q-input
                        rounded="lg"
                        outlined
                        dense
                        bottom-slots
                        v-model="searchQuery"
                        label="Search"
                        color="black"
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
                    @click="printTable"
                >
                    <q-icon name="print" size="16px" class="q-mr-xs" />
                    <span>Print</span>
                </q-btn>
                <!-- <q-btn size="sm" flat outlined class="q-btn-custom flex items-center justify-center"
                    @click="exportTable">
                    <q-icon name="ios_share" size="16px" class="q-mr-xs" />
                    <span>Export</span>
                </q-btn> -->
                <q-select
                    color="dark"
                    style="
                        color: #000;
                        width: 128px;
                        height: 40px;
                        flex-shrink: 0;
                        border-radius: 8px;
                        border: 1px solid black;
                        background: transparent;
                    "
                    v-model="selectedDistrict"
                    :options="districtOptions"
                    label="Select District"
                    outlined
                    dense
                    class="q-mb-md"
                    @input="filterByDistrict"
                />
            </div>
        </div>

        <!-- Applications Table -->
        <div class="table-responsive">
            <table class="q-table q-table__grid q-mb-lg">
                <thead
                    class="bg-[#3A424A] text-white font-bold h-[30px] w-full text-[11px]"
                >
                    <tr>
                        <th class="no_print">
                            <!-- <input type="checkbox" v-model="selectAllCheckbox" @change="toggleSelectAll" /> -->
                        </th>
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
                        <th class="print-only">SIGNATURE</th>
                        <!-- New Signature Column -->
                    </tr>
                </thead>
                <tbody>
                    <!-- {{filteredApplications  }} -->
                    <tr
                        v-for="(application, index) in filteredApplications"
                        :key="application.id"
                    >
                        <td>
                            <input
                                class="no-print"
                                type="checkbox"
                                v-model="selectedApplications"
                                :value="application.id"
                            />
                        </td>
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
                                        application?.status === 'Verified',
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
                                    <q-item clickable @click="viewApplication(application.id)">
                                        <q-item-section avatar>
                                            <q-icon size="sm" name="visibility" />
                                        </q-item-section>
                                        <q-item-section>View</q-item-section>
                                    </q-item>

                                    <!-- <q-item clickable @click="openEditDialog(application)">
                                        <q-item-section avatar>
                                            <q-icon name="edit" />
                                        </q-item-section>
                                        <q-item-section>Edit/Update</q-item-section>
                                    </q-item> -->

                                    <q-item clickable @click="
                                        deleteApplication(application.id)
                                        ">
                                        <q-item-section avatar>
                                            <q-icon name="delete" />
                                        </q-item-section>
                                        <q-item-section>Delete</q-item-section>
                                    </q-item>
                                    <!-- <q-item clickable class="action-btn" @click="viewMap(application.transport)">
                                        <q-item-section avatar>
                                            <q-icon name="map" />
                                        </q-item-section>
                                        <q-item-section>View Map</q-item-section>
                                    </q-item> -->
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
import { router as $inertia } from "@inertiajs/vue3";
import * as XLSX from "xlsx";
import AdminLayout from "@/Layouts/AdminLayout.vue";
import dayjs from "dayjs";
import { Head } from "@inertiajs/vue3";

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

const selectedApplications = ref([]);
const selectAllCheckbox = ref(false);
const formatDate = (date) => {
    return dayjs(date).format("dddd, MMMM D, YYYY h:mm A"); // Change this to your desired format
};
const showActionButtons = computed(() => selectedApplications.value.length > 0);
const hasPendingSelectedApplications = computed(() => {
    return selectedApplications.value.some((appId) => {
        const application = props.applications.find((app) => app.id === appId);
        return application?.status === "Pending";
    });
});
const toggleSelectAll = () => {
    if (
        selectedApplications.value.length === filteredApplications.value.length
    ) {
        selectedApplications.value = [];
        selectAllCheckbox.value = false;
    } else {
        selectedApplications.value = filteredApplications.value.map(
            (app) => app.id
        );
        selectAllCheckbox.value = true;
    }
};

const filterByDistrict = () => {
    if (selectedDistrict.value) {
        filteredApplications.value = props.applications.filter(
            (application) =>
                application.deceased.district.name === selectedDistrict.value
        );
    } else {
        filteredApplications.value = props.applications;
    }
};

onMounted(() => {
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
});
const filteredApplications = computed(() => {
    let filtered = props.applications;

    // Filter by district
    if (selectedDistrict.value) {
        filtered = filtered.filter(
            (application) =>
                application.deceased.district.name === selectedDistrict.value
        );
    }

    // Filter by status

    // Filter by search query
    if (searchQuery.value) {
        const query = searchQuery.value.toLowerCase();
        filtered = filtered.filter(
            (application) =>
                application.application_no
                    .toString()
                    .toLowerCase()
                    .includes(query) ||
                application.applicant.name.toLowerCase().includes(query) ||
                application.deceased.name.toLowerCase().includes(query) ||
                application.applicant.mobile.toString().includes(query) ||
                application.deceased.district.name.toLowerCase().includes(query)
        );
    }

    return filtered;
});

const approveAll = async () => {
    const pendingIds = selectedApplications.value.filter((appId) => {
        const app = props.applications.find((a) => a.id === appId);
        return app?.status === "Pending";
    });

    if (pendingIds.length === 0) return;

    // Send only pending IDs to backend
    await $inertia.post("/verifier/applications/verify-all", {
        ids: pendingIds,
    });
};

// const approveAll = async () => {
//     if (selectedApplications.value.length > 0) {
//         try {
//             await $inertia.post(
//                 "/verifier/applications/verify-all",
//                 {
//                     ids: selectedApplications.value,
//                 },
//                 {
//                     onSuccess: () => {
//                         // Optionally, show a success message or refresh the data
//                         selectedApplications.value = []; // Clear the selection
//                     },
//                 }
//             );
//         } catch (error) {
//             console.error("Error approving applications:", error);
//         }
//     }
// };

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
    $inertia.get(route("verifier.applications.show", applicationId));
};

const deleteApplication = (id) => {
    if (confirm("Are you sure you want to delete this application?")) {
        $inertia.delete(`/verifier/applications/${id}`, {
            onSuccess: () => {
                // Optionally, show a success message or refresh the data
            },
        });
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

@media print {
    .no-print {
        display: none;
    }

    .print-only {
        display: block !important; /* Show the signature column when printing */
    }
}

.print-only {
    display: none; /* Hide the signature column by default */
}
</style>
