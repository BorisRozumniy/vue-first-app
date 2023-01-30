<template>
  <input :value="modelValue" @input="updateInput" class="input" />
  <!-- <input :value="modelValue" @input="updateInput" class="input" :class="getClassName" /> -->
  <!-- <div>{{ getClassName }}</div> -->
</template>

<script>
export default {
  name: "Input",
  props: {
    modelValue: [String, Number],
    error: {
      type: Boolean,
      default: false
    },
    dirty: {
      type: Boolean,
      default: false
    },
    computed: {
      getClassName() {
        let className = '***';
        if (dirty && !error) className = 'input-success'
        if (error) className = 'input-error'
        console.log(className, dirty, error);
        return className
      },
    }
  },
  methods: {
    updateInput(event) {
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

.input-error {
  border-color: red;
}

.input-success {
  border-color: green;
}
</style>
