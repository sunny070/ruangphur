// resources/js/stores/formStore.js
import { defineStore } from 'pinia';

export const useFormStore = defineStore('form', {
  state: () => ({
    formStep1Data: {
      name: '',
      relative: '',
      relative_name: '',
      dob: '',
      gender: '',
      district: '',
      locality: '',
      constituency: '',
      time_of_death: '',
      place_of_death: '',
    },
  }),
  actions: {
    setFormStep1Data(data) {
      this.formStep1Data = { ...this.formStep1Data, ...data };
    },
    clearFormStep1Data() {
      this.formStep1Data = {
        name: '',
        relative: '',
        relative_name: '',
        dob: '',
        gender: '',
        district: '',
        locality: '',
        constituency: '',
        time_of_death: '',
        place_of_death: '',
      };
    },
  },
});