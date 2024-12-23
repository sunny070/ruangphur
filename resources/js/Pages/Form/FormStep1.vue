<template>
    <q-page padding>
        <h5>Step 1: Mitthi Chhungchang</h5>
        <q-form @submit.prevent="submitForm" class="q-gutter-md">
            <div>
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
                (val && val.length > 0) || 'Assembly constituency is required',
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
    </q-page>
</template>

<script setup>
import { useForm } from "@inertiajs/vue3";
import FormLayout from "@/Layouts/FormLayout.vue";

defineOptions({
    layout: FormLayout,
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
