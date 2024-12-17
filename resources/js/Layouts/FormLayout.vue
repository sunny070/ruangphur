<script setup>
import { Link } from "@inertiajs/vue3";
</script>

<template>
    <q-layout>
        <q-header class="bg-[#E9F4FF] text-white h-28 flex flex-col">
            <Link href="/"
                ><svg
                    xmlns="http://www.w3.org/2000/svg"
                    width="24"
                    height="24"
                    viewBox="0 0 24 24"
                    fill="none"
                >
                    <g clip-path="url(#clip0_75_1185)">
                        <path
                            d="M19 11H7.82998L12.71 6.12C13.1 5.73 13.1 5.09 12.71 4.7C12.32 4.31 11.69 4.31 11.3 4.7L4.70998 11.29C4.31998 11.68 4.31998 12.31 4.70998 12.7L11.3 19.29C11.69 19.68 12.32 19.68 12.71 19.29C13.1 18.9 13.1 18.27 12.71 17.88L7.82998 13H19C19.55 13 20 12.55 20 12C20 11.45 19.55 11 19 11Z"
                            fill="#323232"
                        />
                    </g>
                    <defs>
                        <clipPath id="clip0_75_1185">
                            <rect width="24" height="24" fill="white" />
                        </clipPath>
                    </defs>
                </svg>
            </Link>
            <h5 class="text-black">Ruang Phurh Report Form</h5>
        </q-header>
        <q-page-container>
            <div class="q-pa-md">
                <slot />
            </div>
        </q-page-container>
    </q-layout>
</template>
