<template>
  <q-page padding>
    <h5>Step 2: Transport Information</h5>
    <q-form @submit.prevent="submitForm" class="q-gutter-md">
      
      <q-input filled v-model="form.source_district" label="Source District" required />
      <q-input filled v-model="form.source_locality" label="Source Locality" required />
      <q-input filled v-model="form.destination_district" label="Destination District" required />
      <q-input filled v-model="form.destination_locality" label="Destination Locality" required />
      <q-input filled v-model="form.distance" label="Distance (in km)" required />
      <q-input filled v-model="form.vehicle_number" label="Source District" required />
      <q-input filled v-model="form.driver_name" label="Source District" required />
      <q-input filled v-model="form.driver_phone" label="Source District" required />
      <q-input filled v-model="form.vehicle_owner" label="Source District" required />
      <q-input filled v-model="form.transport_cost" label="Source District" required />
      <q-btn class="text-black" label="Preview" color="white" @click="backToStep1" />
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
const form = useForm({
  source_district: props.form.source_district || '',
  source_locality: props.form.source_locality || '',
  destination_district: props.form.destination_district || '',
  destination_locality: props.form.destination_locality || '',
  distance: props.form.distance || '',
  vehicle_number: props.form.vehicle_number || '',
  driver_name: props.form.driver_name || '',
  driver_phone: props.form.driver_phone || '',
  vehicle_owner: props.form.vehicle_owner || '',
  transport_cost: props.form.transport_cost || '',
});

const submitForm = () => form.post(route('form.storeStep2'));
const backToStep1 = () => window.history.back(); // Navigate back
</script>
