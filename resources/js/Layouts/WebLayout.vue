<template>
    <div class="bg-[#E9F4FF] text-foreground p-4 md:p-8">
        <header class="flex items-center justify-between mb-6">
            <h1 class="text-2xl font-bold">Ruang Phurh</h1>
            <button
                class="md:hidden p-2 rounded-lg bg-secondary text-secondary-foreground hover:bg-secondary/80"
            >
                Menu
            </button>
        </header>

        <section class="mb-6">
            <h2 class="text-xl font-semibold">
                Chibai! In chhiattawhn naah Mizoram Sorkar a awm e.
            </h2>
            <p class="text-muted-foreground">
                Mithiin ruang chu i duhna huna taka phur thleng turin dilna
                document dik tak upload turin leh hriatirii ni e.
            </p>
        </section>

        <div class="grid grid-cols-1 gap-4 md:grid-cols-2 mb-6">
            <!-- Button for Dilna -->
            <Link
                :href="route('form.step1')"
                class="bg-[#202429] p-4 rounded-lg shadow-md hover:bg-[#3a3f45] transition duration-300 flex items-center space-x-4"
            >
                <div>
                    <h3 class="font-semibold text-white">Dilna</h3>
                    <p class="text-muted-foreground text-white">
                        Application form fill-up
                    </p>
                </div>
                <img
                    id="background"
                    class="h-9 w-auto"
                    src="/build/img/Layer_1.png"
                    
                />
            </Link>
            <Link
                :href="route('track')"
                class="bg-[#202429] p-4 rounded-lg shadow-md hover:bg-[#3a3f45] transition duration-300 flex items-center space-x-4"
            >
                <div>
                    <h3 class="font-semibold text-white">Zawnna</h3>
                    <p class="text-muted-foreground text-white">
                        Track your bill!
                    </p>
                </div>
                <img
                    id="background"
                    align="right"
                    class=""
                    src="/build/img/fi_2936980.png"
                />
            </Link>

            <!-- Button for Zawnna -->
            <!-- <button
                class="bg-[#202429] p-4 rounded-lg shadow-md hover:bg-[#3a3f45] transition duration-300"
            >
                <h3 class="font-semibold text-white">Zawnna</h3>
                <p class="text-muted-foreground text-white">Track your bill!</p>
                <img
                    id="background"
                    align="right"
                    class=""
                    src="/build/img/fi_2936980.png"
                />
            </button> -->
        </div>

        <section>
            <h2 class="text-xl font-semibold mb-4">
                Ruang Phurh chungchang a zawhna leh chhana
            </h2>
            <h3 class="font-semibold">FAQs</h3>
            <div class="space-y-4">
                <div
                    class="border-b border-border py-2"
                    v-for="(faq, index) in faqs"
                    :key="index"
                >
                    <button class="flex justify-between w-full text-left">
                        <span>{{ index + 1 }}. {{ faq }}</span>
                        <span>+</span>
                    </button>
                </div>
            </div>
        </section>
    </div>
</template>

<script setup>
import { Link } from "@inertiajs/vue3";
const faqs = [
    "Ruang Phurh tu hi te in nge di thei?",
    "Lorem ipsum zawnha lorem ipsum zawnha?",
    "Lorem ipsum zawnha lorem?",
    "Lorem ipsum zawnha lorem 4?",
    "Lorem ipsum zawnha lorem zawnha lorem 6?",
    "Lorem ipsum zawnha lorem zawnha lorem 67?",
];
</script>

<style scoped></style>
