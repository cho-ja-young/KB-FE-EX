<template>
  <div>
    X : <input type="text" v-model.number="x" /><br />
    <p>결과 : {{ result }}</p>
  </div>
</template>

<script>
import { ref, watch } from 'vue';

export default {
  name: 'Calc5', // 컴포넌트의 이름 지정
  setup() {
    const x = ref(0);
    const result = ref(0);

    watch(x, (current, old) => {
      console.log(`${old} -> ${current}`);
      result.value = current * 2;
    });

    return { x, result };
  },
};
</script>
