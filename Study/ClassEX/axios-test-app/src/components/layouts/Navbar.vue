<!-- Navbar 컴포넌트 -->
<template>
  <!-- <h1>Navbar</h1> -->
  <nav class="navbar navbar-expand bg-body-tertiary">
    <div class="container-fluid">
      <div class="collapse navbar-collapse">
        <ul class="navbar-nav">
          <!-- 부모가 자식한테 menu 라는 이름으로 전달 -->
          <NavItem v-for="menu in menus" :menu="menu"></NavItem>
        </ul>
      </div>
    </div>
  </nav>
</template>

<script setup>
import NavItem from './NavItem.vue';

// NavItem 에 전달할 주소/text 객체 배열
const menus = [
  { uri: '/', text: 'Home' },
  { uri: '/all', text: 'All' },
  { uri: '/get/1', text: 'Get' },
  { uri: '/post', text: 'Post' },
];
</script>
