<template>
  <div class="relative w-full overflow-hidden">
    <!-- Carousel -->
    <Carousel
        :items-to-show="1"
        :wrap-around="true"
        v-model="currentSlide"
        class="w-full h-full"
    >
      <Slide v-for="(project, index) in projects" :key="index" class="w-full h-full">
        <ProjectCard class="w-full h-80 md:h-72"
                     :name="project.title"
                     :description="project.description"
                     :path="prepareProjectPath(project)"
                     :image="project.image"
                     :links="prepareProjectLinks(project)"/>
      </Slide>
    </Carousel>
  </div>
</template>

<script setup lang="ts">
import {ref} from 'vue'
import {Carousel, Slide} from 'vue3-carousel'
import ProjectCard from "~/components/pages/projects/ProjectCard.vue";
import {getProjects, prepareProjectLinks, type ProjectsCollectionItem} from "~/utils/projects";

const currentSlide = ref(0);

const projects: Ref<ProjectsCollectionItem[]> = ref([]);

defineExpose({
  currentSlide,
  projects,
  next: () => {
    currentSlide.value = (currentSlide.value + 1) % projects.value.length
  },
  prev: () => {
    currentSlide.value = currentSlide.value === 0 ? projects.value.length - 1 : currentSlide.value - 1
  }
});

onMounted(async () => {
  const fetchedProjects = await getProjects();
  projects.value = fetchedProjects.map(p => p as ProjectsCollectionItem);
});
</script>