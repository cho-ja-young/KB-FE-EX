<template>
  <div>
    X : <input type="text" v-model.number="x" /><br />
    Y : <input type="text" v-model.number="y" /><br />
    <button @click="calcAdd(x, y)">계산</button>
    <p>결과 : {{ result }}</p>
  </div>
</template>

<script>
import { ref } from 'vue';

export default {
  name: 'Calc2', // 컴포넌트의 이름 지정
  setup() {
    const x = ref(10);
    const y = ref(20);
    const result = ref(30);

    const calcAdd = () => {
      result.value = x.value + y.value;
    };

    return { x, y, result, calcAdd };
  },
};
</script>
