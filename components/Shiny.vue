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
        duration: 500,
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
  <a ref="shinyRef" class="custom-shiny inline-block">{{ opts[tool].emoji }}</a>
</template>
