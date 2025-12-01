<template>
  <div class="bg-[#67E9FF] text-black w-screen h-screen flex md:flex-row flex-col justify-center items-center">

    <img
        src="/images/illustration500_1152.jpg"
        alt="John rencontre une erreur"
        class="max-w-1/3 md:h-1/2 h-1/3 select-none"
    />

    <div class="w-1/2 h-1/2 py-10">
      <p class="text-gray-600 pb-1">{{ error.statusMessage || 'Erreur serveur' }}</p>

      <h1 class="text-3xl font-black">
        {{ error.statusCode || 500 }} - Erreur serveur
      </h1>

      <p class="pt-6 pb-10">
        Oups ! Quelque chose s'est mal passé de notre côté. Veuillez réessayer dans quelques instants.
      </p>

      <button @click="handleClearError"
              class="bg-[#49C7DE] hover:bg-[#42B5C9] py-3 px-5 rounded-xl flex flex-row items-center gap-3 w-fit font-semibold">
        <svg xmlns="http://www.w3.org/2000/svg" height="24px" viewBox="0 -960 960 960" width="24px" fill="#0">
          <path
              d="M480-160q-134 0-227-93t-93-227q0-134 93-227t227-93q69 0 132 28.5T720-690v-110h80v280H520v-80h168q-32-56-87.5-88T480-720q-100 0-170 70t-70 170q0 100 70 170t170 70q77 0 139-44t87-116h84q-28 106-114 173t-196 67Z"/>
        </svg>
        Recharger la page
      </button>
    </div>

  </div>
</template>

<script setup lang="ts">
import type {NuxtError} from '#app';
import {defaultSeoTags} from "~/utils/seo";

const props = defineProps<{
  error: NuxtError
}>()

const error = computed(() => props.error);

const handleClearError = () => {
  window.location.reload();
}

const title = `${props.error.statusCode || 500} - Erreur serveur`
const description = "Une erreur s'est produite sur le serveur. Veuillez réessayer ultérieurement."

useSeoMeta({
  ...defaultSeoTags(),
  title,
  description,
  ogTitle: title,
  ogDescription: description,
  ogImage: '/images/illustration500_1152.jpg',
  twitterCard: 'summary',
});
</script>