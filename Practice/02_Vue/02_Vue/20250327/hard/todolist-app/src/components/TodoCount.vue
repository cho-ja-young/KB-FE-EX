<template>
  <div class="row mb-3">
    <div class="col-md text-center">
      전체 todo 개수 : <span>{{ todoList.length }}</span>
    </div>
    <div class="col-md text-center">
      <!-- 완료 todo 개수 : <span :class="completedCount && completed">{{completedCount}}</span> -->
      완료 todo 개수 :
      <span :class="{ completed: completedCount > 0 }">{{
        completedCount
      }}</span>
    </div>
    <div class="col-md text-center">
      미완료 todo 개수 :
      <span :class="{ notCompleted: todoList.length - completedCount > 0 }">{{
        todoList.length - completedCount
      }}</span>
    </div>
  </div>
</template>

<script setup>
import { computed } from 'vue';

// 부모로부터 전달받은 데이터 수신 + 유효성 검사
const props = defineProps({
  // 전달받은 todoList 는 배열 형태, 필수 데이터
  todoList: { type: Array, required: true },
});

// 완료 개수 카운트
const completedCount = computed(() => {
  // todolist의 요소 중 completed 가 true인 요소만 남긴 배열 반환
  return props.todoList.filter((todo) => todo.completed).length;
});
</script>
