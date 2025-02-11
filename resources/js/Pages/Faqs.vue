<template>
    <q-page class="bg-[#f8f9fa]">
        <div class="q-pa-xl">
            <div class="text-center q-mb-xl">
                <h1 class="text-h3 text-weight-bold q-mb-sm">
                    Frequently Asked Questions
                </h1>
                <p class="text-h6 text-grey-7">
                    Ruangphurh chungchuang a zawhna leh chhanna tlanglawn  I tan chawpchhuah a ni e
                </p>
            </div>

            <q-card class="q-pa-md" flat>
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

                <div v-if="!faqs.length" class="text-center q-pa-xl text-grey-7">
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