<template>
  <div class="min-h-screen w-full bg-[#F3EFE0] pt-32 pb-20 px-4 md:px-10 font-bricolage overflow-x-hidden relative">

    <div class="max-w-6xl mx-auto text-center mb-12 relative flex items-center justify-center">
      
      <div 
        @click="isLightboxOpen = true"
        class="absolute left-0 top-2 w-40 -rotate-6 hover:rotate-0 transition-transform duration-300 cursor-pointer group z-10 hidden lg:block"
      >
        <div class="bg-white p-2 pb-6 shadow-lg border border-[#4A235A]/10 relative">
           <div class="absolute -top-3 left-1/2 -translate-x-1/2 w-12 h-5 bg-white/50 backdrop-blur-sm shadow-sm rotate-2"></div>
           <NuxtImg src="/images/background/motocross.jpg" class="w-full h-auto filter sepia-[0.3] group-hover:sepia-0 transition-all"/>
           <p class="text-center font-serif text-[10px] text-gray-500 mt-2">Cliquez pour agrandir</p>
        </div>
      </div>

      <div class="max-w-4xl px-4">
        <h1 class="text-5xl md:text-7xl font-black text-[#4A235A] uppercase tracking-tighter mb-4">
          Mes Projets
        </h1>
        <p class="text-[#4A235A]/70 text-lg font-medium">
          Une sélection de mes travaux récents, allant du développement web aux applications complexes.
        </p>
      </div>

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

    <section class="w-full max-w-7xl mx-auto mb-20 relative">

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

    <Teleport to="body">
      <Transition name="fade">
        <div
            v-if="isLightboxOpen"
            class="fixed inset-0 z-[9999] flex items-center justify-center bg-[#784421]/90 backdrop-blur-sm p-4"
            @click.self="isLightboxOpen = false"
        >
          <div class="relative max-w-5xl w-full flex flex-col items-center">
            
            <button
                @click="isLightboxOpen = false"
                class="absolute -top-12 right-0 md:-right-8 text-[#FEFBF3] hover:text-white hover:scale-110 transition-transform"
            >
              <svg xmlns="http://www.w3.org/2000/svg" height="40px" viewBox="0 -960 960 960" width="40px" fill="currentColor"><path d="m256-200-56-56 224-224-224-224 56-56 224 224 224-224 56 56-224 224 224 224-56 56-224-224-224 224Z"/></svg>
            </button>
            
            <div class="bg-[#FEFBF3] p-2 md:p-4 rounded shadow-2xl">
              <NuxtImg
                  src="/images/background/motocross.jpg"
                  alt="motocross"
                  class="max-h-[70vh] w-auto object-contain rounded-sm"
              />
            </div>
            
            <div class="mt-6 text-center">
              <h4 class="text-2xl md:text-3xl text-[#FEFBF3] font-bricolage font-bold uppercase tracking-widest">
                MotoCross - Mandeure
              </h4>
              <p class="text-[#FEFBF3]/80 font-serif italic text-lg mt-2">
               « Je ne vole pas… je me laisse porter par le moment. » Robbie Maddison <br>
                <span class="text-sm opacity-60 not-italic font-sans">Photographie personnelle</span>
              </p>
            </div>
          </div>
        </div>
      </Transition>
    </Teleport>

  </div>
</template>

<script setup lang="ts">
import {getProjects, prepareProjectLinks, prepareProjectPath, type ProjectCategory, categories} from "~/utils/projects";
import ProjectCard from "~/components/pages/projects/ProjectCard.vue";
import { ref, computed, onMounted, onUnmounted } from 'vue';

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

// LOGIQUE LIGHTBOX
const isLightboxOpen = ref(false);

const handleKeydown = (e: KeyboardEvent) => {
  if (e.key === 'Escape') isLightboxOpen.value = false;
};

onMounted(() => window.addEventListener('keydown', handleKeydown));
onUnmounted(() => window.removeEventListener('keydown', handleKeydown));
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

/* Animation Lightbox */
.fade-enter-active, .fade-leave-active { transition: opacity 0.3s ease; }
.fade-enter-from, .fade-leave-to { opacity: 0; }
</style>