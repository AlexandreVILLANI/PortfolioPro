<template>
  <div
      class="w-full h-full flex items-center justify-center bg-gradient-to-br from-slate-900 via-purple-900 to-slate-900 relative overflow-hidden">
    <div class="absolute inset-0 opacity-30">
      <div v-for="i in 50" :key="i"
           class="absolute rounded-full bg-white"
           :style="{
             width: `${Math.random() * 3}px`,
             height: `${Math.random() * 3}px`,
             top: `${Math.random() * 100}%`,
             left: `${Math.random() * 100}%`,
             opacity: Math.random()
           }">
      </div>
    </div>

    <!-- Contenu principal -->
    <div class="relative z-10 flex flex-col items-start justify-between h-full w-full p-16">
      <!-- Header -->
      <div class="flex flex-row items-center justify-between w-full gap-3">
        <div class="text-white/70 text-2xl font-light">Alexandre VILLANI</div>
        <div v-if="category"
             class="px-6 py-2 bg-purple-500/30 rounded-full text-white text-xl backdrop-blur-sm border border-purple-400/30">
          {{ category }}
        </div>
      </div>

      <!-- Titre et description -->
      <div class="flex-1 flex flex-col justify-center max-w-4xl">
        <h1 class="text-7xl font-black text-white mb-6 leading-tight">
          {{ title }}
        </h1>
        <p class="text-3xl text-white/80 font-light leading-relaxed line-clamp-3">
          {{ description }}
        </p>
      </div>

      <!-- Technologies -->
      <div class="w-full">
        <div v-if="technologies && technologies.length > 0"
             class="flex flex-wrap gap-3 mb-4">
          <span v-for="tech in technologies"
                :key="tech"
                class="px-5 py-2 bg-white/10 rounded-lg text-white text-xl backdrop-blur-sm border border-white/20">
            {{ tech }}
          </span>
        </div>
        <div class="text-white/50 text-xl">Portfolio • Projet</div>
      </div>
    </div>

    <div v-if="image"
         class="absolute inset-0 opacity-10"
         :style="{
           backgroundImage: `url(${image})`,
           backgroundSize: 'cover',
           backgroundPosition: 'center',
           filter: 'blur(20px)'
         }">
    </div>
  </div>
</template>

<script setup lang="ts">
defineProps<{
  title: string
  description: string
  image?: string
  technologies?: string[]
  category?: string
}>()
</script>

