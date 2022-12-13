<script setup lang="ts">import { ref } from 'vue';
const isShowingModal = ref(false);

const toggleModal = () => {
  isShowingModal.value = !isShowingModal.value;
}
</script>

<template>
<div class="page-container">
  <div class="wrapper">
    <button @click="toggleModal">Toggle Modal</button>
    <Modal
      v-model="isShowingModal"
      attach-to="body"
      max-width="500px"
      :show-close-icon="true"
    >
      <template #header>
        <h3>Modal Header</h3>
      </template>
      <div class="modal-content">
        Use Instagram posts to share your products with millions of people. Let shoppers buy from your store without leaving Instagram.
      </div>
      <template #footer>
        <h3>Modal Footer</h3>
      </template>
    </Modal>
  </div>
</div>
</template>

<style lang="scss">
body {
  font-family: sans-serif;
}
.modal-content {
  padding: 10px;
}
h3 {
  margin: 0;
}
</style>
