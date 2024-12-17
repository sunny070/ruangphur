<template>
    <q-page padding>
        <h5>Verify OTP</h5>
        <q-form @submit.prevent="submitOtp" class="q-gutter-md">
            <div id="q-app" style="min-height: 100vh">
                <div class="q-pa-md">
                    <div class="row q-gutter-x-sm justify-center">
                        <q-input
                            outlined
                            v-for="i in length"
                            v-model="fieldValues[i - 1]"
                            v-bind="$attrs"
                            @keyup="onKeyUp($event, i - 1)"
                            @update:model-value="onUpdate($event, i - 1)"
                            :key="i"
                            :ref="(el) => updateFieldRef(el, i - 1)"
                            maxlength="1"
                            input-class="text-center"
                            style="width: 6ch"
                        />
                    </div>
                </div>
            </div>
            <q-btn label="Submit" color="primary" type="submit" />
        </q-form>
    </q-page>
</template>

<script setup>
import { useForm } from "@inertiajs/vue3";
import { ref, computed, watch } from "vue";
import FormLayout from "@/Layouts/FormLayout.vue";
import { Notify } from "quasar";

defineOptions({
    layout: FormLayout,
});

const length = 6;  // The length of the OTP (6 characters)
const fieldValues = ref(Array(length).fill('')); // OTP field values

// Watch the field values and join them into a single string when all fields are filled
const otp = computed(() => {
    return fieldValues.value.join('');
});

const submitOtp = () => {
    if (otp.value.length === length) {
        const form = useForm({ otp: otp.value });
        form.post(route("form.validateOtp"));
    } else {
        Notify.create({
            message: "Please enter a valid OTP.",
            color: "negative",
        });
    }
};

// Focus handling for input fields
const fields = ref([]);
const updateFieldRef = (element, index) => {
    if (element) {
        fields.value[index] = element;
    }
};

const focus = (index) => {
    if (index >= 0 && index < length) {
        fields.value[index].select();
    }
};

// Handle keyup events for navigation between OTP fields
const onKeyUp = (evnt, index) => {
    const key = evnt.key;

    if (["Tab", "Shift", "Meta", "Control", "Alt"].includes(key)) {
        return;
    }

    if (key === "ArrowLeft" || key === "Backspace") {
        focus(index - 1);
    } else if (key === "ArrowRight") {
        focus(index + 1);
    }
};

const onUpdate = (value, index) => {
    if (value) {
        focus(index + 1);
    }
};
</script>
