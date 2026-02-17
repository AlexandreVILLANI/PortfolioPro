<template>
  <div class="flex flex-row items-center justify-between gap-6 border-b border-[#4A235A]/10 w-full py-3 font-bricolage text-[#4A235A]">

    <p class="font-bold uppercase tracking-wider text-sm min-w-fit">{{ props.title }}</p>

    <p class="text-right font-medium opacity-80">{{ props.content }}</p>
  </div>
</template>

<script setup lang="ts">
const props = defineProps<{
  title: string,
  content: string,
}>();
</script>

<style scoped>
@import url('https://fonts.googleapis.com/css2?family=Bricolage+Grotesque:opsz,wght@12..96,200..800&display=swap');

.font-bricolage {
  font-family: 'Bricolage Grotesque', sans-serif;
}
</style>