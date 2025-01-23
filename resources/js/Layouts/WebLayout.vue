<template>
    <q-layout>
        <q-container>
            <header
                class="bg-[#E9F4FF] grid grid-cols-2 items-center gap-2 py-10 lg:grid-cols-3"
            >
                <div class="md:pl-[223px] md:pr-[55px]">
                    <img
                        id="background"
                        class="w-[194px] h-[72px]"
                        src="/image/Group 1321315097.png"
                    />
                    <!-- <img
                            id="background"
                            class=""
                            src="image/Group 1321315089.png"
                        /> -->
                </div>
                <nav class="flex flex-1 justify-end">
                    <q-tabs class="text-black">
                        <Link :href="route('home')"
                            ><q-tab
                                name="Home"
                                label="Home"
                                :to="{ name: 'home' }"
                        /></Link>
                        <Link :href="route('form.step1')"
                            ><q-tab
                                name="Dilna Form"
                                label="Dilna Form"
                                :to="{ name: 'form.step1' }"
                        /></Link>

                        <Link :href="route('track')"
                            ><q-tab
                                name="Bill Chuina"
                                label="Bill Chuina"
                                :to="{ name: 'track' }"
                            />
                        </Link>
                        <Link :href="route('application.faqs')"
                            ><q-tab
                                name="fAQs"
                                label="fAQs"
                                :to="{ name: 'application.faqs' }"
                            />
                        </Link>
                        <Link :href="route('application.download')"
                            ><q-tab
                                name="Downloads"
                                label="Downloads"
                                :to="{ name: 'application.download' }"
                            />
                        </Link>

                        
                    </q-tabs>
                </nav>

                <nav v-if="canLogin" class="flex flex-1 justify-end">
                    <Link
                        v-if="$page.props.auth.user"
                        :href="route('dashboard')"
                        class="rounded-md px-3 py-2 text-black ring-1 ring-transparent transition hover:text-black/70 focus:outline-none focus-visible:ring-[#FF2D20] dark:text-white dark:hover:text-white/80 dark:focus-visible:ring-white"
                    >
                        Dashboard
                    </Link>

                    <template v-else>
                        <!-- <Link
                            :href="route('login')"
                            class="rounded-md px-3 py-2 text-black ring-1 ring-transparent transition hover:text-black/70 focus:outline-none focus-visible:ring-[#FF2D20] dark:text-white dark:hover:text-white/80 dark:focus-visible:ring-white"
                        >
                            Log in
                        </Link> -->

                        <!-- <Link
                            v-if="canRegister"
                            :href="route('register')"
                            class="rounded-md px-3 py-2 text-black ring-1 ring-transparent transition hover:text-black/70 focus:outline-none focus-visible:ring-[#FF2D20] dark:text-white dark:hover:text-white/80 dark:focus-visible:ring-white"
                        >
                            Register
                        </Link> -->

                        <!-- <Link :href="route('form.step1')">Home</Link>
                            <Link :href="route('form.step1')">Dilna Form</Link>
                            <Link :href="route('form.step1')">Bill Chhuina</Link>
                            <Link :href="route('form.step1')">FAQs</Link>
                            <Link :href="route('form.step1')">Download</Link> -->
                    </template>
                </nav>
            </header>

            <!-- <div class=" ">
                <q-slot />
            </div> -->
            <q-page-container>
                <slot />
            </q-page-container>
            <footer
                class="py-16 text-center text-sm text-black dark:text-white/70"
            >
                <div class="flex justify-center items-center flex-col">
                    <img id="background" class="w-[95px] h-[52px]" src="image/Group.png" />
                    <p
                        class="text-[#5B656F] text-center font-[Noto Sans] text-[12px] font-medium leading-[18px] w-[403px] h-[36px]"
                    >
                        An initiative of Department of Social Welfare & Tribal
                        Affairs, Government of Mizoram
                    </p>
                </div>
                <div
                    class="flex justify-center items-center gap-16 text-[12px] text-[#5B656F]"
                >
                    <Link>About Us</Link>
                    <Link>Contact Us</Link>
                    <Link  :href="route('login')">Login for Officials</Link>
                </div>
                <p class="text-[12px] text-[#5B656F]">
                    Crafted with care by Mizoram State e-Governance Society
                    (MSeGS)
                </p>
            </footer>
        </q-container>
    </q-layout>
</template>

<script setup>
import { Head, Link } from "@inertiajs/vue3";

defineProps({
    canLogin: {
        type: Boolean,
    },
    canRegister: {
        type: Boolean,
    },
    laravelVersion: {
        type: String,
        required: true,
    },
    phpVersion: {
        type: String,
        required: true,
    },
});

function handleImageError() {
    document.getElementById("screenshot-container")?.classList.add("!hidden");
    document.getElementById("docs-card")?.classList.add("!row-span-1");
    document.getElementById("docs-card-content")?.classList.add("!flex-row");
    document.getElementById("background")?.classList.add("!hidden");
}
</script>

<style scoped></style>
