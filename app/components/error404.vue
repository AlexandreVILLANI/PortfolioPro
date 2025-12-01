<template>
  <div class="bg-[#C6C5FF] text-black w-screen h-screen flex md:flex-row flex-col justify-center items-center">

    <img
        src="/images/illustration404_1152.png"
        alt="John se demande où il a atterri"
        class="max-w-1/3 md:h-1/2 h-1/3 select-none"
    />

    <div class="w-1/2 h-1/2 py-10">
      <p class="text-gray-600 pb-1">{{ error.statusMessage || route.fullPath }}</p>

      <h1 class="text-3xl font-black">
        {{ error.statusCode }} - Page non trouvée
      </h1>

      <p class="pt-6 pb-10">
        Êtes-vous sûr d'avoir tapé le bon URL ?
      </p>

      <button @click="handleClearError"
              class="bg-[#8886FC] hover:bg-[#7775FF] py-3 px-5 rounded-xl flex flex-row items-center gap-3 w-fit font-semibold">
        <svg xmlns="http://www.w3.org/2000/svg" height="24px" viewBox="0 -960 960 960" width="24px" fill="#000">
          <path d="m313-440 224 224-57 56-320-320 320-320 57 56-224 224h487v80H313Z"/>
        </svg>
        Retourner à l'accueil
      </button>
    </div>

  </div>
</template>

<script setup lang="ts">
import type {NuxtError} from '#app';
import {defaultSeoTags} from "~/utils/seo";

const route = useRoute();

const props = defineProps<{
  error: NuxtError
}>()

const error = computed(() => props.error);
const router = useRouter();

const handleClearError = () => {
  clearError();
  router.push("/");
}

const title = `${props.error.statusCode} - Page non trouvée`
const description = "La page que vous cherchez n'existe pas. Êtes-vous sûr d'avoir tapé la bonne URL ?"

useSeoMeta({
  ...defaultSeoTags(),
  title,
  description,
  ogTitle: title,
  ogDescription: description,
  ogImage: '/images/illustration404_1152.png',
  twitterCard: 'summary',
});
</script>