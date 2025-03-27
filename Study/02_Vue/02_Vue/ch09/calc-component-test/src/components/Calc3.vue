<template>
  <div>
    X : <input type="text" v-model.number="state.x" /><br />
    Y : <input type="text" v-model.number="state.y" /><br />
    <button @click="calcAdd">계산</button>
    <p>결과 : {{ state.result }}</p>
  </div>
</template>

<script>
import { reactive } from 'vue';

export default {
  name: 'Calc3', // 컴포넌트의 이름 지정
  setup() {
    const state = reactive({ x: 10, y: 20, result: 30 });

    const calcAdd = () => {
      state.result = state.x + state.y;
    };

    return { state, calcAdd };
  },
};
</script>
