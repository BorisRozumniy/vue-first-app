<template>
  <h2>TodosCoockbook</h2>
  <TaskInput @add-task="addNewTask" />
  <div class="col-12">
    <div class="cardBox">
      <div class="container">
        <h2>My tasks</h2>
        <ul class="taskList">
          <li
            v-for="(taskItem, index) in displayList"
            :key="`${index}_${Math.random()}`"
          >
            <input
              type="checkbox"
              :checked="!!taskItem.finishedAt"
              @input="changeStatus(index)"
            />
            {{ taskItem.task }}
            <span v-if="taskItem.finishedAt">
              | Done at:
              {{ formateDate(taskItem.finishedAt) }}
            </span>
          </li>
        </ul>
      </div>
    </div>
  </div>
</template>

<script>
import TaskInput from "./Coockbook/TaskInput.vue";

export default {
  name: "CoockbookApp",
  components: {
    TaskInput,
  },
  data: () => ({ taskList: [] }),
  computed: {
    displayList() {
      return this.taskList;
    },
  },
  methods: {
    formateDate(value) {
      if (!value) return "";
      if (typeof value !== "number") return value;

      const browserLocale =
        navigator.language && navigator.language.length
          ? navigator.languages[0]
          : navigator.language;
      const intlDateTime = new Intl.DateTimeFormat(browserLocale, {
        year: "numeric",
        month: "numeric",
        day: "numeric",
        hour: "numeric",
        minute: "numeric",
      });
      console.log(intlDateTime);
      return intlDateTime.format(new Date(value));
    },
    addNewTask(task) {
      this.taskList.push({
        task,
        createdAt: Date.now(),
        finishedAt: undefined,
      });
      console.log("new task added: ", task);
    },
    changeStatus(taskIndex) {
      const task = this.taskList[taskIndex];
      console.log("taskIndex", taskIndex);
      if (task.finishedAt) {
        task.finishedAt = undefined;
      } else {
        task.finishedAt = Date.now();
      }
    },
  },
};
</script>

<style scoped>
.taskList li {
  text-align: left;
}
</style>
