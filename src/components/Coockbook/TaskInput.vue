<template>
  <div>
    <div class="container tasker">
      <strong>My task is:</strong>
      <Input
        type="text"
        :value="task"
        v-model="task"
        @input="task = $event.target.value"
        class="taskInput"
        v-on:keyup.enter="addTask"
      />
      <div v-if="v$.task.$error">Task field has an error.</div>
      <Button v-on:click="addTask">Add Task</Button>
    </div>
  </div>
</template>

<script>
import { useVuelidate } from '@vuelidate/core'
import { required, email, minLength } from '@vuelidate/validators'

export default {
  name: "TaskInput",
  setup() {
    return { v$: useVuelidate() }
  },
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
  validations() {
    return {
      task: { required }
    }
  }
};
</script>
