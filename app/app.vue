<template>
  <NuxtLayout>
    <NuxtPage/>
  </NuxtLayout>
  <Analytics />
</template>

<script setup lang="ts">
import 'vue3-carousel/dist/carousel.css';
import { Analytics } from '@vercel/analytics/nuxt';

useSeoMeta({
  ...defaultSeoTags("Alexandre VILLANI | Portfolio", "Portfolio de Alexandre VILLANI, Développeur FullStack")
});

useHead({
  title: "Alexandre VILLANI | Portfolio",
  htmlAttrs: {
    lang: 'fr',
  }
})
</script>

<style>
.avatar {
  filter: grayscale(100%) contrast(100%) saturate(0%);
}

body {
  background: #000;
}
</style>
