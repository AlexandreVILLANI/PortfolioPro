<template>
  <div class="flex flex-row pr-3 gap-1.5 justify-center">
    <NuxtLink class="group flex flex-row gap-3 items-center"
              to="https://github.com/AlexandreVILLANI/"
              external
              aria-label="Profil GitHub de Alexandre VILLANI">
      <svg class="p-0.5 group-hover:p-0 transition-all duration-200" :width="sizePx" :height="sizePx"
           viewBox="0 0 30 30"
           fill="none" xmlns="http://www.w3.org/2000/svg"
           aria-hidden="true">
        <path fill-rule="evenodd" clip-rule="evenodd"
              d="M15.0324 2.5C8.14619 2.5 2.56494 8.08125 2.56494 14.9675C2.56494 20.475 6.13619 25.1487 11.0912 26.7987C11.7149 26.9112 11.9399 26.5275 11.9399 26.1975C11.9399 25.9012 11.9299 25.1162 11.9262 24.0775C8.45744 24.83 7.72494 22.405 7.72494 22.405C7.15994 20.965 6.34119 20.5812 6.34119 20.5812C5.20994 19.8075 6.42744 19.825 6.42744 19.825C7.67994 19.9125 8.33619 21.11 8.33619 21.11C9.44869 23.015 11.2562 22.465 11.9637 22.1462C12.0774 21.34 12.4024 20.79 12.7574 20.4787C9.98994 20.165 7.07994 19.095 7.07994 14.3162C7.07994 12.9575 7.56619 11.8425 8.35994 10.9725C8.23369 10.6562 7.80244 9.3875 8.48369 7.6725C8.48369 7.6725 9.52994 7.33625 11.9112 8.94875C12.9282 8.67209 13.9772 8.53087 15.0312 8.52875C16.0852 8.53046 17.1343 8.67169 18.1512 8.94875C20.5337 7.335 21.5787 7.6725 21.5787 7.6725C22.2599 9.3875 21.8324 10.6562 21.7024 10.9725C22.5024 11.8425 22.9824 12.9562 22.9824 14.3162C22.9824 19.1075 20.0699 20.16 17.2924 20.4687C17.7362 20.8537 18.1362 21.6137 18.1362 22.7762C18.1362 24.4437 18.1212 25.7887 18.1212 26.1975C18.1212 26.5312 18.3437 26.9187 18.9799 26.7962C23.9324 25.1437 27.4999 20.4737 27.4999 14.9675C27.4999 8.08125 21.9187 2.5 15.0324 2.5Z"
              fill="white"/>
      </svg>
      <p v-if="showFullText" class="underline group-hover:font-bold">github.com/AlexandreVILLANI</p>
    </NuxtLink>
    <NuxtLink class="group flex flex-row gap-3 items-center"
              to="mailto:alexandre.villani@edu.univ-fcomte.fr"
              external
              aria-label="Envoyer un email à alexandre.villani@edu.univ-fcomte.fr">
      <svg class="p-0.5 group-hover:p-0 transition-all duration-200" :width="sizePx" :height="sizePx"
           viewBox="0 0 30 30"
           fill="none" xmlns="http://www.w3.org/2000/svg"
           aria-hidden="true">
        <path
            d="M23.4124 6.7625L21.8124 8.0125L14.9999 13.075L8.18744 7.9625L6.58744 6.7125C6.21051 6.40068 5.75038 6.2063 5.26405 6.15343C4.77772 6.10057 4.28657 6.19155 3.85145 6.4151C3.41633 6.63865 3.05635 6.98495 2.81611 7.41109C2.57588 7.83723 2.46595 8.32449 2.49994 8.8125V23.3C2.49994 23.7509 2.67905 24.1833 2.99786 24.5021C3.31667 24.8209 3.74907 25 4.19994 25H8.18744V15.35L14.9999 20.4625L21.8124 15.35V25H25.7999C26.2508 25 26.6832 24.8209 27.002 24.5021C27.3208 24.1833 27.4999 23.7509 27.4999 23.3V8.8125C27.5234 8.3287 27.4058 7.8485 27.1615 7.43028C26.9172 7.01205 26.5566 6.67381 26.1236 6.45666C25.6907 6.23952 25.204 6.15282 24.7226 6.20712C24.2413 6.26141 23.7861 6.45436 23.4124 6.7625Z"
            fill="white"/>
      </svg>
      <p v-if="showFullText" class="underline group-hover:font-bold">alexandre.villani@edu.univ-fcomte.fr</p>
    </NuxtLink>
    <NuxtLink class="group flex flex-row gap-3 items-center "
              to="https://www.linkedin.com/in/alexandre-villani-ab0889326"
              external
              aria-label="Profil LinkedIn de Cédric COLIN">
      <svg class="p-0.5 group-hover:p-0 transition-all duration-200" :width="sizePx" :height="sizePx"
           viewBox="0 0 30 30"
           fill="none" xmlns="http://www.w3.org/2000/svg"
           aria-hidden="true">
        <path
            d="M25 3.75H5C4.66848 3.75 4.35054 3.8817 4.11612 4.11612C3.8817 4.35054 3.75 4.66848 3.75 5V25C3.75 25.3315 3.8817 25.6495 4.11612 25.8839C4.35054 26.1183 4.66848 26.25 5 26.25H25C25.3315 26.25 25.6495 26.1183 25.8839 25.8839C26.1183 25.6495 26.25 25.3315 26.25 25V5C26.25 4.66848 26.1183 4.35054 25.8839 4.11612C25.6495 3.8817 25.3315 3.75 25 3.75ZM10.4237 22.9212H7.08375V12.1838H10.4237V22.9212ZM8.75375 10.7175C8.24056 10.7175 7.74838 10.5136 7.3855 10.1508C7.02262 9.78787 6.81875 9.29569 6.81875 8.7825C6.81875 8.26931 7.02262 7.77713 7.3855 7.41425C7.74838 7.05137 8.24056 6.8475 8.75375 6.8475C9.26694 6.8475 9.75912 7.05137 10.122 7.41425C10.4849 7.77713 10.6887 8.26931 10.6887 8.7825C10.6887 9.29569 10.4849 9.78787 10.122 10.1508C9.75912 10.5136 9.26694 10.7175 8.75375 10.7175ZM22.9225 22.9212H19.5862V17.7C19.5862 16.455 19.5638 14.8538 17.8512 14.8538C16.1138 14.8538 15.85 16.2113 15.85 17.6125V22.9225H12.5162V12.185H15.7162V13.6525H15.7625C16.2062 12.8088 17.2962 11.9187 18.9175 11.9187C22.2975 11.9187 22.9212 14.1412 22.9212 17.0337L22.9225 22.9212Z"
            fill="white"/>
      </svg>
      <p v-if="showFullText" class="underline group-hover:font-bold">alexandre-villani</p>
    </NuxtLink>
  </div>
</template>

<script setup lang="ts">
const props = defineProps<{
  sizePx?: number,
  showFull?: boolean
}>();

const sizePx = computed(() => `${props.sizePx || 30}px`);
const showFullText = computed(() => props.showFull ?? false);
</script>