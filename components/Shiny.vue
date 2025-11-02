<script setup lang="ts">
import { waapi, type WAAPIAnimationParams } from "animejs";

type categEnum = "Linux" | "Neovim";
const { tool } = defineProps<{ tool: categEnum }>();
const shinyRef = ref<HTMLElement | null>(null);

const opts: Record<categEnum, { emoji: string; params: WAAPIAnimationParams }> =
  {
    Linux: {
      emoji: "✨",
      params: {
        rotate: {
          to: [0, 15, 0, -30, 0],
          ease: "linear",
        },
        duration: 900,
      },
    },
    Neovim: {
      emoji: "💫",
      params: {
        rotate: {
          to: [0, 45, 0, -30, 0],
          ease: "ease-in-out",
        },
        duration: 900,
      },
    },
  };

onMounted(() => {
  if (shinyRef.value) {
    waapi.animate(shinyRef.value, {
      ...opts[tool].params,
      loop: true,
    });
  }
});
</script>

<template>
  <a class="custom-shiny inline-block" ref="shinyRef">{{ opts[tool].emoji }}</a>
</template>
