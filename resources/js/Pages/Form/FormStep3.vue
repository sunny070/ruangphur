<template>
    <q-layout>
        <q-page-container>
            <q-page padding>
                <div class="flex flex-col justify-center items-center gap-6">
                    <div
                        class="border-2 border-gray-200 bg-[#E9F4FF] flex-shrink-0 rounded-[10px] text-center"
                    >
                        <h5 class="text-black">Ruang Phurh Report Form</h5>
                        <img
                            id="background"
                            class="w-[412px] h-[193px]"
                            src="image/Vertical Stepper with numbers3.png"
                        />
                    </div>
                    <div
                        class="border w-[412px] h-auto rounded-[10px] p-[23px]"
                    >
                        <q-form
                            @submit.prevent="submitForm"
                            class="q-gutter-md"
                        >
                            <!-- District Dropdown -->
                            <div class="pb-3 flex items-center gap-2">
                                <div
                                    class="w-[3px] h-[19px] flex-shrink-0 bg-black"
                                ></div>
                                <h6 class="text-sm text-bold">
                                    Ruang phurhna man diltu Chhungchang
                                </h6>
                            </div>
                            <div>
                                <div
                                    class="text-sm font-medium text-black q-mb-xs"
                                >
                                    Diltu hming
                                </div>
                                <div class="">
                                    <q-input
                                        outlined
                                        placeholder="Diltu hming pum"
                                        v-model="form.name"
                                        :error="form.errors.name"
                                        :error-message="form.errors.name || ''"
                                    />
                                </div>
                                <div
                                    v-if="$page.props.errors.name"
                                    class="text-red"
                                >
                                    {{ $page.props.errors.name }}
                                </div>
                            </div>
                            <div>
                                <div
                                    class="text-sm font-medium text-black q-mb-xs"
                                >
                                    District
                                </div>
                                <q-select
                                    outlined
                                    dense
                                    v-model="form.district"
                                    label="Select District"
                                    :options="districts"
                                    :error="form.errors.district"
                                    :error-message="form.errors.district || ''"
                                />
                                <div
                                    v-if="$page.props.errors.district"
                                    class="text-red"
                                >
                                    {{ $page.props.errors.district }}
                                </div>
                            </div>

                            <!-- Individual Text Inputs -->

                            <div>
                                <div
                                    class="text-sm font-medium text-black q-mb-xs"
                                >
                                    Veng/Khua
                                </div>
                                <q-input
                                    outlined
                                    dense
                                    placeholder="Veng/Khua"
                                    v-model="form.locality"
                                    :error="form.errors.locality"
                                    :error-message="form.errors.locality || ''"
                                />
                                <div
                                    v-if="$page.props.errors.locality"
                                    class="text-red"
                                >
                                    {{ $page.props.errors.locality }}
                                </div>
                            </div>
                            <div>
                                <div
                                    class="text-sm font-medium text-black q-mb-xs"
                                >
                                    Phone number
                                </div>
                                <q-input
                                    outlined
                                    dense
                                    placeholder="Phone number"
                                    v-model="form.mobile"
                                    :error="form.errors.mobile"
                                    :error-message="form.errors.mobile || ''"
                                />
                                <div
                                    v-if="$page.props.errors.mobile"
                                    class="text-red"
                                >
                                    {{ $page.props.errors.mobile }}
                                </div>
                            </div>
                            <div>
                                <div
                                    class="text-sm font-medium text-black q-mb-xs"
                                >
                                    Bank hming
                                </div>
                                <q-input
                                    outlined
                                    dense
                                    placeholder="Bank hming"
                                    v-model="form.bank_name"
                                    :error="form.errors.bank_name"
                                    :error-message="form.errors.bank_name || ''"
                                />
                                <div
                                    v-if="$page.props.errors.bank_name"
                                    class="text-red"
                                >
                                    {{ $page.props.errors.bank_name }}
                                </div>
                            </div>
                            <div>
                                <div
                                    class="text-sm font-medium text-black q-mb-xs"
                                >
                                    Bank account number
                                </div>
                                <q-input
                                    outlined
                                    dense
                                    placeholder="Bank account number"
                                    v-model="form.account_no"
                                    :error="form.errors.account_no"
                                    :error-message="
                                        form.errors.account_no || ''
                                    "
                                />
                                <div
                                    v-if="$page.props.errors.account_no"
                                    class="text-red"
                                >
                                    {{ $page.props.errors.account_no }}
                                </div>
                            </div>
                            <div>
                                <div
                                    class="text-sm font-medium text-black q-mb-xs"
                                >
                                    IFSC code
                                </div>
                                <q-input
                                    outlined
                                    dense
                                    placeholder="Bank IFSC code"
                                    v-model="form.ifsc_code"
                                    :error="form.errors.ifsc_code"
                                    :error-message="form.errors.ifsc_code || ''"
                                />
                                <div
                                    v-if="$page.props.errors.ifsc_code"
                                    class="text-red"
                                >
                                    {{ $page.props.errors.ifsc_code }}
                                </div>
                            </div>

                            <!-- File Upload Fields -->
                            <div
                                class="pt-5 text-sm font-medium text-[#61646B] q-mb-xs"
                            >
                                Document Upload
                            </div>
                            <!-- <div>
                                <div
                                    class="text-sm font-medium text-black q-mb-xs"
                                >
                                    Mitthi/Chhungte Aadhaar Neitu
                                </div>
                                <q-select
                                    outlined
                                    dense
                                    v-model="form.relation"
                                    label="Select Relation"
                                    :options="[
                                        'Mitthi',
                                        'Mitthi Nu',
                                        'Mitthi Pa',
                                    ]"
                                    :error="form.errors.relation"
                                    :error-message="form.errors.relation || ''"
                                />
                                <p class="text-[#61646B]">
                                    Mitthi hi naupang emaw aadhaar la neilo a
                                    nih chuan a chhungte aadhaar upload tur a
                                    ni.
                                </p>
                                <div
                                    v-if="$page.props.errors.relation"
                                    class="text-red"
                                >
                                    {{ $page.props.errors.relation }}
                                </div>
                            </div> -->
                            <div>
                                <div
                                    class="text-sm font-medium text-black q-mb-xs"
                                >
                                    Mitthi Aadhar card/Voter ID thlalak upload
                                </div>
                                <q-file
                                    v-model="form.id_proof"
                                    outlined
                                    dense
                                    accept=".jpg, .jpeg, .png"
                                    label="Upload ID proof"
                                >
                                    <template v-slot:prepend>
                                        <q-icon name="attach_file" />
                                    </template>
                                </q-file>
                                <div
                                    v-if="$page.props.errors.id_proof"
                                    class="text-red"
                                >
                                    {{ $page.props.errors.id_proof }}
                                </div>
                            </div>
                            <div>
                                <div
                                    class="text-sm font-medium text-black q-mb-xs"
                                >
                                    Motor hman man Voucher/Receipt upload
                                </div>
                                <q-file
                                    v-model="form.receipt"
                                    outlined
                                    dense
                                    accept=".pdf, .jpg, .jpeg, .png"
                                    label="Upload receipt"
                                >
                                    <template v-slot:prepend>
                                        <q-icon name="attach_file" />
                                    </template>
                                </q-file>
                                <div
                                    v-if="$page.props.errors.receipt"
                                    class="text-red"
                                >
                                    {{ $page.props.errors.receipt }}
                                </div>
                            </div>
                            <div>
                                <div
                                    class="text-sm font-medium text-black q-mb-xs"
                                >
                                    Death certificate/VC hriatpuina lehkha
                                </div>
                                <q-file
                                    v-model="form.death_certificate"
                                    outlined
                                    dense
                                    accept=".pdf, .jpg, .jpeg, .png"
                                    label="Upload death certificate"
                                >
                                    <template v-slot:prepend>
                                        <q-icon name="attach_file" />
                                    </template>
                                </q-file>
                                <p class="text-[#61646B]">
                                    Death certificate emaw Declaration of death
                                    by the Medical Officer lehkha/ Damdawiina
                                    thi lo tan Annexure 1.3 II in a sawi ang in
                                    Authorised Officials hriatpuina lehkha thil
                                    tel tur a ni.
                                </p>
                                <div
                                    v-if="$page.props.errors.death_certificate"
                                    class="text-red"
                                >
                                    {{ $page.props.errors.death_certificate }}
                                </div>
                            </div>
                            <div>
                                <div
                                    class="text-sm font-medium text-black q-mb-xs"
                                >
                                    Diltu Aadhar card/Voter ID thlalak upload
                                </div>
                                <q-file
                                    v-model="form.additional_document"
                                    outlined
                                    dense
                                    accept=".pdf, .jpg, .jpeg, .png"
                                    label="Upload additional document"
                                >
                                    <template v-slot:prepend>
                                        <q-icon name="attach_file" />
                                    </template>
                                </q-file>
                                <div
                                    v-if="
                                        $page.props.errors.additional_document
                                    "
                                    class="text-red"
                                >
                                    {{ $page.props.errors.additional_document }}
                                </div>
                            </div>

                            <!-- Buttons -->
                            <q-btn
                                style="padding: 10px 24px; border-radius: 12px" outline unelevated text-color="black"
                                label="Preview" color="white" @click="preview = true"
                            />
                            <q-btn
                                label="Submit & Send OTP"
                                unelevated color="black" @click="submitForm"
                                style="padding: 10px 50px; border-radius: 12px" 
                            />
                        </q-form>
                    </div>
                </div>

                <!-- dialogue -->
                <q-dialog v-model="preview">
                    <div>
                        <!-- <hr class="my-4 border-border" /> -->
                        <q-card class="w-[411px] h-[822px] rounded-md">
                            <q-card-section class="">
                                <p
                                    class="text-center flex-shrink-0 rounded-[20px] bg-[#E9E9E9] mb-8"
                                >
                                    Ruang Phurh Diltu leh a man Chungchang
                                </p>
                                <div class="leading-[2px]">
                                    <p class="text-[#61646B]">Hming</p>
                                    <p>{{ form.name }}</p>
                                </div>
                                <div class="leading-[2px] pt-4">
                                    <p class="text-[#61646B]">District</p>
                                    <p>{{ form.district["label"] }}</p>
                                </div>
                                <div class="leading-[2px] pt-4">
                                    <p class="text-[#61646B]">Veng/Khua</p>
                                    <p>{{ form.locality }}</p>
                                </div>
                                <div class="leading-[2px] pt-4">
                                    <p class="text-[#61646B]">Phone Number</p>
                                    <p>{{ form.mobile }}</p>
                                </div>

                                <hr class="my-4 border-border" />
                                <p
                                    class="text-center w-[128px] h-[17px] flex-shrink-0 rounded-[20px] bg-[#E9E9E9] mb-8"
                                >
                                    Bank Details
                                </p>
                                <div class="leading-[2px]">
                                    <p class="text-[#61646B]">Bank hming</p>
                                    <p>{{ form.bank_name }}</p>
                                </div>
                                <div class="leading-[2px] pt-4">
                                    <p class="text-[#61646B]">
                                        Bank account number
                                    </p>
                                    <p>
                                        {{ form.account_no }}
                                    </p>
                                </div>
                                <div class="leading-[2px] pt-4">
                                    <p class="text-[#61646B]">IFSC Code</p>
                                    <p>{{ form.ifsc_code }}</p>
                                </div>

                                <p
                                    class="text-center w-[128px] h-[17px] flex-shrink-0 rounded-[20px] bg-[#E9E9E9] mb-8"
                                >
                                    Document Thiltel te
                                </p>
                                <div class="leading-[2px]">
                                    <!-- <img class="w-[412px] h-[473px]" id="background" src="/public/image/tick.png" /> -->
                                    <p>
                                        {{
                                            form.id_proof?.name ||
                                            "No file uploaded"
                                        }}
                                    </p>
                                </div>
                                <div class="leading-[2px] pt-4">
                                    <!-- <p class="text-[#61646B]">District</p> -->
                                    <p>{{ form.receipt?.name }}</p>
                                </div>
                                <div class="leading-[2px] pt-4">
                                    <!-- <p class="text-[#61646B]">Veng/Khua</p> -->
                                    <p>{{ form.death_certificate?.name }}</p>
                                </div>
                                <div class="leading-[2px] pt-4">
                                    <!-- <p class="text-[#61646B]">Phone Number</p> -->
                                    <p>{{ form.additional_document?.name }}</p>
                                </div>
                            </q-card-section>

                            <q-card-actions align="right">
                                <q-btn
                                    class="text-black"
                                    color="white"
                                    label="Edit"
                                    v-close-popup
                                />
                                <q-btn
                                    label="Submit & Send OTP"
                                    color="black"
                                    @click="submitForm"
                                />
                            </q-card-actions>
                        </q-card>
                    </div>
                </q-dialog>
            </q-page>
        </q-page-container>
    </q-layout>
