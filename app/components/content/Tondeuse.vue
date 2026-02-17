<template>
  <div class="flex flex-col w-full gap-10" :class="inverse ? 'md:flex-row-reverse' : 'md:flex-row'">
    
    <div ref="imageContainer"
         class="min-w-0 self-start overflow-hidden rounded-xl h-auto w-full max-h-full max-w-full object-contain"
         :class="illustrationFlex"
         :style="{ maxHeight: textHeight }">
      <div class="relative group h-full pb-4 w-full" :style="{ maxHeight: textHeight }">
        <NuxtImg :src="image"
                 :alt="image"
                 :style="{ maxHeight: textHeight }"
                 sizes="xs:100vw sm:100vw md:100vw lg:100vw xl:100vw xxl:100vw"
                 class="w-full h-full object-contain rounded-xl pb-4"/>
        
        <button
            type="button"
            @click="openModal"
            aria-label="Agrandir l'image"
            class="transition-opacity duration-500 cursor-pointer opacity-0 group-hover:opacity-100 absolute w-full h-full top-0 left-0 bg-black/40 flex items-center justify-center rounded-xl">
          <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 -960 960 960"
               class="fill-current text-white h-12 w-12 md:h-20 md:w-20 drop-shadow-lg"
               aria-hidden="true">
            <path
                d="M480-320q75 0 127.5-52.5T660-500q0-75-52.5-127.5T480-680q-75 0-127.5 52.5T300-500q0 75 52.5 127.5T480-320Zm0-72q-45 0-76.5-31.5T372-500q0-45 31.5-76.5T480-608q45 0 76.5 31.5T588-500q0 45-31.5 76.5T480-392Zm0 192q-146 0-266-81.5T40-500q54-137 174-218.5T480-800q146 0 266 81.5T920-500q-54 137-174 218.5T480-200Zm0-300Zm0 220q113 0 207.5-59.5T832-500q-50-101-144.5-160.5T480-720q-113 0-207.5 59.5T128-500q50 101 144.5 160.5T480-280Z"/>
          </svg>
        </button>
      </div>
    </div>

    <div ref="textContainer" class="min-w-0 h-fit" :class="slotFlex">
      <slot/>
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
              <path
                  d="m256-200-56-56 224-224-224-224 56-56 224 224 224-224 56 56-224 224 224 224-56 56-224-224-224 224Z"/>
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
                       :src="image"
                       :alt="image"
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
import {computed, onMounted, onUpdated, onUnmounted, ref, watch} from 'vue';

const props = withDefaults(
    defineProps<{
      image: string,
      inverse?: boolean,
      ratio?: "1/2" | "1/3" | "2/3" | "1/4" | "3/4" | "2/5" | "3/5"
    }>(),
    {
      inverse: false,
      ratio: "1/2"
    }
);

// --- Refs pour la logique de hauteur ---
const textContainer = ref<HTMLElement>();
const imageContainer = ref<HTMLElement>();
const textHeight = ref('auto');

// --- Refs pour la modale ---
const isModalOpen = ref(false);
const imageLoaded = ref(false);

// --- Logique d'ajustement de hauteur (Conservation du fonctionnement original) ---
const updateHeight = () => {
  if (textContainer.value) {
    textHeight.value = `${textContainer.value.offsetHeight}px`;
  }
};

onMounted(() => {
  setTimeout(updateHeight, 100);
  window.addEventListener('resize', updateHeight);
  if (typeof window !== 'undefined') {
    window.addEventListener('keydown', handleKeydown);
  }
});

onUpdated(() => {
  setTimeout(updateHeight, 50);
});

onUnmounted(() => {
  window.removeEventListener('resize', updateHeight);
  if (typeof window !== 'undefined') {
    window.removeEventListener('keydown', handleKeydown);
  }
});

// --- Logique Modale ---
watch(isModalOpen, (newVal) => {
  if (newVal) {
    imageLoaded.value = false;
  }
});

const openModal = () => {
  isModalOpen.value = true;
  if (typeof document !== 'undefined') {
    document.body.style.overflow = 'hidden';
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

const handleKeydown = (e: KeyboardEvent) => {
  if (e.key === 'Escape' && isModalOpen.value) {
    closeModal();
  }
};

// --- Logique Ratio (Conservation du fonctionnement original) ---
const ratioMap: Record<string, [string, string]> = {
  "1/2": ["flex-1", "flex-1"],
  "1/3": ["flex-[1]", "flex-[2]"],
  "2/3": ["flex-[2]", "flex-[1]"],
  "1/4": ["flex-[1]", "flex-[3]"],
  "3/4": ["flex-[3]", "flex-[1]"],
  "2/5": ["flex-[2]", "flex-[5]"],
  "3/5": ["flex-[3]", "flex-[5]"],
};

const illustrationFlex = computed(() => {
  const [imgFlex, _] = ratioMap[props.ratio]!;
  return imgFlex;
});

const slotFlex = computed(() => {
  const [_, textFlex] = ratioMap[props.ratio]!;
  return textFlex;
});
</script>

<style scoped>
/* Fade transition for backdrop */
.fade-enter-active,
.fade-leave-active {
  transition: opacity 0.3s ease;
}

.fade-enter-from,
.fade-leave-to {
  opacity: 0;
}

/* Zoom transition for image */
.zoom-enter-active {
  transition: all 0.4s cubic-bezier(0.34, 1.56, 0.64, 1);
}

.zoom-leave-active {
  transition: all 0.3s ease;
}

.zoom-enter-from {
  opacity: 0;
  transform: scale(0.8);
}

.zoom-leave-to {
  opacity: 0;
  transform: scale(0.95);
}

/* Loading spinner animation */
@keyframes spin {
  to {
    transform: rotate(360deg);
  }
}

.animate-spin {
  animation: spin 1s linear infinite;
}
</style>