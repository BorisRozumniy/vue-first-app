<template>
  <input type="checkbox" id="custom-checkbox"/>
  <label for="custom-checkbox">
    <span>
      <slot></slot>
    </span>
  </label>
</template>

<script>
export default {
  name: "Checkbox",
};
</script>

<style scoped>
label {
  position: relative;
  color: orange;
  margin-right: 5px;
  font-size: 18px;
  cursor: pointer;
  display: inline-flex;
  align-items: center;
}
label::before {
  content: "";
  height: 18px;
  width: 18px;
  border: 2px solid orange;
  border-radius: 5px;
  display: inline-block;
}
span {
  margin: 0 5px;
}
input {
  appearance: none;
}

input:focus~label::before {
  box-shadow: 0 0 3px black, 0 0 8px #607d8b;
}
input:checked + label::before {
  border-color: royalblue;
  background-color: aqua;
}
input:checked + label::after {
  content: "";
  position: absolute;
  bottom: 7px;
  left: 8px;
  height: 11px;
  width: 5px;
  border-bottom: 3px black solid;
  border-right: 3px black solid;
  transform: rotate(45deg);
}
</style>
