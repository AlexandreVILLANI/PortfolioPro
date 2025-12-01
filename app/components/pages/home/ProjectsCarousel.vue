<template>
  <section class="relative overflow-hidden w-screen" id="projects-container" style="height: 100vh">

    <svg class="absolute top-0 left-0 w-full z-20 h-auto min-h-[60px] md:min-h-[100px] block" viewBox="0 0 1000 100" preserveAspectRatio="none" xmlns="http://www.w3.org/2000/svg">
      <g fill="#F3EFE0">
        <path d="M0 1v99c134.3 0 153.7-99 296-99H0Z" opacity=".5"></path>
        <path d="M1000 4v86C833.3 90 833.3 3.6 666.7 3.6S500 90 333.3 90 166.7 4 0 4h1000Z" opacity=".5"></path>
        <path d="M617 1v86C372 119 384 1 196 1h421Z" opacity=".5"></path>
        <path d="M1000 0H0v52C62.5 28 125 4 250 4c250 0 250 96 500 96 125 0 187.5-24 250-48V0Z"></path>
      </g>
    </svg>

    <div class="absolute inset-0 w-full h-full z-0">
      <NuxtPicture alt="Fond projet" src="/images/background/home_3.jpg" class="w-full h-full" :imgAttrs="{ class: 'w-full h-full object-cover' }" />
      <div class="absolute inset-0 bg-black/10"></div>
    </div>

    <div class="absolute bottom-0 left-0 z-10 w-full md:w-auto p-4 md:p-12 flex flex-col items-start gap-2">

      <h2 class="text-4xl md:text-6xl font-black text-white uppercase tracking-tighter drop-shadow-lg ml-2 transform translate-y-2">
        Mes projets
      </h2>

      <div class="bg-[#4A235A] text-[#F3EFE0] p-6 rounded-tl-3xl rounded-tr-3xl rounded-br-3xl rounded-bl-none shadow-2xl w-full md:w-[500px] border-l-8 border-[#F3EFE0]">

        <div class="w-full mb-4">
          <ProjectsHomeCarousel ref="carouselRef"/>
        </div>

        <div class="flex items-center justify-between border-t border-[#F3EFE0]/20 pt-4 mt-2">

          <div class="flex items-center gap-3">
            <button @click="carouselRef?.prev()" class="w-10 h-10 rounded-full bg-[#F3EFE0] text-[#4A235A] flex items-center justify-center hover:scale-110 transition-transform" aria-label="Précédent">
              <svg xmlns="http://www.w3.org/2000/svg" height="20px" viewBox="0 -960 960 960" width="20px" fill="currentColor"><path d="M560-240 320-480l240-240 56 56-184 184 184 184-56 56Z"/></svg>
            </button>

            <button @click="carouselRef?.next()" class="w-10 h-10 rounded-full bg-[#F3EFE0] text-[#4A235A] flex items-center justify-center hover:scale-110 transition-transform" aria-label="Suivant">
              <svg xmlns="http://www.w3.org/2000/svg" height="20px" viewBox="0 -960 960 960" width="20px" fill="currentColor"><path d="M504-480 320-664l56-56 240 240-240 240-56-56 184-184Z"/></svg>
            </button>

            <span class="ml-2 font-mono text-sm opacity-60">
               {{ (carouselRef?.currentSlide || 0) + 1 }} / {{ carouselRef?.projects?.length || '?' }}
            </span>
          </div>

          <NuxtLink to="/projects" class="group flex items-center gap-2">
            <span class="font-bold uppercase text-sm tracking-widest group-hover:text-white transition-colors">Tout voir</span>
            <svg class="transform group-hover:translate-x-1 transition-transform" xmlns="http://www.w3.org/2000/svg" height="20px" viewBox="0 -960 960 960" width="20px" fill="currentColor"><path d="m321-80-71-71 329-329-329-329 71-71 400 400L321-80Z"/></svg>
          </NuxtLink>

        </div>
      </div>
    </div>

    <div class="absolute bottom-6 right-6 md:bottom-12 md:right-12 z-10 hidden sm:block">
      <div class="flex items-center gap-3 bg-black/40 backdrop-blur-md px-4 py-2 rounded-full border border-white/10 text-white/90 shadow-lg hover:bg-black/60 transition-colors cursor-help">
        <svg xmlns="http://www.w3.org/2000/svg" height="18px" viewBox="0 -960 960 960" width="18px" fill="currentColor" class="text-[#F3EFE0]">
          <path d="M480-480q33 0 56.5-23.5T560-560q0-33-23.5-56.5T480-640q-33 0-56.5 23.5T400-560q0 33 23.5 56.5T480-480Zm0 294q122-112 181-203.5T720-552q0-109-69.5-178.5T480-800q-101 0-170.5 69.5T240-552q0 71 59 162.5T480-186Zm0 106Q319-217 239.5-334.5T160-552q0-150 96.5-239T480-880q127 0 223.5 89T800-552q0 115-79.5 232.5T480-80Zm0-480Z"/>
        </svg>
        <div class="flex flex-col">
          <span class="text-xs uppercase font-bold tracking-wider text-[#F3EFE0]">911 Carrera RS Jaune</span>
          <span class="text-sm font-light italic">Circuit Dijon-Prenois, France</span>
        </div>
      </div>
    </div>

  </section>
</template>

<script setup lang="ts">
import {ref} from 'vue'
import ProjectsHomeCarousel from "~/components/pages/home/ProjectsHomeCarousel.vue";

const carouselRef = ref<InstanceType<typeof ProjectsHomeCarousel> | null>(null)
</script>