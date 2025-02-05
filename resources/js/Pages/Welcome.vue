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
                                    <q-btn flat :to="route('form.step1')" label="Get Started" class="full-width" />
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
                                    <q-btn flat :to="route('track')" label="Track Now" class="full-width" />
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

                            <q-list bordered separator>
                                <q-expansion-item v-for="(faq, index) in faqs" :key="index" expand-separator
                                    expand-icon="keyboard_arrow_down" label="FAQ" :header-class="'text-weight-bold'">
                                    <template v-slot:header>
                                        <q-item-section>
                                            {{ index + 1 }}. {{ faq.question }}
                                        </q-item-section>
                                    </template>
                                    <q-card>
                                        <q-card-section>
                                            {{ faq.answer }}
                                        </q-card-section>
                                    </q-card>
                                </q-expansion-item>
                            </q-list>
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
const faqs = [
    { question: "Ruang Phurh tu hi te in nge di thei?", answer: "Ruang Phurh chungchang hriat duh chuan helpline-ah dil rawh." },
    { question: "Lorem ipsum zawnha lorem ipsum zawnha?", answer: "Lorem ipsum answer for question 2." },
    { question: "Lorem ipsum zawnha lorem?", answer: "Lorem ipsum answer for question 3." },
    { question: "Lorem ipsum zawnha lorem 4?", answer: "Lorem ipsum answer for question 4." },
    { question: "Lorem ipsum zawnha lorem zawnha lorem 6?", answer: "Lorem ipsum answer for question 5." },
    { question: "Lorem ipsum zawnha lorem zawnha lorem 67?", answer: "Lorem ipsum answer for question 6." },
];
</script>