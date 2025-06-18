<script setup lang="ts">
  defineProps({
    title: {
      type: String,
      required: true,
    },
  })
</script>

<template>
  <h2 class="text-2xl text-rv-red font-semibold">{{ title }}</h2>
</template>
