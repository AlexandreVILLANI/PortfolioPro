<template>
  <div class="project_card group overflow-hidden rounded-3xl h-full bg-cover bg-no-repeat bg-center relative antialiased border-2 border-[#4A235A]/20 font-bricolage shadow-lg hover:shadow-2xl transition-all duration-300">

    <NuxtImg
        :src="props.image"
        :alt="`Image du projet ${props.name}`"
        class="absolute inset-0 w-full h-full object-cover transition-transform duration-700 group-hover:scale-110"
        sizes="xs:100vw sm:100vw md:50vw lg:50vw xl:50vw xxl:50vw"
        format="webp"
        loading="lazy"
        quality="80"
    />

    <div class="flex flex-col justify-between items-start h-full w-full bg-black/40 hover:bg-black/50 transition-colors duration-500 p-6 relative z-10 antialiased">

      <div class="flex flex-row justify-between w-full items-start mb-2">
        <h2 class="text-3xl font-black text-[#F3EFE0] uppercase leading-none tracking-tight drop-shadow-md">
          {{ props.name }}
        </h2>

        <div class="flex flex-col ml-4">
          <a v-if="props.links?.github"
             target="_blank"
             rel="noopener noreferrer"
             :href="props.links.github"
             :aria-label="`Voir le code source de ${props.name} sur GitHub`"
             class="transform hover:scale-110 transition-transform"
          >
            <div class="p-3 bg-[#F3EFE0] text-[#4A235A] rounded-xl shadow-md">
              <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" class="fill-current" aria-hidden="true">
                <path fill-rule="evenodd" clip-rule="evenodd" d="M12.026 2c-5.509 0-9.974 4.465-9.974 9.974 0 4.406 2.857 8.145 6.821 9.465.499.09.679-.217.679-.481 0-.237-.008-.865-.011-1.696-2.775.602-3.361-1.338-3.361-1.338-.452-1.152-1.107-1.459-1.107-1.459-.905-.619.069-.605.069-.605 1.002.07 1.527 1.028 1.527 1.028.89 1.524 2.336 1.084 2.902.829.091-.645.351-1.085.635-1.334-2.214-.251-4.542-1.107-4.542-4.93 0-1.087.389-1.979 1.024-2.675-.101-.253-.446-1.268.099-2.64 0 0 .837-.269 2.742 1.021a9.582 9.582 0 0 1 2.496-.336 9.554 9.554 0 0 1 2.496.336c1.906-1.291 2.742-1.021 2.742-1.021.545 1.372.203 2.387.099 2.64.64.696 1.024 1.587 1.024 2.675 0 3.833-2.33 4.675-4.552 4.922.355.308.675.916.675 1.846 0 1.334-.012 2.41-.012 2.737 0 .267.178.577.687.479C19.146 20.115 22 16.379 22 11.974 22 6.465 17.535 2 12.026 2z"></path>
              </svg>
            </div>
          </a>
        </div>
      </div>

      <p class="text-justify clamp text-[#F3EFE0] font-medium leading-relaxed drop-shadow-sm">
        {{ props.description }}
      </p>

      <div class="mt-auto pt-6 flex flex-col items-end w-full">
        <NuxtLink :to="props.path" class="m-0 p-0" :aria-label="`Découvrir le projet ${props.name}`">
          <div class="px-6 py-3 bg-[#F3EFE0] text-[#4A235A] rounded-full hover:bg-white transition-colors shadow-lg">
            <p class="font-bold uppercase tracking-widest text-sm">Voir plus</p>
          </div>
        </NuxtLink>
      </div>
    </div>
  </div>
</template>

<script setup lang="ts">
const router = useRouter();

const props = defineProps<{
  name: string,
  description: string,
  path: string,
  image: string,
  links?: { github?: string, website?: string },
}>();
</script>

<style scoped>
@import url('https://fonts.googleapis.com/css2?family=Bricolage+Grotesque:opsz,wght@12..96,200..800&display=swap');

.font-bricolage {
  font-family: 'Bricolage Grotesque', sans-serif;
}

.project_card {
  --clamp-nb: 4
}

.clamp {
  display: -webkit-box;
  line-clamp: var(--clamp-nb);
  -webkit-line-clamp: var(--clamp-nb);
  -webkit-box-orient: vertical;
  overflow: hidden;
}

@media (max-width: 48rem) {
  .project_card {
    --clamp-nb: 5;
  }
}
</style>