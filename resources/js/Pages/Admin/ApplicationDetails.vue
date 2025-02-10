<template>
    <q-page padding>
        <div class="grid md:grid-cols-2 gap-4">
            <!-- Back Button -->
            <div class="flex items-center order-1 md:order-none">
                <Link
                    :href="route('admin.application')"
                    size="sm"
                    flat
                    outlined
                    class="flex items-center justify-center"
                >
                    <q-icon name="arrow_back" size="16px" class="q-mr-xs" />
                    <span>Back</span>
                </Link>
            </div>

            <!-- Action Buttons -->
            <div class="flex flex-wrap gap-2 justify-end order-2">
                <q-btn
                    size="sm"
                    flat
                    outlined
                    class="q-btn-custom flex items-center justify-center"
                    style="
                        color: #000;
                        min-width: 100px;
                        height: 40px;
                        border-radius: 8px;
                    "
                    @click="printTable"
                >
                    <q-icon name="print" size="16px" class="q-mr-xs" />
                    <span class="text-xs md:text-sm">Print</span>
                </q-btn>
                <q-btn
                    size="sm"
                    flat
                    outlined
                    class="q-btn-custom flex items-center justify-center"
                    style="
                        color: #000;
                        min-width: 100px;
                        height: 40px;
                        border-radius: 8px;
                    "
                    @click="exportToExcel"
                >
                    <q-icon name="ios_share" size="16px" class="q-mr-xs" />
                    <span class="text-xs md:text-sm">Export</span>
                </q-btn>
            </div>
        </div>



        <!-- Main Content Container -->
        <div class="flex flex-col items-center px-4 md:pr-32">
            <!-- Application Summary Card -->
            <div class="w-full max-w-4xl rounded-[10px] border border-[#EEE] bg-[#E9F4FF] p-4 md:p-5 mt-6">
                <div class="grid md:grid-cols-2 gap-4 text-center">
                    <!-- Left Section -->
                    <div class="flex flex-col items-center">
                        <img src="/image/icon 1.png" alt="Ruang" class="w-12 h-12">
                        <h5 class="text-xl md:text-2xl mt-2">
                            {{ application.applicant.name }}
                        </h5>
                        <p class="mb-4 text-sm">
                            {{ application.deceased.relative.name  }} {{ application.deceased.name }}
                        </p>
                    </div>
                    
                    <!-- Right Section -->
                    <div class="grid md:grid-cols-3 gap-4">
                        <div class="col-span-3 md:col-span-1">
                            <q-separator class="md:hidden" vertical/>
                        </div>
                        <div>
                            <h5 class="font-bold">
                                {{ application?.transport?.distance }}
                            </h5>
                            <p class="text-[#5B656F]">Kilometre</p>
                        </div>
                        <div>
                            <h5 class="font-bold">
                                {{ application?.transport?.vehicle_number }}
                            </h5>
                            <p class="text-[#5B656F]">Motor Reg.</p>
                        </div>
                        <div>
                            <h5 class="font-bold">
                                {{ application?.transport?.transport_cost }}
                            </h5>
                            <p class="text-[#5B656F]">Amount (Rs)</p>
                        </div>
                    </div>
                </div>

                <div class="flex flex-col md:flex-row justify-center items-center gap-4 mt-4">
                    <q-btn
                        v-if="application?.status === 'Pending'"
                        @click="approveApplication(application.id)"
                        label="Approve"
                        size="sm"
                        class="w-full md:w-36"
                        style="
                            color: #fff;
                            height: 40px;
                            border-radius: 8px;
                            border: 1px solid #5b656f;
                            background: #000;
                        "
                    />

                    <q-btn
                        v-if="application?.status === 'Pending'"
                        @click="rejectApplication(application.id)"
                        label="Reject"
                        size="sm"
                        class="w-full md:w-36"
                        style="
                            color: #000;
                            height: 40px;
                            border-radius: 8px;
                            border: 1px solid #5b656f;
                            background: transparent;
                        "
                    />
                </div>
            </div>
        </div>

        <!-- Applicant and Deceased Information -->
        <div class="grid md:grid-cols-2 gap-4 px-4 md:pr-28 mt-6">
            <!-- Deceased Details -->

            <div class="flex flex-col gap-4">
                <div
                    class="border-2 w-full p-4 md:pl-12 md:pt-6 rounded-md"
                >
                    <p
                        class="text-center w-32 h-4 rounded-[20px] bg-[#E9E9E9] mb-4 md:mb-8"
                    >
                        Mitthi Chungchang
                    </p>
                    <div class="space-y-4">
                        <p class="text-[#61646B]">Mitthi pianni leh thla</p>
                        <p>{{ application.deceased.dob }}</p>
                    </div>
                    <div class="leading-[2px] pt-4">
                        <p class="text-[#61646B]">Kum</p>
                        <p>{{ ageAtDeath }} years</p>
                    </div>
                    <div class="leading-[2px] pt-4">
                        <p class="text-[#61646B]">Gender</p>
                        <p>{{ application.deceased.gender }}</p>
                    </div>

                    <div class="leading-[2px] pt-4">
                        <p class="text-[#61646B]">Thih ni leh darkar</p>
                        <p>{{ application.deceased.time_of_death }}</p>
                    </div>
                    <div class="leading-[2px] pt-4">
                        <p class="text-[#61646B]">Thihna hmun</p>
                        <p>{{ application.deceased.place_of_death }}</p>
                    </div>
                    <div class="leading-[2px] pt-4">
                        <p class="text-[#61646B]">District</p>
                        <p>{{ application?.deceased?.district?.name }}</p>
                    </div>
                    <div class="leading-[2px] pt-4">
                        <p class="text-[#61646B]">Veng/Khua</p>
                        <p>{{ application?.deceased?.locality }}</p>
                    </div>
                    <div class="leading-[2px] pt-4">
                        <p class="text-[#61646B]">Assembly Constituency</p>
                        <p>{{ application?.deceased?.constituency.name }}</p>
                    </div>
                </div>
                <div
                    class="border-2 w-full p-4 md:pl-12 md:pt-6 rounded-md"
                >
                    <p
                        class="text-center w-32 h-4 rounded-[20px] bg-[#E9E9E9] mb-4 md:mb-8"
                    >
                        Ruang Phurh Diltu
                    </p>
                    <div class="space-y-4">

                        <div class="leading-[2px]">
                            <p class="text-[#61646B]">Hming</p>
                            <p>{{ application?.applicant?.name }}</p>
                        </div>
                        <div class="leading-[2px] pt-4">
                            <p class="text-[#61646B]">District</p>
                        <p>{{ application?.applicant?.district.name }}</p>
                    </div>
                    <div class="leading-[2px] pt-4">
                        <p class="text-[#61646B]">Veng/Khua</p>
                        <p>{{ application?.applicant?.locality }}</p>
                    </div>
                    <div class="leading-[2px] pt-4">
                        <p class="text-[#61646B]">Phone Number</p>
                        <p>{{ application?.applicant?.mobile }}</p>
                    </div>
                </div>
                </div>
                <div
                    class="border-2 rounded-md w-full p-4 md:pl-12 md:pt-6"
                >
                    <p
                        class="text-center w-32 h-4 rounded-[20px] bg-[#E9E9E9] mb-4 md:mb-8"
                    >
                        Document Thiltel te
                    </p>
                    <div class="flex flex-wrap gap-2">
                        
                    <q-chip
                        v-if="application?.attachment?.id_proof"
                        dense
                        class="transparent text-black"
                        icon="check_circle"
                        clickable
                        @click="
                            handleOpenFile(
                                '/storage/' + application.attachment.id_proof
                            )
                        "
                    >
                        Mitthi Aadhar card/Voter ID/Birth Certificate
                    </q-chip>
                    <q-chip
                        v-if="application?.attachment?.receipt"
                        dense
                        class="transparent text-black"
                        icon="check_circle"
                        clickable
                        @click="
                            handleOpenFile(
                                '/storage/' + application.attachment.receipt
                            )
                        "
                    >
                        Motor hman man Voucher/Receipt
                    </q-chip>
                    <q-chip
                        v-if="application?.attachment?.death_certificate"
                        dense
                        class="transparent text-black"
                        icon="check_circle"
                        clickable
                        @click="
                            handleOpenFile(
                                '/storage/' +
                                    application.attachment.death_certificate
                            )
                        "
                    >
                        Death Certificate
                    </q-chip>
                    <q-chip
                        v-if="application?.attachment?.additional_document"
                        dense
                        class="transparent text-black"
                        icon="check_circle"
                        clickable
                        @click="
                            handleOpenFile(
                                '/storage/' +
                                    application.attachment.additional_document
                            )
                        "
                    >
                        Diltu Aadhar card/voter ID
                    </q-chip>
                    
                </div>
                </div>
            </div>

            <div class="flex flex-col gap-4">
                <div
                    class="border-2 w-full p-4 md:pl-12 md:pt-6 rounded-md"
                >
                    <p
                        class="text-center w-48 h-4 rounded-[20px] bg-[#E9E9E9] mb-4 md:mb-8"
                    >
                        Ruang Phurh leh Motor Chungchang
                    </p>
                    <div class="space-y-4">
                    <p class="pt-5">Ruang phurh tanna</p>
                    <div class="pl-4">
                        <div class="leading-[2px]">
                            <p class="text-[#61646B]">District</p>
                            <p>
                                {{
                                    application?.transport?.source_district.name
                                }}
                            </p>
                        </div>
                        <div class="leading-[2px] pt-4">
                            <p class="text-[#61646B]">Veng/Khua</p>
                            <p>{{ application?.transport?.source_locality }}</p>
                        </div>
                    </div>
                    <p class="pt-5">Ruang dahna tur hmun</p>
                    <div class="pl-4">
                        <div class="leading-[2px]">
                            <p class="text-[#61646B]">District</p>
                            <p>
                                {{
                                    application?.transport?.destination_district
                                        .name
                                }}
                            </p>
                        </div>
                        <div class="leading-[2px] pt-4">
                            <p class="text-[#61646B]">Veng/Khua</p>
                            <p>
                                {{
                                    application?.transport?.destination_locality
                                }}
                            </p>
                        </div>
                    </div>

                    <div class="leading-[2px] pt-4">
                        <p class="text-[#61646B]">Kilometer</p>
                        <p>{{ application?.transport?.distance }}</p>
                    </div>

                    <p class="pt-5">Ruang phurhna motor</p>
                    <div class="pl-4">
                        <div class="leading-[2px]">
                            <p class="text-[#61646B]">
                                Motor registration number
                            </p>
                            <p>{{ application?.transport?.vehicle_number }}</p>
                        </div>

                        <div class="leading-[2px] pt-4">
                            <p class="text-[#61646B]">
                                Motor neitu/khalhtu hming
                            </p>
                            <p>{{ application?.transport?.driver_name }}</p>
                        </div>
                        <div class="leading-[2px] pt-4">
                            <p class="text-[#61646B]">Phone Number</p>
                            <p>{{ application?.transport?.driver_phone }}</p>
                        </div>
                        <div class="leading-[2px] pt-4">
                            <p class="text-[#61646B]">Motor saung (Rs.)</p>
                            <p>{{ application?.transport?.transport_cost }}</p>
                        </div>
                    </div>
                </div>
                </div>
                <div
                    class="border-2 rounded-md w-full p-4 md:pl-12 md:pt-6"
                >
                    <p
                        class="text-center w-32 h-4 rounded-[20px] bg-[#E9E9E9] mb-4 md:mb-8"
                    >
                        Bank Details
                    </p>
                    <div class="space-y-4">
                    <div class="leading-[2px]">
                        <p class="text-[#61646B]">Bank hming</p>
                        <p>{{ application?.applicant?.bank_name }}</p>
                    </div>
                    <div class="leading-[2px] pt-4">
                        <p class="text-[#61646B]">Bank account number</p>
                        <p>{{ application?.applicant?.account_no }}</p>
                    </div>
                    <div class="leading-[2px] pt-4">
                        <p class="text-[#61646B]">IFSC Code</p>
                        <p>{{ application?.applicant?.ifsc_code }}</p>
                    </div>
                </div>
                </div>
            </div>
        </div>
        <hr class="my-4 border-border" />
        <div class="flex flex-col md:flex-row justify-center items-center gap-4 my-6">
            <q-btn
                v-if="
                    props.application && props.application.status === 'Pending'
                "
                @click="approveApplication(props.application.id)"
                label="Approve"
                size="sm"
                style="
                    color: #fff;
                    width: 144px;
                    height: 40px;
                    flex-shrink: 0;
                    border-radius: 8px;
                    border: 1px solid #5b656f;
                    background: #000;
                "
            />

            <q-btn
                v-if="
                    props.application && props.application.status === 'Pending'
                "
                @click="rejectApplication(props.application.id)"
                label="Reject"
                size="sm"
                style="
                    color: #000;
                    width: 144px;
                    height: 40px;
                    flex-shrink: 0;
                    border-radius: 8px;
                    border: 1px solid #5b656f;
                    background: transparent;
                "
            />
        </div>
    </q-page>
