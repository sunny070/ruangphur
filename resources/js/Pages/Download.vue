<template>
    <q-page padding>
      <h5 class="q-mb-md">Downloads</h5>
      
      <q-list bordered>
        <q-item v-for="info in informations" :key="info.id">
          <q-item-section>
            <a :href="info.file_url" class="text-primary" download>
              Download File - {{ info.id }}
            </a>
          </q-item-section>
          <q-item-section side>
            <span class="text-caption">{{ info.created_at }}</span>
          </q-item-section>
        </q-item>
      </q-list>
    </q-page>
  </template>
  
  <script setup>
  import WebLayout from "@/Layouts/WebLayout.vue";

defineOptions({
    layout: WebLayout,
});

  defineProps({ informations: Array })
  </script>