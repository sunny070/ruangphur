<template>
    <q-page padding>
      <q-card class="q-mb-md">
        <q-card-section class="row items-center">
          <div class="text-h6">Notes Management</div>
          <q-space />
          <q-btn 
            color="primary" 
            label="Create New Note" 
            :href="route('admin.notes.create')"
          />
        </q-card-section>
  
        <q-card-section>
          <q-table
            :rows="notes.data"
            :columns="columns"
            row-key="id"
            :pagination="pagination"
          >
            <template v-slot:body-cell-status="props">
              <q-td :props="props">
                <q-select
                  v-model="props.row.status"
                  :options="['draft', 'published', 'archived']"
                  dense
                  @update:model-value="updateStatus(props.row)"
                />
              </q-td>
            </template>
  
            <template v-slot:body-cell-actions="props">
              <q-td :props="props" class="q-gutter-sm">
                <q-btn
                  icon="edit"
                  color="blue"
                  dense
                  round
                  @click="openEditDialog(props.row)"
                />
                <q-btn
                  icon="delete"
                  color="red"
                  dense
                  round
                  @click="deleteNote(props.row.id)"
                />
              </q-td>
            </template>
          </q-table>
        </q-card-section>
      </q-card>
  
      <!-- Edit Dialog -->
      <q-dialog v-model="editDialog">
        <q-card style="min-width: 400px">
          <q-card-section>
            <div class="text-h6">Edit Note</div>
          </q-card-section>
  
          <q-card-section>
            <q-form @submit="updateNote">
              <q-input
                v-model="editForm.title"
                label="Title"
                class="q-mb-md"
                outlined
                required
              />
  
              <q-editor
                v-model="editForm.content"
                min-height="150px"
                label="Content"
                class="q-mb-md"
                required
              />
  
              <q-select
                v-model="editForm.status"
                :options="['draft', 'published', 'archived']"
                label="Status"
                outlined
                class="q-mb-md"
              />
  
              <div class="row justify-end q-gutter-sm">
                <q-btn label="Cancel" flat v-close-popup />
                <q-btn 
                  type="submit" 
                  label="Save" 
                  color="primary" 
                  :loading="editForm.processing"
                />
              </div>
            </q-form>
          </q-card-section>
        </q-card>
      </q-dialog>
    </q-page>
  </template>
  
  <script setup>
  import { useForm } from '@inertiajs/inertia-vue3';
  import { ref, computed } from 'vue';
  import AdminLayout from "@/Layouts/AdminLayout.vue";

defineOptions({
    layout: AdminLayout,
});
  
  const props = defineProps({
    notes: Object,
  });
  
  const columns = [
    { name: 'title', label: 'Title', field: 'title', align: 'left' },
    { name: 'content', label: 'Content', field: 'content', align: 'left', format: val => val.substring(0, 50) + '...' },
    { name: 'status', label: 'Status', field: 'status', align: 'center' },
    { name: 'created_at', label: 'Created At', field: 'created_at', align: 'left' },
    { name: 'actions', label: 'Actions', align: 'right' },
  ];
  
  const pagination = computed(() => ({
    page: props.notes.current_page,
    rowsPerPage: props.notes.per_page,
    rowsNumber: props.notes.total,
  }));
  
  const editDialog = ref(false);
  const selectedNote = ref(null);
  
  const editForm = useForm({
    title: '',
    content: '',
    status: 'published',
  });
  
  function openEditDialog(note) {
    selectedNote.value = note.id;
    editForm.title = note.title;
    editForm.content = note.content;
    editForm.status = note.status;
    editDialog.value = true;
  }
  
  function updateNote() {
    editForm.put(route('admin.notes.update', selectedNote.value), {
      onSuccess: () => {
        editDialog.value = false;
        editForm.reset();
      }
    });
  }
  
  function updateStatus(note) {
    useForm({ status: note.status }).put(route('admin.notes.update', note.id));
  }
  
  function deleteNote(id) {
    if (confirm('Are you sure you want to delete this note?')) {
      useForm().delete(route('admin.notes.destroy', id));
    }
  }
  </script>