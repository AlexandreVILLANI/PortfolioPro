<template>
  <div class="flex flex-col w-full gap-10" :class="inverse ? 'md:flex-row-reverse' : 'md:flex-row'">
    <!-- Image Container -->
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
            class="transition-opacity duration-500 cursor-pointer opacity-0 group-hover:opacity-100 absolute w-full h-full top-0 left-0 bg-black/75 flex items-center justify-center rounded-xl">
          <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 -960 960 960"
               class="fill-current text-white h-12 w-12 md:h-20 md:w-20"
               aria-hidden="true">
            <path
                d="M480-320q75 0 127.5-52.5T660-500q0-75-52.5-127.5T480-680q-75 0-127.5 52.5T300-500q0 75 52.5 127.5T480-320Zm0-72q-45 0-76.5-31.5T372-500q0-45 31.5-76.5T480-608q45 0 76.5 31.5T588-500q0 45-31.5 76.5T480-392Zm0 192q-146 0-266-81.5T40-500q54-137 174-218.5T480-800q146 0 266 81.5T920-500q-54 137-174 218.5T480-200Zm0-300Zm0 220q113 0 207.5-59.5T832-500q-50-101-144.5-160.5T480-720q-113 0-207.5 59.5T128-500q50 101 144.5 160.5T480-280Z"/>
          </svg>
        </button>
      </div>
    </div>

    <!-- Text Container -->
    <div ref="textContainer" class="min-w-0 h-fit" :class="slotFlex">
      <slot/>
    </div>

    <!-- Modal -->
    <Teleport to="body">
      <Transition name="fade">
        <div v-if="isModalOpen"
             @click="closeModal"
             class="fixed inset-0 z-[9999] flex items-center justify-center bg-black/90 backdrop-blur-sm p-4 md:p-6">

          <!-- Close button -->
          <button
              type="button"
              aria-label="Fermer l'image en grand"
              @click.stop="closeModal"
              class="absolute top-4 right-4 md:top-6 md:right-6 text-white hover:text-gray-300 transition-colors z-10">
            <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 -960 960 960"
                 class="w-8 h-8 md:w-10 md:h-10 fill-current"
                 aria-hidden="true">
              <path
                  d="m256-200-56-56 224-224-224-224 56-56 224 224 224-224 56 56-224 224 224 224-56 56-224-224-224 224Z"/>
            </svg>
          </button>

          <!-- Image container -->
          <div @click.stop class="flex flex-col items-center gap-4 md:gap-6 w-full max-w-7xl">
            <!-- Image wrapper with fixed dimensions and loading state -->
            <div class="relative w-full h-[60vh] md:h-[70vh] flex items-center justify-center">
              <!-- Loading spinner -->
              <Transition name="fade">
                <div v-if="!imageLoaded"
                     class="absolute inset-0 bg-white/5 rounded-lg flex items-center justify-center">
                  <div
                      class="w-10 h-10 md:w-12 md:h-12 border-4 border-white/20 border-t-white rounded-full animate-spin"></div>
                </div>
              </Transition>

              <!-- Image -->
              <Transition name="zoom">
                <NuxtImg v-show="imageLoaded"
                         :src="image"
                         :alt="image"
                         @load="onImageLoad"
                         sizes="xs:100vw sm:100vw md:100vw lg:100vw xl:100vw xxl:100vw"
                         class="max-w-full max-h-full object-contain rounded-lg shadow-2xl"/>
              </Transition>
            </div>

            <!-- URL section -->
            <div
                class="flex flex-col sm:flex-row items-center gap-3 bg-white/10 backdrop-blur-md px-4 md:px-6 py-2 md:py-3 rounded-full w-full max-w-2xl">
              <div class="flex items-center gap-2 min-w-0 flex-1">
                <span class="text-white/70 text-xs md:text-sm whitespace-nowrap">URL:</span>
                <span class="text-white text-xs md:text-sm font-mono truncate w-fit max-w-full">
                  {{ image }}
                </span>
              </div>

              <div class="flex items-center gap-2 md:gap-3">
                <button
                    type="button"
                    aria-label="Copier le lien de l'image"
                    @click="copyUrl"
                    :class="{ '!text-green-400': copied }"
                    class="text-white/70 hover:text-white transition-all p-2 hover:bg-white/10 rounded-full cursor-pointer">
                  <svg v-if="!copied" xmlns="http://www.w3.org/2000/svg" viewBox="0 -960 960 960"
                       class="w-4 h-4 md:w-5 md:h-5 fill-current"
                       aria-hidden="true">
                    <path
                        d="M360-240q-33 0-56.5-23.5T280-320v-480q0-33 23.5-56.5T360-880h360q33 0 56.5 23.5T800-800v480q0 33-23.5 56.5T720-240H360Zm0-80h360v-480H360v480ZM200-80q-33 0-56.5-23.5T120-160v-560h80v560h440v80H200Zm160-240v-480 480Z"/>
                  </svg>
                  <svg v-else xmlns="http://www.w3.org/2000/svg" viewBox="0 -960 960 960"
                       class="w-4 h-4 md:w-5 md:h-5 fill-current"
                       aria-hidden="true">
                    <path d="M382-240 154-468l57-57 171 171 367-367 57 57-424 424Z"/>
                  </svg>
                </button>

                <button
                    v-if="showShare"
                    type="button"
                    aria-label="Partager l'image"
                    @click="shareUrl"
                    class="text-white/70 hover:text-white transition-colors p-2 hover:bg-white/10 rounded-full cursor-pointer">
                  <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 -960 960 960"
                       class="w-4 h-4 md:w-5 md:h-5 fill-current"
                       aria-hidden="true">
                    <path
                        d="M720-80q-50 0-85-35t-35-85q0-7 1-14.5t3-13.5L322-392q-17 15-38 23.5t-44 8.5q-50 0-85-35t-35-85q0-50 35-85t85-35q23 0 44 8.5t38 23.5l282-164q-2-6-3-13.5t-1-14.5q0-50 35-85t85-35q50 0 85 35t35 85q0 50-35 85t-85 35q-23 0-44-8.5T638-672L356-508q2 6 3 13.5t1 14.5q0 7-1 14.5t-3 13.5l282 164q17-15 38-23.5t44-8.5q50 0 85 35t35 85q0 50-35 85t-85 35Zm0-640q17 0 28.5-11.5T760-760q0-17-11.5-28.5T720-800q-17 0-28.5 11.5T680-760q0 17 11.5 28.5T720-720ZM240-440q17 0 28.5-11.5T280-480q0-17-11.5-28.5T240-520q-17 0-28.5 11.5T200-480q0 17 11.5 28.5T240-440Zm480 280q17 0 28.5-11.5T760-200q0-17-11.5-28.5T720-240q-17 0-28.5 11.5T680-200q0 17 11.5 28.5T720-160Zm0-600ZM240-480Zm480 280Z"/>
                  </svg>
                </button>
              </div>
            </div>
          </div>
        </div>
      </Transition>
    </Teleport>
  </div>
