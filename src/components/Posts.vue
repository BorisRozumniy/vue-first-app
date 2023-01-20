<template>
  <h1>Post page</h1>
  <div class="btns">
    <Button @click="getPosts" class="create-btn">Get Posts</Button>
    <Button @click="showModal" class="create-btn">Create Post</Button>
    <my-select v-model="selectedSort" :options="sortOptions"></my-select>
  </div>
  <PostList :posts="posts" @remove="removePost" v-if="!isPostLoading" />
  <div v-else>Loading...</div>
  <Modal v-model:show="modalVisible">
    <PostForm @create="createPost" />
  </Modal>
</template>

<script>
import PostForm from "./PostForm.vue";
import PostList from "./PostList.vue";
import Modal from "./Modal.vue";
import MySelect from "./MySelect.vue";

export default {
  components: {
    PostForm,
    PostList,
    Modal,
    MySelect,
  },
  data() {
    return {
      posts: [],
      modalVisible: false,
      isPostLoading: false,
      selectedSort: '',
      sortOptions: [
        {value: 'title', name: 'By title'},
        {value: 'body', name: 'By content'},
      ]
    };
  },
  methods: {
    createPost(post) {
      this.posts.push(post);
      this.modalVisible = false;
    },
    removePost(post) {
      this.posts = this.posts.filter(({ id }) => id !== post.id);
    },
    showModal() {
      this.modalVisible = true;
    },
    async getPosts() {
      try {
        this.isPostLoading = true;
        fetch("https://jsonplaceholder.typicode.com/posts?_limit=10")
          .then((res) => res.json())
          .then((data) => {
            this.posts = data;
            this.isPostLoading = false;
          });
      } catch (error) {
        console.log(error);
      }
      // finally {
      //   console.log("start finally", this.isPostLoading);
      //   this.isPostLoading = false;
      //   console.log("end finally", this.isPostLoading);
      // }
    },
  },
  mounted() {
    this.getPosts();
  },
};
</script>

<style>
.create-btn {
  margin-top: 10px;
  margin-bottom: 20px;
}
.btns {
  display: flex;
  justify-content: space-between;
}
</style>
