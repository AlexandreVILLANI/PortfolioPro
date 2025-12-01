<template>
  <div class="min-h-screen w-full bg-[#F3EFE0] pt-32 pb-20 px-4 md:px-10 font-bricolage overflow-x-hidden">

    <div class="max-w-4xl mx-auto text-center mb-12">
      <h1 class="text-5xl md:text-7xl font-black text-[#4A235A] uppercase tracking-tighter mb-4">
        Mes Projets
      </h1>
      <p class="text-[#4A235A]/70 text-lg font-medium max-w-2xl mx-auto">
        Une sélection de mes travaux récents, allant du développement web aux applications complexes.
      </p>
    </div>

    <section class="w-full max-w-4xl mx-auto flex flex-wrap items-center justify-center gap-3 mb-16">
      <button
          v-for="([id, value], index) in Object.entries(categories)"
          :key="index"
          @click="selectedCategory = id as ProjectCategory"
          class="px-5 py-2 rounded-full border-2 text-sm font-bold uppercase tracking-wider transition-all duration-300"
          :class="id === selectedCategory
          ? 'bg-[#4A235A] border-[#4A235A] text-[#F3EFE0] shadow-lg scale-105'
          : 'bg-transparent border-[#4A235A] text-[#4A235A] hover:bg-[#4A235A]/10'"
      >
        {{ value }}
      </button>
    </section>

    <section class="w-full max-w-7xl mx-auto mb-20">

      <TransitionGroup
          name="project-list"
          tag="ul"
          class="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8"
      >
        <li v-for="project in shownProjects"
            :key="project.path_id"
            class="w-full h-full"
        >
          <ProjectCard
              class="h-full w-full shadow-xl hover:shadow-2xl transition-shadow duration-300 rounded-3xl overflow-hidden border-2 border-[#4A235A]/10 bg-white flex flex-col"
              :name="project.title"
              :description="project.description"
              :path="prepareProjectPath(project)"
              :image="project.image"
              :links="prepareProjectLinks(project)"
          />
        </li>

        <li v-if="shownProjects.length < 1"
            class="col-span-full w-full py-20 flex flex-col items-center justify-center gap-4 text-[#4A235A] border-2 border-dashed border-[#4A235A]/30 rounded-3xl bg-[#4A235A]/5">
          <svg xmlns="http://www.w3.org/2000/svg" height="48px" viewBox="0 -960 960 960" width="48px" fill="currentColor" class="opacity-50">
            <path d="M784-120 532-372q-30 24-69 38t-83 14q-109 0-184.5-75.5T120-580q0-109 75.5-184.5T380-840q109 0 184.5 75.5T640-580q0 44-14 83t-38 69l252 252-56 56ZM380-400q75 0 127.5-52.5T560-580q0-75-52.5-127.5T380-760q-75 0-127.5 52.5T200-580q0 75 52.5 127.5T380-400Z"/>
          </svg>
          <p class="font-bold text-lg">Aucun projet trouvé dans cette catégorie.</p>
        </li>
      </TransitionGroup>

    </section>

  </div>
</template>

<script setup lang="ts">
import {getProjects, prepareProjectLinks, prepareProjectPath, type ProjectCategory, categories} from "~/utils/projects";
import ProjectCard from "~/components/pages/projects/ProjectCard.vue";

// Récupération des données
const {data: projects} = await useAsyncData('projects', () => getProjects());

// SEO Meta
useSeoMeta({
  ...defaultSeoTags(
      "Mes projets | Alexandre VILLANI",
      "Explorez les projets de Alexandre VILLANI..."
  ),
  ogTitle: "Mes projets | Alexandre VILLANI",
})

const selectedCategory = ref<ProjectCategory>("all");

// Filtrage
const shownProjects = computed(() => {
  const projectsList = projects.value ?? [];
  if (selectedCategory.value === "all") return projectsList;

  return projectsList.filter(p => {
    if (Array.isArray(p.category)) {
      return p.category.includes(selectedCategory.value);
    }
    return p.category === selectedCategory.value;
  });
});
</script>

<style scoped>
@import url('https://fonts.googleapis.com/css2?family=Bricolage+Grotesque:opsz,wght@12..96,200..800&display=swap');

.font-bricolage {
  font-family: 'Bricolage Grotesque', sans-serif;
}

/* Animations de la liste */
.project-list-enter-active,
.project-list-leave-active {
  transition: all 0.4s ease;
}

.project-list-enter-from,
.project-list-leave-to {
  opacity: 0;
  transform: scale(0.9);
}
</style>