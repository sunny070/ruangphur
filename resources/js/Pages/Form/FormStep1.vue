<template>
  <q-page padding>
    <h5>Step 1: Mitthi Chhungchang</h5>
    <q-form @submit.prevent="submitForm" class="q-gutter-md">
      <q-input filled v-model="form.name" label="Mitthi hming" required />
      
      <div class="flex gap-4">
        <q-select
                filled
                v-model="form.relative"
                lazy-rules
                :rules="[(val) => (val && val.length > 0) || 'Chhungte Hming is required']"
                :options="['Pa', 'Nu', 'Others']"
            />
        <q-input filled v-model="form.relative_name" label="A chhungte hming" required />
      </div>
      <q-input filled v-model="form.dob" label="Date of Birth" type="date" required />
      <q-select filled v-model="form.gender" :options="genderOptions" label="Gender" required />
      <q-input filled v-model="form.mobile" label="Mobile" required />
      <q-input filled v-model="form.district" label="District" required />
      <q-input filled v-model="form.locality" label="Locality" required />
      <q-select
                filled
                label="Assembly constituency"
                v-model="form.constituency"
                lazy-rules
                :rules="[(val) => (val && val.length > 0) || 'Chhungte Hming is required']"
                :options="['A', 'B', 'Others']"
            />
      <q-input filled v-model="form.dob" label="Time of Death" type="date" required />
      <q-input filled v-model="form.locality" label="Place of Death" required />
      <q-btn label="Next" color="black" type="submit" />
    </q-form>
  </q-page>
</template>

<script setup>
import { useForm } from '@inertiajs/vue3';
import FormLayout from "@/Layouts/FormLayout.vue";

defineOptions({
    layout: FormLayout,
});

const props = defineProps(['form']); // Prefill from server
const genderOptions = [
  { label: 'Male', value: 'male' },
  { label: 'Female', value: 'female' },
  { label: 'Other', value: 'other' },
];
const form = useForm({
  name: props.form.name || '',
  relative: props.form.relative || '',
  relative_name: props.form.relative_name || '',
  dob: props.form.dob || '',
  gender: props.form.gender || '',
  mobile: props.form.mobile || '',
  district: props.form.district || '',
  locality: props.form.locality || '',
  constituency: props.form.constituency || '',
  time_of_death: props.form.time_of_death || '',
  place_of_death: props.form.place_of_death || '',
});
const submitForm = () => form.post(route('form.storeStep1'));
</script>
