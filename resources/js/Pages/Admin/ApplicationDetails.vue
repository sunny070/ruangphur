<template>
    <q-page padding>
        <div class="flex items-center flex-col">
            <div class="w-[845px] h-[263px] flex-shrink-0 rounded-[10px] border border-[#EEE] bg-[#E9F4FF] p-5 mt-6">
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
                                {{ application?.transport?.distance }}
                            </h5>
                            <p class="text-[#5B656F]">Kilometre</p>
                        </div>
                        <div>
                            <h5 class="text-bold">
                                {{ application?.transport?.vehicle_number }}
                            </h5>
                            <p class="text-[#5B656F]">Motor Reg.</p>
                        </div>
                        <div>
                            <h5 class="text-bold">
                                {{ application?.transport?.transport_cost }}
                            </h5>
                            <p class="text-[#5B656F]">Amount (Rs)</p>
                        </div>
                    </div>
                    <div class="flex justify-center items-center gap-20">

                        <q-btn v-if="props.application && props.application.status === 'Pending'"
                        @click="approveApplication(props.application.id)" label="Approve" size="sm"
                        style=" color:#fff; width: 144px; height: 40px; flex-shrink: 0; border-radius: 8px; border: 1px solid #5B656F; background: #000;" />
                        
                        <q-btn v-if="props.application && props.application.status === 'Pending'"
                        @click="rejectApplication(props.application.id)"  label="Reject" size="sm"
                        style="color: #000; width: 144px; height: 40px; flex-shrink: 0; border-radius: 8px; border: 1px solid #5B656F; background: transparent;" />
                    </div>

                </div>
            </div>
        </div>

        <!-- Applicant and Deceased Information -->
        <div class="grid md:grid-cols-2 md:ml-[218px] md:mr-[218px]">
            <!-- Deceased Details -->
            <div class="border-2 w-[413px] h-[641px] p-14 rounded-md">
                <p class="text-center w-[128px] h-[17px] flex-shrink-0 rounded-[20px] bg-[#E9E9E9] mb-8">
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
                    <p class="text-[#61646B]">Phone Number</p>
                    <p>{{ application.deceased.mobile }}</p>
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
                    <p>{{ application?.deceased?.constituency }}</p>
                </div>
            </div>

            <!-- Applicant Details -->
            <div class="grid gap-3">
                <div class="border-2 w-[413px] h-[337px] p-14 rounded-md">
                    <p class="text-center w-[128px] h-[17px] flex-shrink-0 rounded-[20px] bg-[#E9E9E9] mb-8">
                        Ruang Phurh Diltu
                    </p>
                    <div class="leading-[2px]">
                        <p class="text-[#61646B]">Hming</p>
                        <p>{{ application?.applicant?.name }}</p>
                    </div>
                    <div class="leading-[2px] pt-4">
                        <p class="text-[#61646B]">District</p>
                        <p>{{ application?.applicant?.district }}</p>
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

                <!-- Bank Details -->
                <div class="border-2 rounded-md w-[413px] h-[337px] p-14">
                    <p class="text-center w-[128px] h-[17px] flex-shrink-0 rounded-[20px] bg-[#E9E9E9] mb-8">
                        Bank Details
                    </p>
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

        <!-- Transport and Document Details -->
        <div class="grid md:grid-cols-2 md:ml-[218px] md:mr-[218px]">
            <!-- Transport Details -->
            <div class="border-2 w-[413px] h-[836px] p-14 rounded-md">
                <p class="text-center w-[242px] h-[17px] flex-shrink-0 rounded-[20px] bg-[#E9E9E9] mb-8">
                    Ruang Phurh leh Motor Chungchang
                </p>
                <p class="mb-8">Ruang phurh tanna</p>
                <div class="leading-[2px]">
                    <p class="text-[#61646B]">District</p>
                    <p>{{ application?.transport?.source_district }}</p>
                </div>
                <div class="pt-4">
                    <p class="text-[#61646B]">Veng/Khua</p>
                    <p>{{ application?.transport?.source_locality }}</p>
                </div>
                <p class="mb-8 mt-8">Ruang dahna tur hmun</p>
                <div class="leading-[2px] pt-4">
                    <p class="text-[#61646B]">District</p>
                    <p>{{ application?.transport?.destination_district }}</p>
                </div>
                <div class="pt-4">
                    <p class="text-[#61646B]">Veng/Khua</p>
                    <p>{{ application?.transport?.destination_locality }}</p>
                </div>

                <div class="leading-[2px] pt-4">
                    <p class="text-[#61646B]">Kilometer</p>
                    <p>{{ application?.transport?.distance }}</p>
                </div>

                <p class="mb-8 mt-8">Ruang phurhna motor</p>
                <div class="leading-[2px] pt-4">
                    <p class="text-[#61646B]">Motor registration number</p>
                    <p>{{ application?.transport?.vehicle_number }}</p>
                </div>
                <div class="leading-[2px] pt-4">
                    <p class="text-[#61646B]">Motor hming</p>
                    <p>{{ application?.transport?.vehicle_name }}</p>
                </div>
                <div class="leading-[2px] pt-4">
                    <p class="text-[#61646B]">Motor neitu/khalhtu hming</p>
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
    </q-page>
</template>

<script setup>
import { computed } from 'vue';
import AdminLayout from "@/Layouts/AdminLayout.vue";
import { router as $inertia } from '@inertiajs/vue3';

defineOptions({
    layout: AdminLayout,
});

// Props passed from the parent component (Inertia)
const props = defineProps({
    application: Object,
});

const approveApplication = async (applicationId) => {
    if (confirm('Are you sure you want to approve this application?')) {
        try {
            await $inertia.post(`/admin/application/${applicationId}/approve`);
        } catch (error) {
            console.error(error);
        }
    }
};

const rejectApplication = async (applicationId) => {
    if (confirm('Are you sure you want to reject this application?')) {
        try {
            await $inertia.post(`/admin/application/${applicationId}/reject`);
        } catch (error) {
            console.error(error);
        }
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
