import { defineStore } from "pinia";
import axios from "axios";

export const useTodoStore = defineStore("todo", {
  state: () => ({
    todos: [],
  }),
  actions: {
    async fetchTodos() {
      try {
        const response = await axios.get(
          "https://dummyjson.com/todos?limit=10"
        );
        this.todos = response.data.todos || []
      } catch (error) {
        console.log("Dummy API Error:", error);
      }
    },
  },
  getters: {
    completedTodos: (state) => state.todos.filter((todo) => todo.completed),
    inProgressTodos: (state) => state.todos.filter((todo) => !todo.completed),
  },
});
