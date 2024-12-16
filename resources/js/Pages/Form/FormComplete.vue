<template>
    <q-page padding>
      <h2>Review and Submit Your Application</h2>
  
      <div>
        <h3>Deceased Information:</h3>
        <q-list bordered>
          <q-item v-for="(value, key) in form.deceased" :key="key">
            <q-item-label>{{ key }}: {{ value }}</q-item-label>
          </q-item>
        </q-list>
      </div>
  
      <div>
        <h3>Transport Information:</h3>
        <q-list bordered>
          <q-item v-for="(value, key) in form.transport" :key="key">
            <q-item-label>{{ key }}: {{ value }}</q-item-label>
          </q-item>
        </q-list>
      </div>
  
      <div>
        <h3>Applicant Information:</h3>
        <q-list bordered>
          <q-item v-for="(value, key) in form.applicant" :key="key">
            <q-item-label>{{ key }}: {{ value }}</q-item-label>
          </q-item>
        </q-list>
      </div>
  
      <q-btn label="Submit" color="primary" @click="submitForm" />
    </q-page>
  </template>
  
  <script setup>
  import { usePage } from '@inertiajs/vue3';
  
  const form = usePage().props;
  
  // Final submission
  const submitForm = () => {
    Inertia.post(route('form.submit'), form, {
      onSuccess: () => {
        // Handle success
        alert('Application Submitted Successfully');
      },
    });
  };
  </script>
  