<template>
  <TodoForm @create="addTodo" />
  <TodoList :todos="todos" />
</template>

<script>
import TodoForm from "./TodoForm.vue";
import TodoList from "./TodoList.vue";

export default {
  components: { TodoForm, TodoList },
  data() {
    return {
      todos: [
        { id: 1, title: "item 1", isDone: false },
        { id: 2, title: "item 2", isDone: true },
        { title: "asdf", id: 1677596234782, isDone: false },
        { title: "sdfsdfsdfasd", isDone: false, id: 1677596238232 },
        { title: "asdfasdfe", isDone: false, id: 1677596240218 },
        { title: "ddsddd", isDone: false, id: 1677596242838 },
        { title: "ffffffffffffffffff", isDone: false, id: 1677596245315 },
        { title: "aaaaaaaaaaaaaa", isDone: false, id: 1677596247059 },
        { title: "sssssssssssss", isDone: false, id: 1677596248826 },
        { title: "eeessssssss", isDone: false, id: 1677596251422 },
        { title: "fsafd", isDone: false, id: 1677596252969 },
        { title: "asdf", isDone: false, id: 1677596254362 },
        { title: "asdf", isDone: false, id: 1677596255566 },
        { title: "fdsfesf", isDone: false, id: 1677596257372 },
      ],
    };
  },
  methods: {
    addTodo(todo) {
      this.todos.push(todo);
    },
  },
};
</script>
