<script setup>
import { ref } from "vue";
import { Notify } from "quasar";
import axios from "axios";
import WebLayout from "@/Layouts/WebLayout.vue";

defineOptions({
    layout: WebLayout,
});

const ph = ref(""); // Track ID input
const amount = ref("");
const status = ref("");
const appliedDate = ref("");
const dilnaId = ref("");
const steps = ref([]);

// Track Application Function
const trackApplication = async () => {
    if (!ph.value) {
        Notify.create({
            type: "negative",
            message: "Please enter a valid Track ID.",
        });
        return;
    }

    try {
        const response = await axios.get(`/track/${ph.value}`);
        const data = response.data;

        if (data.message) {
            Notify.create({
                type: "negative",
                message: data.message,
            });
            return;
        }

        // Update state with the response
        amount.value = data.amount || "N/A";
        status.value = data.status || "Pending";
        appliedDate.value = data.appliedDate || "";
        dilnaId.value = data.dilnaId || "";
        steps.value = data.steps || [];
    } catch (error) {
        console.error(error);
        Notify.create({
            type: "negative",
            message: "There was an error tracking the application.",
        });
    }
};
</script>

<template>
    <q-layout>
        <q-page-container>
            <q-page class="flex items-center flex-col">
                <div
                    class="w-[412px] h-[381px] flex-shrink-0 rounded-[10px] border border-[#EEE] bg-[#E9F4FF] p-5 mt-6"
                >
                    <div class="flex flex-col">
                        <h5 class="text-2xl">Ruang phurh dil chhuina/track</h5>
                        <p class="font-bold mb-4 text-[#5B656F] text-sm">
                            I ruang phurh dilna a thlen chin zawnna a ni. Mipui
                            ten zawldawh takin min lo ngaichang zel dawn nia.
                        </p>
                       Track ID chhu lut rawh le
                        <q-input
                            outlined
                            v-model="ph"
                            placeholder="I dilna thlen chin zawnna"
                            dense
                            class="custom-input"
                        />
                    </div>

                    <div class="flex gap-3 pt-6">
                        <q-btn
                            class="text-black"
                            label="View"
                            color="white"
                            @click="() => { ph.value = ''; }"
                        />
                        <q-btn
                            class="w-3"
                            label="Track Now"
                            color="black"
                            @click="trackApplication"
                        />
                    </div>
                </div>

                <!-- Application Details -->
                <q-card-section v-if="dilnaId">
                    <div class="mt-6">
                        <p class="text-muted-foreground">Status: {{ status }}</p>
                        <p class="text-muted-foreground">Applied date: {{ appliedDate }}</p>
                        <p class="text-muted-foreground">Dilna ID: {{ dilnaId }}</p>
                    </div>
                </q-card-section>

                <!-- Current Status -->
                <q-card-section v-if="steps.length">
                    <h2 class="text-xl font-bold text-primary mt-6">Current Status</h2>

                    <div
                        v-for="(step, index) in steps"
                        :key="index"
                        class="flex items-center mt-4"
                    >
                        <q-icon
                            :name="step.completed ? 'check_circle' : 'circle'"
                            :color="step.completed ? 'green-500' : 'grey-5'"
                            size="xs"
                            class="mr-2"
                        />
                        <div>
                            <h3 class="font-semibold">{{ step.title }}</h3>
                            <p class="text-muted-foreground">{{ step.description }}</p>
                            <p class="text-muted-foreground">{{ step.timestamp }}</p>
                        </div>
                    </div>
                </q-card-section>
            </q-page>
        </q-page-container>
    </q-layout>
</template>
