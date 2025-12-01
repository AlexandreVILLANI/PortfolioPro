<template>
  <div class="bg-[#F3EFE0] text-[#4A235A] w-full overflow-x-hidden font-bricolage flex flex-col min-h-screen">
    
    <Navbar/>
    
    <main class="flex-grow">
      <slot/>
    </main>
    
    <Footer/>
  </div>
</template>

<script setup lang="ts">
import Navbar from "~/components/navigation/Navbar.vue";
import Footer from "~/components/navigation/Footer.vue";

// Intégration du logo comme icône du site (Favicon)
useHead({
  link: [
    { rel: 'icon', type: 'image/jpeg', href: '/images/logo.jpg' }
  ]
})
</script>

<style>
/* Import de la police si elle n'est pas déjà dans nuxt.config */
@import url('https://fonts.googleapis.com/css2?family=Bricolage+Grotesque:opsz,wght@12..96,200..800&display=swap');

/* Définition de la classe de police globale */
.font-bricolage {
  font-family: 'Bricolage Grotesque', sans-serif;
}

/* Scrollbar personnalisée aux couleurs du thème */
::-webkit-scrollbar {
  width: 10px;
}

::-webkit-scrollbar-track {
  background: #F3EFE0; /* Beige */
}

::-webkit-scrollbar-thumb {
  background-color: #4A235A; /* Violet */
  border-radius: 5px;
  border: 2px solid #F3EFE0; /* Bordure beige pour détacher la barre */
}

::-webkit-scrollbar-thumb:hover {
  background-color: #36174D; /* Violet plus foncé au survol */
}

/* Pour Firefox */
html {
  scrollbar-width: thin;
  scrollbar-color: #4A235A #F3EFE0;
}
</style>