<template>
  <div>
    <h2>
      <slot/>
    </h2>
  </div>
</template>

<script setup lang="ts">
const slot = useSlots();
</script>