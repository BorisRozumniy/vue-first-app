<template>
  <!-- <AccountForm /> -->
  <!-- <AuthForm /> -->
  <!-- <Todos /> -->
  <!-- <TodosCoockbook /> -->
  <!-- <Checkbox>label 1</Checkbox> -->
  <!-- <Checkbox>label 2</Checkbox> -->
  <!-- <Button>ff</Button> -->
  <!-- <Input /> -->
  <!-- <Header /> -->
  <!-- <Likes /> -->
  <!-- <Posts /> -->
  <HomePage />
</template>

<script>
import Header from "./components/Header.vue";
import Likes from "./components/Likes.vue";
import Posts from "./components/Posts.vue";
import Todos from "./components/Todos.vue";
import TodosCoockbook from "./components/CoockbookApp.vue";
import AuthForm from "./components/Coockbook/AuthForm.vue";
import AccountForm from "./components/AccountForm.vue";
import HomePage from "./components/HomePage.vue";

export default {
  components: {
    Header,
    Likes,
    Posts,
    Todos,
    TodosCoockbook,
    AuthForm,
    AccountForm,
    HomePage
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
