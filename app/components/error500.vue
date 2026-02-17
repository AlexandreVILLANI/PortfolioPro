<template>
  <div class="min-h-screen w-full bg-[#F3EFE0] flex flex-col items-center justify-center p-6 font-bricolage text-[#4A235A] overflow-hidden relative">

    <div class="absolute top-[-10%] right-[-10%] w-[40vw] h-[40vw] bg-[#4A235A]/5 rounded-full blur-3xl pointer-events-none"></div>
    <div class="absolute bottom-[-10%] left-[-10%] w-[30vw] h-[30vw] bg-[#4A235A]/5 rounded-full blur-3xl pointer-events-none"></div>

    <div class="flex flex-col lg:flex-row items-center justify-center gap-12 lg:gap-24 max-w-6xl w-full z-10">

      <div class="relative w-64 md:w-80 transform rotate-2 hover:rotate-0 transition-transform duration-500 group select-none">

        <div class="absolute -top-4 left-1/2 -translate-x-1/2 w-28 h-8 bg-white/40 backdrop-blur-sm shadow-sm z-20 rotate-1 group-hover:-translate-y-1 transition-transform"></div>

        <div class="bg-white p-4 pb-12 shadow-xl border border-[#4A235A]/5 -rotate-1 group-hover:rotate-0 transition-transform">
          <div class="bg-[#F3EFE0] overflow-hidden aspect-square flex items-center justify-center border border-[#4A235A]/10">
            <img
                src="/images/page404.jpg"
                alt="Illustration Erreur 500"
                class="w-full h-full object-cover opacity-90"
            />
          </div>
          <p class="text-center font-serif italic text-[#4A235A]/60 text-lg mt-4 font-medium">Chef, on a un problème...</p>
        </div>
      </div>

      <div class="flex flex-col items-center lg:items-start text-center lg:text-left">

        <p class="font-mono text-sm bg-[#4A235A]/5 text-[#4A235A]/70 px-4 py-2 rounded-lg border border-[#4A235A]/10 mb-6 max-w-xs md:max-w-md truncate">
          {{ error.statusMessage || 'Internal Server Error' }}
        </p>

        <h1 class="text-8xl md:text-9xl font-black text-[#4A235A] leading-none tracking-tighter opacity-90 mb-2">
          {{ error.statusCode || 500 }}
        </h1>

        <h2 class="text-2xl md:text-4xl font-bold uppercase tracking-tight mb-6">
          Erreur Serveur
        </h2>

        <p class="text-lg md:text-xl text-[#4A235A]/80 max-w-md mb-10 leading-relaxed font-medium">
          Oups ! Quelque chose s'est mal passé de notre côté. Nos petits robots sont sur le coup.
        </p>

        <button @click="handleClearError"
                class="group flex items-center gap-4 bg-[#4A235A] text-[#F3EFE0] px-8 py-4 rounded-full font-bold uppercase tracking-widest shadow-lg hover:shadow-xl hover:-translate-y-1 hover:bg-[#4A235A]/90 transition-all duration-300">

          <svg xmlns="http://www.w3.org/2000/svg" height="24px" viewBox="0 -960 960 960" width="24px" fill="currentColor" class="transition-transform group-hover:rotate-180 duration-500">
            <path d="M480-160q-134 0-227-93t-93-227q0-134 93-227t227-93q69 0 132 28.5T720-690v-110h80v280H520v-80h168q-32-56-87.5-88T480-720q-100 0-170 70t-70 170q0 100 70 170t170 70q77 0 139-44t87-116h84q-28 106-114 173t-196 67Z"/>
          </svg>

          Recharger la page
        </button>
      </div>

    </div>

  </div>
</template>

<script setup lang="ts">
import type {NuxtError} from '#app';
import {defaultSeoTags} from "~/utils/seo";

const props = defineProps<{
  error: NuxtError
}>()

const error = computed(() => props.error);

const handleClearError = () => {
  window.location.reload();
}

const title = `${props.error.statusCode || 500} - Erreur serveur`
const description = "Une erreur s'est produite sur le serveur. Veuillez réessayer ultérieurement."

useSeoMeta({
  ...defaultSeoTags(),
  title,
  description,
  ogTitle: title,
  ogDescription: description,
  ogImage: '/images/illustration500_1152.jpg',
  twitterCard: 'summary',
});
</script>

<style scoped>
@import url('https://fonts.googleapis.com/css2?family=Bricolage+Grotesque:opsz,wght@12..96,200..800&display=swap');

.font-bricolage {
  font-family: 'Bricolage Grotesque', sans-serif;
}
</style>