<template>
    <q-layout>
        <q-page-container>
            <q-page padding>
                <div class="flex items-center flex-col">
                    <div
                        class="w-[412px] h-[381px] flex-shrink-0 rounded-[10px] border border-[#EEE] bg-[#E9F4FF] p-5 mt-6"
                    >
                        <div class="flex flex-col">
                            <h5 class="text-2xl">
                                Ruang phurh dil chhuina/track
                            </h5>
                            <p class="font-bold mb-4 text-[#5B656F] text-sm">
                                I ruang phurh dilna a thlen chin zawnna a ni.
                                Mipui ten zawldawh takin min lo ngaichang zel
                                dawn nia.
                            </p>
                            Track ID chhu lut rawh le
                            <q-input
                                outlined
                                v-model="applicationId"
                                placeholder="I dilna thlen chin zawnna"
                                dense
                                class="custom-input"
                            />
                        </div>

                        <div class="flex gap-3 pt-6">
                            <q-btn
                                class="text-black"
                                label="View"
                                color="white"
                                @click="viewApplication(applicationId)"
                            />
                            <q-btn
                                class="w-3"
                                label="Track Now"
                                color="black"
                                @click="fetchApplication"
                                :loading="loading"
                            />
                        </div>
                    </div>

                    <q-card
                        v-if="application"
                        class="q-ma-md h-[983px] w-[412px]"
                    >
                        <q-card-section v-if="currentStatus">
                            <div class="mt-6">
                                <p class="text-muted-foreground">
                                    Status: {{ currentStatus.status || "N/A" }}
                                </p>
                                <p class="text-muted-foreground">
                                    Applied date:
                                    {{ currentStatus.timestamp || "N/A" }}
                                </p>
                                <!-- Add feedback display -->
                                <p
                                    v-if="application.status === 'Rejected'"
                                    class="text-red-500"
                                >
                                    Rejection Feedback:
                                    {{ application.feedback }}
                                </p>
                            </div>
                        </q-card-section>
                        <q-card-section>
                            <h5>Current Status</h5>
                            <q-timeline class="q-mt-lg">
                                <q-timeline-entry
                                    v-for="(status, key) in statusMessages"
                                    :key="key"
                                    :color="
                                        status.color ||
                                        (status.completed ? 'green' : 'grey')
                                    "
                                    :title="status.title"
                                    :subtitle="status.description"
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
                        </q-card-section>
                    </q-card>
                </div>
            </q-page>
        </q-page-container>
    </q-layout>
</template>

<script setup>
import { ref, computed } from "vue";
import { useQuasar } from "quasar";
import axios from "axios";
import { router } from "@inertiajs/vue3";
import WebLayout from "@/Layouts/WebLayout.vue";

defineOptions({
    layout: WebLayout,
});

const $q = useQuasar();

const applicationId = ref("");
const application = ref(null);
const loading = ref(false);

const viewApplication = (item) => {
    if (!applicationId.value) {
        $q.notify({
            color: "negative",
            message: "Please enter a valid Application ID.",
        });
        return;
    }

    loading.value = true;
    try {
        router.get(route("application.view", applicationId.value));
    } catch (error) {
        $q.notify({
            color: "negative",
            message: "Failed to load application details. Please try again.",
        });
    } finally {
        loading.value = false;
    }
};

