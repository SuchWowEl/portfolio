<script setup lang="ts">
import type { IconType } from "vue-icons-plus/lib";

defineProps<{
  href: string;
  label: string;
  icon: IconType;
  size: number;
  classes?: string;
}>();
</script>

<template>
  <a
    :href="href"
    :class="['inline-flex gap-x-2 underline underline-offset-4 hover:text-shadow-lg/30 [*]:hover:drop-shadow-lg transition-all hover:cursor-pointer hover:transition-all', classes]"
    target="_blank"
    :aria-label="label + ' link'"
  >
    <span>{{ label }}</span>
    <component
      :is="icon"
      :size="size"
      class-name="transition-all hover:transition-all"
    />
  </a>
</template>

