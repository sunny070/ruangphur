<template>
    <q-page padding>
        <div class="flex flex-col justify-center items-center gap-6">
            <div
                class="border-2 border-gray-200 bg-[#E9F4FF] flex-shrink-0 rounded-[10px] text-center"
            >
                <h3 class="text-black">Download Notice</h3>
                <p class="text-[#5B656F]">Ruangphurh chungchuang mipui te hriattur chhuahna</p>
            </div>
        </div>

        <q-list bordered>
            <q-item v-for="info in informations" :key="info.id">
                <q-item-section>
                    <div class="text-bold">{{ info.title }}</div>
                    <!-- Show title -->
                    <div class="text-caption">{{ info.sub_title }}</div>
                    <!-- Show subtitle -->
                    <span
                        @click="handleOpenApplicant(info.file_url)"
                        clickable
                        v-if="info.file_url"
                        class="text-black"
                    >
                        Download File
                    </span>
                    <!-- <a @click="handleOpenApplicant(info.file_url)" v-if="info.file_url" :href="info.file_url" target="_blank" class="text-black">
            Download File
          </a> -->
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

defineProps({ informations: Array });

const handleOpenApplicant = (item) => {
    let a = document.createElement("a");
    a.target = "_blank";
    a.href = `/storage/${item}`;
    a.click();
};
</script>
