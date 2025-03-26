<template>
  <div>
    <h1>자식 클릭 Count : {{ cnt }}</h1>
    <!-- App.vue 에서 가져온 Count -->
    <!-- <button @click="increment">클릭 시 1 증가</button> -->
  </div>
  <ChildClickCount></ChildClickCount>
</template>

<script>
import ChildClickCount from './ChildClickCount.vue';

export default {
  name: 'ClickCount',
  components: { ChildClickCount },

  // provide 로 제공된 정보 삽입하기
  //   inject: ['cnt', 'increment'],
  inject: ['cnt'],
};
</script>