</template>

<script setup>
import { useForm } from "@inertiajs/vue3";
import WebLayout from "@/Layouts/WebLayout.vue";
import { ref } from "vue";

defineOptions({ layout: WebLayout });

const props = defineProps(["form", "districts"]);
const preview = ref(false);

// Text fields for dynamic input rendering (excluding district)
const textFields = [
    { key: "name", label: "Diltu hming", placeholder: "Diltu hming pum" },
    { key: "mobile", label: "Phone number", placeholder: "Phone number" },
    { key: "locality", label: "Veng/Khua", placeholder: "Veng/Khua" },
    { key: "bank_name", label: "Bank hming", placeholder: "Bank hming" },
    {
        key: "account_no",
        label: "Bank account number",
        placeholder: "Bank account number",
    },
    { key: "ifsc_code", label: "IFSC code", placeholder: "Bank IFSC code" },
];

// File fields for upload
const fileFields = [
    {
        key: "id_proof",
        label: "Mitthi Aadhar card/Voter ID thlalak upload",
        placeholder: "Upload ID proof",
        accept: ".jpg, .jpeg, .png",
    },
    {
        key: "receipt",
        label: "Motor hman man Voucher/Receipt upload",
        placeholder: "Upload receipt",
        accept: ".pdf, .jpg, .jpeg, .png",
    },
    {
        key: "death_certificate",
        label: "Death certificate/VC hriatpuina lehkha",
        placeholder: "Upload death certificate",
        accept: ".pdf, .jpg, .jpeg, .png",
    },
    {
        key: "additional_document",
        label: "Diltu Aadhar card/Voter ID thlalak upload",
        placeholder: "Upload additional document",
        accept: ".pdf, .jpg, .jpeg, .png",
    },
];

