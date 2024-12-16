<template>
  <q-page padding>
    <h2>Step 2: Transport Information</h2>

    <q-form @submit.prevent="submitForm" class="q-gutter-md">
      <q-input filled v-model="form.source_district" label="Source District" required />
      <q-input filled v-model="form.source_locality" label="Source Locality" required />
      <q-input filled v-model="form.destination_district" label="Destination District" required />
      <q-input filled v-model="form.destination_locality" label="Destination Locality" required />
      <q-input filled v-model="form.distance" label="Distance (in km)" required />
      <q-input filled v-model="form.vehicle_number" label="Vehicle Number" required />
      <q-input filled v-model="form.driver_name" label="Driver Name" required />
      <q-input filled v-model="form.driver_phone" label="Driver Phone" required />
      <q-input filled v-model="form.vehicle_owner" label="Vehicle Owner" required />
      <q-input filled v-model="form.transport_cost" label="Transport Cost" required />

      <q-btn label="Next" color="primary" type="submit" />
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
  source_district: '',
  source_locality: '',
  destination_district: '',
  destination_locality: '',
  distance: '',
  vehicle_number: '',
  driver_name: '',
  driver_phone: '',
  vehicle_owner: '',
  transport_cost: '',
});

const submitForm = () => {
  form.post(route('form.storeStep2'));
};
</script>
