<template>
    <q-page padding>
        <div class="flex flex-col justify-center items-center gap-6">
            <div class="border-2 border-gray-200 bg-[#E9F4FF] flex-shrink-0 rounded-[10px] w-[412px] h-[146px] text-center">
                <h6 class="text-black">
                    Frequently Asked Questions
                </h6>
                <p class="text-[#5B656F]">
                    Ruangphurh chungchuang a zawhna leh chhanna tlanglawn  I tan chawpchhuah a ni e
                </p>
            </div>

            <q-card class="rounded-md w-[412px] h-auto" flat>
                <q-list bordered separator v-if="faqs.length">
                    <q-expansion-item v-for="(faq, index) in faqs" :key="faq.id" expand-separator
                        expand-icon="add" :header-class="'text-weight-bold'">
                        <template v-slot:header>
                            <q-item-section>
                                {{ index + 1 }}. {{ faq.title }}
                            </q-item-section>
                        </template>
                        <q-card>
                            <q-card-section>
                                {{ faq.content }}
                            </q-card-section>
                        </q-card>

                    </q-expansion-item>
                </q-list>
                <div v-else class="text-center text-grey-6 q-pa-md">
                    No FAQs available at the moment
                </div>

               
            </q-card>
        </div>
    </q-page>
</template>

<script setup>
import WebLayout from "@/Layouts/WebLayout.vue";

defineOptions({
    layout: WebLayout,
});

const props = defineProps({
    faqs: Array,
});
</script>

<style scoped>
.q-expansion-item::v-deep .q-item {
    padding: 16px 24px;
}

.q-expansion-item::v-deep .q-focus-helper {
    background: rgba(0, 0, 0, 0.05);
}

.q-expansion-item::v-deep .q-card {
    background: #f8f9fa;
}
</style>