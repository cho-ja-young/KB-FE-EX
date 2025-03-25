<template>
  <div>
    <h2>App 컴포넌트</h2>
    <hr />
    <ul>
      <CheckboxItem></CheckboxItem>
      <CheckboxItem></CheckboxItem>
      <CheckboxItem></CheckboxItem>
      <CheckboxItem></CheckboxItem>
    </ul>
  </div>
</template>

<script>
import CheckboxItem from './components/CheckboxItem.vue';

export default {
  name: 'App',
  components: { CheckboxItem },
  data() {
    return {
      idols: [
        { id: 1, name: 'NCT', checked: true },
        { id: 2, name: 'aespa', checked: true },
        { id: 3, name: 'KISS OF LIFE', checked: true },
        { id: 4, name: 'BTS', checked: true },
      ],
    };
  },
};
</script>