</template>

<script setup>
import { computed } from "vue";
import AdminLayout from "@/Layouts/AdminLayout.vue";
import { router as $inertia, Link } from "@inertiajs/vue3";

defineOptions({
    layout: AdminLayout,
});

// Props passed from the parent component (Inertia)
const props = defineProps({
    application: Object,
});

const approveApplication = async (applicationId) => {
    if (confirm("Are you sure you want to approve this application?")) {
        try {
            await $inertia.post(`/admin/application/${applicationId}/approve`);
        } catch (error) {
            console.error(error);
        }
    }
};

const rejectApplication = async (applicationId) => {
    if (confirm("Are you sure you want to reject this application?")) {
        try {
            await $inertia.post(`/admin/application/${applicationId}/reject`);
        } catch (error) {
            console.error(error);
        }
    }
};
const handleOpenFile = (fileUrl) => {
    if (fileUrl) {
        // Open the file URL in a new tab
        window.open(fileUrl, "_blank");
    } else {
        $q.notify({
            type: "negative",
            message: "File not found",
        });
    }
};

// Function to calculate the age at death
const calculateAgeAtDeath = (dob, deathDate) => {
    const birthDate = new Date(dob);
    const death = new Date(deathDate);

    const age = death.getFullYear() - birthDate.getFullYear();
    const isBeforeBirthday =
        death.getMonth() < birthDate.getMonth() ||
        (death.getMonth() === birthDate.getMonth() &&
            death.getDate() < birthDate.getDate());

    return isBeforeBirthday ? age - 1 : age;
};

// Calculating age using a computed property
const ageAtDeath = computed(() =>
    calculateAgeAtDeath(
        props.application.deceased.dob,
        props.application.deceased.time_of_death
    )
);
</script>
<style>
/* Add any necessary custom styles here */
@media (max-width: 768px) {
    .q-page {
        padding: 8px;
    }
    
    .grid > div {
        padding-left: 0;
        padding-right: 0;
    }
    
    .rounded-md {
        border-radius: 8px;
    }
}
</style>