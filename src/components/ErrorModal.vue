<template>
  <div class="modal">
    <p>{{ message }}</p>
    <button @click="$emit('close')">Close</button>
  </div>
</template>

<script>
export default {
  props: ['message'],
};
</script>

<style>
.modal {
  background: #fff;
  border: 1px solid #ccc;
  padding: 20px;
  position: fixed;
  top: 50%;
  left: 50%;
  transform: translate(-50%, -50%);
}
</style>
