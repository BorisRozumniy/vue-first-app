<template>
  <div>
    <div class="container tasker">
      <strong>My task is:</strong>
      <Input
        type="text"
        :value="task"
        @input="task = $event.target.value"
        class="taskInput"
        v-on:keyup.enter="addTask"
      />
      <Button v-on:click="addTask">Add Task</Button>
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
