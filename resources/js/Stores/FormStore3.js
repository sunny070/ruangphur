import { defineStore } from "pinia";
import { useRouter } from "vue-router";
import { useQuasar } from "quasar";
import axios from "axios";

export const useApplicationStore = defineStore("application", {
    state: () => ({
        formData: {
            name: "",
            mobile: "",
            district_id: "",
            locality: "",
            bank_name: "",
            account_no: "",
            ifsc_code: "",
            relation: "",
            id_proof: null,
            receipt: null,
            death_certificate: null,
            additional_document: null,
        },
    }),

    actions: {
        setFormData(newData) {
            this.formData = { ...this.formData, ...newData };
        },

        async submitStep3() {
            const router = useRouter();
            const $q = useQuasar();
            try {
                const formData = new FormData();
                Object.keys(this.formData).forEach((key) => {
                    if (this.formData[key] instanceof File) {
                        formData.append(key, this.formData[key]);
                    } else {
                        formData.append(key, this.formData[key] || "");
                    }
                });

                const response = await axios.post(
                    "/api/store-step3",
                    formData,
                    {
                        headers: { "Content-Type": "multipart/form-data" },
                    }
                );

                if (response.status === 200) {
                    $q.notify({
                        type: "positive",
                        message: "Step 3 submitted successfully",
                    });
                    router.push("/otp-verification");
                }
            } catch (error) {
                $q.notify({
                    type: "negative",
                    message: "Error submitting form",
                });
                console.error(error);
            }
        },
    },
});
