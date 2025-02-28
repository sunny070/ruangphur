<template>
    <q-page padding>
        <div class="flex items-center order-1 md:order-none">
            <Link
                :href="route('admin.info.index')"
                size="sm"
                flat
                outlined
                class="flex items-center justify-center"
            >
                <q-icon name="arrow_back" size="16px" class="q-mr-xs" />
                <span>Back</span>
            </Link>
        </div>
        <q-card>
            <q-card-section>
                <div class="text-h6">Upload File</div>
            </q-card-section>

            <q-card-section>
                <q-form @submit.prevent="submitForm">
                  <div class="flex gap-9">
                    <div class="">
                        <div class="text-sm font-medium text-black q-mb-xs">
                            Title
                        </div>
                        <input
                            type="text"
                            placeholder="Enter Title"
                            v-model="form.title"
                            :class="[
                                'border p-2 w-full rounded-lg',
                                form.errors.title
                                    ? 'border-red-500'
                                    : 'border-gray-300',
                            ]"
                        />
                        <div
                            v-if="form.errors.title"
                            class="text-red-500 text-sm"
                        >
                            {{ form.errors.title }}
                        </div>
                    </div>
                    <div class="">
                        <div class="text-sm font-medium text-black q-mb-xs">
                            Sub Title
                        </div>
                        <input
                            type="text"
                            placeholder="Enter Title"
                            v-model="form.sub_title"
                            :class="[
                                'border p-2 w-full rounded-lg',
                                form.errors.sub_title
                                    ? 'border-red-500'
                                    : 'border-gray-300',
                            ]"
                        />
                        <div
                            v-if="form.errors.sub_title"
                            class="text-red-500 text-sm"
                        >
                            {{ form.errors.sub_title }}
                        </div>
                    </div>

                    <div>
                        <div class="text-sm font-medium text-black q-mb-xs">
                            Upload File
                        </div>
                        <q-file
                            color="dark"
                            v-model="form.file"
                            outlined
                            dense
                            accept=".pdf, .jpg, .jpeg, .png"
                            label="Upload  File"
                        >
                            <template v-slot:prepend>
                                <q-icon name="attach_file" />
                            </template>
                        </q-file>
                        <div v-if="$page.props.errors.file" class="text-red">
                            {{ $page.props.errors.file }}
                        </div>
                    </div>
                  </div>
                    <!-- <q-file outlined v-model="form.file" label="Choose File" /> -->
                    <q-btn
                       type="submit"
                        label="Submit"
                        size="sm"
                        class="q-mt-md"
                        style="
                            color: #fff;
                            height: 40px;
                            border-radius: 8px;
                            border: 1px solid #5b656f;
                            background: #000;
                        "
                        :loading="form.processing"
                    />
                    <!-- <q-btn
                        type="submit"
                        color="black"
                        label="Upload"
                        class="q-mt-md"
                        :loading="form.processing"
                    /> -->
                </q-form>
            </q-card-section>
        </q-card>
    </q-page>
</template>

<script setup>
import { useForm } from "@inertiajs/vue3";
import AdminLayout from "@/Layouts/AdminLayout.vue";
import { Link } from "@inertiajs/inertia-vue3";
import { useQuasar } from "quasar";

defineOptions({
    layout: AdminLayout,
});
const $q = useQuasar();
const form = useForm({
    file: null,
    title: "",
    sub_title: "",
});

const submitForm = () => {
    form.post(route("admin.info.store"), {
        onSuccess: () => {
            form.reset();
            // Show success notification
            $q.notify({
                type: "positive",
                message: "Form submitted successfully!",
                position: "top-right",
                timeout: 3000,
            });
        },
        forceFormData: true,
    });
};
</script>
