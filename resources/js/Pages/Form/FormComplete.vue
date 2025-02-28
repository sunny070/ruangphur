<template>
    <q-layout>
        <q-page-container>
            <q-page>
                <Head title="Application" />
                <div class="flex justify-center flex-col items-center pt-10">
                    <div
                        class="flex justify-center items-center w-8 rounded-full h-8 bg-[#3B6939]"
                    >
                        <img
                            id="background"
                            class="text-white"
                            src="image/check.png"
                        />
                    </div>
                    <p class="text-[#5B656F]">
                        I ruang phurh dilna hlawhtling taka thehluh a ni e
                    </p>
                    <p class="text-[#5B656F]">Dilna ID</p>
                    <p class="text-bold">{{ application_no }}</p>
                    <p>
                        Thank you for submitting your form. We will process your
                        application soon.
                    </p>
                    <div class="flex h-[48px] justify-center items-center">

                        <Link
                        href="/"
                        class="flex h-[48px] justify-center items-center gap-2 self-stretch rounded-lg bg-black w-[254px]"
                        >
                        <p class="text-white">Back To Home</p>
                    </Link>
                </div>
                </div>
            </q-page>
        </q-page-container>
    </q-layout>
</template>

<script setup>
import WebLayout from "@/Layouts/WebLayout.vue";
import { Link } from "@inertiajs/vue3";
import { Head } from "@inertiajs/inertia-vue3";

defineOptions({
    layout: WebLayout,
});
defineProps({
    application_no: String, // Define the 'application_no' prop
});
</script>

<style scoped>
/* Add any custom styles here */
</style>
