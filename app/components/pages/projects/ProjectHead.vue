<template>
  <div class="flex flex-col w-full gap-8 font-bricolage text-[#4A235A] bg-[#F3EFE0] p-6 md:p-10 rounded-[2rem]">

    <div class="grid grid-cols-1 lg:grid-cols-2 gap-10 lg:gap-16 items-start">

      <div 
        @click="openModal"
        class="group w-full h-full min-h-[300px] lg:min-h-[400px] bg-white border-2 border-[#4A235A]/10 rounded-3xl overflow-hidden shadow-lg flex items-center justify-center p-4 relative cursor-pointer transition-all duration-300 hover:shadow-xl hover:border-[#4A235A]/30"
      >
        <div v-if="project.image" class="relative w-full h-full flex items-center justify-center">
          
          <NuxtImg
              :src="project.image"
              :alt="project.title"
              class="w-full h-full object-contain max-h-[600px] transition-transform duration-500 group-hover:scale-105"
          />

          <div class="absolute inset-0 bg-[#4A235A]/20 opacity-0 group-hover:opacity-100 transition-opacity duration-300 flex items-center justify-center backdrop-blur-[2px]">
            <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 -960 960 960" class="w-16 h-16 fill-white drop-shadow-lg transform scale-75 group-hover:scale-100 transition-transform duration-300">
              <path d="M480-320q75 0 127.5-52.5T660-500q0-75-52.5-127.5T480-680q-75 0-127.5 52.5T300-500q0 75 52.5 127.5T480-320Zm0-72q-45 0-76.5-31.5T372-500q0-45 31.5-76.5T480-608q45 0 76.5 31.5T588-500q0 45-31.5 76.5T480-392Zm0 192q-146 0-266-81.5T40-500q54-137 174-218.5T480-800q146 0 266 81.5T920-500q-54 137-174 218.5T480-200Zm0-300Zm0 220q113 0 207.5-59.5T832-500q-50-101-144.5-160.5T480-720q-113 0-207.5 59.5T128-500q50 101 144.5 160.5T480-280Z"/>
            </svg>
          </div>
        </div>

        <div v-else class="text-[#4A235A]/50 font-bold">
          Aucune image disponible
        </div>
      </div>

      <div class="flex flex-col gap-8 w-full">
        <div>
          <h1 class="text-4xl md:text-5xl font-black uppercase tracking-tight leading-none mb-6">
            {{ project.title }}
          </h1>
          <p class="text-[#4A235A]/80 text-lg leading-relaxed font-medium text-justify">
            {{ project.description }}
          </p>
        </div>

        <div class="flex flex-col w-full gap-2 border-t-2 border-[#4A235A]/10 pt-8">
          <ProjectMetadata title="Catégorie"
                           :content="project.project_categories?.join(' - ') || '--'"/>
          <ProjectMetadata title="Date"
                           :content="(new Date(project.date!))?.getFullYear()?.toString() || '--'"/>
          <ProjectMetadata title="Équipe"
                           :content="project.team?.join(' - ') || '--'"/>

          <ProjectTechnologies v-if="numberOfLinks < 1" :project="project" class="mt-6"/>
        </div>
      </div>
    </div>

    <div class="flex flex-row items-center justify-between gap-3 border-t-2 border-[#4A235A]/10 pt-6"
         v-show="numberOfLinks > 0">
      <div></div>
      <ProjectTechnologies :project="project"/>
    </div>

    <Teleport to="body">
      <Transition name="fade">
        <div v-if="isModalOpen"
             @click="closeModal"
             class="fixed inset-0 z-[9999] flex items-center justify-center bg-[#4A235A]/95 backdrop-blur-sm p-4 md:p-8">

          <button
              @click="closeModal"
              class="absolute top-6 right-6 text-[#F3EFE0] hover:text-white bg-white/10 hover:bg-white/20 rounded-full p-2 transition-all z-50">
            <svg xmlns="http://www.w3.org/2000/svg" height="32px" viewBox="0 -960 960 960" width="32px" fill="currentColor">
              <path d="m256-200-56-56 224-224-224-224 56-56 224 224 224-224 56 56-224 224 224 224-56 56-224-224-224 224Z"/>
            </svg>
          </button>

          <div @click.stop class="relative w-full h-full flex items-center justify-center">
            <NuxtImg
                v-if="project.image"
                :src="project.image"
                :alt="project.title"
                class="max-w-full max-h-full object-contain rounded-lg shadow-2xl"
            />
          </div>

        </div>
      </Transition>
    </Teleport>

  </div>
</template>

<script setup lang="ts">
import ProjectMetadata from "~/components/pages/projects/ProjectMetadata.vue";
import ProjectTechnologies from "~/components/pages/projects/ProjectTechnologies.vue";
import { ref, onMounted, onUnmounted, computed } from 'vue';

const props = defineProps<{
  project: ProjectsCollectionItem
}>();

const numberOfLinks = computed(() => 0); // TODO: Implement link logic if needed

// --- LOGIQUE LIGHTBOX ---
const isModalOpen = ref(false);

const openModal = () => {
  isModalOpen.value = true;
  if (typeof document !== 'undefined') document.body.style.overflow = 'hidden';
};

const closeModal = () => {
  isModalOpen.value = false;
  if (typeof document !== 'undefined') document.body.style.overflow = '';
};

// Fermer avec la touche ECHAP
const handleKeydown = (e: KeyboardEvent) => {
  if (e.key === 'Escape' && isModalOpen.value) closeModal();
};

onMounted(() => {
  if (typeof window !== 'undefined') window.addEventListener('keydown', handleKeydown);
});

onUnmounted(() => {
  if (typeof window !== 'undefined') window.removeEventListener('keydown', handleKeydown);
});
</script>

<style scoped>
@import url('https://fonts.googleapis.com/css2?family=Bricolage+Grotesque:opsz,wght@12..96,200..800&display=swap');

.font-bricolage {
  font-family: 'Bricolage Grotesque', sans-serif;
}

/* Animations de la Lightbox */
.fade-enter-active,
.fade-leave-active {
  transition: opacity 0.3s ease;
}

.fade-enter-from,
.fade-leave-to {
  opacity: 0;
}
</style>