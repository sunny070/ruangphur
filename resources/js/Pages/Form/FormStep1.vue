<template>
  <q-page padding>
    <h5>Step 1: Deceased Information</h5>

    <q-form @submit.prevent="submitForm" class="q-gutter-md">
      <q-input filled v-model="form.name" label="Name of Deceased" required />
      <q-input filled v-model="form.relative_name" label="Relative Name" required />
      <q-input filled v-model="form.dob" label="Date of Birth" type="date" required />
      <q-select
        filled
        v-model="form.gender"
        :options="genderOptions"
        label="Gender"
        required
      />
      <q-input filled v-model="form.mobile" label="Mobile" required />
      <q-input filled v-model="form.district" label="District" required />
      <q-input filled v-model="form.locality" label="Locality" required />
      <q-input filled v-model="form.constituency" label="Constituency (Optional)" />
      <q-input filled v-model="form.time_of_death" label="Time of Death (Optional)" />
      <q-input filled v-model="form.place_of_death" label="Place of Death (Optional)" />

      <q-btn label="Next" color="primary" type="submit" />
    </q-form>
  </q-page>
</template>

<script setup>
import FormLayout from '@/Layouts/FormLayout.vue';
import { useForm } from '@inertiajs/vue3';
import { ref } from 'vue';
defineOptions({
    layout: FormLayout,
});
const genderOptions = [
  { label: 'Male', value: 'male' },
  { label: 'Female', value: 'female' },
  { label: 'Other', value: 'other' },
];

const form = useForm({
  name: '',
  relative_name: '',
  dob: '',
  gender: '',
  mobile: '',
  district: '',
  locality: '',
});

const submitForm = () => {
  form.post(route('form.storeStep1'));
};
</script>
