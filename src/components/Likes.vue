
<template>
  <div>likes: <strong>{{likes}}</strong></div>
  <div>dislikes: <strong>{{dislikes}}</strong></div>
  <button @click="(likes += 1)">Like</button>
  <button v-on:click="addDisike">Dislike</button>
</template>


<script>

export default {
  data() {
    return {
      likes: 0 ,
      dislikes: 5,

    }
  },
  methods: {
    addLike() {
      this.likes += 1;
    },
    addDisike() {
      this.dislikes += 1;
    },
  }
}
</script>
