<script setup>
import { ref } from 'vue';
import { Notify } from 'quasar';
import axios from 'axios';

// Reactive state
const ph = ref(''); // Track ID input
const amount = ref('');
const status = ref('');
const appliedDate = ref('');
const dilnaId = ref('');
const steps = ref([]);

// Track Application Function
const trackApplication = async () => {
    if (!ph.value) {
        Notify.create({
            type: 'negative',
            message: 'Please enter a valid Track ID.',
        });
        return;
    }

    try {
        const response = await axios.get(`/track/${ph.value}`);
        const data = response.data;

        // Update state with the response
        amount.value = data.amount || 'N/A';
        status.value = data.status || 'Pending';
        appliedDate.value = data.appliedDate || '';
        dilnaId.value = data.dilnaId || '';
        steps.value = data.steps || [];
    } catch (error) {
        console.error(error);
        Notify.create({
            type: 'negative',
            message: 'Failed to fetch tracking details. Please try again.',
        });
    }
};
</script>

<template>
    <q-layout>
        <q-header class="bg-[#E9F4FF]">
            <div class="flex gap-2 lg:col-start-2 lg:justify-start">
                <img id="background" src="image/Group.png" />
                <img id="background" src="/image/Group 1321315089.png" />
            </div>
            <section class="mb-6 flex flex-col justify-center items-center">
                <h2 class="text-xl font-semibold text-black">
                    Ruang phurh dilna zawnna/track
                </h2>
                <p class="text-muted-foreground text-black">
                    I ruang phurh dilna a thlen chin zawnna a ni. Mipui ten
                    zawldawh takin min lo ngaichang zel dawn nia.
                </p>
            </section>
        </q-header>

        <q-page-container>
            <q-page class="flex items-center flex-col">
                <p class="font-bold mb-4">Track ID chhu lut rawh le</p>

                <q-input
                    outlined
                    v-model="ph"
                    placeholder="I dilna thlen chin zawnna"
                    dense
                />

                <div class="flex gap-3 pt-6">
                    <q-btn
                        class="text-black"
                        label="Reset"
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

                <!-- Application Details -->
                <q-card-section v-if="dilnaId">
                    <div class="mt-6">
                        <p class="text-muted-foreground">Status: {{ status }}</p>
                        <p class="text-muted-foreground">
                            Applied date: {{ appliedDate }}
                        </p>
                        <p class="text-muted-foreground">Dilna ID: {{ dilnaId }}</p>
                    </div>
                </q-card-section>

                <!-- Current Status -->
                <q-card-section v-if="steps.length">
                    <h2 class="text-xl font-bold text-primary mt-6">
                        Current Status
                    </h2>

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
                            <p class="text-muted-foreground">
                                {{ step.description }}
                            </p>
                            <p class="text-muted-foreground">
                                {{ step.timestamp }}
                            </p>
                        </div>
                    </div>
                </q-card-section>
            </q-page>
        </q-page-container>
    </q-layout>
</template>
