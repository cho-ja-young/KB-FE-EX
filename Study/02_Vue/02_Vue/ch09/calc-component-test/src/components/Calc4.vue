<template>
  <div>
    X : <input type="text" v-model.number="state.x" /><br />
    Y : <input type="text" v-model.number="state.y" /><br />
    <p>결과 : {{ result }}</p>
  </div>
</template>

<script>
import { reactive, computed } from 'vue';

export default {
  name: 'Calc4', // 컴포넌트의 이름 지정
  setup() {
    const state = reactive({ x: 10, y: 20 });

    const result = computed(() => {
      return state.x + state.y;
    });

    return { state, result };
  },
};
</script>
