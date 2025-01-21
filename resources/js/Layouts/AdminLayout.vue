<template>
    <q-layout view="lHh Lpr lFf" class="bg-white">
        <q-header elevated> </q-header>

        <q-drawer
            v-model="leftDrawerOpen"
            show-if-above
            bordered
            class="bg-white-2"
        >
            <q-list>
                <img
                    id="background"
                    class="w-[140.7px] h-[45px]"
                    src="/image/Group%201321315097.png"
                />

                <q-item-label header>Essential Links</q-item-label>
                <q-item clickable rel="noopener" href="/dashboard">
                    <q-item-section avatar>
                        <q-icon name="school" />
                    </q-item-section>
                    <q-item-section>
                        <q-item-label>Dashboard</q-item-label>
                        <!-- <q-item-label caption>https://quasar.dev</q-item-label> -->
                    </q-item-section>
                </q-item>
                <q-item clickable rel="noopener" href="/admin/application">
                    <q-item-section avatar>
                        <q-icon name="code" />
                    </q-item-section>
                    <q-item-section>
                        <q-item-label>Form</q-item-label>
                        <!-- <q-item-label caption>github.com/quasarframework</q-item-label> -->
                    </q-item-section>
                </q-item>
                <q-item
                    clickable
                    target="_blank"
                    rel="noopener"
                    href="http://chat.quasar.dev"
                >
                    <q-item-section avatar>
                        <q-icon name="chat" />
                    </q-item-section>
                    <q-item-section>
                        <q-item-label>Discord Chat Channel</q-item-label>
                        <q-item-label caption
                            >https://chat.quasar.dev</q-item-label
                        >
                    </q-item-section>
                </q-item>
                <q-item
                    clickable
                    target="_blank"
                    rel="noopener"
                    href="https://forum.quasar.dev"
                >
                    <q-item-section avatar>
                        <q-icon name="record_voice_over" />
                    </q-item-section>
                    <q-item-section>
                        <q-item-label>Forum</q-item-label>
                        <q-item-label caption
                            >https://forum.quasar.dev</q-item-label
                        >
                    </q-item-section>
                </q-item>
                <q-item
                    clickable
                    target="_blank"
                    rel="noopener"
                    href="https://twitter.quasar.dev"
                >
                    <q-item-section avatar>
                        <q-icon name="rss_feed" />
                    </q-item-section>
                    <q-item-section>
                        <q-item-label>Twitter</q-item-label>
                        <q-item-label caption>@quasarframework</q-item-label>
                    </q-item-section>
                </q-item>
                <q-item
                    clickable
                    target="_blank"
                    rel="noopener"
                    href="https://facebook.quasar.dev"
                >
                    <q-item-section avatar>
                        <q-icon name="public" />
                    </q-item-section>
                    <q-item-section>
                        <q-item-label>Facebook</q-item-label>
                        <q-item-label caption>@QuasarFramework</q-item-label>
                    </q-item-section>
                </q-item>
            </q-list>
        </q-drawer>

        <!-- <q-btn-dropdown color="primary" label="Dropdown Button">
      
      <q-list>
       
        <q-item clickable v-close-popup @click="onItemClick">
          <q-item-section>
            <q-item-label>{{ $page.props.auth.user.name }}</q-item-label>
          </q-item-section>
        </q-item>

       
        <q-item clickable v-close-popup @click="onItemClick">
          <q-item-section>
            <q-item-label>Log Out</q-item-label>
          </q-item-section>
        </q-item>

        
        <q-item clickable v-close-popup @click="onItemClick">
          <q-item-section>
            <q-item-label>Photos</q-item-label>
          </q-item-section>
        </q-item>

        <q-item clickable v-close-popup @click="onItemClick">
          <q-item-section>
            <q-item-label>Videos</q-item-label>
          </q-item-section>
        </q-item>

        <q-item clickable v-close-popup @click="onItemClick">
          <q-item-section>
            <q-item-label>Articles</q-item-label>
          </q-item-section>
        </q-item>
      </q-list>
    </q-btn-dropdown> -->

    <div class="flex justify-end p-4">
        <!-- Dropdown -->
        <Dropdown align="right" width="48">
            <template #trigger>
                <button
                    class="flex items-center bg-gray-800 text-white rounded-lg p-2"
                >
                    <span>{{ $page.props.auth.user.name }}</span>
                    <q-icon name="expand_more" />
                </button>
            </template>

            <template #content>
                <DropdownLink :href="route('profile.edit')">
                    Profile
                </DropdownLink>
                <DropdownLink
                    :href="route('logout')"
                    method="post"
                    as="button"
                >
                    Log Out
                </DropdownLink>
            </template>
        </Dropdown>
    </div>

        <q-page-container>
            <slot />
        </q-page-container>
    </q-layout>
</template>

<script setup>
import { ref } from "vue";
import Dropdown from "@/Components/Dropdown.vue";
import DropdownLink from "@/Components/DropdownLink.vue";

const leftDrawerOpen = ref();
const rightDrawerOpen = ref();

const toggleLeftDrawer = () => {
    leftDrawerOpen.value = !leftDrawerOpen.value;
};

const toggleRightDrawer = () => {
    rightDrawerOpen.value = !rightDrawerOpen.value;
};
</script>
