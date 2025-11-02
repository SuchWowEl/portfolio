<script setup lang="ts">
import { waapi } from "animejs";

const props = defineProps<{ categ: "Linux" | "Neovim" }>();
const shinyRef = ref<HTMLElement | null>(null);

onMounted(() => {
  if (shinyRef.value) {
    waapi.animate(shinyRef.value, {
      rotate: {
        to: 360,
        ease: props.categ === "Linux" ? "linear" : "ease-in-out",
      },
      duration: props.categ === "Linux" ? 2000 : 1400,
      loop: true,
    });
  }
});
</script>

<template>
  <a class="custom-shiny inline-block" ref="shinyRef">{{
    props.categ === "Linux" ? "✨" : "💫"
  }}</a>
</template>
