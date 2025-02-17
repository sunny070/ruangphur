<template>
    <q-page padding>
        <div class="flex justify-between items-center order-1 md:order-none">
            <Link
                :href="route('user.index')"
                size="sm"
                flat
                outlined
                class="flex items-center justify-center"
            >
                <q-icon name="arrow_back" size="16px" class="q-mr-xs" />
                <span>Back</span>
            </Link>
            <h5>Edit District User</h5>
        </div>

        <q-form class="zcard q-pa-md" @reset="resetForm" @submit="handleSubmit">
            <div class="row q-col-gutter-sm">
                <div class="col-xs-12 col-sm-6">
                    <q-input
                        color="black"
                        v-model="form.name"
                        class="my-input"
                        dense
                        label="Name"
                        outlined
                        :error="form.errors.hasOwnProperty('name')"
                        :error-message="form.errors?.name?.toString()"
                        @blur="delete form.errors['name']"
                        :rules="[(val) => !!val || 'Username is required']"
                    />
                </div>

                <div class="col-xs-12 col-sm-6">
                    <q-input
                        color="black"
                        v-model="form.phone"
                        class="my-input"
                        mask="##########"
                        dense
                        label="Mobile"
                        outlined
                        :error="form.errors.hasOwnProperty('phone')"
                        :error-message="form.errors?.phone?.toString()"
                        @blur="delete form.errors['phone']"
                        :rules="[
                            (val) => val.length === 10 || 'Mobile is required',
                        ]"
                    />
                </div>

                <div class="col-xs-12 col-sm-6">
                    <q-input
                        color="black"
                        v-model="form.email"
                        class="my-input"
                        dense
                        label="Email"
                        outlined
                        :error="form.errors.hasOwnProperty('email')"
                        :error-message="form.errors?.email?.toString()"
                        @blur="delete form.errors['email']"
                        :rules="[
                            (val) => emailRegex.test(val) || 'Invalid email',
                        ]"
                    />
                </div>
                <div class="col-xs-12 col-sm-6">
                    <q-select
                        color="black"
                        outlined
                        dense
                        v-model="form.districts"
                        multiple
                        use-chips
                        :options="districtOptions"
                        option-value="id"
                        option-label="name"
                        emit-value
                        map-options
                        label="Assign Districts"
                    />
                </div>
                <div class="col-xs-12 col-sm-6">
                    <q-select
                        color="black"
                        outlined
                        dense
                        v-model="form.roles"
                        multiple
                        use-chips
                        :options="roleOptions"
                        option-value="id"
                        option-label="name"
                        emit-value
                        map-options
                        label="Roles"
                    />
                </div>
                <div class="col-xs-12 col-sm-6">
                    <q-input
                        color="black"
                        v-model="form.designation"
                        class="my-input"
                        dense
                        label="Designation"
                        outlined
                        :error="form.errors.hasOwnProperty('designation')"
                        :error-message="form.errors?.designation?.toString()"
                        @blur="delete form.errors['designation']"
                        :rules="[(val) => !!val || 'Designation is required']"
                    />
                </div>
                <div class="col-xs-12 col-sm-6">
                    <q-input
                        color="black"
                        v-model="form.password"
                        type="password"
                        class="my-input"
                        dense
                        label="Password"
                        outlined
                        :error="form.errors.hasOwnProperty('password')"
                        :error-message="form.errors?.password?.toString()"
                        @blur="delete form.errors['password']"
                    />
                </div>
                <div class="col-xs-12 col-sm-6">
                    <q-input
                        color="black"
                        v-model="form.password_confirmation"
                        type="password"
                        class="my-input"
                        dense
                        label="Confirm Password"
                        outlined
                        :error="
                            form.errors.hasOwnProperty('password_confirmation')
                        "
                        :error-message="
                            form.errors?.password_confirmation?.toString()
                        "
                        @blur="delete form.errors['password_confirmation']"
                    />
                </div>
            </div>
            <div class="col-xs-12">
                <q-separator class="q-my-md" />
            </div>
            <q-card-actions class="q-mt-md">
                <q-btn
                    style="
                        color: #fff;
                        width: 144px;
                        height: 40px;
                        flex-shrink: 0;
                        border-radius: 8px;
                        border: 1px solid #5b656f;
                        background: #000;
                    "
                    flat
                    type="submit"
                    label="Update"
                />
                <q-btn
                    style="
                        color: #000;
                        width: 144px;
                        height: 40px;
                        flex-shrink: 0;
                        border-radius: 8px;
                        border: 1px solid #5b656f;
                        background: transparent;
                    "
                    color="negative"
                    flat
                    type="reset"
                    label="Reset"
                />
            </q-card-actions>
        </q-form>
    </q-page>
</template>
<script setup>
import { ref, computed } from "vue";
import { useForm } from "@inertiajs/vue3";
import { useQuasar } from "quasar";
import AdminLayout from "@/Layouts/AdminLayout.vue";
import { Link } from "@inertiajs/inertia-vue3";

defineOptions({
    layout: AdminLayout,
});
const q = useQuasar();

const props = defineProps({
    data: Object,
    roles: Object,
    districts: Array, // Ensure districts are passed as a prop
});

const form = useForm({
    name: props.data?.name,
    phone: props.data?.phone,
    email: props.data?.email,
    roles: props.data?.roles.map((item) => item.id) || [],
    districts: props.data?.districts.map((item) => item.id) || [],
    designation: props.data?.designation,
    password: "",
    password_confirmation: "",
});

const districtOptions = computed(() => {
    return props.districts.map((district) => ({
        id: district.id,
        name: district.name,
    }));
});

// Computed property to map roles for q-select options
const roleOptions = computed(() => {
    return props.roles.map((role) => ({
        id: role.id,
        name: role.name,
    }));
});
console.log(roleOptions.value);

const emailRegex =
    /^(([^<>()[\]\\.,;:\s@"]+(\.[^<>()[\]\\.,;:\s@"]+)*)|(".+"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/;
const resetForm = (e) => clear();
const clear = () => {
    form.name = "";
    form.mobile = "";
    form.email = "";
    form.designation = "";
    form.password = "";
    form.roles = [];
    form.password_confirmation = "";
};
const handleSubmit = () => {
    // Send PUT request using Inertia's form submission
    form.put(route("user.update", props.data.id), {
        onStart: () => {
            // Show loading indicator
            q.loading.show();
        },
        onSuccess: () => {
            // Notify success
            q.notify({
                type: "positive",
                message: "User updated successfully!",
            });
            form.reset(); // Clear the form
        },
        onError: () => {
            // Notify error
            q.notify({
                type: "negative",
                message: "There was an error updating the user.",
            });
        },
        onFinish: () => {
            // Hide loading indicator
            q.loading.hide();
        },
    });
};

// const handleSubmit = () => {
//
//     form.put(route('user.update', props.data.id), {});
// };
</script>

<style scoped></style>
