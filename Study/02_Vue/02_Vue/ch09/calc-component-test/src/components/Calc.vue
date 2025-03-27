<template>
  <div>
    X : <input type="text" v-model.number="x" /><br />
    Y : <input type="text" v-model.number="y" /><br />
  </div>
</template>

<script>
import { ref } from 'vue';

export default {
  name: 'Calc', // 컴포넌트의 이름 지정
  setup() {
    const x = ref(10);
    const y = ref(20);

    return { x, y };
  },
};
</script>
