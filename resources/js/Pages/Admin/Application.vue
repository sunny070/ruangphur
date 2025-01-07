<template>
    <q-page padding>
      <!-- Flash Success/Error Messages -->
      <q-banner v-if="flash.success" class="bg-green-4 text-white" dense>
        {{ flash.success }}
      </q-banner>
      <q-banner v-if="flash.error" class="bg-red-4 text-white" dense>
        {{ flash.error }}
      </q-banner>
  
      <h2 class="q-mt-md">Pending Applications</h2>
  
      <!-- Table for Pending Applications -->
      <q-table
        :rows="applications"
        :columns="columns"
        :rows-per-page-options="[5, 10, 15, 20]"
        row-key="id"
        :pagination="pagination"
      >
        <template v-slot:top>
          <q-btn label="Refresh" color="primary" @click="loadApplications" />
        </template>
  
        <template v-slot:body-cell-actions="props">
          <q-td :props="props">
            <q-btn
              v-if="props.row.status === 'Pending'"
              @click="approveApplication(props.row.id)"
              color="green"
              label="Approve"
              size="sm"
            />
            <q-btn
              v-if="props.row.status === 'Pending'"
              @click="rejectApplication(props.row.id)"
              color="red"
              label="Reject"
              size="sm"
            />
          </q-td>
        </template>
      </q-table>
    </q-page>
  </template>
<script setup>
import AppLayout from "@/Layouts/AppLayout.vue";
import { defineProps, ref } from 'vue';
import { router as $inertia } from '@inertiajs/vue3'; // Import Inertia router

defineOptions({
  layout: AppLayout,
});

// Props passed from the parent (admin controller)
const props = defineProps({
  applications: Array,
  flash: Object, // To pass flash messages from the controller
});

// Define reactive state (pagination, columns, etc.)
const pagination = ref({
  page: 1,
  rowsPerPage: 10,
});

const columns = ref([
  { name: 'application_no', label: 'Application No.', align: 'left', field: row => row.application_no },
  { name: 'applicant_name', label: 'Applicant Name', align: 'left', field: row => row.applicant.name },
  { name: 'status', label: 'Status', align: 'left', field: row => row.status },
  { name: 'actions', label: 'Actions', align: 'center', field: 'actions' },
]);

// Methods for handling approve/reject actions
const approveApplication = async (applicationId) => {
  if (confirm('Are you sure you want to approve this application?')) {
    try {
      await $inertia.post(`/admin/application/${applicationId}/approve`);
    } catch (error) {
      console.error(error);
    }
  }
};

const rejectApplication = async (applicationId) => {
  if (confirm('Are you sure you want to reject this application?')) {
    try {
      await $inertia.post(`/admin/application/${applicationId}/reject`);
    } catch (error) {
      console.error(error);
    }
  }
};

// Reload the applications after approve/reject actions
const loadApplications = () => {
  $inertia.visit('/admin/applications', { method: 'get' });
};
</script>
