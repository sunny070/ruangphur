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
                        <div v-if="$page.props.errors.name" class="text-red">{{ $page.props.errors.name }}</div>
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
                            <div v-if="$page.props.errors.relative" class="text-red">{{ $page.props.errors.relative }}</div>
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
                            <div v-if="$page.props.errors.relative_name" class="text-red">{{ $page.props.errors.relative_name }}</div>
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
                        <div v-if="$page.props.errors.dob" class="text-red">{{ $page.props.errors.dob }}</div>
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
                    <div v-if="$page.props.errors.gender" class="text-red">{{ $page.props.errors.gender }}</div>

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
                        <div v-if="$page.props.errors.district" class="text-red">{{ $page.props.errors.district }}</div>

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
                        <div v-if="$page.props.errors.locality" class="text-red">{{ $page.props.errors.locality }}</div>
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
                            :options="filteredConstituencies"
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
                        <div v-if="$page.props.errors.constituency" class="text-red">{{ $page.props.errors.constituency }}</div>
                    </div>

                    <div>
                        <div class="text-sm font-medium text-black q-mb-xs">
                            Thih ni leh darkar
                        </div>
                        <q-input
                            type="datetime-local"
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
                        <div v-if="$page.props.errors.time_of_death" class="text-red">{{ $page.props.errors.time_of_death }}</div>
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
                        <div v-if="$page.props.errors.place_of_death" class="text-red">{{ $page.props.errors.place_of_death }}</div>
                    </div>

                    <q-btn
                        class="text-black"
                        label="Preview"
                        color="white"
                        @click="preview = true"
                    />
                    <q-btn label="Next" color="black" @click="submitForm" />
                </q-form>
            </div>
        </div>
        <q-dialog v-model="preview">
            <div>
                <q-card class="w-[412px] h-[791px] rounded-t-lg">
                    <q-card-section class="flex flex-col items-center">
                        <p class="text-[12px]">Mitthi Chungchang</p>
                        <img
                            class="w-[17px] h-[30px]"
                            src="image/ruang.png"
                            alt=""
                        />
                        <h5 class="text-2xl">
                            {{ form.name }}
                        </h5>
                    </q-card-section>

                    <q-card-section class="q-pt-none">
                        <hr class="my-4 border-border" />
                        <div class="leading-[2px]">
                            <p class="text-[#61646B]">Mitthi pianni leh thla</p>
                            <p>{{ form.dob }}</p>
                        </div>
                        <div class="leading-[2px] pt-4">
                            <p class="text-[#61646B]">Kum</p>
                            <p>{{ ageAtDeath }} years</p>
                        </div>
                        <div class="leading-[2px] pt-4">
                            <p class="text-[#61646B]">Gender</p>
                            <p>{{ form.gender['value'] }}</p>
                        </div>
                        
                        <div class="leading-[2px] pt-4">
                            <p class="text-[#61646B]">Thih ni leh darkar</p>
                            <p>{{ formatDateTime(form.time_of_death) }}</p>
                        </div>
                        <div class="leading-[2px] pt-4">
                            <p class="text-[#61646B]">Thihna hmun</p>
                            <p>{{ form.place_of_death }}</p>
                        </div>
                        <div class="leading-[2px] pt-4">
                            <p class="text-[#61646B]">District</p>
                            <p>{{ form.district['label'] }}</p>
                        </div>
                        <div class="leading-[2px] pt-4">
                            <p class="text-[#61646B]">Veng/Khua</p>
                            <p>{{ form.locality }}</p>
                        </div>
                        <div class="leading-[2px] pt-4">
                            <p class="text-[#61646B]">Assembly Constituency</p>
                            <p>{{ form.constituency['label'] }}</p>
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
</template>

<script setup>
import { useForm } from "@inertiajs/vue3";
import WebLayout from "@/Layouts/WebLayout.vue";
import { ref,computed } from "vue";
import { useQuasar } from "quasar";

defineOptions({
    layout: WebLayout,
});

const props = defineProps(["form", "districts" ,'constituency']); // Prefill from server

const preview = ref(false);

const $q = useQuasar();

const district = ref(props.districts || []);
const constituencies = ref(props.constituency || []);

// Reactive variable for filtered constituencies
const filteredConstituencies = computed(() => {
    if (!form.district) return [];
    return constituencies.value.filter(
        (item) => item.district === form.district.value
    );
});

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

const formatDateTime = (datetime) => {
    if (!datetime) return "";

    const dateObj = new Date(datetime);
    if (isNaN(dateObj)) return datetime; // Return as is if invalid

    const options = {
        year: "numeric",
        month: "long",
        day: "numeric",
        hour: "2-digit",
        minute: "2-digit",
        hour12: true,
    };

    return dateObj.toLocaleString("en-IN", options);
};

// Compute the age at death
const ageAtDeath = computed(() => {
  if (!form.dob || !form.time_of_death) return "N/A";

  const dob = new Date(form.dob);
  const timeOfDeath = new Date(form.time_of_death);

  if (isNaN(dob.getTime()) || isNaN(timeOfDeath.getTime())) return "N/A";

  let age = timeOfDeath.getFullYear() - dob.getFullYear();
  const hasHadBirthday = timeOfDeath.getMonth() > dob.getMonth() ||
    (timeOfDeath.getMonth() === dob.getMonth() &&
      timeOfDeath.getDate() >= dob.getDate());

  if (!hasHadBirthday) age -= 1;

  return age >= 0 ? age : "N/A"; // Ensure age is valid
});

const submitForm = () => {
    form.post(route("form.storeStep1"), {
        onError: (errors) => {
            console.log(errors); // Check errors returned from backend
            preview.value = false;
        },
        onSuccess: () => {
            console.log("Form 1 submitted"); // Log success message
            preview.value = false; // Close the preview dialog if open
            
            // Optional: Display a success notification
            $q.notify({
                type: "positive",
                message: "Form 1 submitted successfully!",
                position: "top-right",
            });
        },
    });
};
</script>
