<script setup lang="ts">
import Networks from "~/components/navigation/Networks.vue";

const route = useRoute();
const router = useRouter();
const isMenuOpen = ref(false);

const navLinks = [
  {
    path: '/',
    label: 'Accueil',
    shape: 'blob-shape',
    color: '#FFC107',
    textColor: 'black'
  },
  {
    path: '/projects',
    label: 'Projet',
    shape: 'square-shape',
    color: '#1E4FD8',
    textColor: 'white'
  },
  {
    path: '/about-me',
    label: 'À propos',
    shape: 'circle-shape',
    color: '#FF3D00',
    textColor: 'black'
  }
];

function isCurrentRoute(expected: string): boolean {
  const currentPath = route.fullPath.endsWith('/') ? route.fullPath : route.fullPath + '/';
  const expectedPath = expected.endsWith('/') ? expected : expected + '/';
  return currentPath === expectedPath;
}

onMounted(() => {
  const handleEscape = (e: KeyboardEvent) => {
    if (e.key === 'Escape') isMenuOpen.value = false;
  };
  window.addEventListener('keydown', handleEscape);
  onUnmounted(() => window.removeEventListener('keydown', handleEscape));
});

watch(isMenuOpen, (isOpen) => {
  if (isOpen) {
    document.body.style.overflow = 'hidden !important';
  } else {
    document.body.style.overflow = '';
  }
});
</script>

<template>
  <nav class="navbar-container">
    <div class="brand"></div>

    <div class="nav-buttons">
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

    <button class="mobile-toggle" @click="isMenuOpen = !isMenuOpen">
      <span v-if="!isMenuOpen" style="color: black; font-weight: bold;">Menu</span>
      <span v-else style="color: black; font-weight: bold;">Fermer</span>
    </button>

    <div v-if="isMenuOpen" class="mobile-overlay">
      <Networks />
    </div>
  </nav>
</template>

<style scoped>
/* navbar transparente */
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
}

/* Alignement à droite */
.nav-buttons {
  display: flex;
  align-items: center;
  margin-left: auto;
  gap: 0; /* Pas d'espace entre les éléments */
}

/* Style de base des boutons */
.geo-btn {
  display: flex;
  align-items: center;
  justify-content: center;
  text-decoration: none;
  font-weight: 700;

  /* MODIFICATION : Texte un peu plus petit */
  font-size: 0.8rem;

  background-color: var(--btn-bg);
  color: var(--btn-text);

  /* MODIFICATION : Taille réduite */
  width: 80px;
  height: 80px;

  /* MODIFICATION : Marge à 0 pour qu'ils se collent sans chevaucher */
  margin-left: 0;

  position: relative;
  z-index: var(--z-index);
  box-shadow: 0 4px 10px rgba(0,0,0,0.1);
  transition: transform 0.4s cubic-bezier(0.34, 1.56, 0.64, 1);
}

.geo-btn:hover {
  transform: scale(1.1) rotate(30deg);
  z-index: 100 !important;
}

/* --- LES FORMES --- */
.blob-shape {
  border-radius: 40% 60% 50% 50% / 50% 50% 60% 40%;
}

.square-shape {
  border-radius: 0;
}

.circle-shape {
  border-radius: 50%;
}

/* --- MOBILE --- */
.mobile-toggle {
  display: none;
  z-index: 60;
  background: transparent;
  border: none;
  cursor: pointer;
}

.mobile-overlay {
  position: fixed;
  inset: 0;
  background: white;
  z-index: 40;
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
}

@media (max-width: 768px) {
  .nav-buttons { display: none; }
  .mobile-toggle { display: block; }
}
</style>