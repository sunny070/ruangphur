<script setup>
import { ref,watch  } from "vue";
import { usePage, router } from "@inertiajs/vue3";
import { useQuasar } from "quasar";
import { Head } from "@inertiajs/inertia-vue3";

import AdminLayout from "@/Layouts/AdminLayout.vue";

defineOptions({
    layout: AdminLayout,
});
const $q = useQuasar();
const props = defineProps({
    informations: Array,
    filters: Object, // Accept search filter from Laravel
});

const editDialog = ref(false);
const editingInfo = ref({ id: null, title: "", sub_title: "", file: null });
const fileInput = ref(null);
const searchQuery = ref(props.filters.search || ""); // Bind search query

// Fetch data when searchQuery changes
watch(searchQuery, (newQuery) => {
    router.get(
        route("admin.info.index"),
        { search: newQuery },
        { preserveState: true }
    );
});

// Function to clear search
const clearSearch = () => {
    searchQuery.value = "";
};
const openEditDialog = (info) => {
    editingInfo.value = { ...info, file: null };
    editDialog.value = true;
};

const handleFileUpload = (event) => {
    editingInfo.value.file = event.target.files[0];
};

const updateInfo = () => {
    const formData = new FormData();
    formData.append("_method", "PUT");
    formData.append("title", editingInfo.value.title);
    formData.append("sub_title", editingInfo.value.sub_title);
    if (editingInfo.value.file) {
        formData.append("file", editingInfo.value.file);
    }

    router.post(route("admin.info.update", editingInfo.value.id), formData, {
        onSuccess: () => {
            editDialog.value = false;
            $q.notify({
                type: "positive",
                message: "Information updated successfully",
            });
        },
        onError: (errors) => {
            $q.notify({
                type: "negative",
                message: "Failed to update information",
            });
        },
    });
};

const deleteFile = (id) => {
    if (confirm("Are you sure you want to delete this file?")) {
        router.delete(route("admin.info.destroy", id), {
            onSuccess: () => {
                $q.notify({
                    type: "positive",
                    message: "File deleted successfully",
                });
            },
            onError: () => {
                $q.notify({
                    type: "negative",
                    message: "Failed to delete file",
                });
            },
        });
    }
};
</script>

<template>
    <q-page padding>
        <Head title="Information"/>
        <!-- <div class="text-xl font-semibold">Information</div> -->
        <div class="bg-white p-4 rounded-lg flex justify-between">
            <q-btn
                
                size="sm"
                flat
                outlined
                class="q-btn-custom flex items-center justify-center"
                style="
                    color: #fff;
                    width: 100px;
                    height: 40px;
                    border-radius: 8px;
                    background: #3a424a;
                "
                :href="route('admin.info.create')"
            >
                <q-icon name="create" size="16px" class="q-mr-xs" />
                <span>Create</span>
            </q-btn>
            <q-input
            color="dark"
                v-model="searchQuery"
                autofocus
                outlined
                dense
                bg-color="white"
                placeholder="Search information..."
                
                clearable
                @clear="clearSearch"
            >
                <template v-slot:append>
                    <q-icon name="search" />
                </template>
            </q-input>
        </div>
        <div class="responsive-table">
            <table class="q-table w-full rounded-lg">
                <thead>
                    <tr class="bg-[#3A424A] text-white">
                        <th class="border p-2">Sl No.</th>
                        <th class="border p-2">Title</th>
                        <th class="border p-2">Sub Title</th>
                        <th class="border p-2">Attachment</th>
                        <th class="border p-2">Actions</th>
                    </tr>
                </thead>
                <tbody>
                    <tr
                        v-for="(info, index) in informations"
                        :key="info.id"
                        class="border"
                    >
                        <td class="p-2">{{ index + 1 }}</td>
                        <!-- Serial Number -->
                        <td class="p-2">{{ info.title }}</td>
                        <td class="p-2">{{ info.sub_title }}</td>
                        <td class="p-2">
                            <a
                                v-if="info.attachment"
                                :href="`/storage/${info.attachment}`"
                                target="_blank"
                                class="text-blue-600"
                                >View</a
                            >
                        </td>
                        <td class="p-2 border text-center relative">
                            <q-btn flat dense round icon="more_vert">
                                <q-menu>
                                    <q-list>
                                        
                                        <q-item
                                            clickable
                                            @click="openEditDialog(info)"
                                        ><q-item-section avatar>
                                            <q-icon name="edit" size="sm" />
                                        </q-item-section>
                                            <q-item-section
                                                >Edit</q-item-section
                                            >
                                        </q-item>
                                        <q-item
                                            clickable
                                            class="text-red-500"
                                            @click="deleteFile(info.id)"
                                        >
                                        <q-item-section avatar>
                                            <q-icon name="delete" size="sm" />
                                        </q-item-section>
                                            <q-item-section
                                                >Delete</q-item-section
                                            >
                                        </q-item>
                                    </q-list>
                                </q-menu>
                            </q-btn>
                        </td>
                    </tr>
                </tbody>
            </table>

            <q-dialog v-model="editDialog">
                <q-card class="p-4">
                    <q-card-section>
                        <h2 class="text-lg font-bold">Edit Information</h2>
                    </q-card-section>
                    <q-card-section>
                        <q-input
                            v-model="editingInfo.title"
                            label="Title"
                            outlined
                        />
                        <q-input
                            v-model="editingInfo.sub_title"
                            label="Sub Title"
                            outlined
                            class="mt-2"
                        />
                        <input
                            type="file"
                            @change="handleFileUpload"
                            ref="fileInput"
                            class="mt-2"
                        />
                    </q-card-section>
                    <q-card-actions align="right">
                        <q-btn
                            flat
                            label="Cancel"
                            color="negative"
                            @click="editDialog = false"
                        />
                        <q-btn
                            label="Update"
                            color="primary"
                            @click="updateInfo"
                        />
                    </q-card-actions>
                </q-card>
            </q-dialog>
        </div>
    </q-page>
</template>

<style scoped>
.responsive-table {
    overflow-x: auto;
}

@media (max-width: 600px) {
    .responsive-table table {
        width: 100%;
    }

    .responsive-table th,
    .responsive-table td {
        display: block;
        width: 100%;
    }

    .responsive-table th {
        text-align: left;
    }

    .responsive-table td {
        text-align: left;
        padding: 8px;
    }

    .responsive-table tr {
        margin-bottom: 10px;
        display: block;
        border-bottom: 1px solid #ddd;
    }

    .responsive-table .q-btn-dropdown {
        width: 100%;
        text-align: center;
    }
}
</style>
