<template>
  <div class="flex flex-col w-full gap-8 font-bricolage text-[#4A235A] bg-[#F3EFE0] p-6 md:p-10 rounded-[2rem]">

    <div class="grid grid-cols-1 lg:grid-cols-2 gap-10 lg:gap-16 items-start">

      <div class="w-full h-full min-h-[300px] lg:min-h-[400px] bg-white border-2 border-[#4A235A]/10 rounded-3xl overflow-hidden shadow-lg flex items-center justify-center p-4">
        <NuxtImg
            v-if="project.image"
            :src="project.image"
            :alt="project.title"
            class="w-full h-full object-contain max-h-[600px]"
        />
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