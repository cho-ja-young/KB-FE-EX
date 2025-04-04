<script setup>
import { useCounterStore } from '@/stores/counter.js';

const store = useCounterStore();
const { count, increment } = store;
// const count = store.count;

increment();

console.log(store);
</script>

<template>
  {{ store.count }}/{{ store.doubleCount }} <br />
  {{ count }}
</template>
