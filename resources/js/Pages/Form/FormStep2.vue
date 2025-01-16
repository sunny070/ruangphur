<template>
    <q-layout>
        <q-page-container>
            <q-page padding>
                <div class="flex flex-col justify-center items-center gap-6">

               
                <div
                    class="border-2 border-gray-200 bg-[#E9F4FF] w-[412px] h-[195px] flex-shrink-0 rounded-[10px] text-center"
                >
                    <Link href="/"
                        ><svg
                            xmlns="http://www.w3.org/2000/svg"
                            width="24"
                            height="24"
                            viewBox="0 0 24 24"
                            fill="none"
                        >
                            <g clip-path="url(#clip0_75_1185)">
                                <path
                                    d="M19 11H7.82998L12.71 6.12C13.1 5.73 13.1 5.09 12.71 4.7C12.32 4.31 11.69 4.31 11.3 4.7L4.70998 11.29C4.31998 11.68 4.31998 12.31 4.70998 12.7L11.3 19.29C11.69 19.68 12.32 19.68 12.71 19.29C13.1 18.9 13.1 18.27 12.71 17.88L7.82998 13H19C19.55 13 20 12.55 20 12C20 11.45 19.55 11 19 11Z"
                                    fill="#323232"
                                />
                            </g>
                            <defs>
                                <clipPath id="clip0_75_1185">
                                    <rect width="24" height="24" fill="white" />
                                </clipPath>
                            </defs>
                        </svg>
                    </Link>
                    <h5 class="text-black">Ruang Phurh Report Form</h5>
                    <h5>Step 2: Ruang Phurh leh Motor Chungchang</h5>
                </div>
                <div class="border w-[412px] h-[996px] rounded-[10px] p-[23px]">
                <q-form @submit.prevent="submitForm" class="q-gutter-md">
                    <div class="q-mb-sm">
                        <p>Ruang phurh tanna hmun</p>
                        <div>
                            <div class="text-sm font-medium text-black q-mb-xs">
                                District
                            </div>
                            <q-select
                                outlined
                                dense
                                label="Ruang phurh tanna tur District awmna"
                                v-model="form.source_district"
                                lazy-rules
                                :options="district"
                            />
                        </div>
                    </div>
                    <div>
                        <div>
                            <div class="text-sm font-medium text-black q-mb-xs">
                                Veng/Khua
                            </div>
                            <q-input
                                outlined
                                placeholder="Ruang chhuah veng"
                                dense
                                class="custom-input"
                                v-model="form.source_locality"
                            />
                        </div>
                    </div>
                    <div>
                        <div>
                            <p>Ruang dahna tur hmun</p>
                            <div class="text-sm font-medium text-black q-mb-xs">
                                District
                            </div>
                            <q-input
                                outlined
                                placeholder="Ruang Zalhna tur District awmna"
                                dense
                                class="custom-input"
                                v-model="form.destination_district"
                            />
                        </div>
                    </div>

                    <div>
                        <div class="text-sm font-medium text-black q-mb-xs">
                            Veng/Khua
                        </div>
                        <q-input
                            outlined
                            placeholder="Ruang Zalhna tur veng"
                            dense
                            class="custom-input"
                            v-model="form.destination_locality"
                        />
                    </div>

                    <!-- <q-input filled v-model="form.source_district" label="Source District" required /> -->
                    <!-- <q-input filled v-model="form.source_locality" label="Source Locality" required /> -->
                    <!-- <q-input filled v-model="form.destination_district" label="Destination District" required /> -->
                    <!-- <q-input filled v-model="form.destination_locality" label="Destination Locality" required /> -->

                    <div>
                        <p class="text-sm font-medium text-black q-mb-xs">
                            Kilometer zat
                        </p>
                        <!-- <div class="text-sm font-medium text-black q-mb-xs">District</div> -->
                        <q-input
                            outlined
                            dense
                            v-model="form.distance"
                            label="Distance (in km)"
                            required
                        />
                    </div>

                    <div>
                        <p>Ruang phurhna motor</p>
                        <div class="text-sm font-medium text-black q-mb-xs">
                            Motor registration number
                        </div>
                        <q-input
                            outlined
                            placeholder="Ruang phurhna motor registration number"
                            dense
                            class="custom-input"
                            v-model="form.vehicle_number"
                        />
                    </div>
                    <div>
                        <div class="text-sm font-medium text-black q-mb-xs">
                            Motor hming
                        </div>
                        <q-input
                            outlined
                            placeholder="Ruang phurhna motor hming"
                            dense
                            class="custom-input"
                            v-model="form.vehicle_name"
                        />
                    </div>

                    <div>
                        <div class="text-sm font-medium text-black q-mb-xs">
                            Motor neitu/khalhtu hming
                        </div>
                        <q-input
                            outlined
                            placeholder="Motor neitu/khalhtu hming pum"
                            dense
                            class="custom-input"
                            v-model="form.driver_name"
                        />
                    </div>
                    <div>
                        <div class="text-sm font-medium text-black q-mb-xs">
                            Motor neitu/khalhtu phone number
                        </div>
                        <q-input
                            outlined
                            placeholder="Motor neitu/khalhtu biak pawh theihna tur"
                            dense
                            class="custom-input"
                            v-model="form.driver_phone"
                        />
                    </div>
                    <div>
                        <div class="text-sm font-medium text-black q-mb-xs">
                            Motor hman man (Rs)
                        </div>
                        <q-input
                            outlined
                            placeholder="Motor hman man"
                            dense
                            class="custom-input"
                            v-model="form.transport_cost"
                        />
                    </div>
                    <q-btn
                        class="text-black"
                        label="Preview"
                        color="white"
                        @click="backToStep1"
                    />
                    <q-btn label="Next" color="black" type="submit" />
                </q-form>
            </div>

            </div>
            </q-page>
        </q-page-container>
    </q-layout>
</template>

<script setup>
import { useForm } from "@inertiajs/vue3";
import WebLayout from "@/Layouts/WebLayout.vue";

defineOptions({
    layout: WebLayout,
});

const props = defineProps(["form", "districts"]);

const form = useForm({
    source_district: props.form.source_district || "",
    source_locality: props.form.source_locality || "",
    destination_district: props.form.destination_district || "",
    destination_locality: props.form.destination_locality || "",
    distance: props.form.distance || "",
    vehicle_number: props.form.vehicle_number || "",
    vehicle_name: props.form.vehicle_name || "",
    driver_name: props.form.driver_name || "",
    driver_phone: props.form.driver_phone || "",
    transport_cost: props.form.transport_cost || "",
});
const district = props.districts;
const submitForm = () => form.post(route("form.storeStep2"));
const backToStep1 = () => window.history.back(); // Navigate back
</script>
