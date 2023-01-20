<template>
  <div class="post">
    <h2>{{ post.title }}</h2>
    <p>{{ post.body }}</p>
    <div class="buttons">
      <Button @click="$emit('remove', post)">remove</Button>
    </div>
  </div>
</template>

<script>
export default {
  props: {
    post: {
      type: Object,
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
</style>
