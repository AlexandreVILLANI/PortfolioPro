<template>
  <div class="hero-section">

    <div class="hero-row">

      <div class="content">
        <h1 class="name">
          <span class="firstname">Alexandre</span>
          <span class="lastname">VILLANI</span>
        </h1>

        <h2 class="subtitle">
          Étudiant en BUT 3 Informatique - Développeur FullStack Junior
        </h2>

        <div class="cta-container">
          <NuxtLink to="/about-me" class="about-btn">
            QUI SUIS-JE ?
            <span class="arrow">→</span>
          </NuxtLink>
        </div>
      </div>

      <div class="image-wrapper">
        <div
            @click="isLightboxOpen = true"
            class="relative w-64 md:w-80 transform rotate-3 hover:rotate-0 hover:scale-105 transition-all duration-500 cursor-pointer group"
        >
          <div class="absolute -top-4 left-1/2 -translate-x-1/2 w-28 h-8 bg-white/40 backdrop-blur-[2px] shadow-sm z-20 -rotate-2 group-hover:-translate-y-1 transition-transform"></div>

          <div class="bg-white p-3 shadow-2xl rotate-1 group-hover:rotate-0 transition-transform">
            <NuxtImg
                src="/images/background/Music.jpg"
                alt="Eurockéennes"
                class="w-full h-auto object-cover sepia-[0.15] group-hover:sepia-0 transition-all duration-500"
            />
            <p class="text-center font-serif italic text-gray-500 text-sm mt-2">Cliquez pour agrandir</p>
          </div>
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
                src="/images/background/Music.jpg"
                alt="Eurockéenne"
                class="max-h-[70vh] w-auto object-contain rounded-sm"
            />
          </div>

          <div class="mt-6 text-center">
            <h4 class="text-2xl md:text-3xl text-[#F3EFE0] font-bricolage font-bold uppercase tracking-widest">
              Lomepal - Eurockéennes
            </h4>
            <p class="text-[#F3EFE0]/80 font-serif italic text-lg mt-2">
              « Le chant est le langage du cœur. » Michel Berger <br>
              <span class="text-sm opacity-60 not-italic font-sans">Photographie personnelle</span>
            </p>
          </div>

        </div>
      </div>
    </Transition>
  </Teleport>
</template>

<script setup lang="ts">
import { onMounted, onUnmounted, ref } from "vue";

const isLightboxOpen = ref(false);

const handleKeydown = (e: KeyboardEvent) => {
  if (e.key === 'Escape') isLightboxOpen.value = false;
};

onMounted(() => window.addEventListener('keydown', handleKeydown));
onUnmounted(() => window.removeEventListener('keydown', handleKeydown));
</script>

<style scoped>
@import url('https://fonts.googleapis.com/css2?family=Bricolage+Grotesque:opsz,wght@12..96,200..800&display=swap');

/* --- LAYOUT PRINCIPAL --- */
.hero-section {
  width: 100%;
  min-height: 75vh;
  background-color: #F3EFE0; /* Beige */

  /* On utilise flex pour centrer verticalement le tout */
  display: flex;
  align-items: center;
  padding: 0 5vw;
  box-sizing: border-box;
  overflow: hidden; /* Évite les scrollbars si l'image tourne */
}

.hero-row {
  width: 100%;
  max-width: 1600px;
  margin: 0 auto;

  display: flex;
  flex-direction: row; /* Texte à gauche, Image à droite */
  justify-content: space-between; /* Espace maximum entre les deux */
  align-items: center; /* Alignement vertical */
  gap: 4rem;
}

/* --- TEXTE --- */
.content {
  /* Le texte prend l'espace disponible mais laisse de la place à l'image */
  flex: 1;
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: flex-start;
  z-index: 10;
}

.name {
  font-family: 'Bricolage Grotesque', sans-serif;
  color: #4A235A;
  line-height: 0.8;
  margin: 0;
}

.firstname, .lastname { display: block; }

.firstname {
  font-size: clamp(4rem, 8vw, 9rem);
  font-weight: 600;
  letter-spacing: -3px;
}

.lastname {
  font-size: clamp(5rem, 12vw, 13rem);
  font-weight: 800;
  letter-spacing: -6px;
  text-transform: uppercase;
  margin-left: -5px;
}

.subtitle {
  font-family: 'Bricolage Grotesque', sans-serif;
  color: #4A235A;
  font-size: clamp(1.2rem, 2vw, 2.5rem);
  font-weight: 500;
  margin-top: 1.5rem;
  margin-bottom: 0;
  letter-spacing: -0.5px;
  opacity: 0.9;
}

/* --- IMAGE (Positionnement) --- */
.image-wrapper {
  /* Empêche l'image de s'écraser */
  flex-shrink: 0;
  /* Optionnel : décaler un peu vers la gauche pour l'équilibre */
  margin-right: 2vw;
}

/* --- BOUTON --- */
.cta-container {
  margin-top: 2.5rem;
}

.about-btn {
  display: inline-flex;
  align-items: center;
  gap: 10px;
  font-family: 'Bricolage Grotesque', sans-serif;
  font-size: 1.2rem;
  font-weight: 600;
  text-decoration: none;
  color: #4A235A;
  border: 2px solid #4A235A;
  padding: 12px 24px;
  border-radius: 50px;
  transition: all 0.3s ease;
}

.about-btn:hover {
  background-color: #4A235A;
  color: #F3EFE0;
  transform: translateY(-3px);
  box-shadow: 0 5px 15px rgba(74, 35, 90, 0.2);
}

.arrow {
  font-size: 1.4rem;
  transition: transform 0.3s ease;
}

.about-btn:hover .arrow {
  transform: translateX(5px);
}

/* --- TRANSITIONS --- */
.fade-enter-active,
.fade-leave-active {
  transition: opacity 0.3s ease;
}

.fade-enter-from,
.fade-leave-to {
  opacity: 0;
}

/* --- RESPONSIVE MOBILE --- */
@media (max-width: 1024px) {
  .hero-row {
    flex-direction: column-reverse; /* Image au dessus, texte en dessous sur mobile */
    text-align: center;
    justify-content: center;
    gap: 3rem;
    padding: 2rem 0;
  }

  .content {
    align-items: center; /* Centre le texte sur mobile */
  }

  .image-wrapper {
    margin-right: 0;
  }

  .lastname { margin-left: 0; }
}
</style>