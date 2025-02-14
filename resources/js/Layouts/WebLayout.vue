<template>
    <q-layout view="lHh Lpr lFf">
        <q-header reveal class="text-black">
            <q-toolbar>
                <q-toolbar-title class="q-ml-md">
                    <Link :href="route('home')">
                        <img src="/image/Group 1321315097.png" style="width: 194px; height: 72px" alt="Logo" />
                    </Link>
                </q-toolbar-title>

                <q-tabs v-if="$q.screen.gt.sm" active-color="black" indicator-color="black" class="text-black">
                    <Link v-for="nav in navigation" :key="nav.name" :href="nav.route" method="get"
                        class="no-decoration">
                    <q-tab :name="nav.name">
                        {{ nav.label }}
                    </q-tab>
                    </Link>
                </q-tabs>

                <q-btn v-if="$q.screen.lt.md" flat dense round icon="menu" @click="toggleRightDrawer" />
            </q-toolbar>
        </q-header>



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

        <q-page-container>
            <slot />
        </q-page-container>

        <!-- <q-footer class="bg-white text-black q-pa-lg"  reveal height-hint="50"> -->
            <div class="column items-center q-gutter-y-md">
                <img src="/image/Group.png" style="width: 95px; height: 52px" alt="Logo" />
                <div class="text-caption text-center text-grey-8" style="max-width: 403px">
                    An initiative of Department of Social Welfare & Tribal
                    Affairs, Government of Mizoram
                </div>

                <div class="row q-gutter-x-lg">
                    <q-btn flat label="About Us" />
                    <q-btn flat label="Contact Us" />
                    <q-btn flat label="Terms & Conditions" />
                    <q-btn flat :href="route('login')" label="Login for Officials" />
                </div>

                <div class="text-caption text-grey-8">
                    Crafted with care by Mizoram State e-Governance Society
                    (MSeGS)
                </div>
            </div>
        <!-- </q-footer> -->
    </q-layout>
</template>

<script setup>
import { ref } from "vue";
import { Link } from "@inertiajs/vue3";
import { router } from "@inertiajs/vue3";

const navigate = (route) => {
    router.get(route, {}, { preserveState: true, preserveScroll: true });
};
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
<style>
.fixed-header {
    position: fixed;
    top: 0;
    width: 100%;
    z-index: 1000;
}
</style>