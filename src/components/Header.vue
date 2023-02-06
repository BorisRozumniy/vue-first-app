<template>
  <header>
    <Container>
      <NavBar />
      <slot></slot>
    </Container>
  </header>
</template>

<script>
import NavBar from './NavBar.vue';

export default {
  name: "Header",
  components: { NavBar }
}
</script>

<style scoped>
header {
  width: 100%;
  padding: 24px 0;
  background-color: #3e2ed3;
  color: #fff;
}
</style>
