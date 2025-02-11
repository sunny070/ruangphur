// resources/js/stores/form.js
import { defineStore } from "pinia";

export const useFormStore = defineStore("form", {
    state: () => ({
        formStep1Data: {
            name: "",
            relative: "",
            relative_name: "",
            dob: "",
            gender: "",
            district: "",
            locality: "",
            constituency: "",
            time_of_death: "",
            place_of_death: "",
        },
        formStep2Data: {
            source_district: "",
            source_locality: "",
            destination_district: "",
            destination_locality: "",
            driver_name: "",
            driver_phone: "",
            transport_cost: "",
            distance: "",
            vehicle_number: "",
            source_lat: "",
            source_lng: "",
            destination_lat: "",
            destination_lng: "",
        },
        formStep3Data: {
            name: "",
            mobile: "",
            district_id: "",
            locality: "",
            bank_name: "",
            account_no: "",
            relation: "",
            ifsc_code: "",
        },
        doc: {
            id_proof: "",
            receipt: "",
            death_certificate: "",
            additional_document: "",
        },
    }),
    actions: {
        setFormStep1Data(data) {
            this.formStep1Data = { ...this.formStep1Data, ...data };
        },
        setFormStep2Data(data) {
            this.formStep2Data = { ...this.formStep2Data, ...data };
        },
        setFormStep3Data(data) {
            this.formStep3Data = { ...this.formStep3Data, ...data };
        },
        clearFormStep1Data() {
            this.formStep1Data = {
                name: "",
                relative: "",
                relative_name: "",
                dob: "",
                gender: "",
                district: "",
                locality: "",
                constituency: "",
                time_of_death: "",
                place_of_death: "",
            };
        },
        clearFormStep2Data() {
            this.formStep2Data = {
                source_district: "",
                source_locality: "",
                destination_district: "",
                destination_locality: "",
                driver_name: "",
                driver_phone: "",
                transport_cost: "",
                distance: "",
                vehicle_number: "",
                source_lat: "",
                source_lng: "",
                destination_lat: "",
                destination_lng: "",
            };
        },
        clearFormStep3Data() {
            this.formStep3Data = {
                name: "",
                mobile: "",
                district_id: "",
                locality: "",
                bank_name: "",
                account_no: "",
                relation: "",
                ifsc_code: "",
            };
        },
        clearFormStep3Data() {
            this.doc = {
                id_proof: "",
                receipt: "",
                death_certificate: "",
                additional_document: "",
            };
        },
    },
});
