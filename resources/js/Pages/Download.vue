<template>
    <q-page padding>
      <h5 class="q-mb-md">Downloads</h5>
      
      <q-list bordered>
      <q-item v-for="info in informations" :key="info.id">
        <q-item-section>
          <div class="text-bold">{{ info.title }}</div>  <!-- Show title -->
          <div class="text-caption">{{ info.sub_title }}</div>  <!-- Show subtitle -->
          <a v-if="info.file_url" :href="info.file_url" target="_blank" class="text-black">
            Download File
          </a>
          <span v-else class="text-grey">No file available</span>
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

  const handleOpenApplicant = (item) => {
    let a = document.createElement("a");
    a.target = "_blank";
    a.href = `/storage/${item}`;
    a.click();
};

  </script>