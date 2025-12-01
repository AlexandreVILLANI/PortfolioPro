<template>
  <button
      type="button"
      class="transition-colors duration-700 py-2 px-4 rounded-xl backdrop-blur-3xl flex flex-row items-center justify-center gap-3 min-w-fit w-fit"
      :class="{
        'bg-[#00FFD9]/50 hover:bg-[#00FFD9]/70': props.selected,
        'bg-white/10 hover:bg-[#00FFD9]/30': !props.selected
      }"
      :aria-pressed="props.selected"
      @click="emit('click')">
    <svg xmlns="http://www.w3.org/2000/svg"
         height="24px"
         viewBox="0 -960 960 960"
         width="24px"
         v-show="props.selected"
         fill="#e3e3e3"
         aria-hidden="true">
      <path d="M382-240 154-468l57-57 171 171 367-367 57 57-424 424Z"/>
    </svg>
    <slot/>
  </button>
</template>

<script setup lang="ts">
const emit = defineEmits<{
  click: []
}>();

const props = defineProps<{ selected: boolean }>();
</script>

<style scoped>
button {
  box-shadow: inset 0 2px 2px rgba(255, 255, 255, 50%), inset 0 -4px 4px rgba(0, 0, 0, 30%);
}
</style>