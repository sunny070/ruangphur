<template>
    <q-page class="">
        <!-- Hero Section -->

        <div class="bg-[#E9F4FF] q-pa-md q-pa-lg-xl q-px-lg">
            <div class="container mx-auto flex justify-between gap-7">
                <div class="row q-col-gutter-xl pt-5 pl-md-72 pr-md-72">
                    <!-- Left Column: Text and Buttons -->
                    <div class="col-12 col-md-6">
                        <div class="q-mb-lg">
                            <h2 class="text-h4 text-weight-bold q-mb-sm">
                                Chibai! In chhiattawhn naah Mizoram Sorkar a awm
                                e.
                            </h2>
                            <p class="text-grey-8 q-mb-md">
                                Mithiin ruang chu i duhna huna taka phur thleng
                                turin dilna document dik tak upload turin leh
                                hriatirii ni e.
                            </p>
                            <div class="flex gap-4">
                                <img
                                    src="/image/playstore 1.png"
                                    class="responsive-img"
                                    style="max-width: 140px; height: auto"
                                    alt="Play Store"
                                />
                                <img
                                    src="/image/appstoresvg 1.png"
                                    class="responsive-img"
                                    style="max-width: 140px; height: auto"
                                    alt="App Store"
                                />
                            </div>
                        </div>
                    </div>

                    <!-- Right Column: Cards -->
                    <div class="col-12 col-md-6">
                        <div class="row q-col-gutter-md">
                            <!-- Application Fill Card -->
                            <div class="col-12 col-sm-6">
                                <q-card class="bg-black text-white q-pa-md">
                                    <q-card-section
                                        class="row items-center justify-between"
                                    >
                                        <div>
                                            <div class="text-h6 q-mb-xs">
                                                Dilna
                                            </div>
                                            <div class="text-caption">
                                                Application Fill
                                            </div>
                                        </div>
                                        <img
                                            src="/image/Group 1321315146.png"
                                            class="responsive-img"
                                            style="
                                                max-width: 58px;
                                                height: auto;
                                            "
                                        />
                                    </q-card-section>
                                    <q-separator dark />
                                    <q-card-actions>
                                        <q-btn
                                            flat
                                            :href="route('form.step1')"
                                            label="Get Started"
                                            class="full-width"
                                        />
                                    </q-card-actions>
                                </q-card>
                            </div>

                            <!-- Track Bill Card -->
                            <div class="col-12 col-sm-6">
                                <q-card class="bg-black text-white q-pa-md">
                                    <q-card-section
                                        class="row items-center justify-between"
                                    >
                                        <div>
                                            <div class="text-h6 q-mb-xs">
                                                Chhuina
                                            </div>
                                            <div class="text-caption">
                                                Track your bill!
                                            </div>
                                        </div>
                                        <img
                                            src="/image/Group 1321315147.png"
                                            class="responsive-img"
                                            style="
                                                max-width: 58px;
                                                height: auto;
                                            "
                                        />
                                    </q-card-section>
                                    <q-separator dark />
                                    <q-card-actions>
                                        <q-btn
                                            flat
                                            :href="route('track')"
                                            label="Track Now"
                                            class="full-width"
                                        />
                                    </q-card-actions>
                                </q-card>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </div>

        <!-- FAQ Section -->
        <div class="bg-grey-1 q-py-xl">
            <div class="container mx-auto flex justify-between items-center"> 
            <div class="q-pa-md q-pa-lg-xl q-px-lg">
                <div class="row q-col-gutter-md pl-md-72 pr-md-72">
                    <!-- Left Column: Image -->
                    <div class="col-12 col-md-6">
                        <img
                            src="/image/Group 1321315121.png"
                            class="responsive-img"
                            style="max-width: 70%; height: auto"
                        />
                    </div>

                    <!-- Right Column: FAQ Card -->
                    <div class="col-12 col-md-6">
                        <q-card class="q-pa-md">
                            <q-card-section class="text-center">
                                <div class="text-h5 q-mb-md">
                                    Ruang Phurh chungchang a<br />
                                    zawhna leh chhana tlanglawn
                                </div>
                                <div class="text-h6 text-weight-bold">FAQs</div>
                            </q-card-section>

                            <q-list bordered separator v-if="faqs.length">
                                <q-expansion-item
                                    v-for="(faq, index) in faqs"
                                    :key="faq.id"
                                    expand-separator
                                    expand-icon="add"
                                    :header-class="'text-weight-bold'"
                                >
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
/* Responsive Padding */
.pl-md-72,
.pr-md-72 {
    padding-left: 72px;
    padding-right: 72px;
}

@media (max-width: 1024px) {
    .pl-md-72,
    .pr-md-72 {
        padding-left: 48px;
        padding-right: 48px;
    }
}

@media (max-width: 768px) {
    .pl-md-72,
    .pr-md-72 {
        padding-left: 24px;
        padding-right: 24px;
    }
}

@media (max-width: 480px) {
    .pl-md-72,
    .pr-md-72 {
        padding-left: 16px;
        padding-right: 16px;
    }
}

/* Responsive Images */
.responsive-img {
    max-width: 100%;
    height: auto;
}

/* Responsive Cards */
.q-card {
    width: 100%;
}

@media (max-width: 768px) {
    .q-card {
        margin-bottom: 16px; /* Add spacing between cards on small screens */
    }
}
</style>
