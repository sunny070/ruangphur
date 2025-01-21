<template>
    <q-layout>
      <q-page-container>
        <q-page padding>
          <div class="flex flex-col justify-center items-center gap-6">
            <div class="border-2 border-gray-200 bg-[#E9F4FF]  flex-shrink-0 rounded-[10px] text-center">
              <!--  -->
              <h5 class="text-black">Ruang Phurh Report Form</h5>
              <img
                id="background"
                class="w-[412px] h-[193px]"
                src="image/Vertical Stepper with numbers3.png"
              />
            </div>
            <div class="border w-[412px] h-auto rounded-[10px] p-[23px]">
              <q-form @submit.prevent="submitForm" class="q-gutter-md">
                <div v-for="field in textFields" :key="field.key">
                  <div class="text-sm font-medium text-black q-mb-xs">
                    {{ field.label }}
                  </div>
                  <q-input
                    outlined
                    dense
                    :placeholder="field.placeholder"
                    class="custom-input"
                    v-model="form[field.key]"
                  />
                </div>
  
                <div class="pt-5 text-sm font-medium text-[#61646B] q-mb-xs">
                  Document Upload
                </div>
                <div v-for="fileField in fileFields" :key="fileField.key">
                  <div class="text-sm font-medium text-black q-mb-xs">
                    {{ fileField.label }}
                  </div>
                  <q-file
                    v-model="form[fileField.key]"
                    outlined
                    dense
                    :accept="fileField.accept"
                    :label="fileField.placeholder"
                  >
                    <template v-slot:prepend>
                      <q-icon name="attach_file" />
                    </template>
                  </q-file>
                </div>
  
                <q-btn label="Preview" class="text-black" color="white" @click="backToStep2" />
                <q-btn label="Submit & Send OTP" color="black" type="submit" />
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
  
  defineOptions({ layout: WebLayout });
  
  const textFields = [
    { key: "name", label: "Diltu hming", placeholder: "Diltu hming pum" },
    { key: "mobile", label: "Phone number", placeholder: "Phone number" },
    { key: "district", label: "District", placeholder: "District" },
    { key: "locality", label: "Veng/Khua", placeholder: "Veng/Khua" },
    { key: "bank_name", label: "Bank hming", placeholder: "Bank hming" },
    { key: "account_no", label: "Bank account number", placeholder: "Bank account number" },
    { key: "ifsc_code", label: "IFSC code", placeholder: "Bank IFSC code" },
  ];
  
  const fileFields = [
    { key: "id_proof", label: "Mitthi Aadhar card/Voter ID thlalak upload", placeholder: "Upload ID proof", accept: ".jpg, .jpeg, .png" },
    { key: "receipt", label: "Motor hman man Voucher/Receipt upload", placeholder: "Upload receipt", accept: ".pdf, .jpg, .jpeg, .png" },
    { key: "death_certificate", label: "Death certificate/VC hriatpuina lehkha", placeholder: "Upload death certificate", accept: ".pdf, .jpg, .jpeg, .png" },
    { key: "additional_document", label: "Diltu Aadhar card/Voter ID thlalak upload", placeholder: "Upload additional document", accept: ".pdf, .jpg, .jpeg, .png" },
  ];
  
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
      onFinish: () => console.log("Form submitted"),
    });
  };
  
  const backToStep2 = () => window.history.back();
  </script>
  