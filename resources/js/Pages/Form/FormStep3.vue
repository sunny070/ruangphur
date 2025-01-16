<template>
    <q-layout>
        <q-page-container>
            <q-page padding>
                <div class="flex flex-col justify-center items-center gap-6">
                    <div
                        class="border-2 border-gray-200 bg-[#E9F4FF] w-[412px] h-[195px] flex-shrink-0 rounded-[10px] text-center"
                    >
                        <Link href="/"
                            ><svg
                                xmlns="http://www.w3.org/2000/svg"
                                width="24"
                                height="24"
                                viewBox="0 0 24 24"
                                fill="none"
                            >
                                <g clip-path="url(#clip0_75_1185)">
                                    <path
                                        d="M19 11H7.82998L12.71 6.12C13.1 5.73 13.1 5.09 12.71 4.7C12.32 4.31 11.69 4.31 11.3 4.7L4.70998 11.29C4.31998 11.68 4.31998 12.31 4.70998 12.7L11.3 19.29C11.69 19.68 12.32 19.68 12.71 19.29C13.1 18.9 13.1 18.27 12.71 17.88L7.82998 13H19C19.55 13 20 12.55 20 12C20 11.45 19.55 11 19 11Z"
                                        fill="#323232"
                                    />
                                </g>
                                <defs>
                                    <clipPath id="clip0_75_1185">
                                        <rect
                                            width="24"
                                            height="24"
                                            fill="white"
                                        />
                                    </clipPath>
                                </defs>
                            </svg>
                        </Link>
                        <h5 class="text-black">Ruang Phurh Report Form</h5>
                        <h5>Step 3: Ruang phurhna man diltu Chhungchang</h5>
                    </div>
                    <div
                        class="border w-[412px] h-auto rounded-[10px] p-[23px]"
                    >
                        <q-form
                            @submit.prevent="submitForm"
                            class="q-gutter-md"
                        >
                            <div>
                                <div
                                    class="text-sm font-medium text-black q-mb-xs"
                                >
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
                                <div
                                    class="text-sm font-medium text-black q-mb-xs"
                                >
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
                                <div
                                    class="text-sm font-medium text-black q-mb-xs"
                                >
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
                                <div
                                    class="text-sm font-medium text-black q-mb-xs"
                                >
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
                                <div
                                    class="text-sm font-medium text-black q-mb-xs"
                                >
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
                                <div
                                    class="text-sm font-medium text-black q-mb-xs"
                                >
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
                                <div
                                    class="text-sm font-medium text-black q-mb-xs"
                                >
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

                            <div
                                class="pt-5 text-sm font-medium text-[#61646B] q-mb-xs"
                            >
                                Document Upload
                            </div>
                            <div>
                                <div
                                    class="text-sm font-medium text-black q-mb-xs"
                                >
                                    Mitthi Aadhar card/Voter ID thlalak upload
                                </div>
                                <q-file
                                    outlined
                                    ref="idProofUploader"
                                    accept=".pdf,.jpg,.jpeg,.png"
                                    label="Mitthi document upload na"
                                    dense
                                    @added="updateFile('id_proof', $event)"
                                >
                                    <template v-slot:append>
                                        <q-icon
                                            name="attachment"
                                            color="black"
                                        />
                                    </template>
                                </q-file>
                            </div>
                            <!-- <q-uploader
                                outlined
                                ref="idProofUploader"
                                accept=".pdf,.jpg,.jpeg,.png"
                                label="Upload ID Proof"
                                dense
                                @added="updateFile('id_proof', $event)"
                            /> -->

                            <div>
                                <div
                                    class="text-sm font-medium text-black q-mb-xs"
                                >
                                    Motor hman man Voucher/Receipt upload
                                </div>
                                <q-file
                                    outlined
                                    ref="receiptUploader"
                                    accept=".pdf,.jpg,.jpeg,.png"
                                    label="Motor hman man Voucher/ Receipt"
                                    dense
                                    @added="updateFile('receipt', $event)"
                                >
                                    <template v-slot:append>
                                        <q-icon
                                            name="attachment"
                                            color="black"
                                        />
                                    </template>
                                </q-file>
                            </div>
                            <!-- <q-uploader
                                outlined
                                ref="receiptUploader"
                                accept=".pdf,.jpg,.jpeg,.png"
                                label="Upload Address Proof"
                                
                            /> -->

                            <div>
                                <div
                                    class="text-sm font-medium text-black q-mb-xs"
                                >
                                    Death certificate/VC hriatpuina lehkha
                                </div>
                                <q-file
                                    outlined
                                    ref="deathCertificateUploader"
                                    accept=".pdf,.jpg,.jpeg,.png"
                                    label="A thi a ni tih hriatpuina"
                                    dense
                                    @added="
                                        updateFile('death_certificate', $event)
                                    "
                                >
                                    <template v-slot:append>
                                        <q-icon
                                            name="attachment"
                                            color="black"
                                        />
                                    </template>
                                </q-file>
                            </div>
                            <!-- <q-uploader
                                outlined
                                ref="deathCertificateUploader"
                                accept=".pdf,.jpg,.jpeg,.png"
                                label="Upload Bank Statement"
                               
                            /> -->
                            <p class="text-[#61646B]">
                                Death certificate emaw Declaration of death by
                                the Medical Officer lehkha/ Damdawiina thi lo
                                tan Annexure 1.3 II in a sawi ang in Authorised
                                Officials hriatpuina lehkha thil tel tur a ni.
                            </p>


                            <div>
                                <div
                                    class="text-sm font-medium text-black q-mb-xs"
                                >
                                Diltu Aadhar card/Voter ID thlalak upload
                                </div>
                                <q-file
                                    outlined
                                    ref="additionalDocumentUploader"
                                    accept=".pdf,.jpg,.jpeg,.png"
                                    label="Motor hman man Voucher/ Receipt"
                                    dense
                                @added="
                                    updateFile('additional_document', $event)
                                "
                                >
                                    <template v-slot:append>
                                        <q-icon
                                            name="attachment"
                                            color="black"
                                        />
                                    </template>
                                </q-file>
                            </div>
                            <!-- <q-uploader
                                outlined
                                ref=""
                                accept=".pdf,.jpg,.jpeg,.png"
                                label="Upload Additional Document"
                                dense
                                @added="
                                    updateFile('additional_document', $event)
                                "
                            /> -->
                            <q-btn
                                label="Preview"
                                class="text-black"
                                color="white"
                                @click="backToStep2"
                            />
                            <q-btn
                                label="Submit & Send OTP"
                                color="black"
                                type="submit"
                            />
                        </q-form>
                    </div>
                </div>
            </q-page>
        </q-page-container>
    </q-layout>
</template>

<script setup>
import { useForm } from "@inertiajs/vue3";
import WebLayout from "@/Layouts/WebLayout.vue";
import { ref } from "vue";

const idProofUploader = ref(null);
const receiptUploader = ref(null);
const deathCertificateUploader = ref(null);
const additionalDocumentUploader = ref(null);
defineOptions({
    layout: WebLayout,
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
