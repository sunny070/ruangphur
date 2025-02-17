<template>
    <q-page padding>
        <q-btn
        
            color="black"
            label="Upload New"
            :href="route('admin.info.create')"
            class="q-mb-md"
        />

        <q-card>
            <q-table flat :rows="informations" :columns="columns" row-key="id">
                <template v-slot:body="props">
                    <q-tr :props="props">
                        <q-td>{{ props.row.id }}</q-td>
                        <q-td>{{ props.row.title }}</q-td>
                        <!-- Display Title -->
                        <q-td>{{ props.row.sub_title }}</q-td>
                        <!-- Display Subtitle -->
                        <q-td>
                            <a
                                v-if="props.row.file_url"
                                target="_blank"
                                class="text-black"
                                @click="handleOpenApplicant(props.row.file_url)"
                            >
                                View File
                            </a>
                            <span v-else>No file attached</span>
                        </q-td>
                        <q-td>{{ props.row.created_at }}</q-td>
                        <!-- Display Created At -->
                        <q-td>
                            <q-btn
                                icon="edit"
                                color="blue"
                                dense
                                flat
                                @click="openEditDialog(props.row)"
                            />
                            <q-btn
                                icon="delete"
                                color="red"
                                dense
                                flat
                                @click="deleteFile(props.row.id)"
                            />
                        </q-td>
                    </q-tr>
                </template>
            </q-table>
        </q-card>

        <q-dialog v-model="editDialog">
            <q-card>
                <q-card-section>
                    <div class="text-h6">Edit File</div>
                </q-card-section>

                <q-card-section>
                    <q-file v-model="form.file" label="Choose New File" />
                </q-card-section>

                <q-card-actions align="right">
                    <q-btn flat label="Cancel" v-close-popup />
                    <q-btn
                        color="primary"
                        label="Save"
                        :loading="form.processing"
                        @click="updateFile"
                    />
                </q-card-actions>
            </q-card>
        </q-dialog>
    </q-page>
</template>

<script setup>
import { ref } from "vue";
import { useForm, router } from "@inertiajs/vue3";
import AdminLayout from "@/Layouts/AdminLayout.vue";

defineOptions({ layout: AdminLayout });

const props = defineProps({ informations: Array });
const columns = [
    { name: "id", label: "ID", field: "id", align: "left", sortable: true },
    {
        name: "title",
        label: "Title",
        field: "title",
        align: "left",
        sortable: true,
    },
    {
        name: "sub_title",
        label: "Sub Title",
        field: "sub_title",
        align: "left",
        sortable: true,
    },
    { name: "file_url", label: "Attachment", field: "file_url", align: "left" },
    {
        name: "created_at",
        label: "Created At",
        field: "created_at",
        align: "left",
        sortable: true,
    },
    { name: "actions", label: "Actions", field: "actions", align: "center" },
];
const editDialog = ref(false);
const selectedId = ref(null);
const form = useForm({ file: null });

const openEditDialog = (file) => {
    selectedId.value = file.id;
    editDialog.value = true;
};
const handleOpenApplicant = (url) => {
    let a = document.createElement("a");
    a.target = "_blank";
    a.href = `/storage/${url}`;
    a.click();
};
const updateFile = () => {
    form.put(route("admin.info.update", selectedId.value), {
        onSuccess: () => {
            editDialog.value = false;
            form.reset();
        },
        forceFormData: true,
    });
};

const deleteFile = (id) => {
    if (confirm("Are you sure you want to delete this file?")) {
        router.delete(route("admin.info.destroy", id));
    }
};
</script>
