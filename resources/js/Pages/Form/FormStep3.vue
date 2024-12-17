<template>
  <q-page padding>
    <h5>Step 3: Applicant Information</h5>
    <q-form @submit.prevent="submitForm" class="q-gutter-md">
      <q-input filled v-model="form.name" label="Name" required />
      <q-input filled v-model="form.mobile" label="Mobile" required />
      <q-input filled v-model="form.district" label="District" required />
      <q-input filled v-model="form.locality" label="Locality" required />
      <q-input filled v-model="form.bank_name" label="Bank Name" required />
      <q-input filled v-model="form.account_no" label="Account Number" required />
      <q-input filled v-model="form.ifsc_code" label="IFSC Code" required />
      <q-btn label="Preview" class="text-black" color="white" @click="backToStep2" />
      <q-btn label="Submit & Send OTP" color="black" type="submit" />
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

// Initialize form with prefilled data from session or defaults
const form = useForm({
  name: props.form.name || '',
  mobile: props.form.mobile || '',
  district: props.form.district || '',
  locality: props.form.locality || '',
  bank_name: props.form.bank_name || '',
  account_no: props.form.account_no || '',
  ifsc_code: props.form.ifsc_code || '',
});

const submitForm = () => form.post(route('form.storeStep3')); // Submit the form

const backToStep2 = () => window.history.back(); // Navigate back to Step 2
</script>
