<template>
  <div class="flex flex-col lg:flex-row items-start lg:items-center gap-4 font-bricolage text-[#4A235A]" v-show="project.technologies?.length > 0">
    <p class="font-bold uppercase tracking-wider text-sm whitespace-nowrap">Technologies</p>

    <div class="flex flex-row flex-wrap justify-start items-center gap-2">
      <div v-for="(techno, index) in project.technologies"
           :key="index"
           class="px-3 py-1.5 border border-[#4A235A]/30 rounded-lg text-xs font-bold uppercase tracking-wide bg-white/50 hover:bg-white hover:border-[#4A235A] transition-colors cursor-default">
        {{ techno }}
      </div>
    </div>
  </div>
</template>

<script setup lang="ts">
const props = defineProps<{
  project: ProjectsCollectionItem
}>();
</script>

<style scoped>
@import url('https://fonts.googleapis.com/css2?family=Bricolage+Grotesque:opsz,wght@12..96,200..800&display=swap');

.font-bricolage {
  font-family: 'Bricolage Grotesque', sans-serif;
}
</style>