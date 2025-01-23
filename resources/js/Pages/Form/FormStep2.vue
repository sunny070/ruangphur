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
                                        :error="form.errors.source_district"
                                        :error-message="
                                            form.errors.source_district
                                                ? form.errors.source_district[0]
                                                : 'Source District is Required'
                                        "
                                    />
                                    <div
                                        v-if="
                                            $page.props.errors.source_district
                                        "
                                        class="text-red"
                                    >
                                        {{ $page.props.errors.source_district }}
                                    </div>
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
                                        :error="form.errors.source_locality"
                                        :error-message="
                                            form.errors.source_locality || ''
                                        "
                                    />
                                </div>
                                <div
                                    v-if="$page.props.errors.source_locality"
                                    class="text-red"
                                >
                                    {{ $page.props.errors.source_locality }}
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
                                        :error="
                                            form.errors.destination_district
                                        "
                                        :error-message="
                                            form.errors.destination_district ||
                                            ''
                                        "
                                    />
                                    <div
                                        v-if="
                                            $page.props.errors
                                                .destination_district
                                        "
                                        class="text-red"
                                    >
                                        {{
                                            $page.props.errors
                                                .destination_district
                                        }}
                                    </div>
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
                                    :error="form.errors.destination_locality"
                                    :error-message="
                                        form.errors.destination_locality || ''
                                    "
                                />
                                <div
                                    v-if="
                                        $page.props.errors.destination_locality
                                    "
                                    class="text-red"
                                >
                                    {{
                                        $page.props.errors.destination_locality
                                    }}
                                </div>
                            </div>

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
                                    :error="form.errors.distance"
                                    :error-message="
                                        form.errors.distance
                                            ? form.errors.distance
                                            : ''
                                    "
                                />
                                <div
                                    v-if="$page.props.errors.distance"
                                    class="text-red"
                                >
                                    {{ $page.props.errors.distance }}
                                </div>
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
                                    :error="form.errors.transport_cost"
                                    :error-message="
                                        form.errors.transport_cost || ''
                                    "
                                />
                                <div
                                    v-if="$page.props.errors.transport_cost"
                                    class="text-red"
                                >
                                    {{ $page.props.errors.transport_cost }}
                                </div>
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
                                    :error="form.errors.driver_name"
                                    :error-message="
                                        form.errors.driver_name || ''
                                    "
                                />
                                <div
                                    v-if="$page.props.errors.driver_name"
                                    class="text-red"
                                >
                                    {{ $page.props.errors.driver_name }}
                                </div>
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
                                    :error="form.errors.driver_phone"
                                    :error-message="
                                        form.errors.driver_phone ||
                                        'Mobile number must be 10 digits'
                                    "
                                    :rules="[
                                        (val) =>
                                            /^[0-9]{10}$/.test(val) ||
                                            'Mobile number must be 10 digits',
                                    ]"
                                />
                                <div
                                    v-if="$page.props.errors.driver_phone"
                                    class="text-red"
                                >
                                    {{ $page.props.errors.driver_phone }}
                                </div>
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
                                    :error="form.errors.vehicle_number"
                                    :error-message="
                                        form.errors.vehicle_number || ''
                                    "
                                />
                                <div
                                    v-if="$page.props.errors.vehicle_number"
                                    class="text-red"
                                >
                                    {{ $page.props.errors.vehicle_number }}
                                </div>
                            </div>

                            <q-btn
                                class="text-black"
                                label="Preview"
                                color="white"
                                @click="preview = true"
                            />
                            <q-btn label="Next" color="black" type="submit" />
                        </q-form>
                    </div>
                </div>

                <!-- dialogue -->
                <q-dialog v-model="preview">
                    <div>
                        <!-- <hr class="my-4 border-border" /> -->
                        <q-card class="w-[411px] h-[822px] rounded-md">
                            <q-card-section class="">
                                <p
                                    class="text-center w-[242px] h-[17px] flex-shrink-0 rounded-[20px] bg-[#E9E9E9] mb-8"
                                >
                                    Ruang Phurh leh Motor Chungchang
                                </p>
                                <p class="mb-8">Ruang phurh tanna</p>
                                <div class="leading-[2px] pl-5">
                                    <p class="text-[#61646B]">District</p>
                                    <p>{{ form.source_district["label"] }}</p>
                                </div>
                                <div class="leading-[2px] pt-4 pl-5">
                                    <p class="text-[#61646B]">Veng/Khua</p>
                                    <p>{{ form.source_locality }}</p>
                                </div>
                                <hr class="my-4 border-border" />
                                <p class="mb-8 mt-8 text-[#363636]">
                                    Ruang dahna tur hmun
                                </p>
                                <div class="leading-[2px] pt-4 pl-5">
                                    <p class="text-[#61646B]">District</p>
                                    <p>
                                        {{ form.destination_district["label"] }}
                                    </p>
                                </div>
                                <div class="leading-[2px] pt-4 pl-5">
                                    <p class="text-[#61646B]">Veng/Khua</p>
                                    <p>
                                        {{ form.destination_locality }}
                                    </p>
                                </div>
                                <hr class="my-4 border-border" />

                                <div class="leading-[2px] pt-4">
                                    <p class="text-[#61646B]">Kilometer</p>
                                    <p>{{ form.distance }}</p>
                                </div>
                                <hr class="my-4 border-border" />
                                <p class="mb-8 mt-8">Ruang phurhna motor</p>
                                <div class="leading-[2px] pt-4">
                                    <p class="text-[#61646B]">
                                        Motor registration number
                                    </p>
                                    <p>{{ form.vehicle_number }}</p>
                                </div>
                                <div class="leading-[2px] pt-4">
                                    <p class="text-[#61646B]">Motor hming</p>
                                    <p>{{ form.vehicle_name }}</p>
                                </div>
                                <div class="leading-[2px] pt-4">
                                    <p class="text-[#61646B]">
                                        Motor neitu/khalhtu hming
                                    </p>
                                    <p>{{ form.driver_name }}</p>
                                </div>
                                <div class="leading-[2px] pt-4">
                                    <p class="text-[#61646B]">
                                        Motor neitu/khalhtu phone number
                                    </p>
                                    <p>{{ form.driver_phone }}</p>
                                </div>
                                <div class="leading-[2px] pt-4">
                                    <p class="text-[#61646B]">
                                        Motor hman man (Rs)
                                    </p>
                                    <p>{{ form.transport_cost }}</p>
                                </div>
                            </q-card-section>

                            <q-card-actions align="right">
                                <q-btn
                                    class="text-black"
                                    color="white"
                                    label="Edit"
                                    v-close-popup
                                />
                                <q-btn
                                    label="Approve & Next"
                                    color="black"
                                    @click="submitForm"
                                />
                            </q-card-actions>
                        </q-card>
                    </div>
                </q-dialog>
            </q-page>
        </q-page-container>
    </q-layout>
</template>

<script setup>
import { useForm } from "@inertiajs/vue3";
import WebLayout from "@/Layouts/WebLayout.vue";
import { ref } from "vue";
import { computed } from "vue";
import { useQuasar } from "quasar";

defineOptions({
    layout: WebLayout,
});
const $q = useQuasar();
const preview = ref(false);
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

const submitForm = () => {
    form.post(route("form.storeStep2"), {
        onError: (errors) => {
            console.log(errors); // Log errors to check the format
            form.errors = errors; // Assign errors to form.errors
            preview.value = false;
        },
        onSuccess: () =>{
            preview.value = false; // Close the preview dialog if open
            
            // Optional: Display a success notification
            $q.notify({
                type: "positive",
                message: "Form 2 submitted successfully!",
                position: "top-right",
            });
        }
    });
};
// const submitForm = () => form.post(route("form.storeStep2")
// );
const backToStep1 = () => window.history.back(); // Navigate back
</script>
