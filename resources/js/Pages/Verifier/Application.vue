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
            <table class="q-table q-table__grid q-mb-lg" >
                <thead
                    class="bg-[#3A424A] text-white font-bold h-[30px] w-full text-[11px]"
                >
                    <tr>
                        
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
                        <!-- <td>
                            <input
                                class="no-print"
                                type="checkbox"
                                v-model="selectedApplications"
                                :value="application.id"
                            />
                        </td> -->
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

                                    <q-item clickable @click="openEditDialog(application)">
                                        <q-item-section avatar>
                                            <q-icon name="edit" />
                                        </q-item-section>
                                        <q-item-section>Edit/Update</q-item-section>
                                    </q-item>

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
                            <q-select v-model="editableApplication.deceased.district.name
                                " :options="dropdowns?.districts" option-label="name" option-value="id" label="District"
                                outlined dense class="q-mb-md" />
                            <q-input v-model="editableApplication.deceased.locality" label="Locality" outlined dense
                                class="q-mb-md" />

                            <q-select v-model="editableApplication.deceased.constituency
                                " :options="dropdowns.constituencies" option-label="name" option-value="id"
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
                            <q-select v-model="editableApplication.transport
                                    .source_district
                                " :options="dropdowns.districts" option-label="name" option-value="id"
                                label="Ruang phurh tanna tur District awmna" outlined dense class="q-mb-md" />
                            <q-input ref="sourceInput" v-model="editableApplication.transport.source_locality"
                                label="Source Locality" outlined dense />
                            <!-- <q-input
                                v-model="
                                    editableApplication.transport
                                        .source_locality
                                "
                                label="Ruang chhuah veng/khua thlanna"
                                outlined
                                dense
                                class="q-mb-md"
                            /> -->

                            <q-select v-model="editableApplication.transport
                                    .destination_district
                                " :options="dropdowns.districts" option-label="name" option-value="id"
                                label="Ruang zalhna tur District awmna" outlined dense class="q-mb-md" />

                            <q-input ref="destinationInput" v-model="editableApplication.transport.destination_locality"
                                label="Destination Locality" outlined dense />

                            <!-- <q-input
                                v-model="
                                    editableApplication.transport
                                        .destination_locality
                                "
                                label="Ruang zalhna veng/khua thlanna"
                                outlined
                                dense
                                class="q-mb-md"
                            /> -->
                            <div class="mt-4" style="height: 200px">
                                <TransportRouteMap :transport="editableApplication.transport"
                                    @update:source-locality="val => editableApplication.transport.source_locality = val"
                                    @update:destination-locality="val => editableApplication.transport.destination_locality = val"
                                    @update:distance="val => editableApplication.transport.distance = val"
                                    @update:transport-cost="val => editableApplication.transport.transport_cost = val"
                                    @maps-loaded="initAutocomplete" />
                            </div>
                            <q-input v-model="editableApplication.transport.distance" label="Distance (Km)" outlined
                                dense class="q-mb-md pt-[400px]" />
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
                            <q-select v-model="editableApplication.applicant.district.name
                                " :options="dropdowns.districts" option-label="name" option-value="id"
                                label="Ruang phurhna man diltu district" outlined dense class="q-mb-md" />
                            <q-input v-model="editableApplication.applicant.locality"
                                label="Ruang phurhna man diltu veng/khua" outlined dense class="q-mb-md" />
                            <q-input v-model="editableApplication.applicant.bank_name
                                " label="Bank hming" outlined dense class="q-mb-md" />

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
        <!-- New Map Dialog -->
        <q-dialog v-model="mapDialog" maximized>
            <q-card>
                <q-card-section>
                    <div class="text-h6">Transport Route Map</div>
                </q-card-section>

                <div class="mt-4" style="height: 400px; position: relative">
                    <TransportRouteMap v-if="editableApplication.transport?.source_lat"
                        :transport="editableApplication.transport" @route-error="handleRouteError" class="h-full"
                        style="height: 100%; width: 100%" />
                    <div v-else class="absolute-center text-grey">
                        No location data available
                    </div>
                </div>
                <q-card-actions align="right">
                    <q-btn flat label="Close" color="primary" v-close-popup />
                </q-card-actions>
            </q-card>
        </q-dialog>


    </q-page>
</template>

<script setup>
import { defineProps, ref, computed, onMounted } from "vue";
import { router as $inertia } from "@inertiajs/vue3";
import { router } from "@inertiajs/vue3";
import * as XLSX from "xlsx";
import AdminLayout from "@/Layouts/AdminLayout.vue";
import dayjs from "dayjs";
import TransportRouteMap from "@/Components/TransportRouteMap.vue";

defineOptions({
    layout: AdminLayout,
});

const props = defineProps({
    applications: Array,
    statusCounts: Object,
    flash: Object,
    dropdowns: Object,
});

const editDialog = ref(false);

const selectedDistrict = ref(null);
const districtOptions = ref([]);
const searchQuery = ref("");



const formatDate = (date) => {
    return dayjs(date).format("dddd, MMMM D, YYYY h:mm A"); // Change this to your desired format
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

const currentStep = ref(1);
const editableApplication = ref({
    deceased: {},
    transport: {},
    applicant: {},
});

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

const openEditDialog = (application) => {
    editableApplication.value = {
        ...application,
        transport: {
            ...application.transport,
            source_lat: Number(application.transport?.source_lat) || 23.1645,
            source_lng: Number(application.transport?.source_lng) || 92.9376,
            destination_lat:
                Number(application.transport?.destination_lat) || 23.1645,
            destination_lng:
                Number(application.transport?.destination_lng) || 92.9376,
        },
    };
    currentStep.value = 1;
    editDialog.value = true;
};

const handleSubmit = () => {
    // if (routeError.value) {
    //     alert("Please fix route errors before submitting");
    //     return;
    // }
    router.put(route('applications.update',editableApplication.value),{
            onSuccess: () => {
                console.log("success");
                editDialog.value = false;
            },
            onFinish: () => {
                console.log("success");
                editDialog.value = false;
            }
        });
        editDialog.value = false;
};

// const handleSubmit = () => {
//     if (routeError.value) {
//         alert("Please fix route errors before submitting");
//         return;
//     }
//     $inertia.put(
//         `/application/${editableApplication.value.id}`,
//         editableApplication.value,
//         {
//             onSuccess: () => {
//                 editDialog.value = false;
//             },
//         }
//     );
// };
const nextStep = () => {
    if (currentStep.value < 4) currentStep.value++;
};
const prevStep = () => {
    if (currentStep.value > 1) currentStep.value--;
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
    border-radius: 5px;
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
