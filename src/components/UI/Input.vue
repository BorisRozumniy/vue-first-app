<template>
  <input :value="modelValue" @input="updateInput" class="input" />
</template>

<script>
export default {
  name: "Input",
  props: {
    modelValue: [String, Number],
  },
  methods: {
    updateInput(event) {
      console.log("update:modelValue", event);
      this.$emit("update:modelValue", event.target.value);
    },
  },
};
</script>

<style scoped>
.input {
  border: 1px solid teal;
  border-radius: 3px;
  width: 100%;
  padding: 10px 15px;
}
</style>
