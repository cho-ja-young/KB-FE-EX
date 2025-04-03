<template>
  <h2>안녕</h2>
  <DefaultLayout>
    <!-- Header slot 에 Header 컴포넌트 끼워넣기 -->
    <template v-slot:header><Header></Header></template>

    <!-- Navbar slot 에 Navbar 컴포넌트 끼워넣기 -->
    <template v-slot:navbar><NavBar></NavBar></template>

    <!-- <slot>에 라우트된 페이지 끼워넣기 -->
    <template v-slot:default
      ><RouterView class="mt-5 ms-3"></RouterView
    ></template>

    <!-- Footer slot 에 Footer 컴포넌트 끼워넣기 -->
    <template v-slot:footer><Footer></Footer></template>
  </DefaultLayout>
  <h2>잘가</h2>
</template>

<script setup>
import { RouterView } from 'vue-router';
import DefaultLayout from './components/layouts/DefaultLayout.vue';

import Header from './components/layouts/Header.vue';
import NavBar from './components/layouts/NavBar.vue';
import Footer from './components/layouts/Footer.vue';
</script>
