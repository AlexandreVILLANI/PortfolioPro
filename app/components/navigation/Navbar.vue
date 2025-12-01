<script setup lang="ts">
import Networks from "~/components/navigation/Networks.vue";

const route = useRoute();
const isMenuOpen = ref(false);

const navLinks = [
  { path: '/', label: 'Accueil', shape: 'blob-shape', color: '#FFC107', textColor: 'black' },
  { path: '/projects', label: 'Projets', shape: 'square-shape', color: '#1E4FD8', textColor: 'white' },
  { path: '/about-me', label: 'À propos', shape: 'circle-shape', color: '#FF3D00', textColor: 'black' }
];

function isCurrentRoute(expected: string): boolean {
  const currentPath = route.fullPath.endsWith('/') ? route.fullPath : route.fullPath + '/';
  const expectedPath = expected.endsWith('/') ? expected : expected + '/';
  return currentPath === expectedPath;
}

// Fermer le menu si on change de page
watch(() => route.fullPath, () => {
  isMenuOpen.value = false;
});

// Bloquer le scroll quand le menu est ouvert
watch(isMenuOpen, (isOpen) => {
  if (typeof document !== 'undefined') {
    document.body.style.overflow = isOpen ? 'hidden' : '';
  }
});
</script>

<template>
  <nav class="navbar-container font-bricolage">
    
    <div class="brand"></div>

    <div class="nav-buttons hidden md:flex">
      <NuxtLink
          v-for="(link, index) in navLinks"
          :key="link.path"
          :to="link.path"
          class="geo-btn"
          :class="[link.shape, { active: isCurrentRoute(link.path) }]"
          :style="{ '--btn-bg': link.color, '--btn-text': link.textColor, '--z-index': navLinks.length - index }"
      >
        <span>{{ link.label }}</span>
      </NuxtLink>
    </div>

    <button class="mobile-toggle md:hidden" @click="isMenuOpen = !isMenuOpen">
      <span class="text-lg font-bold uppercase tracking-wider transition-colors duration-300"
            :class="isMenuOpen ? 'text-[#F3EFE0]' : 'text-[#4A235A]'">
        {{ isMenuOpen ? 'Fermer' : 'Menu' }}
      </span>
    </button>

    <Transition name="slide-fade">
      <div v-if="isMenuOpen" class="mobile-overlay">
        
        <ul class="flex flex-col items-center gap-8 mb-12">
          <li v-for="link in navLinks" :key="link.path">
            <NuxtLink 
              :to="link.path" 
              class="text-4xl font-black uppercase tracking-tight text-[#F3EFE0] hover:text-[#FF6B35] transition-colors"
            >
              {{ link.label }}
            </NuxtLink>
          </li>
        </ul>

        <div class="text-[#F3EFE0]">
          <Networks :sizePx="32" />
        </div>

      </div>
    </Transition>
  </nav>
</template>

<style scoped>
@import url('https://fonts.googleapis.com/css2?family=Bricolage+Grotesque:opsz,wght@12..96,200..800&display=swap');

.font-bricolage {
  font-family: 'Bricolage Grotesque', sans-serif;
}

.navbar-container {
  position: fixed;
  top: 0;
  left: 0;
  width: 100%;
  padding: 1rem 2rem;
  display: flex;
  justify-content: space-between;
  align-items: center;
  z-index: 50;
  background: transparent;
  pointer-events: none; 
}

/* Réactive les clics */
.nav-buttons, .mobile-toggle, .brand {
  pointer-events: auto;
}

/* --- DESKTOP STYLES --- */
.nav-buttons {
  align-items: center;
  margin-left: auto;
  gap: 0; 
}

.geo-btn {
  display: flex;
  align-items: center;
  justify-content: center;
  text-decoration: none;
  font-weight: 700;
  font-size: 0.8rem;
  background-color: var(--btn-bg);
  color: var(--btn-text);
  width: 80px;
  height: 80px;
  margin-left: 0;
  position: relative;
  z-index: var(--z-index);
  box-shadow: 0 4px 10px rgba(0,0,0,0.1);
  transition: transform 0.4s cubic-bezier(0.34, 1.56, 0.64, 1);
}

.geo-btn:hover {
  transform: scale(1.1) rotate(10deg);
  z-index: 100 !important;
}

.blob-shape { border-radius: 40% 60% 50% 50% / 50% 50% 60% 40%; }
.square-shape { border-radius: 4px; transform: rotate(-5deg); }
.circle-shape { border-radius: 50%; }

/* --- MOBILE STYLES --- */
.mobile-toggle {
  z-index: 60;
  background: transparent;
  border: none;
  cursor: pointer;
  pointer-events: auto;
  margin-left: auto;
}

.mobile-overlay {
  position: fixed;
  inset: 0;
  background-color: #4A235A;
  z-index: 55;
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  pointer-events: auto;
  padding: 2rem;
}

/* --- ANIMATIONS --- */
.slide-fade-enter-active,
.slide-fade-leave-active {
  transition: all 0.3s ease-out;
}

.slide-fade-enter-from,
.slide-fade-leave-to {
  transform: translateY(-20px);
  opacity: 0;
}
</style>