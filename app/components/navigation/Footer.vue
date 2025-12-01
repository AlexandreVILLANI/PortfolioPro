<template>
  <footer class="w-full bg-[#F3EFE0] text-[#4A235A] py-8 px-6 md:px-12 font-['Bricolage_Grotesque']">

    <div class="w-full flex flex-col md:flex-row items-center justify-between gap-6 md:gap-0">

      <div class="w-full md:w-auto text-center md:text-left order-3 md:order-1">
        <p class="font-bold text-sm sm:text-base uppercase tracking-wide">
          &copy; Alexandre VILLANI - 2025
        </p>
      </div>

      <nav class="order-2">
        <ul class="flex flex-wrap justify-center items-center gap-6 sm:gap-10 list-none m-0 p-0">
          <li v-for="(nav, index) in navLinks" :key="index">
            <NuxtLink
                :to="nav.path"
                class="group relative font-black text-lg uppercase tracking-tight hover:opacity-70 transition-opacity">
              {{ nav.label }}
              <span class="absolute -bottom-1 left-1/2 w-0 h-0.5 bg-[#4A235A] group-hover:w-full group-hover:left-0 transition-all duration-300"></span>
            </NuxtLink>
          </li>
        </ul>
      </nav>

      <div class="w-full md:w-auto flex justify-center md:justify-end order-1 md:order-3">
        <a href="https://www.instagram.com/f3.5alex/"
           target="_blank"
           rel="noopener noreferrer"
           class="flex items-center gap-3 group cursor-pointer transition-all hover:opacity-80">
          <span class="font-medium text-base sm:text-lg group-hover:underline underline-offset-4">
            J'ai aussi un compte photo si jamais
          </span>
          <span class="text-2xl transform group-hover:rotate-12 group-hover:scale-110 transition-transform duration-300">
            📸
          </span>
        </a>
      </div>

    </div>
  </footer>
</template>

<script setup lang="ts">
const navLinks = [
  {path: '/', label: 'Accueil'},
  {path: '/projects', label: 'Projets'},
  {path: '/about-me', label: 'À propos'}
];
</script>

<style scoped>
/* @import url('https://fonts.googleapis.com/css2?family=Bricolage+Grotesque:opsz,wght@12..96,200..800&display=swap'); */

footer {
  /* Au cas où la police ne charge pas, fallback propre */
  font-family: 'Bricolage Grotesque', sans-serif;
}
</style>