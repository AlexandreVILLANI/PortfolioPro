<template>
  <div>
    <HomeHero/>
    <ProjectsCarousel/>
      <ContactMe/>
    </div>

</template>
<script setup lang="ts">
import HomeHero from "~/components/pages/home/HomeHero.vue";
import ProjectsCarousel from "~/components/pages/home/ProjectsCarousel.vue";
import ContactMe from "~/components/pages/contact/ContactMe.vue";

useSeoMeta({
  ...defaultSeoTags("Alexandre VILLANI - Portfolio", "Portfolio de Alexandre VILLANI, Développeur FullStack")
})
</script>