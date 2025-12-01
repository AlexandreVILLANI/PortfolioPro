<template>
  <section class="min-h-screen w-full bg-[#F3EFE0] pt-32 pb-20 px-4 md:px-10 font-bricolage overflow-x-hidden">

    <div class="max-w-4xl mx-auto text-center mb-16">
      <p class="text-2xl md:text-4xl font-semibold text-[#4A235A] leading-tight">
        Une question, un projet ou simplement envie d'échanger ? <br>
        <span class="opacity-70 font-normal">N'hésitez pas à me contacter.</span>
      </p>
    </div>

    <div class="flex flex-col lg:flex-row justify-center items-start gap-12 lg:gap-20 max-w-7xl mx-auto">

      <div class="w-full lg:w-3/5">
        <ContactForm/>
      </div>

      <div class="w-full lg:w-2/5 flex flex-col justify-start gap-12 pt-0 lg:pt-10">

        <div class="flex flex-col gap-2">
          <h3 class="text-[#4A235A] text-xl font-bold uppercase tracking-wider">Mes Réseaux</h3>
          <p class="text-[#4A235A]/80 text-lg">Retrouvez-moi aussi sur ces plateformes :</p>
        </div>

        <div class="bg-white/50 p-6 rounded-3xl border border-[#4A235A]/10">
          <Networks :show-full="true" :sizePx="40" class="text-[#4A235A] flex-col gap-6 w-full"/>
        </div>

        <div class="flex flex-col gap-4 mt-4">
          <h3 class="text-[#4A235A] text-xl font-bold uppercase tracking-wider">Mon Parcours</h3>
          
          <a href="/documents/CV_Alexandre_VILLANI.pdf" target="_blank" rel="noopener noreferrer" class="w-fit decoration-0">
            
            <Button class="group flex flex-row items-center gap-4 !bg-[#F3EFE0] px-8 py-4 rounded-full shadow-xl hover:shadow-2xl hover:-translate-y-1 transition-all duration-300 border-2 border-[#4A235A] hover:!bg-[#4A235A]">
              
              <svg xmlns="http://www.w3.org/2000/svg" height="24px" viewBox="0 -960 960 960" width="24px" 
                   class="fill-[#4A235A] group-hover:fill-[#F3EFE0] transition-colors duration-300">
                <path d="M480-320 280-520l56-58 104 104v-326h80v326l104-104 56 58-200 200ZM240-160q-33 0-56.5-23.5T160-240v-120h80v120h480v-120h80v120q0 33-23.5 56.5T720-160H240Z"/>
              </svg>
              
              <span class="text-lg font-bold uppercase tracking-widest text-[#4A235A] group-hover:text-[#F3EFE0] transition-colors duration-300">
                Télécharger mon CV
              </span>
            </Button>
          </a>
        </div>

        <div
            @click="isLightboxOpen = true"
            class="mt-8 relative w-64 md:w-80 mx-auto lg:mx-0 transform rotate-3 hover:rotate-0 hover:scale-105 transition-all duration-500 cursor-pointer group"
        >
          <div class="absolute -top-4 left-1/2 -translate-x-1/2 w-28 h-8 bg-white/40 backdrop-blur-[2px] shadow-sm z-20 -rotate-2 group-hover:-translate-y-1 transition-transform"></div>

          <div class="bg-white p-3 shadow-2xl rotate-1 group-hover:rotate-0 transition-transform">
            <NuxtImg
                src="/images/background/Jolie_bateau.jpg"
                alt="Joli bateau"
                class="w-full h-auto object-cover sepia-[0.15] group-hover:sepia-0 transition-all duration-500"
            />
            <p class="text-center font-serif italic text-gray-500 text-sm mt-2">Cliquez pour agrandir</p>
          </div>
        </div>

      </div>
    </div>

    <Teleport to="body">
      <Transition name="fade">
        <div
            v-if="isLightboxOpen"
            class="fixed inset-0 z-[9999] flex items-center justify-center bg-[#4A235A]/90 backdrop-blur-sm p-4"
            @click.self="isLightboxOpen = false"
        >

          <div class="relative max-w-5xl w-full flex flex-col items-center">

            <button
                @click="isLightboxOpen = false"
                class="absolute -top-12 right-0 md:-right-8 text-[#F3EFE0] hover:text-white hover:scale-110 transition-transform"
            >
              <svg xmlns="http://www.w3.org/2000/svg" height="40px" viewBox="0 -960 960 960" width="40px" fill="currentColor"><path d="m256-200-56-56 224-224-224-224 56-56 224 224 224-224 56 56-224 224 224 224-56 56-224-224-224 224Z"/></svg>
            </button>

            <div class="bg-[#F3EFE0] p-2 md:p-4 rounded shadow-2xl">
              <NuxtImg
                  src="/images/background/Jolie_bateau.jpg"
                  alt="Joli bateau en grand"
                  class="max-h-[70vh] w-auto object-contain rounded-sm"
              />
            </div>

            <div class="mt-6 text-center">
              <h4 class="text-2xl md:text-3xl text-[#F3EFE0] font-bricolage font-bold uppercase tracking-widest">
                L'Escala - Espagne
              </h4>
              <p class="text-[#F3EFE0]/80 font-serif italic text-lg mt-2">
                « La mer, une fois qu’elle vous a ensorcelé, vous tient dans son filet pour toujours. » Jacques-Yves Cousteau <br>
                <span class="text-sm opacity-60 not-italic font-sans">Photographie personnelle</span>
              </p>
            </div>

          </div>
        </div>
      </Transition>
    </Teleport>

  </section>
</template>

<script setup lang="ts">
import { ref, onMounted, onUnmounted } from 'vue';
import Networks from "~/components/navigation/Networks.vue";
import Button from "~/components/elements/Button.vue";
import ContactForm from "~/components/pages/contact/ContactForm.vue";

// État de la lightbox
const isLightboxOpen = ref(false);

// Fermer avec la touche ECHAP
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

/* Animation d'apparition de la popup */
.fade-enter-active,
.fade-leave-active {
  transition: opacity 0.3s ease;
}

.fade-enter-from,
.fade-leave-to {
  opacity: 0;
}
</style>