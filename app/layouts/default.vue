<template>
  <div class="bg-black text-white w-full overflow-x-hidden font-sans flex flex-col min-h-screen">
    <Navbar/>
    <main>
      <slot/>
    </main>
    <Footer/>
  </div>
</template>

<script setup lang="ts">
import Navbar from "~/components/navigation/Navbar.vue";
import Footer from "~/components/navigation/Footer.vue";
</script>

<style>
/* Custom scrollbar for Webkit browsers */
::-webkit-scrollbar {
  width: 8px;
}

::-webkit-scrollbar-track {
  background: #1a1a1a;
}

::-webkit-scrollbar-thumb {
  background-color: #4a4a4a;
  border-radius: 4px;
  border: 2px solid #1a1a1a;
}

::-webkit-scrollbar-thumb:hover {
  background-color: #6a6a6a;
}

/* For Firefox */
html {
  scrollbar-width: thin;
  scrollbar-color: #4a4a4a #1a1a1a;
}
</style>