const fetchApplication = async () => {
    loading.value = true;
    try {
        const { data } = await axios.get(`/track/${applicationId.value}`);
        application.value = data.application;

        $q.notify({
            color: "positive",
            message: "Application found.",
        });
    } catch (error) {
        application.value = null;
        const message =
            error.response?.data?.message ||
            (error.request
                ? "Network error. Please try again later."
                : "An unknown error occurred.");
        $q.notify({
            color: "negative",
            message,
        });
    } finally {
        loading.value = false;
    }
};
const statusMessages = computed(() => {
    if (!application.value) {
        return {
            Pending: {
                status: null,
                title: "No Data",
                description: "No application data found.",
                timestamp: null,
                completed: false,
            },
        };
    }

    const currentStatus = application.value.status;

    let statuses = {
        Pending: {
            status: currentStatus,
            title: "Form Submitted",
            description:
                "I ruang phurh dilna chu thehluah fel a ni tawh e, District lama thuneitu ten verify turin a thang mek.",
            timestamp: application.value.created_at
                ? new Date(application.value.created_at).toLocaleString()
                : null,
            completed: ["Pending", "Verified", "Approved", "Processed"].includes(currentStatus),
        },
        Verified: {
            status: currentStatus,
            title: "Verified",
            description:
                "District thuneitu te atangin verify a ni a, Directorate lamah thawn a ni.",
            timestamp: application.value.verified_at
                ? new Date(application.value.verified_at).toLocaleString()
                : null,
            completed: ["Verified", "Approved", "Processed"].includes(currentStatus),
        },
        Approved: {
            status: currentStatus,
            title: "Application under process",
            description:
                "Directorate kutah a awm mek a, bank lama deposit turin file tih kal a ni.",
            timestamp: application.value.approved_at
                ? new Date(application.value.approved_at).toLocaleString()
                : null,
            completed: ["Approved", "Processed"].includes(currentStatus),
        },
        Processed: {
            status: currentStatus,
            title: "Bill Process",
            description: "I ruang phurh dilna chu bank lamah process mek a ni.",
            timestamp: application.value.processed_at
                ? new Date(application.value.processed_at).toLocaleString()
                : null,
            completed: currentStatus === "Processed",
        }
    };

    // Only add the Rejected status if the application is actually rejected
    if (currentStatus === "Rejected") {
        statuses.Rejected = {
            status: currentStatus,
            title: "Application Rejected",
            description: application.value.feedback
                ? `Application rejected. Reason: ${application.value.feedback}`
                : "Application rejected without feedback",
            timestamp: application.value.updated_at
                ? new Date(application.value.updated_at).toLocaleString()
                : null,
            completed: true,
            color: "red",
        };
    }

    return statuses;
});


// const statusMessages = computed(() => {
//     if (!application.value)
//         return {
//             Pending: {
//                 status: null,
//                 title: "No Data",
//                 description: "No application data found.",
//                 timestamp: null,
//                 completed: false,
//             },
//         };

//     const currentStatus = application.value.status;

//     return {
//         Pending: {
//             status: currentStatus,
//             title: "Form Submitted",
//             description:
//                 "I ruang phurh dilna chu thehluah fel a ni tawh e, District lama thuneitu ten verify turin a thang mek.",
//             timestamp: application.value.created_at
//                 ? new Date(application.value.created_at).toLocaleString()
//                 : null,
//             completed:
//                 currentStatus === "Pending" ||
//                 currentStatus === "Verified" ||
//                 currentStatus === "Approved" ||
//                 currentStatus === "Processed",
//         },
//         Verified: {
//             status: currentStatus,
//             title: "Verified",
//             description:
//                 "District thuneitu te atangin verify a ni a, Directorate lamah thawn a ni.",
//             timestamp: application.value.verified_at
//                 ? new Date(application.value.verified_at).toLocaleString()
//                 : null,
//             completed:
//                 currentStatus === "Verified" ||
//                 currentStatus === "Approved" ||
//                 currentStatus === "Processed",
//         },
//         Approved: {
//             status: currentStatus,
//             title: "Application under process",
//             description:
//                 "Directorate kutah a awm mek a, bank lama deposit turin file tih kal a ni.",
//             timestamp: application.value.approved_at
//                 ? new Date(application.value.approved_at).toLocaleString()
//                 : null,
//             completed:
//                 currentStatus === "Approved" || currentStatus === "Processed",
//         },
//         Processed: {
//             status: currentStatus,
//             title: "Bill Process",
//             description: "I ruang phurh dilna chu bank lamah process mek a ni.",
//             timestamp: application.value.processed_at
//                 ? new Date(application.value.processed_at).toLocaleString()
//                 : null,
//             completed: currentStatus === "Processed",
//         },
//         Rejected: {
//             status: currentStatus,
//             title: "Application Rejected",
//             description: application.value.feedback
//                 ? `Application rejected. Reason: ${application.value.feedback}`
//                 : "Application rejected without feedback",
//             timestamp: application.value.updated_at?.toLocaleString(),
//             completed: currentStatus === "Rejected",
//             color: "red", // Add color property
//         },
//     };
// });
</script>
