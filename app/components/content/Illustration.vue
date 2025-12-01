<template>
  <div class="relative flex flex-row items-center justify-center"
       :class="full ? 'w-full h-full' : ''">
    
    <div class="relative group rounded-xl overflow-hidden h-full flex items-center content-center justify-center">
      <NuxtImg :src="illustration"
               :alt="alt || illustration"
               sizes="xs:100vw sm:100vw md:100vw lg:100vw xl:100vw xxl:100vw"
               class="max-w-full max-h-full object-contain rounded-xl"/>

      <button
          type="button"
          @click="openModal"
          aria-label="Agrandir l'image"
          class="transition-opacity duration-500 cursor-pointer opacity-0 group-hover:opacity-100 absolute w-full h-full top-0 left-0 bg-black/40 flex items-center justify-center rounded-xl">
        <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 -960 960 960"
             class="fill-white h-12 w-12 md:h-20 md:w-20 drop-shadow-lg"
             aria-hidden="true">
          <path d="M480-320q75 0 127.5-52.5T660-500q0-75-52.5-127.5T480-680q-75 0-127.5 52.5T300-500q0 75 52.5 127.5T480-320Zm0-72q-45 0-76.5-31.5T372-500q0-45 31.5-76.5T480-608q45 0 76.5 31.5T588-500q0 45-31.5 76.5T480-392Zm0 192q-146 0-266-81.5T40-500q54-137 174-218.5T480-800q146 0 266 81.5T920-500q-54 137-174 218.5T480-200Zm0-300Zm0 220q113 0 207.5-59.5T832-500q-50-101-144.5-160.5T480-720q-113 0-207.5 59.5T128-500q50 101 144.5 160.5T480-280Z"/>
        </svg>
      </button>
    </div>

    <Teleport to="body">
      <Transition name="fade">
        <div v-if="isModalOpen"
             @click="closeModal"
             class="fixed inset-0 z-[9999] flex items-center justify-center bg-black/90 backdrop-blur-sm p-4 md:p-6">

          <button
              type="button"
              aria-label="Fermer l'image en grand"
              @click.stop="closeModal"
              class="absolute top-4 right-4 md:top-6 md:right-6 text-white hover:text-gray-300 transition-colors z-20 bg-black/20 rounded-full p-2 hover:bg-black/40">
            <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 -960 960 960"
                 class="w-8 h-8 md:w-10 md:h-10 fill-current"
                 aria-hidden="true">
              <path d="m256-200-56-56 224-224-224-224 56-56 224 224 224-224 56 56-224 224 224 224-56 56-224-224-224 224Z"/>
            </svg>
          </button>

          <div @click.stop class="relative w-full h-full flex items-center justify-center pointer-events-none">
            
            <Transition name="fade">
              <div v-if="!imageLoaded"
                   class="absolute inset-0 flex items-center justify-center">
                <div class="w-12 h-12 border-4 border-white/20 border-t-white rounded-full animate-spin"></div>
              </div>
            </Transition>

            <Transition name="zoom">
              <NuxtImg v-show="imageLoaded"
                       :src="illustration"
                       :alt="alt || illustration"
                       @load="onImageLoad"
                       sizes="xs:100vw sm:100vw md:100vw lg:100vw xl:100vw xxl:100vw"
                       class="max-w-full max-h-[90vh] object-contain rounded-lg shadow-2xl pointer-events-auto cursor-default"/>
            </Transition>
          </div>

        </div>
      </Transition>
    </Teleport>
  </div>
</template>

<script setup lang="ts">
import { ref, watch, onMounted, onUnmounted } from 'vue';

const props = defineProps<{
  illustration: string,
  alt?: string,
  full?: boolean
}>();

const isModalOpen = ref(false);
const imageLoaded = ref(false);

// Reset image loaded state when modal opens
watch(isModalOpen, (newVal) => {
  if (newVal) {
    imageLoaded.value = false;
  }
});

const openModal = () => {
  isModalOpen.value = true;
  if (typeof document !== 'undefined') {
    document.body.style.overflow = 'hidden'; // Empêche le scroll du fond
  }
};

const closeModal = () => {
  isModalOpen.value = false;
  if (typeof document !== 'undefined') {
    document.body.style.overflow = '';
  }
};

const onImageLoad = () => {
  imageLoaded.value = true;
};

// Fermer avec Echap
const handleKeydown = (e: KeyboardEvent) => {
  if (e.key === 'Escape' && isModalOpen.value) {
    closeModal();
  }
};

onMounted(() => {
  if (typeof window !== 'undefined') {
    window.addEventListener('keydown', handleKeydown);
  }
});

onUnmounted(() => {
  if (typeof window !== 'undefined') {
    window.removeEventListener('keydown', handleKeydown);
  }
});
</script>

<style scoped>
/* Fade transition for backdrop */
.fade-enter-active, .fade-leave-active { transition: opacity 0.3s ease; }
.fade-enter-from, .fade-leave-to { opacity: 0; }

/* Zoom transition for image */
.zoom-enter-active { transition: all 0.4s cubic-bezier(0.34, 1.56, 0.64, 1); }
.zoom-leave-active { transition: all 0.3s ease; }
.zoom-enter-from { opacity: 0; transform: scale(0.8); }
.zoom-leave-to { opacity: 0; transform: scale(0.95); }

/* Loading spinner animation */
@keyframes spin { to { transform: rotate(360deg); } }
.animate-spin { animation: spin 1s linear infinite; }
</style>