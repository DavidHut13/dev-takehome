<template>
  <div class="container mx-auto">
    <div class="flex-row justify-center md:flex md:justify-evenly">
      <div class="w-full md:w-1/2 p-2">
        <h1 class="md:font-bold border-b-2 text-xl">Todos</h1>
        <ul>
          <li v-for="todo in sortedTodos" class="shadow-md rounded bg-gray-100 border-gray p-2 my-2">
            <div>
              <div>{{ todo.todo }}</div>
              <div></div>
            </div>
          </li>
        </ul>
      </div>
      <div  class="w-full md:w-1/2 p-2">
        <h1 class="font-bold border-b-2 text-xl">Completed</h1>
        <ul>
          <li v-for="todo in sortedCompleted" class="shadow-md rounded bg-gray-100 border-gray p-2 my-2">
            <div>
              <div>{{ todo.todo }}</div>
              <div></div>
            </div>
          </li>
        </ul>
      </div>
    </div>
  </div>
</template>

<script>
import { onMounted, computed } from "vue";
import { useTodoStore } from "../store/app.store";
import * as commonUtils from "../utils/common";
export default {
  setup() {
    const todoStore = useTodoStore();

    onMounted(() => {
      todoStore.fetchTodos();
    });


    const sortedTodos = computed(() => {
      return commonUtils.sortByDescription(todoStore.inProgressTodos)
    })
    const sortedCompleted = computed(() => {
      return commonUtils.sortByDescription(todoStore.completedTodos)
    })

    return {
      sortedCompleted,
      sortedTodos,
    };
  },
};
</script>
