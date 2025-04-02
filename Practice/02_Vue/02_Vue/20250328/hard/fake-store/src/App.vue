<template>
  <DefaultLayout>
    <template v-slot:header><Header></Header></template>
    <template v-slot:navbar><NavBar></NavBar></template>
    <template v-slot:default
      ><router-view class="mt-5 ms-3"></router-view
    ></template>
    <template v-slot:footer><Footer></Footer></template>
  </DefaultLayout>
</template>

<script setup>
import { RouterView } from 'vue-router';
import DefaultLayout from './components/layouts/DefaultLayout.vue';

import Header from './components/layouts/Header.vue';
import NavBar from './components/layouts/NavBar.vue';
import Footer from './components/layouts/Footer.vue';
</script>
