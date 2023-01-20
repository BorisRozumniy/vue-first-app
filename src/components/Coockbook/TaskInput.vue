<template>
  <div>
    <div class="container tasker">
      <strong>My task is:</strong>
      <input
        type="text"
        :value="task"
        @input="task = $event.target.value"
        class="taskInput"
      />
      <button v-on:click="addTask">Add Task</button>
    </div>
  </div>
</template>

<script>
export default {
  name: "TaskInput",
  data() {
    return {
      task: "",
    };
  },
  methods: {
    addTask() {
      this.$emit("add-task", this.task);
      this.task = "";
    },
  },
};
</script>
