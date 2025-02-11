<template>
    <q-page padding>
      <q-btn
        color="primary"
        label="Create New"
        :to="route('admin.info.create')"
        class="q-mb-md"
      />
  
      <q-table
        :rows="informations"
        :columns="columns"
        row-key="id"
      >
        <template v-slot:body-cell-file_path="props">
          <q-td :props="props">
            <a
              v-if="props.row.file_path"
              :href="`/storage/${props.row.file_path}`"
              target="_blank"
              class="text-primary"
            >
              View File
            </a>
            <span v-else>No file</span>
          </q-td>
        </template>
  
        <template v-slot:body-cell-actions="props">
          <q-td :props="props">
            <q-btn
              icon="edit"
              color="grey-7"
              dense
              flat
              :to="route('info.edit', props.row.id)"
            />
          </q-td>
        </template>
      </q-table>
    </q-page>
  </template>
  
  <script setup>
  import { Link } from '@inertiajs/vue3'
  import AdminLayout from "@/Layouts/AdminLayout.vue";
  
  defineOptions({ layout: AdminLayout });
  
  const props = defineProps({
    informations: Array,
  });
  
  const columns = [
    { name: 'id', label: 'ID', field: 'id' },
    { name: 'file_path', label: 'File', field: 'file_path' },
    { name: 'actions', label: 'Actions', field: '', align: 'right' },
  ];
  </script>