</template>

<script setup lang="ts">
import {computed, onMounted, onUpdated, onUnmounted, ref} from 'vue';

const textContainer = ref<HTMLElement>();
const imageContainer = ref<HTMLElement>();
const textHeight = ref('auto');
const isModalOpen = ref(false);
const showShare = ref(true);
const imageLoaded = ref(false);
const copied = ref(false);

const updateHeight = () => {
  if (textContainer.value) {
    textHeight.value = `${textContainer.value.offsetHeight}px`;
  }
};

onMounted(() => {
  if (!navigator.share) {
    showShare.value = false;
  }

  setTimeout(updateHeight, 100);
  window.addEventListener('resize', updateHeight);
});

onUpdated(() => {
  setTimeout(updateHeight, 50);
});

onUnmounted(() => {
  window.removeEventListener('resize', updateHeight);
});


const currentUrl = computed(() => {
  return `${document.location.origin}${props.image}`;
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

const copyUrl = async () => {
  try {
    await navigator.clipboard.writeText(currentUrl.value);
    copied.value = true;
    setTimeout(() => {
      copied.value = false;
    }, 2000);
  } catch (err) {
    console.error('Failed to copy URL:', err);
  }
};

const shareUrl = async () => {
  if (navigator.share) {
    try {
      await navigator.share({
        title: props.image,
        url: currentUrl.value
      });
    } catch (err) {
      console.error('Error sharing:', err);
    }
  } else {
    await copyUrl();
  }
};

if (typeof window !== 'undefined') {
  window.addEventListener('keydown', (e) => {
    if (e.key === 'Escape' && isModalOpen.value) {
      closeModal();
    }
  });
}

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

if (typeof window !== 'undefined') {
  window.addEventListener('keydown', (e) => {
    if (e.key === 'Escape' && isModalOpen.value) {
      closeModal();
    }
  });
}
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