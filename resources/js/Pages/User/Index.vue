<template>
    <q-page padding>
        <p class="page-title">Users</p>

        <div class="row q-gutter-md">
            <div class="flex zcard justify-between flex-inline col-12 q-pa-md">
                <q-btn size="sm" flat outlined class="flex items-center justify-center" style="
                        color: #fff;
                        width: 100px;
                        height: 40px;
                        border-radius: 8px;
                        background: #3a424a;
                    " @click="$inertia.get(route('user.create'))">
                    <q-icon name="person_add" size="16px" class="q-mr-xs" />
                    <span>New User</span>
                </q-btn>
                <q-tabs stretch shrink v-model="state.tab" align="start" @update:model-value="handleNavigation">
                    <q-space />
                    <q-input v-model="state.search" autofocus outlined dense @keyup.enter="handleSearch"
                        bg-color="white" placeholder="Search">
                        <template v-slot:append>
                            <q-icon name="search" />
                        </template>
                    </q-input>
                </q-tabs>
            </div>

            <div class="col-12 zcard q-pa-md">
                <div class="responsive-table">
                    <table class="q-table w-full">
                        <thead>
                            <tr class="bg-[#3A424A] text-white">
                                <th class="text-left">NAME</th>
                                <th class="text-left">ROLES</th>
                                <th class="text-left">DISTRICT</th>
                                <th class="text-center">ACTIONS</th>
                            </tr>
                        </thead>
                        <tbody v-if="users && users.data && users.data.length">
                            <tr v-for="user in users.data" :key="user.id">
                                <td>{{ user?.name ?? '--' }}</td>
                                <td>
                                    <div class="flex">
                                        <q-chip v-for="role in user.roles" :key="role.name" :label="role.name"
                                            class="q-mr-xs" />
                                    </div>
                                </td>
                                <td>
                                    <div class="flex">
                                        <q-chip v-for="district in user.districts" :key="district.name"
                                            :label="district.name" class="q-mr-xs" />
                                    </div>
                                </td>
                                <td class="text-center">
                                    <q-btn-dropdown flat rounded dropdown-icon="more_vert" class="q-pa-none">
                                        <q-list separator>
                                            <q-item @click="$inertia.get(route('user.edit', user))" clickable>
                                                <q-item-section><q-item-label>Edit</q-item-label></q-item-section>
                                            </q-item>
                                            <q-item @click="handleDelete(user)" clickable>
                                                <q-item-section><q-item-label>Delete</q-item-label></q-item-section>
                                            </q-item>
                                        </q-list>
                                    </q-btn-dropdown>
                                </td>
                            </tr>
                        </tbody>
                        <tbody v-else>
                            <tr>
                                <td colspan="4" class="text-center text-gray-500">
                                    No users found.
                                </td>
                            </tr>
                        </tbody>
                    </table>
                </div>

                <div class="col-12">
                    <div class="flex q-gutter-sm justify-center">
                        <q-btn :disable="!!!users.prev_page_url" @click="$inertia.get(users.prev_page_url)" flat round
                            icon="chevron_left" />
                        <q-btn :disable="!!!users.next_page_url" @click="$inertia.get(users.next_page_url)" flat round
                            icon="chevron_right" />
                    </div>
                </div>
            </div>
        </div>
    </q-page>
</template>

<script setup>
import { ref, watch, reactive } from 'vue';
import { router } from '@inertiajs/vue3'
import { useQuasar } from "quasar";
import AdminLayout from "@/Layouts/AdminLayout.vue";

defineOptions({
    layout: AdminLayout,
});
const q = useQuasar();

const search = ref('');
const props = defineProps(['users', 'search']);

const state = reactive({
    search: props?.search,
    tab: route().current(),
})
const handleSearch = e => {
    router.get(route('user.index'), {
        search: state.search
    });

}

const handleNavigation = (value) => {
    router.get(route(value))
}
const handleDelete = (item) => {
    q.dialog({
        title: 'Confirm',
        message: 'Would you like to delete?',
        cancel: true,
        persistent: true
    }).onOk(() => {
        q.loading.show(); // Show loading indicator
        router.delete(route('user.destroy', item), {
            onSuccess: () => {
                q.notify({
                    type: 'positive',
                    message: 'User deleted successfully',
                });
            },
            onError: (errors) => {
                q.notify({
                    type: 'negative',
                    message: errors?.message || 'Failed to delete user.',
                });
            },
            onFinish: () => {
                q.loading.hide(); // Hide loading indicator
            },
        });
    }).onCancel(() => {
        // console.log('>>>> Cancel')
    }).onDismiss(() => {
        // console.log('I am triggered on both OK and Cancel')
    })
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