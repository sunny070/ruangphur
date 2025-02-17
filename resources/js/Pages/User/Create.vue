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
            <h5>Create District User</h5>
        </div>
        <!-- <div class="flex flex-inline items-center">
            <p class="page-title">New User</p>
            <q-space />
            <q-breadcrumbs align="right" gutter="xs">
                <q-breadcrumbs-el :to="{ name: 'user:read' }" label="Users" />
                <q-breadcrumbs-el label="New User" />
            </q-breadcrumbs>
        </div> -->

        <q-form class="zcard q-pa-md" @reset="resetForm" @submit="handleSubmit">
            <div class="row q-col-gutter-sm">
                <div class="col-xs-12 col-sm-6">
                    <q-input
                    color="dark"
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
                    color="dark"
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
                    color="dark"
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
                    color="dark"
                    outlined
                    dense
                        v-model="form.districts"
                        multiple
                        use-chips
                        :options="districts"
                        option-value="id"
                        option-label="name"
                        emit-value
                        map-options
                        label="Assign Districts"
                    />
                </div>
                <div class="col-xs-12 col-sm-6">
                    <q-select
                    color="dark"
                        v-model="form.roles"
                        multiple
                        use-chips
                        :options="roles"
                        dense
                        class="my-input"
                        label="Roles"
                        outlined
                        :option-value="'id'"
                        :option-label="'name'"
                        :error="form.errors.hasOwnProperty('roles')"
                        :error-message="form.errors?.roles?.toString()"
                        @blur="delete form.errors['roles']"
                        :rules="[
                            (val) => val.length > 0 || 'roles is required',
                        ]"
                    />
                </div>
                <div class="col-xs-12 col-sm-6">
                    <q-input
                    color="dark"
                        v-model="form.designation"
                        type="text"
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
                    color="dark"
                        v-model="form.password"
                        type="password"
                        class="my-input"
                        dense
                        label="Password"
                        outlined
                        :error="form.errors.hasOwnProperty('password')"
                        :error-message="form.errors?.password?.toString()"
                        @blur="delete form.errors['password']"
                        :rules="[
                            (val) =>
                                val?.length > 6 ||
                                'Password must be atleast 6 digit character',
                        ]"
                    />
                </div>
                <div class="col-xs-12 col-sm-6">
                    <q-input
                    color="dark"
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
                        :rules="[
                            (val) =>
                                val === form.password ||
                                'Confirm password doesn\'t match Password',
                        ]"
                    />
                </div>
            </div>
            <div class="col-xs-12">
                <q-separator class="q-my-md" />
            </div>
            <q-card-actions class="q-mt-md">
                <q-btn style="
                    color: #fff;
                    width: 144px;
                    height: 40px;
                    flex-shrink: 0;
                    border-radius: 8px;
                    border: 1px solid #5b656f;
                    background: #000;
                " color="primary" flat type="submit" label="Save" />
                <q-btn style="
                    color: #000;
                    width: 144px;
                    height: 40px;
                    flex-shrink: 0;
                    border-radius: 8px;
                    border: 1px solid #5b656f;
                    background: transparent;
                " color="negative" flat type="reset" label="Reset" />
            </q-card-actions>
        </q-form>
    </q-page>
</template>

<script setup>
import { ref } from "vue";
import { useForm } from "@inertiajs/vue3";
import { useQuasar } from "quasar";
import AdminLayout from "@/Layouts/AdminLayout.vue";
import {Link} from "@inertiajs/vue3";

defineOptions({
    layout: AdminLayout,
});

const q = useQuasar();

const props = defineProps({
    roles: Object,
    districts: Object,
});
const form = useForm({
    name: "",
    phone: "",
    email: "",
    roles: [],
    districts: [], // Change from `district_id` to `districts`
    designation: "",
    password: "",
    password_confirmation: "",
});

const emailRegex =
    /^(([^<>()[\]\\.,;:\s@"]+(\.[^<>()[\]\\.,;:\s@"]+)*)|(".+"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/;

const resetForm = (e) => {
    clear();
};
const clear = () => {
    form.name = "";
    form.mobile = "";
    form.email = "";
    form.roles = [];
    form.designation = "";
    form.password = "";
    form.password_confirmation = "";
};

const handleSubmit = (e) => {
    e.preventDefault();

    form.post(route("user.store"), {
        onSuccess: () => {
            q.notify({
                type: "positive",
                message: "User created successfully!",
            });
            form.reset();
        },
        onError: (errors) => {
            q.notify({
                type: "negative",
                message: "There were errors in your submission.",
            });
        },
        onFinish: () => {
            q.loading.hide();
            e?.target?.reset();
        },
    });
};
</script>

<style scoped></style>
