<template>
  <button class="btn"><slot></slot></button>
</template>

<script>
export default {
  name: "Button",
};
</script>

<style scoped>
.btn {
  align-self: flex-end;
  padding: 10px 15px;
  background: none;
  color: teal;
  border: 1px solid teal;
  border-radius: 3px;
  text-transform: capitalize;
}
</style>
