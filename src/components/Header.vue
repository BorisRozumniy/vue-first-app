<template>
  <header>
    <Container>
      <div>menu</div>
      <slot></slot>
    </Container>
  </header>
</template>

<script>
export default {
  name: 'Header'
}
</script>

<style scoped>
header {
  background-color: #3e2ed3;
  color: #fff;
}
</style>
