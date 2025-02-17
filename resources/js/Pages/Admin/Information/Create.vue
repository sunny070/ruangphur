<template>
    <q-page padding>
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
                            Diltu Aadhar card/Voter ID thlalak upload
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
                        color="black"
                        label="Upload"
                        class="q-mt-md"
                        :loading="form.processing"
                    />
                </q-form>
            </q-card-section>
        </q-card>
    </q-page>
</template>

<script setup>
import { useForm } from "@inertiajs/vue3";
import AdminLayout from "@/Layouts/AdminLayout.vue";

defineOptions({
    layout: AdminLayout,
});

const form = useForm({
    file: null,
    title: "",
    sub_title: "",
});

const submitForm = () => {
    form.post(route("admin.info.store"), {
        onSuccess: () => form.reset(),
        forceFormData: true,
    });
};
</script>
