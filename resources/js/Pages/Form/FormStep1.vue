<template>
    <q-page padding>
        <div class="flex flex-col justify-center items-center gap-6">
            <div
                class="border-2 border-gray-200 bg-[#E9F4FF] flex-shrink-0 rounded-[10px] text-center"
            >
                
                <!-- <h5>Step 1: Mitthi Chhungchang</h5> -->
                <img
                    id="background"
                    class="w-[412px] h-[193px"
                    src="image/Vertical Stepper with numbers.png"
                />
            </div>
            <div class="border w-[412px] h-[996px] rounded-[10px] p-[23px]">
                <q-form @submit.prevent="submitForm" class="q-gutter-md">
                    <div>
                        <div class="pb-3 flex items-center gap-2">
                            <div
                                class="w-[3px] h-[19px] flex-shrink-0 bg-black"
                            ></div>
                            <h5>Mitthi Chhungchang</h5>
                        </div>
                        <div class="text-sm font-medium text-black q-mb-xs">
                            Mitthi hming
                        </div>
                        <q-input
                            outlined
                            placeholder="Mitthi hming chhu lut rawh le"
                            dense
                            class="custom-input"
                            v-model="form.name"
                            :error="form.errors.name"
                            :error-message="
                                form.errors.name ? form.errors.name : ''
                            "
                            :rules="[
                                (val) =>
                                    /^[a-zA-Z\s]*$/.test(val) ||
                                    'Only alphabets are allowed for Name',
                            ]"
                        />
                    </div>
                    <!-- <q-input filled v-model="form.name" label="Mitthi hming" required /> -->

                    <div class="">
                        <div class="text-sm font-medium text-black q-mb-xs">
                            A chhungte hming
                        </div>
                        <div class="flex gap-4">
                            <q-select
                                outlined
                                dense
                                label="Pa"
                                v-model="form.relative"
                                lazy-rules
                                :error="form.errors.relative"
                                :error-message="
                                    form.errors.relative
                                        ? form.errors.relative
                                        : ''
                                "
                                :rules="[
                                    (val) =>
                                        (val && val.length > 0) ||
                                        'Chhungte Hming is required',
                                ]"
                                :options="['Pa', 'Nu', 'Others']"
                            />
                            <q-input
                                outlined
                                dense
                                v-model="form.relative_name"
                                label="A chhungte hming"
                                required
                                :error="form.errors.relative_name"
                                :error-message="
                                    form.errors.relative_name
                                        ? form.errors.relative_name
                                        : ''
                                "
                                :rules="[
                                    (val) =>
                                        /^[a-zA-Z\s]*$/.test(val) ||
                                        'Only alphabets are allowed for Relative Name',
                                ]"
                            />
                        </div>
                    </div>

                    <div>
                        <div class="text-sm font-medium text-black q-mb-xs">
                            A pianni leh thla
                        </div>
                        <q-input
                            type="date"
                            outlined
                            placeholder="Mitthi hming chhu lut rawh le"
                            dense
                            class="custom-input"
                            v-model="form.dob"
                            :error="form.errors.dob"
                            :error-message="
                                form.errors.dob ? form.errors.dob : ''
                            "
                        />
                    </div>
                    <div>
                        <div class="text-sm font-medium text-black q-mb-xs">
                            Gender
                        </div>
                        <q-select
                            outlined
                            dense
                            v-model="form.gender"
                            :options="genderOptions"
                            label="Gender"
                            :error="form.errors.gender"
                            :error-message="
                                form.errors.gender ? form.errors.gender : ''
                            "
                            required
                        />
                    </div>

                    <div>
                        <div class="text-sm font-medium text-black q-mb-xs">
                            District
                        </div>
                        <!-- District dropdown -->
                        <q-select
                            outlined
                            dense
                            v-model="form.district"
                            label="Select District"
                            :options="district"
                            :error="form.errors.district"
                            :error-message="
                                form.errors.district ? form.errors.district : ''
                            "
                            required
                        />
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
                            v-model="form.locality"
                            :error="form.errors.locality"
                            :error-message="
                                form.errors.locality ? form.errors.locality : ''
                            "
                        />
                    </div>

                    <div>
                        <div class="text-sm font-medium text-black q-mb-xs">
                            Assembly constituency
                        </div>
                        <q-select
                            outlined
                            dense
                            label="Mitthi te awmna assembly constituency"
                            v-model="form.constituency"
                            lazy-rules
                            :options="['A', 'B', 'Others']"
                            :rules="[
                                (val) =>
                                    (val && val.length > 0) ||
                                    'Assembly constituency is required',
                            ]"
                            :error="form.errors.constituency"
                            :error-message="
                                form.errors.constituency
                                    ? form.errors.constituency
                                    : ''
                            "
                        />
                    </div>

                    <div>
                        <div class="text-sm font-medium text-black q-mb-xs">
                            Thih ni leh darkar
                        </div>
                        <q-input
                            type="date"
                            outlined
                            placeholder="Mitthi thih ni leh darkar"
                            dense
                            class="custom-input"
                            v-model="form.time_of_death"
                            :error="form.errors.time_of_death"
                            :error-message="
                                form.errors.time_of_death
                                    ? form.errors.time_of_death
                                    : ''
                            "
                        />
                    </div>
                    <div>
                        <div class="text-sm font-medium text-black q-mb-xs">
                            Thihna hmun
                        </div>
                        <q-input
                            outlined
                            placeholder="Thihna hmun"
                            dense
                            class="custom-input"
                            v-model="form.place_of_death"
                            :error="form.errors.place_of_death"
                            :error-message="
                                form.errors.place_of_death
                                    ? form.errors.place_of_death
                                    : ''
                            "
                        />
                    </div>

                    <q-btn label="Preview" color="black" type="submit" />
                    <q-btn label="Next" color="black" type="submit" />
                </q-form>
            </div>
        </div>
    </q-page>
</template>

<script setup>
import { useForm } from "@inertiajs/vue3";
import WebLayout from "@/Layouts/WebLayout.vue";
import { ref } from "vue";

defineOptions({
    layout: WebLayout,
});

const props = defineProps(["form", "districts"]); // Prefill from server

const district = ref(props.districts || []);
const genderOptions = [
    { label: "Male", value: "male" },
    { label: "Female", value: "female" },
    { label: "Other", value: "other" },
];

const form = useForm({
    name: props.form.name || "",
    relative: props.form.relative || "",
    relative_name: props.form.relative_name || "",
    dob: props.form.dob || "",
    gender: props.form.gender || "",
    district: props.form.district || "",
    locality: props.form.locality || "",
    constituency: props.form.constituency || "",
    time_of_death: props.form.time_of_death || "",
    place_of_death: props.form.place_of_death || "",
});

const submitForm = () => {
    form.post(route("form.storeStep1"), {
        onError: (errors) => {
            console.log(errors); // Check errors returned from backend
        },
    });
};
</script>
