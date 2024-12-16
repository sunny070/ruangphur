<template>
  <q-page padding>
    <h2>Step 3: Applicant Information</h2>

    <q-form @submit.prevent="submitForm" class="q-gutter-md">
      <q-input filled v-model="form.district" label="District" required />
      <q-input filled v-model="form.locality" label="Locality" required />
      <q-input filled v-model="form.bank_name" label="Bank Name" required />
      <q-input filled v-model="form.account_no" label="Account Number" required />
      <q-input filled v-model="form.ifsc_code" label="IFSC Code" required />

      <q-btn label="Submit" color="primary" type="submit" />
    </q-form>
  </q-page>
</template>

<script setup>
import FormLayout from '@/Layouts/FormLayout.vue';
import { useForm } from '@inertiajs/vue3';

defineOptions({
    layout: FormLayout,
});


const form = useForm({
  district: '',
  locality: '',
  bank_name: '',
  account_no: '',
  ifsc_code: '',
});

const submitForm = () => {
  form.post(route('form.storeStep3'));
};
</script>
