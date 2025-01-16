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
                    <h5>Step 1: Mitthi Chhungchang</h5>
                </div>
                <div class="border w-[412px] h-[996px] rounded-[10px] p-[23px]">  
                    <q-form @submit.prevent="submitForm" class="q-gutter-md">
                        <div>
                          <div class="pb-3 flex items-center gap-2">
                            <div class="w-[3px] h-[19px] flex-shrink-0 bg-black"></div>
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
                                required
                            />
                        </div>
                        <div>
                            <div class="text-sm font-medium text-black q-mb-xs">
                                A phone number
                            </div>
                            <q-input
                                outlined
                                placeholder="Mitthi phone number"
                                dense
                                class="custom-input"
                                v-model="form.mobile"
                            />
                        </div>

                        <div>
                            <div class="text-sm font-medium text-black q-mb-xs">
                                District
                            </div>
                            <q-input
                                outlined
                                placeholder="Ruang Zalhna tur District awmna"
                                dense
                                class="custom-input"
                                v-model="form.district"
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
                            />
                        </div>
                        <!-- <q-input filled v-model="form.mobile" label="Mobile" required /> -->
                        <!-- <q-input filled v-model="form.district" label="District" required /> -->
                        <!-- <q-input filled v-model="form.locality" label="Locality" required /> -->

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
                                :rules="[
                                    (val) =>
                                        (val && val.length > 0) ||
                                        'Assembly constituency is required',
                                ]"
                                :options="['A', 'B', 'Others']"
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
                            />
                        </div>

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

const props = defineProps(["form"]); // Prefill from server
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
    mobile: props.form.mobile || "",
    district: props.form.district || "",
    locality: props.form.locality || "",
    constituency: props.form.constituency || "",
    time_of_death: props.form.time_of_death || "",
    place_of_death: props.form.place_of_death || "",
});
const submitForm = () => form.post(route("form.storeStep1"));
</script>
