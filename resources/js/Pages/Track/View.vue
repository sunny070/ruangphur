<template>
    <q-page padding>
        <div class="flex flex-center column q-mt-md">
            <div
                class="q-pa-md rounded-borders bg-blue-1"
                style="max-width: 845px; width: 100%"
            >
                <div class="text-center">
                    <h5 class="text-h5">{{ application.applicant.name }}</h5>
                    <p class="text-caption q-mb-md">
                        s/o {{ application.deceased.name }}
                    </p>
                    <q-separator />
                    <div class="row q-mt-md">
                        <div class="col-4 text-center">
                            <h5 class="text-weight-bold">
                                {{ application?.transport?.distance }}
                            </h5>
                            <p class="text-grey-7">Kilometre</p>
                        </div>
                        <div class="col-4 text-center">
                            <h5 class="text-weight-bold">
                                {{ application?.transport?.vehicle_number }}
                            </h5>
                            <p class="text-grey-7">Motor Reg.</p>
                        </div>
                        <div class="col-4 text-center">
                            <h5 class="text-weight-bold">
                                {{ application?.transport?.transport_cost }}
                            </h5>
                            <p class="text-grey-7">Amount (Rs)</p>
                        </div>
                    </div>
                </div>
            </div>
        </div>

        <div class="row q-mt-lg q-col-gutter-md justify-center">
            <div class="col-12 col-md-6">
                <q-card class="q-pa-md">
                    <p class="text-center q-pa-sm bg-grey-3 rounded-borders">
                        Mitthi Chungchang
                    </p>
                    <div class="q-mt-md">
                        <p class="text-grey-7">Mitthi pianni leh thla</p>
                        <p>{{ application.deceased.dob }}</p>
                    </div>
                    <div class="q-mt-md">
                        <p class="text-grey-7">Kum</p>
                        <p>{{ ageAtDeath }} years</p>
                    </div>
                    <div class="q-mt-md">
                        <p class="text-grey-7">Gender</p>
                        <p>{{ application.deceased.gender }}</p>
                    </div>
                    <div class="q-mt-md">
                        <p class="text-grey-7">Thih ni leh darkar</p>
                        <p>{{ application.deceased.time_of_death }}</p>
                    </div>
                    <div class="q-mt-md">
                        <p class="text-grey-7">Thihna hmun</p>
                        <p>{{ application.deceased.place_of_death }}</p>
                    </div>
                    <div class="q-mt-md">
                        <p class="text-grey-7">District</p>
                        <p>{{ application?.deceased?.district.name }}</p>
                    </div>
                    <div class="q-mt-md">
                        <p class="text-grey-7">Veng/Khua</p>
                        <p>{{ application.deceased.locality }}</p>
                    </div>
                    <div class="q-mt-md">
                        <p class="text-grey-7">Assembly Constituency</p>
                        <p>{{ application.deceased.constituency.name }}</p>
                    </div>
                </q-card>

                <q-card class="q-mt-md q-pa-md">
                    <p class="text-center q-pa-sm bg-grey-3 rounded-borders">
                        Ruang Phurh leh Motor Chungchang
                    </p>
                    <p class="q-mt-md">Ruang phurh tanna</p>
                    <div class="q-mt-md">
                        <p class="text-grey-7">District</p>
                        <p>
                            {{ application?.transport?.source_district?.name }}
                        </p>
                    </div>
                    <div class="q-mt-md">
                        <p class="text-grey-7">Veng/Khua</p>
                        <p>{{ application?.transport?.source_locality }}</p>
                    </div>
                    <p class="q-mt-md">Ruang dahna tur hmun</p>
                    <div class="q-mt-md">
                        <p class="text-grey-7">District</p>
                        <p>
                            {{
                                application?.transport?.destination_district
                                    ?.name
                            }}
                        </p>
                    </div>
                    <div class="q-mt-md">
                        <p class="text-grey-7">Veng/Khua</p>
                        <p>
                            {{ application?.transport?.destination_locality }}
                        </p>
                    </div>
                    <div class="q-mt-md">
                        <p class="text-grey-7">Kilometer</p>
                        <p>{{ application?.transport?.distance }}</p>
                    </div>
                    <p class="q-mt-md">Ruang phurhna motor</p>
                    <div class="q-mt-md">
                        <p class="text-grey-7">Motor registration number</p>
                        <p>{{ application?.transport?.vehicle_number }}</p>
                    </div>
                    <div class="q-mt-md">
                        <p class="text-grey-7">Motor hming</p>
                        <p>{{ application?.transport?.vehicle_name }}</p>
                    </div>
                    <div class="q-mt-md">
                        <p class="text-grey-7">Motor neitu/khalhtu hming</p>
                        <p>{{ application?.transport?.driver_name }}</p>
                    </div>
                    <div class="q-mt-md">
                        <p class="text-grey-7">
                            Motor neitu/khalhtu phone number
                        </p>
                        <p>{{ application?.transport?.driver_phone }}</p>
                    </div>
                    <div class="q-mt-md">
                        <p class="text-grey-7">Motor hman man (Rs)</p>
                        <p>{{ application?.transport?.transport_cost }}</p>
                    </div>
                </q-card>

                <q-btn
                    class="q-mt-lg"
                    color="black"
                    label="Back to Track"
                    @click="goToTrackPage"
                />
            </div>

            <div class="col-12 col-md-6">
                <q-card class="q-pa-md">
                    <p class="text-center q-pa-sm bg-grey-3 rounded-borders">
                        Ruang Phurh Diltu
                    </p>
                    <div class="q-mt-md">
                        <p class="text-grey-7">Hming</p>
                        <p>{{ application?.applicant?.name }}</p>
                    </div>
                    <div class="q-mt-md">
                        <p class="text-grey-7">District</p>
                        <p>{{ application?.applicant?.district?.name }}</p>
                    </div>
                    <div class="q-mt-md">
                        <p class="text-grey-7">Veng/Khua</p>
                        <p>{{ application.applicant?.locality }}</p>
                    </div>
                    <div class="q-mt-md">
                        <p class="text-grey-7">Phone Number</p>
                        <p>{{ application.applicant.mobile }}</p>
                    </div>
                </q-card>

                <q-card class="q-mt-md q-pa-md">
                    <p class="text-center q-pa-sm bg-grey-3 rounded-borders">
                        Bank Details
                    </p>
                    <div class="q-mt-md">
                        <p class="text-grey-7">Bank hming</p>
                        <p>{{ application.applicant.bank_name }}</p>
                    </div>
                    <div class="q-mt-md">
                        <p class="text-grey-7">Bank account number</p>
                        <p>{{ application.applicant.account_no }}</p>
                    </div>
                    <div class="q-mt-md">
                        <p class="text-grey-7">IFSC Code</p>
                        <p>{{ application.applicant.ifsc_code }}</p>
                    </div>
                </q-card>

                <q-card class="q-mt-md q-pa-md">
                    <p class="text-center q-pa-sm bg-grey-3 rounded-borders">
                        Document Thiltel te
                    </p>
                    <q-chip
                        v-for="(doc, index) in documents"
                        :key="index"
                        clickable
                        @click="handleOpenApplicant(doc.url)"
                    >
                        <q-icon name="check_circle" class="q-mr-sm" />
                        {{ doc.label }}
                    </q-chip>
                </q-card>

                <q-card class="q-mt-md q-pa-md">
                    <p class="text-center q-pa-sm bg-grey-3 rounded-borders">
                        Track Application
                    </p>
                    <q-timeline class="q-mt-md">
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
                </q-card>
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

