<template>
  <Calc1></Calc1>
  <hr />
  <Calc1_2></Calc1_2>
  <hr />
  <h2>20250327 basic 실습 Calc</h2>
  <Calc></Calc>
  <hr />
  <h2>20250327 basic 실습 Calc2</h2>
  <Calc2></Calc2>
  <hr />
  <h2>20250327 basic 실습 Calc3</h2>
  <Calc3></Calc3>
  <hr />
  <h2>20250327 basic 실습 Calc4</h2>
  <Calc4></Calc4>
  <hr />
  <h2>20250327 basic 실습 Calc5</h2>
  <Calc5></Calc5>
</template>

<script>
import Calc1 from './components/Calc1.vue';
import Calc1_2 from './components/Calc1_2.vue';
import Calc from './components/Calc.vue';
import Calc2 from './components/Calc2.vue';
import Calc3 from './components/Calc3.vue';
import Calc4 from './components/Calc4.vue';
import Calc5 from './components/Calc5.vue';

export default {
  name: 'App',
  components: { Calc1, Calc1_2, Calc, Calc2, Calc3, Calc4, Calc5 },
};
</script>
