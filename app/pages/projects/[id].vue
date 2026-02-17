<template>
  <div class="min-h-screen w-full bg-[#F3EFE0] pt-32 pb-20 px-4 md:px-10 font-bricolage overflow-x-hidden text-[#4A235A]">

    <div v-if="project" class="max-w-5xl mx-auto">
      <ProjectHead :project="project" class="mb-16"/>

      <div class="bg-white/50 p-6 md:p-10 rounded-[2rem] border border-[#4A235A]/10 shadow-sm">
        <ContentRenderer class="renderer" :value="project"/>
      </div>
    </div>

    <div v-else class="flex h-[50vh] flex-col items-center justify-center gap-4 text-[#4A235A]">
      <h2 class="text-3xl font-black">404</h2>
      <p>Aucun projet trouvé !</p>
      <NuxtLink to="/projects" class="underline font-bold">Retour aux projets</NuxtLink>
    </div>
  </div>
</template>

<script setup lang="ts">
import {searchProject} from "~/utils/projects";
import {configureProjectSeo, configureProjectOgImage} from "~/utils/seo";
import ProjectHead from "~/components/pages/projects/ProjectHead.vue";

const route = useRoute();

const {data: project} = await useAsyncData(`project-${route.params.id}`, () =>
    searchProject(route.params.id as string)
);

if (project.value) {
  useSeoMeta(configureProjectSeo(project.value));
  defineOgImage(configureProjectOgImage(project.value));
}
</script>

<style>
.renderer {
  font-family: 'Bricolage Grotesque', sans-serif;
  color: #4A235A;
  /* Paragraphes */

  p {
    @apply text-justify mb-6 leading-relaxed opacity-90;
    font-size: 1.1rem;
  }

  /* Titres */

  h1 {
    @apply text-4xl font-bold mb-6 mt-8;
  }

  h2 {
    @apply text-3xl font-bold mb-5 mt-7;
  }

  h3 {
    @apply text-2xl font-bold mb-4 mt-6;
  }

  h4 {
    @apply text-xl font-semibold mb-3 mt-5;
  }

  /* Listes */

  ul {
    @apply list-disc list-inside mb-4 space-y-2;
  }

  ol {
    @apply list-decimal list-inside mb-4 space-y-2;
  }

  li {
    @apply ml-4;
  }

  /* Code */

  code {
    @apply bg-gray-100 px-2 py-1 rounded text-sm font-mono;
  }

  pre {
    @apply bg-gray-100 p-4 rounded mb-4 overflow-x-auto;
  }

  pre code {
    @apply bg-transparent p-0;
  }

  /* Séparateurs */

  hr {
    @apply my-8 border-gray-300;
  }

  /* Blockquotes */

  blockquote {
    @apply border-l-4 border-gray-300 pl-4 italic my-4;
  }

  /* Images */

  img {
    @apply rounded-lg my-4;
  }

  /* Strong/Bold */

  strong {
    @apply font-bold;
  }

  /* Emphasis/Italic */

  em {
    @apply italic;
  }
}
</style>