// Function to calculate age
// Computed property for calculating age at death
const ageAtDeath = computed(() => {
    const deceased = application.value?.deceased;
    if (!deceased?.dob || !deceased?.time_of_death) {
        return "";
    }

    const dob = new Date(deceased.dob);
    const deathDate = new Date(deceased.time_of_death);

    if (isNaN(dob) || isNaN(deathDate)) {
        return "";
    }

    let age = deathDate.getFullYear() - dob.getFullYear();
    const deathMonth = deathDate.getMonth();
    const birthMonth = dob.getMonth();
    const deathDay = deathDate.getDate();
    const birthDay = dob.getDate();

    // Adjust age if the deceased has not had their birthday yet in the year of death
    if (
        deathMonth < birthMonth ||
        (deathMonth === birthMonth && deathDay < birthDay)
    ) {
        age--;
    }

    return age;
});

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

const documents = [
    {
        label: "Motor hman man Voucher/Receipt",
        url: application.value?.applicant?.id_proof,
    },
    {
        label: "Motor hman man Voucher/Receipt",
        url: application.value?.applicant?.receipt,
    },
    {
        label: "Death Certificate",
        url: application.value?.applicant?.death_certificate,
    },
    {
        label: "Diltu Aadhar card/voter ID",
        url: application.value?.applicant?.additional_document,
    },
];

const handleOpenApplicant = (url) => {
    let a = document.createElement("a");
    a.target = "_blank";
    a.href = `/storage/${url}`;
    a.click();
};
</script>
