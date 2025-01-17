<script setup>
import { Head, Link } from "@inertiajs/vue3";
import WebLayout from "@/Layouts/WebLayout.vue";

defineOptions({
    layout: WebLayout,
});


const faqs = [
    "Ruang Phurh tu hi te in nge di thei?",
    "Lorem ipsum zawnha lorem ipsum zawnha?",
    "Lorem ipsum zawnha lorem?",
    "Lorem ipsum zawnha lorem 4?",
    "Lorem ipsum zawnha lorem zawnha lorem 6?",
    "Lorem ipsum zawnha lorem zawnha lorem 67?",
];



</script>

<template>
    <Head title="Ruangphur" />
    

    
    <div class="text-black/50 dark:bg-black dark:text-white/50">
        <div
            class="bg-[#E9F4FF] relative min-h-screen flex-col items-center justify-center selection:bg-[#FF2D20] selection:text-white"
        >
            <div class="m-0 bg-[#E9F4FF]">
                

                <!-- <WebLayout> -->
                    <section
                    class="bg-[#E9F4FF] grid grid-cols-1 gap-14 md:grid-cols-2 mb-6 text-foreground p-4 md:pl-[223px] md:pt-[119px] md:pr-[55px] md:pb-[65px]"
                >
                    <!-- Button for Dilna -->
                    <div class="mb-6 w-[420px] h-[120px]">
                        <h2
                            class="font-semibold w-[100%] h-auto text-2xl text-black"
                        >
                            Chibai! In chhiattawhn naah Mizoram Sorkar a awm e.
                        </h2>
                        <p class="text-muted-foreground text-sm text-[#5B656F]">
                            Mithiin ruang chu i duhna huna taka phur thleng
                            turin dilna document dik tak upload turin leh
                            hriatirii ni e.
                        </p>
                        <Link
                            class="px-4 py-2 bg-black text-white font-medium text-sm rounded-md hover:bg-blue-600 focus:outline-none focus:ring-2 focus:ring-blue-300"
                        >
                            Download Circular
                        </Link>
                    </div>
                    <div class="flex gap-3">
                        <Link
                            :href="route('form.step1')"
                            class="bg-[#202429] w-[171px] shrink-0 h-[167px] p-4 rounded-lg shadow-md hover:bg-[#3a3f45] transition duration-300 flex items-center space-x-4"
                        >
                            <div>
                                <h3 class="font-semibold text-white text-base">
                                    Dilna
                                </h3>
                                <p
                                    class="text-muted-foreground text-white text-xs"
                                >
                                    Application form fill-up
                                </p>
                            </div>
                            <img
                                id="background"
                                class="w-[58px] h-[81px]"
                                src="image/Layer_1.png"
                            />
                        </Link>
                        <Link
                            :href="route('track')"
                            class="bg-[#202429] w-[171px] shrink-0 h-[167px] p-4 rounded-lg shadow-md hover:bg-[#3a3f45] transition duration-300 flex items-center space-x-4"
                        >
                            <div>
                                <h3 class="font-semibold text-white text-base">
                                    Chhuina
                                </h3>
                                <p
                                    class="text-muted-foreground text-white text-xs"
                                >
                                    Track your bill!
                                </p>
                            </div>
                            <img
                                id="background"
                                class="w-[58px] h-[81px]"
                                src="image/fi_2936980.png"
                            />
                        </Link>
                    </div>
                </section>

                <div
                    class="bg-[#F8F8F8] text-foreground md:pl-[223px] md:pt-[119px] md:pr-[55px]"
                >
                    <section class="md:grid-cols-2 grid gap-9 bg-[#F8F8F8]">
                        <!-- Image -->
                        <div>
                            <img
                                class="w-[412px] h-[473px]"
                                id="background"
                                src="image/Group 1321315121.png"
                            />
                        </div>
                        <!-- Content -->
                        <div
                            class="rounded-[10px] border border-[#EEE] bg-[#FFF] md:p-4 w-[412px] h-[545px]"
                        >
                            <h2
                                class="text-[#000] text-center font-[Noto Sans] text-[20px] font-semibold leading-[24px] tracking-[0.15px]"
                            >
                                Ruang Phurh chungchang a <br />
                                zawhna leh chhana tlanglawn
                            </h2>
                            <h3 class="font-semibold text-base text-[#000]">
                                FAQs
                            </h3>
                            <div class="space-y-4">
                                <div
                                    class="border-b border-border py-2 text-[#000]"
                                    v-for="(faq, index) in faqs"
                                    :key="index"
                                >
                                    <button
                                        class="flex justify-between w-full text-left"
                                    >
                                        <span>{{ index + 1 }}. {{ faq }}</span>
                                        <span>+</span>
                                    </button>
                                </div>
                            </div>
                        </div>
                    </section>
                </div>
                <!-- </WebLayout> -->

                
            </div>
        </div>
    </div>

</template>
<style scoped></style>
