<template>
  <div class="todos">
    <TodoForm @create="createTodo" />
    <TodoList :todos="todos" @remove="removeTodo" @test="test" />
  </div>
</template>

<script>
import TodoForm from "./TodoForm.vue";
import TodoList from "./TodoList.vue";

export default {
  components: {
    TodoForm,
    TodoList,
  },
  data() {
    return {
      todos: [
        { id: 1, title: "item 1", complited: false },
        { id: 2, title: "item 2", complited: true },
      ],
    };
  },
  methods: {
    createTodo(todo) {
      console.log(todo);
      this.todos.push(todo);
    },
    removeTodo(todoId) {
      console.log("removeTodo - todoId:", todoId);
      this.todos = this.todos.filter(({ id }) => todoId !== id);
    },
    test(param) {
      console.log("test on the top", param);
    },
  },
};
</script>

<style scoped>
.todos {
  /* background-color: aqua; */
}
</style>
