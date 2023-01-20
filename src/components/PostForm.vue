<template>
  <form class="form" @submit.prevent>
    <!-- v-bind:value="post.title" -->
    <!-- :value="post.title" -->
    <!-- @input="post.title = $event.target.value" -->
    <input v-model="post.title" class="input" type="text" placeholder="title" />
    <!-- v-bind:value="post.body" -->
    <!-- @input="post.body = $event.target.value" -->
    <input v-model="post.body" type="text" class="input" placeholder="body" />
    <button class="btn" @click="createPost">create post</button>
  </form>
</template>

<script>
export default {
  data() {
    return {
      post: {
        title: "",
        body: "",
      },
    };
  },
  methods: {
    createPost() {
      this.post.id = Date.now();
      this.$emit("create", this.post);
      this.post = {
        title: "",
        body: "",
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
.input {
  width: 100%;
  border: 1px solid teal;
  padding: 10px 15px;
  margin-top: 15px;
}
.btn {
  margin-top: 15px;
  align-self: flex-end;
  padding: 10px 15px;
  background: none;
  color: teal;
  border: 1px solid teal;
}
</style>
