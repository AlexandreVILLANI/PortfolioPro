<template>
  <button type="button"
          class="bg-white/10 hover:bg-white/30 transition-colors duration-700 py-4 px-5 rounded-full backdrop-blur-3xl"
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
  box-shadow: inset 0 3px 4px rgba(255, 255, 255, 50%), inset 0 -4px 4px rgba(0, 0, 0, 30%);
}
</style>
