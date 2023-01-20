<template>
  todo-list
  <div class="todo-list">
    <TodoItem
      v-for="todo in todos"
      :todo="todo"
      @click="testClick"
      :key="todo.div"
      @remove="$emit('remove', todo)"
    />
  </div>
</template>

<script>
import TodoItem from "./TodoItem.vue";
export default {
  components: { TodoItem },
  props: {
    todos: {
      type: Array,
      required: true,
    },
  },
  methods: {
    testClick(fromTestItem) {
      console.log('in the todo-list', fromTestItem);
      this.$emit("test", fromTestItem);
    },
  },
};
// console.log(this.todos);
</script>

<style scoped>
.todo-list {
  /* background-color: red; */
  margin-top: 15px;
  display: flex;
  flex-direction: column-reverse;
}
</style>
