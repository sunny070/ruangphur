<script setup>
import { Link } from "@inertiajs/vue3";
</script>

<template>
    <q-layout>
        <q-header>
            <div class="flex gap-2 lg:col-start-2 lg:justify-start">
                <img id="background" class="" src="/build/img/Group.png" />
                <img
                    id="background"
                    class=""
                    src="/build/img/Group 1321315089.png"
                />
            </div>
            <section class="mb-6">
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
                <p class="font-bold">Track ID chhu lut rawh le</p>
                <q-input
                    outlined
                    v-model="ph"
                    placeholder="I dilna thlen chin zawnna"
                    :dense="dense"
                />

                <div class="flex gap-3 pt-6">
                    <q-btn
                        class="text-black"
                        label="View"
                        color="white"
                        @click="backToStep1"
                    />
                    <q-btn
                        class="w-3"
                        label="Track Now"
                        color="black"
                        type="submit"
                    />
                </div>
                
                <q-card-section>
                    <div class="mt-6">
                        <span class="text-2xl font-bold text-primary">{{
                            amount
                        }}</span>
                        <p class="text-muted-foreground">
                            Status: {{ status }}
                        </p>
                        <p class="text-muted-foreground">
                            Applied date: {{ appliedDate }}
                        </p>
                        <p class="text-muted-foreground">
                            Dilna ID: {{ dilnaId }}
                        </p>
                    </div>
                </q-card-section>

                <!-- Current Status Header -->
                <q-card-section>
                    <h2 class="text-xl font-bold text-primary mt-6">
                        Current Status
                    </h2>
                </q-card-section>

                <!-- Current Status Steps -->
                <q-card-section>
                    <!-- Step 1 -->
                    <div class="flex items-center mt-4">
                        <q-icon
                            name="circle"
                            color="green-500"
                            size="xs"
                            class="mr-2"
                        />
                        <div>
                            <h3 class="font-semibold">Form Submitted</h3>
                            <p class="text-muted-foreground">
                                I ruang phurh dilna chu thehlhul fel a ni tawh
                                e, District lama thuneitu ten verify turin a
                                thang mek
                            </p>
                            <p class="text-muted-foreground">
                                2024-11-25 | 13:05
                            </p>
                        </div>
                    </div>

                    <!-- Step 2 -->
                    <div class="flex items-center mt-4">
                        <q-icon
                            name="circle"
                            color="grey-5"
                            size="xs"
                            class="mr-2"
                        />
                        <div>
                            <h3 class="font-semibold">Verified</h3>
                            <p class="text-muted-foreground">
                                District thuneitu te atangin verify a ni a,
                                Directorate lamah thawn a ni
                            </p>
                            <p class="text-muted-foreground">
                                2024-11-27 | 10:08
                            </p>
                        </div>
                    </div>

                    <!-- Step 3 -->
                    <div class="flex items-center mt-4">
                        <q-icon
                            name="circle"
                            color="grey-5"
                            size="xs"
                            class="mr-2"
                        />
                        <div>
                            <h3 class="font-semibold">
                                Application under process
                            </h3>
                            <p class="text-muted-foreground">
                                Directorate kutah a awm mek a, bank lamah
                                deposit turin file tik a ni
                            </p>
                            <p class="text-muted-foreground">
                                2024-11-28 | 13:05
                            </p>
                        </div>
                    </div>

                    <!-- Step 4 -->
                    <div class="flex items-center mt-4">
                        <q-icon
                            name="circle"
                            color="grey-5"
                            size="xs"
                            class="mr-2"
                        />
                        <div>
                            <h3 class="font-semibold">Bill Process</h3>
                            <p class="text-muted-foreground">
                                I ruang phurh dilna chu bank lamah process mek a
                                ni
                            </p>
                            <p class="text-muted-foreground">
                                2024-11-28 | 13:05
                            </p>
                        </div>
                    </div>
                </q-card-section>
            </q-page>
        </q-page-container>
    </q-layout>
</template>
