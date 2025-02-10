<template>
    <q-layout view="lHh Lpr lFf" class="bg-white">
        <!-- Header with Hamburger -->
        <q-header elevated class="bg-white text-white">
            <q-toolbar>
                <!-- Hamburger Menu (Mobile Only) -->
                <q-btn flat dense round text-color="black" icon="menu" aria-label="Menu"
                    @click="leftDrawerOpen = !leftDrawerOpen" class="lt-md" />

                <!-- Spacer -->
                <q-toolbar-title></q-toolbar-title>

                <!-- User Dropdown -->
                <div class="flex justify-center items-center gap-2">
                    <p class="text-black font-bold m-0">Welcome! {{ $page.props.auth.user.name }}</p>
                    <q-btn-dropdown flat icon="account_box" class="bg-white text-black q-pa-sm" dense>
                        <q-list>
                            <q-item clickable v-close-popup :to="route('profile.edit')">
                                <q-item-section>Profile</q-item-section>
                            </q-item>
                            <Link :href="route('logout')" method="post">
                            <q-item clickable v-close-popup>
                                <q-item-section>Log Out</q-item-section>
                            </q-item>
                            </Link>
                        </q-list>
                    </q-btn-dropdown>
                </div>
            </q-toolbar>
        </q-header>

        <!-- Drawer for Admin -->
        <q-drawer v-if="$page.props.auth.user.roles.some(role => role.name === 'admin')" v-model="leftDrawerOpen"
            show-if-above bordered class="bg-grey-2">
            <q-list>
                <!-- Logo -->
                <img src="/image/Group%201321315097.png" class="q-mx-auto q-my-md"
                    style="width: 140.7px; height: 45px;" />

                <!-- Menu Section -->
                <q-item-label header class="text-weight-bold">Menu</q-item-label>
                <Link :href="route('admin.dashboard')">
                <q-item clickable v-ripple>
                    <q-item-section avatar>
                        <q-icon name="dashboard" />
                    </q-item-section>
                    <q-item-section>
                        <q-item-label>Dashboard</q-item-label>
                    </q-item-section>
                </q-item>
                </Link>

                <Link :href="route('admin.application')">
                <q-item clickable v-ripple>
                    <q-item-section avatar>
                        <q-icon name="description" />
                    </q-item-section>
                    <q-item-section>
                        <q-item-label>Form</q-item-label>
                    </q-item-section>
                </q-item>
                </Link>

                <Link :href="route('admin.bill')">
                <q-item clickable v-ripple>
                    <q-item-section avatar>
                        <q-icon name="receipt" />
                    </q-item-section>
                    <q-item-section>
                        <q-item-label>Bill Pek Tur</q-item-label>
                    </q-item-section>
                </q-item>
                </Link>

                <!-- <q-item clickable v-ripple :to="route('report')">
                    <q-item-section avatar>
                        <q-icon name="assessment" />
                    </q-item-section>
                    <q-item-section>
                        <q-item-label>Report</q-item-label>
                    </q-item-section>
                </q-item> -->

                <!-- Setting Section -->
                <q-item-label header class="text-weight-bold">Setting</q-item-label>
                <q-item>
                    <q-item-section>
                        <q-btn-dropdown flat label="Post Information" class="full-width">
                            <q-list>
                                <q-item clickable v-close-popup :to="route('profile.edit')">
                                    <q-item-section>Profile</q-item-section>
                                </q-item>
                                <Link :href="route('note.index')">
                                <q-item clickable v-close-popup>
                                    <q-item-section>Note</q-item-section>
                                </q-item>
                                </Link>
                            </q-list>
                        </q-btn-dropdown>
                    </q-item-section>
                </q-item>
                <Link :href="route('user.index')">
                <q-item clickable v-ripple>
                    <q-item-section avatar>
                        <q-icon name="people" />
                    </q-item-section>
                    <q-item-section>
                        <q-item-label>User</q-item-label>
                    </q-item-section>
                </q-item>
                </Link>


                <!-- <q-item clickable v-ripple :to="route('settings')">
                    <q-item-section avatar>
                        <q-icon name="settings" />
                    </q-item-section>
                    <q-item-section>
                        <q-item-label>Setting</q-item-label>
                    </q-item-section>
                </q-item> -->
            </q-list>
        </q-drawer>

        <!-- Drawer for Non-Admin (Verifier) -->
        <q-drawer v-else v-model="leftDrawerOpen" show-if-above bordered class="bg-grey-2">
            <q-list>
                <!-- Logo -->
                <img src="/image/Group%201321315097.png" class="q-mx-auto q-my-md"
                    style="width: 140.7px; height: 45px;" />

                <!-- Verifier Links -->
                <q-item-label header class="text-weight-bold">Verifier Links</q-item-label>
                <q-item clickable v-ripple :to="route('verifier.dashboard')">
                    <q-item-section avatar>
                        <q-icon name="dashboard" />
                    </q-item-section>
                    <q-item-section>
                        <q-item-label>Dashboard</q-item-label>
                    </q-item-section>
                </q-item>

                <Link :href="route('verifier.application')">
                <q-item clickable v-ripple>
                    <q-item-section avatar>
                        <q-icon name="description" />
                    </q-item-section>
                    <q-item-section>
                        <q-item-label>Applications</q-item-label>
                    </q-item-section>
                </q-item>
                </Link>

                <!-- <q-item clickable v-ripple :to="route('verifier.verified-list')">
                    <q-item-section avatar>
                        <q-icon name="task" />
                    </q-item-section>
                    <q-item-section>
                        <q-item-label>Verified List</q-item-label>
                    </q-item-section>
                </q-item> -->

                <!-- <q-item clickable v-ripple :to="route('verifier.settings')">
                    <q-item-section avatar>
                        <q-icon name="settings" />
                    </q-item-section>
                    <q-item-section>
                        <q-item-label>Settings</q-item-label>
                    </q-item-section>
                </q-item> -->
            </q-list>
        </q-drawer>

        <!-- Page Content -->
        <q-page-container>
            <slot />
        </q-page-container>
    </q-layout>
</template>

<script setup>
import { ref } from "vue";
import { Link } from '@inertiajs/vue3';
const leftDrawerOpen = ref(false);
</script>