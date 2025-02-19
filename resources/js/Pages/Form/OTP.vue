<template>
    <q-layout>
        <q-page-container>
            <q-page padding class="flex justify-center">
                <div class="border w-[412px] h-[280px] text-center">
                    <div>

                        <h5>Enter OTP to verify</h5>
                        <p>An OTP has been sent to {{ props.phone }} </p>
                    </div>
                    <q-form @submit.prevent="submitOtp" class="q-gutter-md">
                        <div id="q-app" style="min-height: 100vh">
                            <div class="q-pa-md">
                                
                                <div class="row q-gutter-x-sm justify-center">
                                    <q-input outlined v-for="i in length" v-model="fieldValues[i - 1]" v-bind="$attrs"
                                        @keyup="onKeyUp($event, i - 1)" @update:model-value="
                                            onUpdate($event, i - 1)
                                            " :key="i" :ref="(el) => updateFieldRef(el, i - 1)" maxlength="1"
                                        input-class="text-center" style="width: 6ch" />
                                </div>
                            </div>
                            <q-btn label="Verify" color="black" type="submit" />
                            <div class="grid grid-cols-2 items-center">
                                    <!-- Countdown Message -->
                                    <p v-if="countdown > 0" class="text-caption q-mt-sm text-right">
                                        Resend OTP in {{ countdown }} seconds
                                    </p>
                                    <p v-else>ddddddddddddddddddddddddddd</p>

                                    <!-- Resend OTP Link -->
                                    <Link label="Resend OTP" @click="resendOtp" :disabled="isResendDisabled"
                                        color="dark" class="">
                                    Resend OTP
                                    </Link>
                                </div>
                        </div>
                        <!-- <q-btn label="Submit" color="primary" type="submit" /> -->
                        <div class="">

                        </div>
                    </q-form>
                </div>
            </q-page>
        </q-page-container>
    </q-layout>
</template>

<script setup>
import { useForm } from "@inertiajs/vue3";
import { ref, computed, watch, onMounted } from "vue";
import WebLayout from "@/Layouts/WebLayout.vue";
import { Notify } from "quasar";
import { Link } from "@inertiajs/inertia-vue3";

defineOptions({
    layout: WebLayout,
});


const props = defineProps(["phone"]);

const length = 4; // The length of the OTP (6 characters)
const fieldValues = ref(Array(length).fill("")); // OTP field values
// Resend OTP functionality
const countdown = ref(0);
const isResendDisabled = computed(() => countdown.value > 0);
// Watch the field values and join them into a single string when all fields are filled
const otp = computed(() => {
    return fieldValues.value.join("");
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



const startCountdown = () => {
    countdown.value = 30;
    const timer = setInterval(() => {
        countdown.value--;
        if (countdown.value <= 0) {
            clearInterval(timer);
        }
    }, 1000);
};
const resendOtp = () => {
    const form = useForm({});
    form.post(route('form.resendOtp'), {
        preserveScroll: true,
        onSuccess: () => {
            Notify.create({
                message: 'OTP resent successfully!',
                color: 'positive',
            });
            startCountdown();
        },
        onError: (errors) => {
            Notify.create({
                message: errors.error || 'Failed to resend OTP',
                color: 'negative',
            });
        }
    });
};

// Start countdown when component mounts
onMounted(startCountdown);


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
