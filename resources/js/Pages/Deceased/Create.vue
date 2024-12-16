<template>
    <q-page padding>
        <q-form class="q-pa-md row q-col-gutter-xs q-pa-xs"> <!-- Compact gutter and padding -->
            <!-- Input 1 -->
            <div class="col-xs-12 col-sm-4">
                <q-input
                    filled
                    dense
                    v-model="form.name"
                    label="Name"
                />
            </div>

            <!-- Input 2 -->
            <div class="col-xs-12 col-sm-3">
                <q-select
                    filled
                    dense
                    v-model="form.sex"
                    label="Relative *"
                    lazy-rules
                    :rules="[(val) => (val && val.length > 0) || 'Relative is required']"
                    :options="['Pa', 'Nu', 'Others']"
                />
            </div>

            <!-- Input 3 -->
            <div class="col-xs-12 col-sm-5">
                <q-input
                    filled
                    dense
                    v-model="form.relative_name"
                    label="Relative Name"
                />
            </div>

            <!-- Additional Inputs -->
            <div class="col-xs-12 col-sm-6">
                <q-input
                    filled
                    dense
                    v-model="form.mobile"
                    label="Mobile"
                />
            </div>

            <div class="col-xs-12 col-sm-6">
                <q-input
                    filled
                    dense
                    v-model="form.district"
                    label="District"
                />
            </div>

            <!-- More Inputs -->
            <div class="col-xs-12 col-sm-4">
                <q-input
                    filled
                    dense
                    v-model="form.locality"
                    label="Locality"
                />
            </div>

            <div class="col-xs-12 col-sm-4">
                <q-input
                    filled
                    dense
                    v-model="form.constituency"
                    label="Constituency"
                />
            </div>

            <div class="col-xs-12 col-sm-4">
                <q-input
                    filled
                    dense
                    v-model="form.time_of_death"
                    label="Time of Death"
                />
            </div>

            <div class="col-xs-12 col-sm-12">
                <q-input
                    filled
                    dense
                    v-model="form.place_of_death"
                    label="Place of Death"
                />
            </div>
            <q-btn color="black" type="submit">Next</q-btn>
        </q-form>
    </q-page>
</template>

<script setup>
import FormLayout from "@/Layouts/FormLayout.vue";
import { ref } from "vue";

defineOptions({
    layout: FormLayout,
});

const form = ref({
    name: "",
    relative_name: "",
    dob: "",
    gender: "",
    mobile: "",
    district: "",
    locality: "",
    constituency: "",
    time_of_death: "",
    place_of_death: "",
});
</script>

<style>
.text-foreground {
    color: hsl(240, 10%, 3.9%);
}
.text-muted {
    color: hsl(240, 3.8%, 46.1%);
}
.bg-background {
    background-color: hsl(0, 0%, 100%);
}
</style>
