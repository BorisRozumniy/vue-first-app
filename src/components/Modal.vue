<template>
  <div class="dialog" v-if="show" @click="closeModal">
    <div class="dialog__content" @click.stop>
      <slot></slot>
    </div>
  </div>
</template>

<script>
export default {
  name: "my-dialog",
  props: {
    show: { type: Boolean, default: false },
  },
  methods: {
    closeModal() {
      this.$emit("update:show", false);
    },
  },
};
</script>

<style>
.dialog {
  top: 0;
  bottom: 0;
  right: 0;
  left: 0;
  background-color: rgba(0, 0, 0, 0.5);
  position: fixed;
  display: flex;
}

.dialog__content {
  padding: 20px;
  border-radius: 12px;
  background: #fff;
  margin: auto;
  min-width: 300px;
  min-height: 50px;
}
</style>
