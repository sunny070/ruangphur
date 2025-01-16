<template>
    <q-layout>
        <q-page-container>
            <q-page>
        <div class="flex justify-center flex-col items-center">
            <div
                class="flex justify-center items-center w-8 rounded-full h-8 bg-[#3B6939]"
            >
                <img
                    id="background"
                    class="text-white"
                    src="/build/img/check.png"
                />
            </div>
            <h7>Form Submission Complete</h7>
            <p>
                Your application number is:
                <strong>{{ application_no }}</strong>
            </p>
            <p>
                Thank you for submitting your form. We will process your
                application soon.
            </p>
            <Link href="/"
                class="bg-[#202429] p-4 rounded-lg shadow-md hover:bg-[#3a3f45] transition duration-300 flex items-center"
            >
                <p class="text-white">Back To Home</p>
            </Link>
        </div>
    </q-page>
        </q-page-container>
    </q-layout>
    
</template>

<script setup>
import WebLayout from "@/Layouts/WebLayout.vue";
import { Link } from "@inertiajs/vue3";


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
