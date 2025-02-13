<template>
    <q-page padding>
      <h5 class="q-mb-md">Downloads</h5>
      
      <q-list bordered>
        <q-item v-for="info in informations" :key="info.id">
          <q-item-section>
            <!-- <q-btn
                        label= 'OPEN' 
                        color="black"
                        flat
                        @click="handleOpenApplicant(info.file_url)"
                    /> -->
            <a :href="info.file_url"  @click="handleOpenApplicant(info.file_url)" target="_blank" class="text-a">
              Download File - {{ info.id }}
            </a>
            <!-- {{ info.file_url }} -->
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