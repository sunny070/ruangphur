<template>
  <q-page padding>
    <q-card>
      <q-card-section>
        <div class="text-h6">Upload File</div>
      </q-card-section>

      <q-card-section>
        <q-form @submit.prevent="submitForm">
          <q-file outlined  v-model="form.file" label="Choose File" />
          <q-btn 
            type="submit" 
            color="black" 
            label="Upload" 
            class="q-mt-md"
            :loading="form.processing"
          />
        </q-form>
      </q-card-section>
    </q-card>
  </q-page>
</template>

<script setup>
import { useForm } from '@inertiajs/vue3';
import AdminLayout from "@/Layouts/AdminLayout.vue";

defineOptions({
    layout: AdminLayout,
});

const form = useForm({
  file: null
});

const submitForm = () => {
  form.post(route('admin.info.store'), {
    onSuccess: () => form.reset(),
    forceFormData: true
  });
};
</script>