<template>
    <q-layout>
        <q-page-container>
            <q-page padding>
                <div class="flex flex-col justify-center items-center gap-6">
                    <div
                        class="border-2 border-gray-200 bg-[#E9F4FF] flex-shrink-0 rounded-[10px] text-center items-center"
                    >
                        <!-- <h5>Step 2: Ruang Phurh leh Motor Chungchang</h5> -->
                        <img
                            id="background"
                            class="w-[412px] h-[193px]"
                            src="image/Vertical Stepper with numbers2.png"
                        />
                    </div>
                    <div
                        class="border w-[412px] h-[996px] rounded-[10px] p-[23px]"
                    >
                        <q-form
                            @submit.prevent="submitForm"
                            class="q-gutter-md"
                        >
                            <div class="pb-3 flex items-center gap-2">
                                <div
                                    class="w-[3px] h-[19px] flex-shrink-0 bg-black"
                                ></div>
                                <h6>Ruang Phurh leh Motor Chungchang</h6>
                            </div>
                            <div class="q-mb-sm">
                                <p class="text-[#61646B]">
                                    Ruang phurh tanna hmun
                                </p>
                                <div>
                                    <div
                                        class="text-sm font-medium text-black q-mb-xs"
                                    >
                                        District
                                    </div>
                                    <q-select
                                        dense
                                        outlined=""
                                        v-model.number="form.source_district"
                                        label="Select Source District"
                                        :options="district"
                                        behavior="menu"
                                    />
                                </div>
                            </div>

                            <div>
                                <div>
                                    <div
                                        class="text-sm font-medium text-black q-mb-xs"
                                    >
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

                            <div class="pt-5">
                                <div>
                                    <p class="text-[#61646B]">
                                        Ruang dahna tur hmun
                                    </p>
                                    <!-- <div class="text-sm font-medium text-black q-mb-xs">
                                        District
                                    </div> -->
                                    <q-select
                                        dense
                                        outlined=""
                                        v-model.number="
                                            form.destination_district
                                        "
                                        label="Select Source District"
                                        :options="district"
                                        behavior="menu"
                                    />
                                </div>
                            </div>

                            <div>
                                <!-- <div class="text-sm font-medium text-black q-mb-xs">
                                    Veng/Khua
                                </div> -->
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

                            <div class="pt-5">
                                <p
                                    class="text-sm font-medium text-black q-mb-xs"
                                >
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

                            <div class="pt-5">
                                <p class="text-[#61646B]">
                                    Ruang phurhna motor
                                </p>
                                <div class="text-sm font-medium text-black">
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

                            <!-- <div>
                                <div
                                    class="text-sm font-medium text-black q-mb-xs"
                                >
                                    Motor hming
                                </div>
                                <q-input
                                    outlined
                                    placeholder="Ruang phurhna motor hming"
                                    dense
                                    class="custom-input"
                                    v-model="form.vehicle_name"
                                />
                            </div> -->

                            <div>
                                <div class="text-sm font-medium text-black">
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
                                <div class="text-sm font-medium text-black">
                                    Motor neitu/khalhtu phone number
                                </div>
                                <q-input
                                    outlined
                                    placeholder="Motor neitu/khalhtu biak pawh theihna tur"
                                    dense
                                    class="custom-input"
                                    v-model="form.driver_phone"
                                    maxlength="10"
                                    :rules="[
                                        (val) =>
                                            /^[0-9]{10}$/.test(val) ||
                                            'Mobile number must be 10 digits',
                                    ]"
                                />
                            </div>
                            
                            <div>
                                <div class="text-sm font-medium text-black">
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
import { ref } from "vue";
import { computed } from "vue";

defineOptions({
    layout: WebLayout,
});

const props = defineProps(["form", "districts"]);
console.log(props.districts);

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
// const district = props.districts;
const district = ref(props.districts || []);

const submitForm = () => form.post(route("form.storeStep2"));
const backToStep1 = () => window.history.back(); // Navigate back
</script>
