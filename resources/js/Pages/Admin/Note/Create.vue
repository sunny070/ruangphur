<template>
    <q-page padding>
      <q-card class="q-mb-md">
        <q-card-section>
          <div class="text-h6">Create New Note</div>
        </q-card-section>
  
        <q-card-section>
          <q-form @submit="submit">
            <q-input
              v-model="form.title"
              label="Title"
              outlined
              class="q-mb-md"
              required
            />
  
            <q-editor
              v-model="form.content"
              min-height="250px"
              label="Content"
              class="q-mb-md"
              required
            />
  
            <q-select
              v-model="form.status"
              :options="['draft', 'published', 'archived']"
              label="Status"
              outlined
              class="q-mb-md"
            />
  
            <div class="row q-gutter-sm">
              <q-btn 
                type="submit" 
                label="Create Note" 
                color="primary" 
                :loading="form.processing"
              />
              <q-btn 
                label="Cancel" 
                :to="{ name: 'admin.notes.index' }" 
                flat 
              />
            </div>
          </q-form>
        </q-card-section>
      </q-card>
    </q-page>
  </template>
  
  <script setup>
  import { useForm } from '@inertiajs/inertia-vue3';
  import AdminLayout from "@/Layouts/AdminLayout.vue";

defineOptions({
    layout: AdminLayout,
});
  
  const form = useForm({
    title: '',
    content: '',
    status: 'published',
  });
  
  const submit = () => {
    form.post(route('admin.notes.store'), {
      onSuccess: () => form.reset(),
    });
  };
  </script>