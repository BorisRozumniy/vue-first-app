<template>
  <!-- <Todos /> -->
  <TodosCoockbook />
  <Checkbox>label</Checkbox>
  <Button>ff</Button>
  <Input />
  <!-- <Header /> -->
  <!-- <Likes /> -->
  <!-- <Posts /> -->
</template>

<script>
import Header from "./components/Header.vue";
import Likes from "./components/Likes.vue";
import Posts from "./components/Posts.vue";
import Todos from "./components/Todos.vue";
import TodosCoockbook from "./components/CoockbookApp.vue";

export default {
  components: {
    Header,
    Likes,
    Posts,
    Todos,
    TodosCoockbook,
  },
};
</script>

<style>
* {
  margin: 0;
  padding: 0;
  box-sizing: border-box;
}
</style>