// District options
const districts = ref(props.districts || []);

// Form setup
const form = useForm({
    name: "",
    mobile: "",
    district: "",
    locality: "",
    bank_name: "",
    account_no: "",
    ifsc_code: "",
    id_proof: null,
    receipt: null,
    death_certificate: null,
    additional_document: null,
});

// Submit form logic
const submitForm = () => {
    const formData = new FormData();
    Object.keys(form).forEach((key) => {
        if (form[key] instanceof File) {
            formData.append(key, form[key]);
        } else {
            formData.append(key, form[key] || "");
        }
    });

    form.post(route("form.storeStep3"), {
        data: formData,
        onError: (errors) => {
            console.log(errors); // Log errors to check the format
            form.errors = errors; // Assign errors to form.errors
            preview.value = false;
        },
        onSuccess: () => {
            preview.value = false; // Close the preview dialog if open

            // Optional: Display a success notification
            $q.notify({
                type: "positive",
                message: "OTP Sent successfully!",
                position: "top-right",
            });
        },
    });
};

// Back to previous step
const backToStep2 = () => window.history.back();
</script>

<style>
.custom-input-container {
    display: flex;
    width: 369px;
    flex-direction: column;

    gap: 10px;
    border-radius: 12px;
    border: 1px solid var(--Secondary-400, #a3acb8);
}
</style>
