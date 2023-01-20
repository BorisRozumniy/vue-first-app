<template>
  <form class="form" @submit.prevent>
    <Input v-model="todo.title" type="text" placeholder="title" />
    <Button class="create-btn" @click="createTodo">create todo</Button>
  </form>
</template>

<script>
export default {
  data() {
    return {
      todo: {
        title: "",
        complited: false,
      },
    };
  },
  methods: {
    createTodo() {
      this.todo.id = Date.now();
      this.$emit("create", this.todo);
      this.todo = {
        title: "",
        complited: false,
      };
    },
  },
};
</script>

<style scoped>
.form {
  display: flex;
  flex-direction: column;
}
.btn {
  margin-top: 15px;
}
</style>
