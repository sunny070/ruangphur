<template>
    <q-layout view="lHh Lpr lFf">
        <q-header reveal class="text-black pl-72">
            <q-toolbar>
                <!-- Logo with responsive margin -->
                <q-toolbar-title class="q-ml-lg q-ml-xl-md">
                    <Link :href="route('home')">
                        <img
                            src="/image/Group 1321315097.png"
                            style="width: 194px; height: 72px"
                            alt="Logo"
                        />
                    </Link>
                </q-toolbar-title>

                <!-- Navigation Tabs with responsive margin -->
                <q-tabs
                    v-if="$q.screen.gt.sm"
                    active-color="black"
                    indicator-color="black"
                    class="text-black q-mr-lg q-mr-xl-md pr-72"
                >
                    <Link
                        v-for="nav in navigation"
                        :key="nav.name"
                        :href="nav.route"
                        method="get"
                        class="no-decoration"
                    >
                        <q-tab :name="nav.name">
                            {{ nav.label }}
                        </q-tab>
                    </Link>
                </q-tabs>

                <!-- Mobile Menu Button -->
                <q-btn
                    v-if="$q.screen.lt.md"
                    flat
                    dense
                    round
                    icon="menu"
                    @click="toggleRightDrawer"
                />
            </q-toolbar>
        </q-header>

        <!-- Drawer for Mobile Navigation -->
        <q-drawer v-model="rightDrawerOpen" side="right" bordered>
            <q-list>
                <q-item-label header>Navigation</q-item-label>
                <q-item v-for="nav in navigation" :key="nav.name" clickable>
                    <Link :href="nav.route">
                        <q-item-section>{{ nav.label }}</q-item-section>
                    </Link>
                </q-item>
            </q-list>
        </q-drawer>

        <!-- Main Content -->
        <q-page-container>
            <slot />
        </q-page-container>

        <!-- Footer -->
        <div class="column items-center q-gutter-y-md q-pa-md">
            <div class="flex justify-center items-center gap-6">
                <img
                    src="/image/Group.png"
                    style="width: 95px; height: 52px"
                    alt="Logo"
                />
                
            </div>
            <div class="text-caption text-center text-grey-8" style="max-width: 403px">
                An initiative of Department of Social Welfare & Tribal Affairs,
                Government of Mizoram
            </div>
            <div class="row q-gutter-x-lg">
                <q-btn flat label="About Us" />
                <q-btn flat label="Contact Us" />
                <q-btn flat label="Terms & Conditions" />
                <q-btn flat :href="route('login')" label="Login for Officials" />
            </div>
            <div class="text-caption text-grey-8 flex flex-col justify-center items-center">
                Crafted with care by Mizoram State e-Governance Society (MSeGS)
            </div>
        </div>
    </q-layout>
</template>

<script setup>
import { ref } from "vue";
import { Link } from "@inertiajs/vue3";
import { router } from "@inertiajs/vue3";

const rightDrawerOpen = ref(false);
const navigation = [
    { label: "Home", route: route("home") },
    { label: "Dilna Form", route: route("form.step1") },
    { label: "Bill Chuina", route: route("track") },
    { label: "FAQs", route: route("application.faqs") },
    { label: "Downloads", route: route("application.download") },
];

const toggleRightDrawer = () => {
    rightDrawerOpen.value = !rightDrawerOpen.value;
};
</script>

<style scoped>
/* Custom padding for specific elements */
.custom-padding {
    padding: 40px;
}

.custom-padding-inner {
    padding: 30px;
}

/* Responsive adjustments for smaller screens */
@media (max-width: 600px) {
    .q-toolbar-title {
        margin-left: 0 !important;
    }

    .q-tabs {
        margin-right: 0 !important;
    }

    .pl-72, .pr-72 {
        padding-left: 16px !important;
        padding-right: 16px !important;
    }
}

/* Default padding for larger screens */
.pl-72, .pr-72 {
    padding-left: 72px;
    padding-right: 72px;
}

/* Adjust padding for medium screens */
@media (max-width: 1024px) {
    .pl-72, .pr-72 {
        padding-left: 48px;
        padding-right: 48px;
    }
}

/* Adjust padding for small screens */
@media (max-width: 768px) {
    .pl-72, .pr-72 {
        padding-left: 24px;
        padding-right: 24px;
    }
}

/* Adjust padding for extra small screens */
@media (max-width: 480px) {
    .pl-72, .pr-72 {
        padding-left: 16px;
        padding-right: 16px;
    }
}
</style>