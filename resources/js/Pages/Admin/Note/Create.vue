<template>
    <q-page padding>
        <div class="flex items-center order-1 md:order-none">
            <Link
                :href="route('note.index')"
                size="sm"
                flat
                outlined
                class="flex items-center justify-center"
            >
                <q-icon name="arrow_back" size="16px" class="q-mr-xs" />
                <span>Back</span>
            </Link>
        </div>
        <q-card class="q-mb-md">
            <q-card-section>
                <div class="text-h6">Create New Note</div>
            </q-card-section>

            <q-card-section>
                <q-form @submit="submit">
                    <q-input
                        v-model="form.title"
                        label="Title"
                        outlined
                        class="q-mb-md"
                        required
                    />

                    <q-input
                        outlined
                        type="textarea"
                        v-model="form.content"
                        min-height="250px"
                        label="Content"
                        class="q-mb-md"
                        required
                    />

                    <q-select
                        v-model="form.status"
                        :options="['draft', 'published', 'archived']"
                        label="Status"
                        outlined
                        class="q-mb-md"
                    />

                    <div class="row q-gutter-sm">
                        <q-btn
                            type="submit"
                            label="Create Note"
                            color="dark"
                            :loading="form.processing"
                        />
                        <q-btn
                            label="Cancel"
                            :to="{ name: 'admin.notes.index' }"
                            flat
                        />
                    </div>
                </q-form>
            </q-card-section>
        </q-card>
    </q-page>
</template>

<script setup>
import { useForm } from "@inertiajs/inertia-vue3";
import AdminLayout from "@/Layouts/AdminLayout.vue";
import { useQuasar } from "quasar";

const $q = useQuasar();

defineOptions({
    layout: AdminLayout,
});

const form = useForm({
    title: "",
    content: "",
    status: "published",
});

const submit = () => {
    form.post(route("admin.notes.store"), {
        preserveScroll: true, // Keeps the scroll position intact
        onSuccess: () => {
            form.reset();
            $q.notify({
                type: "positive",
                message: "Form submitted successfully!",
                position: "top-right",
                timeout: 3000,
            });
        },
    });
};

</script>
