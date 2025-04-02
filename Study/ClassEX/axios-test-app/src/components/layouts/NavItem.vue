<!-- NavItem 컴포넌트 -->
<template>
  <!-- <h1>Nav Item</h1> -->
  <li class="nav-item">
    <!-- <a href="#" class="nav-link">All</a> -->
    <!-- 부모에서 자식으로 데이터를 전달할 것이다 : props 이용 -->
    <RouterLink :to="menu.uri" class="nav-link">{{ menu.text }}</RouterLink>
  </li>
</template>

<script setup>
const props = defineProps({
  menu: {
    type: Object,
    required: true,
  },
});
</script>
