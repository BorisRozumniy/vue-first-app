<template>
  <div v-if="posts.length > 0">
    <h3>post list</h3>
    <PostItem
      v-for="post in posts"
      :post="post"
      :key="post.id"
      @remove="$emit('remove', post)"
    />
  </div>
  <h2 v-else class="message">Post list is empty</h2>
</template>

<script>
import PostItem from "./PostItem.vue";
export default {
  components: { PostItem },
  props: {
    posts: {
      type: Array,
      requered: true,
    },
  },
};
</script>

<style>
.post {
  border: 2px teal solid;
  padding: 20px 10px;
  margin-top: 5px;
}
.message {
  color: rgb(235, 118, 118);
}
</style>
