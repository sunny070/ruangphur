<template>
    <q-page padding>
        <h5>Step 2: Ruang Phurh leh Motor Chungchang</h5>
        <q-form @submit.prevent="submitForm" class="q-gutter-md">
            <div class="q-mb-sm">
                <p>Ruang phurh tanna hmun</p>
                <div>
                    <div class="text-sm font-medium text-black q-mb-xs">
                        District
                    </div>
                    <q-input
                        outlined
                        placeholder="Ruang phurh tanna tur District awmna"
                        dense
                        class="custom-input"
                        v-model="form.source_district"
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
            <!-- <q-input filled v-model="form.distance" label="Distance (in km)" required /> -->
            <!-- <q-input filled v-model="form.vehicle_number" label="Source District" required /> -->
            <!-- <q-input filled v-model="form.driver_name" label="Source District" required /> -->
            <!-- <q-input filled v-model="form.driver_phone" label="Source District" required /> -->
            <!-- <q-input filled v-model="form.vehicle_owner" label="Source District" required /> -->
            <!-- <q-input filled v-model="form.transport_cost" label="Source District" required /> -->
            <q-btn
                class="text-black"
                label="Preview"
                color="white"
                @click="backToStep1"
            />
            <q-btn label="Next" color="black" type="submit" />
        </q-form>
    </q-page>
</template>

<script setup>
import { useForm } from "@inertiajs/vue3";
import FormLayout from "@/Layouts/FormLayout.vue";

defineOptions({
    layout: FormLayout,
});

const props = defineProps(["form"]); // Prefill from server
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
    // vehicle_owner: props.form.vehicle_owner || '',
    transport_cost: props.form.transport_cost || "",
});

const submitForm = () => form.post(route("form.storeStep2"));
const backToStep1 = () => window.history.back(); // Navigate back
</script>
