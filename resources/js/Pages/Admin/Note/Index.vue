<template>
    <q-page padding>
        <Head title="Note" />
        <!-- <div class="text-xl font-semibold">Notes</div> -->
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
                :href="route('admin.notes.create')"
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
                placeholder="Search"
                clearable
            >
                <template v-slot:append>
                    <q-icon name="search" />
                </template>
            </q-input>
        </div>

        <div class="responsive-table">
            <table class="q-table w-full">
                <thead>
                    <tr class="bg-[#3A424A] text-white">
                        <th class="p-2 border">Sl No.</th>
                        <th class="p-2 border">Title</th>
                        <th class="p-2 border">Content</th>
                        <th class="p-2 border">Status</th>
                        <th class="p-2 border">Created At</th>
                        <th class="p-2 border">Actions</th>
                    </tr>
                </thead>
                <tbody>
                    <tr
                        v-for="(note, index) in filteredNotes"
                        :key="note.id"
                        class="hover:bg-gray-50"
                    >
                        <td class="p-2 border">{{ index + 1 }}</td>
                        <!-- Serial Number -->
                        <td class="p-2 border">{{ note.title }}</td>
                        <td class="p-2 border">
                            {{ note.content.substring(0, 50) }}...
                        </td>
                        <td class="p-2 border">
                            <q-select
                                color="dark"
                                v-model="note.status"
                                :options="['draft', 'published', 'archived']"
                                dense
                                @update:model-value="updateStatus(note)"
                            />
                        </td>
                        <td class="p-2 border">{{ note.created_at }}</td>
                        <td class="p-2 border text-center relative">
                            <q-btn flat dense round icon="more_vert">
                                <q-menu>
                                    <q-list>
                                        <q-item
                                            clickable
                                            @click="openEditDialog(note)"
                                        >
                                            <q-item-section avatar>
                                                <q-icon name="edit" size="sm" />
                                            </q-item-section>
                                            <q-item-section
                                                >Edit</q-item-section
                                            >
                                        </q-item>
                                        <q-item
                                            clickable
                                            class="text-red-500"
                                            @click="deleteNote(note.id)"
                                        >
                                            <q-item-section avatar>
                                                <q-icon
                                                    name="delete"
                                                    size="sm"
                                                />
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
        </div>

        <q-dialog v-model="editDialog">
            <div class="bg-white p-6 rounded-lg w-96">
                <div class="text-xl font-semibold">Edit Note</div>
                <q-form @submit="updateNote">
                    <q-input
                        v-model="editForm.title"
                        label="Title"
                        class="q-mb-md"
                        outlined
                        required
                    />
                    <q-input
                        outlined
                        type="textarea"
                        v-model="editForm.content"
                        min-height="150px"
                        label="Content"
                        class="q-mb-md"
                        required
                    />
                    <q-select
                        v-model="editForm.status"
                        :options="['draft', 'published', 'archived']"
                        label="Status"
                        outlined
                        class="q-mb-md"
                    />
                    <div class="flex justify-end gap-2">
                        <q-btn label="Cancel" flat v-close-popup />
                        <q-btn
                            type="submit"
                            label="Update"
                            color="dark"
                            :loading="editForm.processing"
                        />
                    </div>
                </q-form>
            </div>
        </q-dialog>
    </q-page>
</template>

<script setup>
import { useForm } from "@inertiajs/inertia-vue3";
import { ref, computed, watch } from "vue";
import AdminLayout from "@/Layouts/AdminLayout.vue";
import { Head } from "@inertiajs/inertia-vue3";

defineOptions({ layout: AdminLayout });
const props = defineProps({ notes: Object });
const searchQuery = ref("");
const filteredNotes = ref(props.notes.data);

watch(searchQuery, (newValue) => {
    if (!newValue.trim()) {
        filteredNotes.value = props.notes.data;
    } else {
        filteredNotes.value = props.notes.data.filter(
            (note) =>
                note.title.toLowerCase().includes(newValue.toLowerCase()) ||
                note.content.toLowerCase().includes(newValue.toLowerCase())
        );
    }
});

const editDialog = ref(false);
const selectedNote = ref(null);
const editForm = useForm({
    title: "",
    content: "",
    status: "published",
});

function openEditDialog(note) {
    selectedNote.value = note.id;
    editForm.title = note.title;
    editForm.content = note.content;
    editForm.status = note.status;
    editDialog.value = true;
}

function updateNote() {
    editForm.patch(route("admin.notes.update", selectedNote.value), {
        onSuccess: () => {
            editDialog.value = false;
            editForm.reset();
        },
    });
}

function updateStatus(note) {
    useForm({ status: note.status }).patch(
        route("admin.notes.update", note.id)
    );
}

function deleteNote(id) {
    if (confirm("Are you sure you want to delete this note?")) {
        useForm().delete(route("admin.notes.destroy", id));
    }
}
</script>
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
