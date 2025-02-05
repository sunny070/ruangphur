<template>
    <q-layout view="lHh Lpr lFf">
      <q-header elevated class="bg-[#E9F4FF] text-black">
        <q-toolbar>
          <q-toolbar-title class="q-ml-md">
            <img
              src="/image/Group 1321315097.png"
              style="width: 194px; height: 72px"
              alt="Logo"
            />
          </q-toolbar-title>
  
          <q-tabs
            v-if="$q.screen.gt.sm"
            active-color="primary"
            indicator-color="transparent"
            class="text-black"
          >
            <q-route-tab
              v-for="nav in navigation"
              :key="nav.name"
              :to="nav.route"
              :label="nav.label"
              exact
            />
          </q-tabs>
  
          <!-- <div class="q-ml-auto q-pr-md">
            <q-btn
              v-if="$page.props.auth.user"
              :to="route('dashboard')"
              flat
              label="Dashboard"
            />
            <template v-else>
              <q-btn
                v-if="canRegister"
                :to="route('register')"
                flat
                label="Register"
              />
              <q-btn :to="route('login')" flat label="Login" />
            </template>
          </div> -->
  
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
  
      <q-drawer v-model="rightDrawerOpen" side="right" bordered>
        <q-list>
          <q-item-label header>Navigation</q-item-label>
          <q-item
            v-for="nav in navigation"
            :key="nav.name"
            clickable
            :to="nav.route"
            exact
          >
            <q-item-section>{{ nav.label }}</q-item-section>
          </q-item>
        </q-list>
      </q-drawer>
  
      <q-page-container>
        <slot />
      </q-page-container>
  
      <q-footer class="bg-white text-black q-pa-lg">
        <div class="column items-center q-gutter-y-md">
          <img src="/image/Group.png" style="width: 95px; height: 52px" alt="Logo">
          <div class="text-caption text-center text-grey-8" style="max-width: 403px">
            An initiative of Department of Social Welfare & Tribal Affairs, 
            Government of Mizoram
          </div>
          
          <div class="row q-gutter-x-lg">
            <q-btn flat label="About Us" />
            <q-btn flat label="Contact Us" />
            <q-btn flat :to="route('login')" label="Login for Officials" />
          </div>
          
          <div class="text-caption text-grey-8">
            Crafted with care by Mizoram State e-Governance Society (MSeGS)
          </div>
        </div>
      </q-footer>
    </q-layout>
  </template>
  
  <script setup>
  import { ref } from 'vue';
  import { Head, Link } from '@inertiajs/vue3';
  
  const rightDrawerOpen = ref(false);
  const navigation = [
    { label: 'Home', route: route('home') },
    { label: 'Dilna Form', route: route('form.step1') },
    { label: 'Bill Chuina', route: route('track') },
    { label: 'FAQs', route: route('application.faqs') },
    { label: 'Downloads', route: route('application.download') },
  ];
  
  defineProps({
    canLogin: Boolean,
    canRegister: Boolean,
  });
  
  const toggleRightDrawer = () => {
    rightDrawerOpen.value = !rightDrawerOpen.value;
  };
  </script>