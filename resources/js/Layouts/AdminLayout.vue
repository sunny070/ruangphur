<template>
    <q-layout view="lHh Lpr lFf" class="bg-white">
        <!-- Header with Hamburger -->
        <q-header elevated class="bg-white text-white">
            <q-toolbar>
                <!-- Hamburger Menu (Mobile Only) -->
                <q-btn
                    flat
                    dense
                    round
                    text-color="black"
                    icon="menu"
                    aria-label="Menu"
                    @click="leftDrawerOpen = !leftDrawerOpen"
                    class="lt-md"
                />

                <!-- Spacer -->
                <q-toolbar-title></q-toolbar-title>

                <!-- User Dropdown -->
                <div class="flex justify-center items-center gap-2">
                    <p class="text-black font-bold m-0">
                        Welcome! {{ $page.props.auth.user.name }}
                    </p>
                    <q-btn-dropdown
                        flat
                        icon="account_box"
                        class="bg-white text-black q-pa-sm"
                        dense
                    >
                        <q-list>
                            <Link :href="route('profile.edit')">

                                <q-item clickable v-close-popup>
                                    
                                    <q-item-section avatar>
                                            <q-icon name="manage_accounts" />
                                        </q-item-section>
                                    <q-item-section>Profile</q-item-section>
                                </q-item>
                            </Link>
                            <Link :href="route('logout')" method="post">
                                <q-item clickable v-close-popup>
                                    <q-item-section avatar>
                                            <q-icon name="logout" />
                                        </q-item-section>
                                    <q-item-section>Log Out</q-item-section>
                                </q-item>
                            </Link>
                        </q-list>
                    </q-btn-dropdown>
                </div>
            </q-toolbar>
        </q-header>

        <!-- Drawer for Admin -->
        <q-drawer
            v-if="
                $page.props.auth.user.roles.some(
                    (role) => role.name === 'admin'
                )
            "
            v-model="leftDrawerOpen"
            show-if-above
            bordered
            class="bg-grey-2"
        >
            <q-list>
                <!-- Logo -->
                <img
                    src="/image/Group%201321315097.png"
                    class="q-mx-auto q-my-md"
                    style="width: 140.7px; height: 45px"
                />

                <!-- Menu Section -->
                <q-item-label header class="text-weight-bold"
                    >Menu</q-item-label
                >
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

                <hr class="border-border bg-[#F0F0F0]" />
                <q-item-label header class="text-weight-bold"
                    >Form</q-item-label
                >

                <Link :href="route('admin.application')">
                    <q-item clickable v-ripple>
                        <q-item-section avatar>
                            <q-icon name="note" />
                        </q-item-section>
                        <q-item-section>
                            <q-item-label>Incoming</q-item-label>
                        </q-item-section>
                    </q-item>
                </Link>
                <Link :href="route('admin.application.verified')">
                    <q-item clickable v-ripple>
                        <q-item-section avatar>
                            <q-icon name="note" />
                        </q-item-section>
                        <q-item-section>
                            <q-item-label>Verified</q-item-label>
                        </q-item-section>
                    </q-item>
                </Link>
                <Link :href="route('admin.application.rejected')">
                    <q-item clickable v-ripple>
                        <q-item-section avatar>
                            <q-icon name="note" />
                        </q-item-section>
                        <q-item-section>
                            <q-item-label>Rejected</q-item-label>
                        </q-item-section>
                    </q-item>
                </Link>

                <hr class="border-border bg-[#F0F0F0]" />

                <q-item-label header class="text-weight-bold"
                    >Bill</q-item-label
                >
                <Link :href="route('admin.bill')">
                    <q-item clickable v-ripple>
                        <q-item-section avatar>
                            <q-icon name="note" />
                        </q-item-section>
                        <q-item-section>
                            <q-item-label>Bill Pek Tur</q-item-label>
                        </q-item-section>
                    </q-item>
                </Link>
                <Link :href="route('admin.bill.process')">
                    <q-item clickable v-ripple>
                        <q-item-section avatar>
                            <q-icon name="note" />
                        </q-item-section>
                        <q-item-section>
                            <q-item-label>Process To Bank</q-item-label>
                        </q-item-section>
                    </q-item>
                </Link>

                <hr class="border-border bg-[#F0F0F0]" />
                <q-item-label header class="text-weight-bold"
                    >Report</q-item-label
                >

                <Link :href="route('admin.report')">
                    <q-item clickable v-ripple>
                        <q-item-section avatar>
                            <q-icon name="report" />
                        </q-item-section>
                        <q-item-section>
                            <q-item-label>Generate Report</q-item-label>
                        </q-item-section>
                    </q-item>
                </Link>

                <hr class="border-border bg-[#F0F0F0]" />
                <q-item-label header class="text-weight-bold"
                    >Setting</q-item-label
                >
                <q-list bordered class="rounded-borders">
                    <q-expansion-item
                        expand-icon="info"
                        expand-icon-side="left"
                        label="Post Information"
                        header-class="text-weight-bold"
                    >
                        <q-list>
                            <Link :href="route('admin.info.index')">
                                <q-item clickable>
                                    <q-item-section avatar>
                                        <q-icon name="import_contacts" />
                                    </q-item-section>
                                    <q-item-section>Information</q-item-section>
                                </q-item>
                            </Link>
                            <Link :href="route('note.index')">
                                <q-item clickable>
                                    <q-item-section avatar>
                                        <q-icon name="note" />
                                    </q-item-section>
                                    <q-item-section>Note</q-item-section>
                                </q-item>
                            </Link>
                        </q-list>
                    </q-expansion-item>
                </q-list>

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
        <q-drawer
            v-else
            v-model="leftDrawerOpen"
            show-if-above
            bordered
            class="bg-grey-2"
        >
            <q-list>
                <!-- Logo -->
                <img
                    src="/image/Group%201321315097.png"
                    class="q-mx-auto q-my-md"
                    style="width: 140.7px; height: 45px"
                />

                <!-- Verifier Links -->
                <q-item-label header class="text-weight-bold"
                    >Menu</q-item-label
                >
                <Link :href="route('verifier.dashboard')">
                    <q-item clickable v-ripple>
                        <q-item-section avatar>
                            <q-icon name="dashboard" />
                        </q-item-section>
                        <q-item-section>
                            <q-item-label>Dashboard</q-item-label>
                        </q-item-section>
                    </q-item>
                </Link>

                <hr class="border-border bg-[#F0F0F0]" />
                <q-item-label header class="text-weight-bold"
                    >Form</q-item-label
                >
                <Link :href="route('verifier.application')">
                    <q-item clickable v-ripple>
                        <q-item-section avatar>
                            <q-icon name="note" />
                        </q-item-section>
                        <q-item-section>
                            <q-item-label>Incoming</q-item-label>
                        </q-item-section>
                    </q-item>
                </Link>
                <Link :href="route('verifier.verified')">
                    <q-item clickable v-ripple>
                        <q-item-section avatar>
                            <q-icon name="note" />
                        </q-item-section>
                        <q-item-section>
                            <q-item-label>Verified</q-item-label>
                        </q-item-section>
                    </q-item>
                </Link>

                <Link :href="route('verifier.rejected')">
                    <q-item clickable v-ripple>
                        <q-item-section avatar>
                            <q-icon name="note" />
                        </q-item-section>
                        <q-item-section>
                            <q-item-label>Rejected</q-item-label>
                        </q-item-section>
                    </q-item>
                </Link>
                
                <hr class="border-border bg-[#F0F0F0]" />
                <q-item-label header class="text-weight-bold"
                    >Report</q-item-label
                >
                <Link :href="route('verifier.report')">
                    <q-item clickable v-ripple>
                        <q-item-section avatar>
                            <q-icon name="receipt" />
                        </q-item-section>
                        <q-item-section>
                            <q-item-label>Report</q-item-label>
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
import { computed, onMounted, ref } from "vue";
import { Link } from "@inertiajs/vue3";
import { router } from "@inertiajs/vue3";

const navigateTo = () => {
    router.visit(route("verifier.application"));
};

const leftDrawerOpen = ref(false);

// Reactive variable to track last checked timestamp
const lastCheckedTimestamp = ref(null);

// Fetch the last checked timestamp from local storage
onMounted(() => {
    lastCheckedTimestamp.value =
        localStorage.getItem("lastCheckedTimestamp") || null;
});

// Computed property to check for new applications

// Function to update the last checked timestamp
const markAsChecked = () => {
    const now = new Date().toISOString();
    localStorage.setItem("lastCheckedTimestamp", now);
    lastCheckedTimestamp.value = now;
};
</script>

<style>
.notification-dot {
    position: absolute;
    top: 8px;
    right: 8px;
    width: 8px;
    height: 8px;
    background-color: #fd7900;
    border-radius: 50%;
}
</style>
