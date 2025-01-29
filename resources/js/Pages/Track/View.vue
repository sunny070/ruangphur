<template>
    <q-page padding>
        <div class="flex items-center flex-col">
            <div
                class="w-[845px] h-[263px] flex-shrink-0 rounded-[10px] border border-[#EEE] bg-[#E9F4FF] p-5 mt-6"
            >
                <div class="flex flex-col text-center">
                    <h5 class="text-2xl">
                        {{ application.applicant.name }}
                    </h5>

                    <p class="mb-4 text-sm">
                        s/o {{ application.deceased.name }}
                    </p>

                    <div class="grid md:grid-cols-3">
                        <div>
                            <h5 class="text-bold">
                                {{ application.transport.distance }}
                            </h5>
                            <p class="text-[#5B656F]">Kilometre</p>
                        </div>
                        <div>
                            <h5 class="text-bold">
                                {{ application.transport.vehicle_number }}
                            </h5>
                            <p class="text-[#5B656F]">Motor Reg.</p>
                        </div>
                        <div>
                            <h5 class="text-bold">
                                {{ application.transport.transport_cost }}
                            </h5>
                            <p class="text-[#5B656F]">Amount (Rs)</p>
                        </div>
                    </div>
                </div>
            </div>
        </div>

        <!-- {{ application.deceased.district?.constituency }} -->
        <div
            class="grid md:grid-cols-2 md:ml-[218px] md:mr-[218px] lg:ml-[500px] lg:mr-[500px]"
        >
            <div class="flex flex-col gap-3">
                <div class="border-2 w-[413px] h-[641px] p-14 rounded-md">
                    <p
                        class="text-center w-[128px] h-[17px] flex-shrink-0 rounded-[20px] bg-[#E9E9E9] mb-8"
                    >
                        Mitthi Chungchang
                    </p>
                    <div class="leading-[2px]">
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
                        <p>{{ application.deceased.district.name }}</p>
                    </div>
                    <div class="leading-[2px] pt-4">
                        <p class="text-[#61646B]">Veng/Khua</p>
                        <p>{{ application.deceased.locality }}</p>
                    </div>
                    <div class="leading-[2px] pt-4">
                        <p class="text-[#61646B]">Assembly Constituency</p>
                        <p>
                            {{ application.deceased.constituency?.name }}
                        </p>
                    </div>
                </div>

                <div class="border-2 w-[413px] h-[836px] p-14 rounded-md">
                    <p
                        class="text-center w-[242px] h-[17px] flex-shrink-0 rounded-[20px] bg-[#E9E9E9] mb-8"
                    >
                        Ruang Phurh leh Motor Chungchang
                    </p>
                    <p class="mb-8">Ruang phurh tanna</p>
                    <div class="leading-[2px]">
                        <p class="text-[#61646B]">District</p>
                        <p>{{ application.transport.source_district.name }}</p>
                    </div>
                    <div class="leading-[2px] pt-4">
                        <p class="text-[#61646B]">Veng/Khua</p>
                        <p>{{ application.transport.source_locality }}</p>
                    </div>
                    <p class="mb-8 mt-8">Ruang dahna tur hmun</p>
                    <div class="leading-[2px] pt-4">
                        <p class="text-[#61646B]">District</p>
                        <p>
                            {{
                                application.transport.destination_district.name
                            }}
                        </p>
                    </div>
                    <div class="pt-4">
                        <p class="text-[#61646B]">Veng/Khua</p>
                        <p>
                            {{ application.transport.destination_locality }}
                        </p>
                    </div>

                    <div class="leading-[2px] pt-4">
                        <p class="text-[#61646B]">Kilometer</p>
                        <p>{{ application.transport.distance }}</p>
                    </div>

                    <p class="mb-8 mt-8">Ruang phurhna motor</p>
                    <div class="leading-[2px] pt-4">
                        <p class="text-[#61646B]">Motor registration number</p>
                        <p>{{ application.transport.vehicle_number }}</p>
                    </div>
                    <div class="leading-[2px] pt-4">
                        <p class="text-[#61646B]">Motor hming</p>
                        <p>{{ application.transport.vehicle_name }}</p>
                    </div>
                    <div class="leading-[2px] pt-4">
                        <p class="text-[#61646B]">Motor neitu/khalhtu hming</p>
                        <p>{{ application.transport.driver_name }}</p>
                    </div>
                    <div class="leading-[2px] pt-4">
                        <p class="text-[#61646B]">
                            Motor neitu/khalhtu phone number
                        </p>
                        <p>{{ application.transport.driver_phone }}</p>
                    </div>
                    <div class="leading-[2px] pt-4">
                        <p class="text-[#61646B]">Motor hman man (Rs)</p>
                        <p>{{ application.transport.transport_cost }}</p>
                    </div>
                </div>
                <q-btn
                    class="bg-black text-white rounded-md q-py-sm q-px-md mt-24"
                    style="width: 192px; height: 48px"
                    @click="goToTrackPage"
                >
                    Back to Track
                </q-btn>
            </div>
            <div class="flex flex-col gap-3">
                <div class="border-2 w-[413px] h-[337px] p-14 rounded-md">
                    <p
                        class="text-center w-[128px] h-[17px] flex-shrink-0 rounded-[20px] bg-[#E9E9E9] mb-8"
                    >
                        Ruang Phurh Diltu
                    </p>
                    <div class="leading-[2px]">
                        <p class="text-[#61646B]">Hming</p>
                        <p>{{ application?.applicant?.name }}</p>
                    </div>
                    <div class="leading-[2px] pt-4">
                        <p class="text-[#61646B]">District</p>
                        <p>{{ application?.applicant?.district?.name }}</p>
                    </div>
                    <div class="leading-[2px] pt-4">
                        <p class="text-[#61646B]">Veng/Khua</p>
                        <p>{{ application.applicant?.locality }}</p>
                    </div>
                    <div class="leading-[2px] pt-4">
                        <p class="text-[#61646B]">Phone Number</p>
                        <p>{{ application.applicant.mobile }}</p>
                    </div>
                </div>
                <div class="border-2 rounded-md w-[413px] h-[337px] p-14">
                    <p
                        class="text-center w-[128px] h-[17px] flex-shrink-0 rounded-[20px] bg-[#E9E9E9] mb-8"
                    >
                        Bank Details
                    </p>
                    <div class="leading-[2px]">
                        <p class="text-[#61646B]">Bank hming</p>
                        <p>{{ application.applicant.bank_name }}</p>
                    </div>
                    <div class="leading-[2px] pt-4">
                        <p class="text-[#61646B]">Bank account number</p>
                        <p>{{ application.applicant.account_no }}</p>
                    </div>
                    <div class="leading-[2px] pt-4">
                        <p class="text-[#61646B]">IFSC Code</p>
                        <p>{{ application.applicant.ifsc_code }}</p>
                    </div>
                </div>
                <div class="border-2 rounded-md w-[413px] h-[337px] p-14">
                    <p
                        class="text-center w-[128px] h-[17px] flex-shrink-0 rounded-[20px] bg-[#E9E9E9] mb-8"
                    >
                        Document Thiltel te
                    </p>

                    <q-chip
                        dense
                        class="transparent text-black"
                        icon="check_circle"
                        clickable
                        @click="
                            handleOpenApplicant(application.applicant?.id_proof)
                        "
                        >Motor hman man Voucher/Receipt</q-chip
                    >
                    <q-chip
                        dense
                        class="transparent text-black"
                        icon="check_circle"
                        clickable
                        @click="
                            handleOpenApplicant(application.applicant?.receipt)
                        "
                        >Motor hman man Voucher/Receipt</q-chip
                    >
                    <q-chip
                        dense
                        class="transparent text-black"
                        icon="check_circle"
                        clickable
                        @click="
                            handleOpenApplicant(
                                application.applicant?.death_certificate
                            )
                        "
                        >Death Certificate</q-chip
                    >
                    <q-chip
                        dense
                        class="transparent text-black"
                        icon="check_circle"
                        clickable
                        @click="
                            handleOpenApplicant(
                                application.applicant?.additional_document
                            )
                        "
                        >Diltu Aadhar card/voter ID</q-chip
                    >
                </div>
                <div class="border-2 rounded-md w-[413px] h-[590px] p-8">
                    <p
                        class="text-center w-[128px] h-[17px] flex-shrink-0 rounded-[20px] bg-[#E9E9E9] mb-8"
                    >
                        Track Application
                    </p>
                    <div>
                        <q-timeline class="q-mt-lg">
                            <q-timeline-entry
                                v-for="(status, key) in statusMessages"
                                :key="key"
                                :title="status.title"
                                :subtitle="status.description"
                                :color="status.completed ? 'green' : 'grey'"
                            >
                                <template v-if="status.timestamp">
                                    <q-icon
                                        name="schedule"
                                        size="xs"
                                        class="q-mr-sm"
                                    />
                                    <span>{{ status.timestamp }}</span>
                                </template>
                            </q-timeline-entry>
                        </q-timeline>
                    </div>
                </div>
            </div>
        </div>
    </q-page>
