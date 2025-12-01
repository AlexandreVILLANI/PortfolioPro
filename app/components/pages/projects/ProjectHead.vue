<template>
  <div class="flex flex-col w-full gap-8 font-bricolage text-[#4A235A] bg-[#F3EFE0] p-6 md:p-10 rounded-[2rem]">

    <div class="flex flex-row items-center justify-between w-full h-12">

      <div class="flex items-center gap-4" v-if="illustrationsToShow.length > 1">

        <Button @click="prevSlide"
                class="!p-3 w-12 h-12 rounded-full bg-[#4A235A] hover:bg-[#4A235A]/90 transition-transform hover:scale-105 shadow-md flex items-center justify-center"
                name="précédent" aria-label="précédent">
          <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="none" stroke="#F3EFE0" stroke-width="2.5" stroke-linecap="round" stroke-linejoin="round" class="w-6 h-6">
            <path d="M15 18l-6-6 6-6" />
          </svg>
        </Button>

        <span class="text-sm font-bold tracking-widest opacity-70 tabular-nums">
          {{ currentSlide + 1 }} / {{ illustrationsToShow.length }}
        </span>

        <Button @click="nextSlide"
                class="!p-3 w-12 h-12 rounded-full bg-[#4A235A] hover:bg-[#4A235A]/90 transition-transform hover:scale-105 shadow-md flex items-center justify-center"
                name="suivant" aria-label="suivant">
          <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="none" stroke="#F3EFE0" stroke-width="2.5" stroke-linecap="round" stroke-linejoin="round" class="w-6 h-6">
            <path d="M9 18l6-6-6-6" />
          </svg>
        </Button>
      </div>

      <div v-else></div> <button
        @click="shareProject"
        :class="copied
            ? 'bg-[#4A235A] text-[#F3EFE0] border-[#4A235A]'
            : 'bg-transparent text-[#4A235A] border-[#4A235A] hover:bg-[#4A235A]/5'"
        class="flex items-center gap-2 px-5 py-2 rounded-full border-2 transition-all duration-300 group font-bold uppercase tracking-wide text-xs sm:text-sm h-10">

      <svg v-if="!copied" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round" class="w-5 h-5 group-hover:scale-110 transition-transform">
        <circle cx="18" cy="5" r="3"></circle>
        <circle cx="6" cy="12" r="3"></circle>
        <circle cx="18" cy="19" r="3"></circle>
        <line x1="8.59" y1="13.51" x2="15.42" y2="17.49"></line>
        <line x1="15.41" y1="6.51" x2="8.59" y2="10.49"></line>
      </svg>

      <svg v-else xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="3" stroke-linecap="round" stroke-linejoin="round" class="w-5 h-5">
        <polyline points="20 6 9 17 4 12"></polyline>
      </svg>

      <span class="hidden sm:inline">{{ copied ? 'Copié !' : 'Partager' }}</span>
    </button>
    </div>

    <div class="grid grid-cols-1 lg:grid-cols-2 gap-10 lg:gap-16 items-start">

      <div class="w-full h-full min-h-[400px] lg:min-h-[500px] bg-white border-2 border-[#4A235A]/10 rounded-3xl overflow-hidden shadow-lg relative flex flex-col justify-center">

        <Carousel v-if="illustrationsToShow.length > 0"
                  :items-to-show="1"
                  :gap="0"
                  :wrap-around="true"
                  v-model="currentSlide"
                  class="w-full h-full absolute inset-0">
          <Slide v-for="(illustration, index) in illustrationsToShow"
                 :key="index"
                 class="w-full h-full flex items-center justify-center p-4">
            <Illustration :illustration="illustration" full class="max-w-full max-h-full object-contain drop-shadow-sm"/>
          </Slide>
        </Carousel>

        <div v-else class="w-full h-full flex items-center justify-center bg-gray-100 text-[#4A235A]/50">
          <p class="font-bold">Aucune image disponible</p>
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
  </div>
</template>

<script setup lang="ts">
import ProjectMetadata from "~/components/pages/projects/ProjectMetadata.vue";
import {ref, onMounted, onUnmounted, computed} from 'vue';
import Illustration from '~/components/content/Illustration.vue'
import ProjectTechnologies from "~/components/pages/projects/ProjectTechnologies.vue";
import Button from "~/components/elements/Button.vue";

const props = defineProps<{
  project: ProjectsCollectionItem
}>();

const currentSlide = ref(0);
// Variables inutiles supprimées pour éviter les bugs
const isMobile = ref(false);

const copied = ref(false);
let copiedResetTimeout: NodeJS.Timeout | null = null;

function resetCopiedTimeout() {
  if (copiedResetTimeout) clearTimeout(copiedResetTimeout);
  copiedResetTimeout = setTimeout(() => {
    copied.value = false;
  }, 1500);
}

const illustrationsToShow = [props.project.image, ...(props.project.illustrations || [])];

// CarouselHeight supprimé car on utilise CSS Grid maintenant (plus stable)
const carouselStyle = computed(() => {
  return { height: '100%' };
});

const numberOfLinks = computed(() => {
  // TODO
  return 0;
});

const nextSlide = () => {
  currentSlide.value = (currentSlide.value + 1) % illustrationsToShow.length;
};

const prevSlide = () => {
  currentSlide.value = currentSlide.value === 0 ? illustrationsToShow.length - 1 : currentSlide.value - 1;
};

const shareProject = async () => {
  const url = typeof window !== 'undefined' ? window.location.href : '';

  if (navigator.share) {
    try {
      await navigator.share({
        title: props.project.title,
        text: props.project.description,
        url: url
      });
      copied.value = true;
      resetCopiedTimeout();
    } catch (err) {
      if ((err as Error).name !== 'AbortError') {
        console.error('Error sharing:', err);
        await copyToClipboard(url);
      }
    }
  } else {
    await copyToClipboard(url);
  }
};

const copyToClipboard = async (text: string) => {
  try {
    await navigator.clipboard.writeText(text);
    copied.value = true;
    resetCopiedTimeout();
  } catch (err) {
    console.error('Failed to copy:', err);
    copied.value = false;
  }
};
</script>

<style scoped>
@import url('https://fonts.googleapis.com/css2?family=Bricolage+Grotesque:opsz,wght@12..96,200..800&display=swap');

.font-bricolage {
  font-family: 'Bricolage Grotesque', sans-serif;
}
</style>