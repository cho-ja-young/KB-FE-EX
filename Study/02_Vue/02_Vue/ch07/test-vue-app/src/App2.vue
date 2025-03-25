<template>
  <div>
    <h2>관심있는 K-POP 가수 ?</h2>
    <hr />
    <ul>
      <CheckboxItem
        v-for="idol in idols"
        :key="idol.id"
        :name="idol.name"
        :checked="idol.checked"
      ></CheckboxItem>
    </ul>
  </div>
</template>

<script>
import CheckboxItem from './components/CheckboxItem2.vue';

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