</template>

<script setup>
import { ref, computed } from "vue";
import { usePage } from "@inertiajs/vue3";
import WebLayout from "@/Layouts/WebLayout.vue";
import { Inertia } from "@inertiajs/inertia";

defineOptions({
    layout: WebLayout,
});

const application = ref(usePage().props.application);

const goToTrackPage = () => {
    Inertia.visit(route("track"));
};

const statusMessages = computed(() => {
    if (!application.value)
        return {
            Pending: {
                status: null,
                title: "No Data",
                description: "No application data found.",
                timestamp: null,
                completed: false,
            },
        };

    const currentStatus = application.value.status;

    return {
        Pending: {
            status: currentStatus,
            title: "Form Submitted",
            description:
                "I ruang phurh dilna chu thehluah fel a ni tawh e, District lama thuneitu ten verify turin a thang mek.",
            timestamp: application.value.created_at
                ? new Date(application.value.created_at).toLocaleString()
                : null,
            completed:
                currentStatus === "Pending" ||
                currentStatus === "Verified" ||
                currentStatus === "Approved" ||
                currentStatus === "Payment",
        },
        Verified: {
            status: currentStatus,
            title: "Verified",
            description:
                "District thuneitu te atangin verify a ni a, Directorate lamah thawn a ni.",
            timestamp: application.value.verified_at
                ? new Date(application.value.verified_at).toLocaleString()
                : null,
            completed:
                currentStatus === "Verified" ||
                currentStatus === "Approved" ||
                currentStatus === "Payment",
        },
        Approved: {
            status: currentStatus,
            title: "Application under process",
            description:
                "Directorate kutah a awm mek a, bank lama deposit turin file tih kal a ni.",
            timestamp: application.value.approved_at
                ? new Date(application.value.approved_at).toLocaleString()
                : null,
            completed:
                currentStatus === "Approved" || currentStatus === "Payment",
        },
        Payment: {
            status: currentStatus,
            title: "Bill Process",
            description: "I ruang phurh dilna chu bank lamah process mek a ni.",
            timestamp: application.value.processed_at
                ? new Date(application.value.processed_at).toLocaleString()
                : null,
            completed: currentStatus === "Payment",
        },
    };
});

// Mock `application` object for demonstration; replace with your actual data.
const diseasedAge = {
    deceased: {
        dob: application.value?.deceased?.dob || null,
        time_of_death: application.value?.deceased?.time_of_death || null,
    },
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
        diseasedAge.deceased.dob,
        diseasedAge.deceased.time_of_death
    )
);

const handleOpenApplicant = (item) => {
    let a = document.createElement("a");
    a.target = "_blank";
    a.href = `/storage/${item}`;
    a.click();
};
</script>
