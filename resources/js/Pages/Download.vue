<template>
    <q-page padding>
        <Head title="Download" />
        <div class="flex flex-col justify-center items-center gap-6">
            <div
                class="border-2 border-gray-200 bg-[#E9F4FF] flex-shrink-0 rounded-[10px] w-[412px] h-[146px] text-center"
            >
                <h4 class="text-black">Download Notice</h4>
                <p class="text-[#5B656F]">
                    Ruangphurh chungchuang mipui te hriattur chhuahna
                </p>
            </div>

            <q-list bordered class="rounded-md w-[412px] h-auto">
                <q-item v-for="info in informations" :key="info.id">
                    <q-item-section>
                        <div class="leading-6">
                            <p class="text-bold leading-6">{{ info.title }}</p>
                            <p class="text-caption leading-6">
                                {{ info.sub_title }}
                            </p>

                            <!-- Show title -->
                            <!-- Show subtitle -->
                            <span class="text-caption">
                                <q-icon name="event" class="q-mr-xs" />
                                {{ info.created_at }}
                                <q-icon name="access_time" class="q-ml-xs" />
                            </span>
                        </div>
                        <hr class="my-4 border-border" />
                    </q-item-section>

                    <q-item-section side>
                        <Link
                            @click="handleOpenApplicant(info.file_url)"
                            clickable
                            v-if="info.file_url"
                            class="text-black text-xl"
                        >
                            <q-icon name="download" />
                        </Link>
                        <!-- <a @click="handleOpenApplicant(info.file_url)" v-if="info.file_url" :href="info.file_url" target="_blank" class="text-black">
          Download File
        </a> -->
                        <span v-else class="text-grey">No file available</span>
                    </q-item-section>
                </q-item>
            </q-list>
        </div>
    </q-page>
</template>

<script setup>
import WebLayout from "@/Layouts/WebLayout.vue";
import { Link } from "@inertiajs/vue3";
import { Head } from "@inertiajs/inertia-vue3";

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
