<template>
    <q-page padding>
        <h5>Step 3: Ruang phurhna man diltu Chhungchang</h5>
        <q-form @submit.prevent="submitForm" class="q-gutter-md">
            <div>
                <div class="text-sm font-medium text-black q-mb-xs">
                    Diltu hming
                </div>
                <q-input
                    outlined
                    placeholder="Diltu hming pum"
                    dense
                    class="custom-input"
                    v-model="form.name"
                />
            </div>
            <div>
                <div class="text-sm font-medium text-black q-mb-xs">
                    District
                </div>
                <q-input
                    outlined
                    placeholder="Ruang phurhna man diltu district"
                    dense
                    class="custom-input"
                    v-model="form.district"
                />
            </div>
            <div>
                <div class="text-sm font-medium text-black q-mb-xs">
                    Veng/Khua
                </div>
                <q-input
                    outlined
                    placeholder="Ruang phurhna man diltu veng/khua"
                    dense
                    class="custom-input"
                    v-model="form.locality"
                />
            </div>
            <div>
                <div class="text-sm font-medium text-black q-mb-xs">
                    Phone number
                </div>
                <q-input
                    outlined
                    placeholder="Ruang phurhna man diltu phone no."
                    dense
                    class="custom-input"
                    v-model="form.mobile"
                />
            </div>
            <div>
                <div class="text-sm font-medium text-black q-mb-xs">
                    Bank hming
                </div>
                <q-input
                    outlined
                    placeholder="Ruang phurhna man dahluhna tur"
                    dense
                    class="custom-input"
                    v-model="form.bank_name"
                />
            </div>
            <div>
                <div class="text-sm font-medium text-black q-mb-xs">
                    Bank acocunt number
                </div>
                <q-input
                    outlined
                    placeholder="Bank account number"
                    dense
                    class="custom-input"
                    v-model="form.account_no"
                />
            </div>
            <div>
                <div class="text-sm font-medium text-black q-mb-xs">
                    IFSC code
                </div>
                <q-input
                    outlined
                    placeholder="Bank IFSC Code"
                    dense
                    class="custom-input"
                    v-model="form.ifsc_code"
                />
            </div>

            <q-uploader
    outlined
    ref="idProofUploader"
    accept=".pdf,.jpg,.jpeg,.png"
    label="Upload ID Proof"
    dense
    @added="updateFile('id_proof', $event)"
/>
<q-uploader
    outlined
    ref="receiptUploader"
    accept=".pdf,.jpg,.jpeg,.png"
    label="Upload Address Proof"
    dense
    @added="updateFile('receipt', $event)"
/>
<q-uploader
    outlined
    ref="deathCertificateUploader"
    accept=".pdf,.jpg,.jpeg,.png"
    label="Upload Bank Statement"
    dense
    @added="updateFile('death_certificate', $event)"
/>
<q-uploader
    outlined
    ref="additionalDocumentUploader"
    accept=".pdf,.jpg,.jpeg,.png"
    label="Upload Additional Document"
    dense
    @added="updateFile('additional_document', $event)"
/>
            <q-btn
                label="Preview"
                class="text-black"
                color="white"
                @click="backToStep2"
            />
            <q-btn label="Submit & Send OTP" color="black" type="submit" />
        </q-form>
    </q-page>
</template>

<script setup>
import { useForm } from "@inertiajs/vue3";
import FormLayout from "@/Layouts/FormLayout.vue";
import { ref } from "vue";

const idProofUploader = ref(null);
const receiptUploader = ref(null);
const deathCertificateUploader = ref(null);
const additionalDocumentUploader = ref(null);
defineOptions({
    layout: FormLayout,
});

const props = defineProps(["form"]); // Prefill from server

// Initialize form with prefilled data from session or defaults
const form = useForm({
    name: props.form.name || "",
    mobile: props.form.mobile || "",
    district: props.form.district || "",
    locality: props.form.locality || "",
    bank_name: props.form.bank_name || "",
    account_no: props.form.account_no || "",
    ifsc_code: props.form.ifsc_code || "",
    id_proof: null,
    receipt: null,
    death_certificate: null,
    additional_document: null,
});
// const submitForm = () => form.post(route('form.storeStep3')); // Submit the form
const updateFile = (key, files) => {
    if (files && files.length > 0) {
        form[key] = files[0]; // Assign the first file to the form property
    }
};

const submitForm = () =>
    form.post(route("form.storeStep3"), {
        onBefore: () => {
            const formData = new FormData();

            // Append text fields
            Object.keys(form).forEach((key) => {
                if (form[key] instanceof File) {
                    formData.append(key, form[key]); // Append file
                } else {
                    formData.append(key, form[key] || ""); // Append text or empty string
                }
            });

            return formData;
        },
    });

const backToStep2 = () => window.history.back(); // Navigate back to Step 2
</script>
