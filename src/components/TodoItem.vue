<template>
  <div class="todo">
    <h2>{{ todo.title }}</h2>
    <label>
      complited
      <input
        type="checkbox"
        @change="toggleComplete"
        :checked="todo.complited"
      />
    </label>
    <div class="buttons">
      <Button @click="remoeveTodo">remove</Button>
      <Button @click="testClick">testClick</Button>
    </div>
  </div>
</template>

<script>
export default {
  props: {
    todo: {
      type: Object,
      requered: true,
    },
  },
  methods: {
    remoeveTodo(e, todo) {
      console.log("event in the item:", e, "todo", todo);
    },
    toggleComplete(e) {
      console.log("toggleComplete", e);
      this.$emit("complete", this.todo);
    },
    testClick() {
      this.$emit('test', 'some data from the item')
    }
  },
};
</script>

<style scoped>
.todo {
  border: 2px teal solid;
  padding: 20px 10px;
  margin-top: 5px;
}
</style>
