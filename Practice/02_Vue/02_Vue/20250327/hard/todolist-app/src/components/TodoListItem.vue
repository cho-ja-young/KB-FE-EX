<template>
  <li
    class="list-group-item"
    :key="todoItem.id"
    :class="{ 'list-group-item-success': todoItem.completed }"
  >
    <input
      type="checkbox"
      class="pointer me-3"
      v-model="todoItem.completed"
      @click="toggleCompletedHandler(todoItem.id)"
    />

    <span class="pointer" :class="{ 'todo-done': todoItem.completed }">
      {{ todoItem.todo }} {{ todoItem.completed ? '(완료)' : '' }}
    </span>

    <span
      class="float-end badge bg-secondary pointer"
      @click.stop="emit('delete-todo', todoItem.id)"
      >삭제</span
    >
  </li>
</template>

<script setup>
// props : 부모로부터 전달받은 데이터 수신 + 유효성 검사
const props = defineProps({
  todoItem: { type: Object, required: true },
});

const toggleCompletedHandler = (id) => {
  emit('toggle-completed', id);
};

// 부모 컴포넌트로 발신되는 이벤트 유효성 검사
// (보통 특정 이벤트가 발신되는게 맞는지 확인하는 용도로 사용)
const emit = defineEmits(['toggle-completed', 'delete-todo']);
</script>
