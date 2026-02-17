<template>
  <button
      type="button"
      class="bg-white/95 hover:bg-white/75 transition-colors duration-700 text-black backdrop-blur-3xl p-4 rounded-full"
      @click="emit('click')">
    <slot/>
  </button>
</template>

<script setup lang="ts">
const emit = defineEmits<{
  click: []
}>();
</script>

<style scoped>
button {
  box-shadow: inset 0 3px 4px rgba(255, 255, 255, 80%), inset 0 -4px 4px rgba(0, 0, 0, 50%);
}
</style>