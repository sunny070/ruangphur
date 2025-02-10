<template>
    <q-page class="bg-[#E9F4FF]">
        <div class="q-pa-md q-pa-lg-xl">
            <div class="row q-col-gutter-xl">
                <div class="col-12 col-md-6">
                    <div class="q-mb-lg">
                        <h2 class="text-h4 text-weight-bold q-mb-sm">
                            Chibai! In chhiattawhn naah Mizoram Sorkar a awm e.
                        </h2>
                        <p class="text-grey-8 q-mb-md">
                            Mithiin ruang chu i duhna huna taka phur thleng
                            turin dilna document dik tak upload turin leh
                            hriatirii ni e.
                        </p>
                        <q-btn color="black" label="Download Circular" class="q-px-lg" />
                    </div>
                </div>

                <div class="col-12 col-md-6">
                    <div class="row q-col-gutter-md">
                        <div class="col-12 col-sm-6">
                            <q-card class="bg-black text-white q-pa-md">
                                <q-card-section class="row items-center justify-between">
                                    <div>
                                        <div class="text-h6 q-mb-xs">Dilna</div>
                                        <div class="text-caption">Application form fill-up</div>
                                    </div>
                                    <img src="/image/Group 1321315146.png" style="width: 58px; height: 81px" />
                                </q-card-section>
                                <q-separator dark />
                                <q-card-actions>
                                    <q-btn flat :href="route('form.step1')" label="Get Started" class="full-width" />
                                </q-card-actions>
                            </q-card>
                        </div>

                        <div class="col-12 col-sm-6">
                            <q-card class="bg-black text-white q-pa-md">
                                <q-card-section class="row items-center justify-between">
                                    <div>
                                        <div class="text-h6 q-mb-xs">Chhuina</div>
                                        <div class="text-caption">Track your bill!</div>
                                    </div>
                                    <img src="/image/Group 1321315147.png" style="width: 58px; height: 81px" />
                                </q-card-section>
                                <q-separator dark />
                                <q-card-actions>
                                    <q-btn flat :href="route('track')" label="Track Now" class="full-width" />
                                </q-card-actions>
                            </q-card>
                        </div>
                    </div>
                </div>
            </div>
        </div>

        <div class="bg-grey-1 q-py-xl">
            <div class="q-pa-md q-pa-lg-xl">
                <div class="row q-col-gutter-xl">
                    <div class="col-12 col-md-6">
                        <img src="/image/Group 1321315121.png" class="full-width" style="max-width: 412px" />
                    </div>

                    <div class="col-12 col-md-6">
                        <q-card class="q-pa-md">
                            <q-card-section class="text-center">
                                <div class="text-h5 q-mb-md">
                                    Ruang Phurh chungchang a<br>
                                    zawhna leh chhana tlanglawn
                                </div>
                                <div class="text-h6 text-weight-bold">FAQs</div>
                            </q-card-section>

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
                </div>
            </div>
        </div>
    </q-page>
</template>

<script setup>
import WebLayout from '@/Layouts/WebLayout.vue';

defineOptions({
    layout: WebLayout,
});
const props = defineProps({
    faqs: Array,
});

</script>