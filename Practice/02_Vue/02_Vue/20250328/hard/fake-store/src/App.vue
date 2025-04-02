<template>
  <div class="container">
    <Header></Header>
    <NavBar></NavBar>
    <router-view class="mt-5 ms-3"></router-view>
    <Footer></Footer>
  </div>
</template>

<script setup>
import Header from './components/layouts/Header.vue';
import NavBar from './components/layouts/NavBar.vue';
import Footer from './components/layouts/Footer.vue';
</script>
