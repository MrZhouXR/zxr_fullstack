<template>
  <div class="confirm-modal">
    <button @click="isOpen = true">打开</button>
    <teleport to="#foot-container">
      <div v-if="isOpen">
        <p>1322131</p>
        <button @click="isOpen = false">取消</button>
      </div>
    </teleport>
  </div>
</template>

<script>
import { ref } from "vue";
export default {
  setup() {
    const isOpen = ref(true);

    return { isOpen };
  },
};
</script>

<style>
</style>