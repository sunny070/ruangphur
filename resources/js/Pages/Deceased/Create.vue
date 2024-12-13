<template>
    <q-page class="p-10">
        <div class="">
            <q-form 
            @submit.prevent="onSubmit">
                <div
                    class="bg-gray-50 grid-cols-1 grid md:grid-cols-2 pl-4 pb-4 pr-4 col-span-2 q-gutter-sm "
                >
                <q-input
                v-model="form.department_name"
                        outlined
                        :error="!!form.errors?.department_name"
                        :error-message="form.errors?.department_name?.toString()"
                        :rules="[(val) => !!val || 'Department Name is required']"
                        label="Department Name"
                />
                <q-input
                v-model="form.post_name"
                        outlined
                        :error="!!form.errors?.post_name"
                        :error-message="form.errors?.post_name?.toString()"
                        :rules="[(val) => !!val || 'Post Name is required']"
                        label="Post Name"
                />
                <q-input
                v-model="form.no_of_post"
                        outlined
                        :error="!!form.errors?.no_of_post"
                        :error-message="form.errors?.no_of_post?.toString()"
                        :rules="[(val) => !!val || 'No. of Post is required']"
                        label="No. of Post"
                />
                <q-input
                v-model="form.salary"
                        outlined
                        :error="!!form.errors?.salary"
                        :error-message="form.errors?.salary?.toString()"
                        :rules="[(val) => !!val || 'Pay Scale is required']"
                        label="Pay Scale"
                />
                <q-input
                v-model="form.age_limit"
                        outlined
                        :error="!!form.errors?.age_limit"
                        :error-message="form.errors?.age_limit?.toString()"
                        :rules="[(val) => !!val || 'Age limit is required']"
                        label="Age limit"
                />
                <q-select
                filled
                v-model="form.qualification"
                label="Qualification"
                lazy-rules
                :rules="[(val) => (val !== null && val !== '') || 'Please Select your qualification']"
                :options="['Non Graduate', 'Graduate', 'Post Graduate', 'Doctorate']"
            />
                <q-input
                v-model="form.application_fee"
                        outlined
                        :error="!!form.errors?.application_fee"
                        :error-message="form.errors?.application_fee?.toString()"
                        :rules="[(val) => !!val || 'Application Fee is required']"
                        label="Application Fee"
                />
                <q-input
                v-model="form.description"
                        outlined
                        :error="!!form.errors?.description"
                        :error-message="form.errors?.description?.toString()"
                        :rules="[(val) => !!val || 'Description is required']"
                        label="Description"
                /> 
                <q-select outlined v-model="form.group" label="Select Group" :options="group" style="width: 250px"
                behavior="menu" />
                <q-select outlined v-model="form.department" label="Select Department" :options="department" style="width: 250px"
                behavior="menu" />
                <q-select outlined v-model="form.test_type" label="Select Test Type" :options="test" style="width: 250px"
                behavior="menu" />
              
                
               
                <q-toggle v-model="form.active" label="Active" />
            </div>
            <q-btn type="submit">Submit</q-btn>
            </q-form>
        </div>
    </q-page>
</template>

<script setup>
import AppLayout from "@/Layouts/AppLayout.vue";
import { useQuasar } from "quasar";
import { ref } from "vue";

defineOptions({
    layout: AppLayout,
});

const q =useQuasar()




const props = defineProps({
    
    groups:Object,
    tests:Object,
    departments:Object,
})
const group = ref(props.groups)
const test = ref(props.tests)
const department = ref(props.departments)
const form = ref({
    department_name: "",
    post_name: "",
    no_of_post: "",
    salary: "",
    age_limit: "",
    qualification: "",
    application_fee: "",
    description: "",
    active: false,
    test_type: "",
    group: "",
    department: "",
});

const onSubmit = (e) => {
    e.preventDefault();
    form.active = !!form.active;
    
    axios.post(route("job.store"),form.value)
    .then((response)=>{
        if(response.data.redirect){
            window.location.href = response.data.redirect;
            q.notify({
                    message: response.data.message,
                    type: "positive",
                });
        }
        else{
            q.notify({
                    message: response.data.message,
                    type: "positive",
                });
        }
    })
    .catch((error) => {
            // Show error messages
            if (error.response && error.response.data.errors) {
                form.value.errors = error.response.data.errors;
                q.notify({
                message: "Failed to create Job Details.",
                type: "negative",
            });
            }
            q.notify({
                message: "Failed to create Job Details.",
                type: "negative",
            });
        });
};


</script>
