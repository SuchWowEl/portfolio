<script setup lang="ts">
defineOgImageComponent("NuxtSeo", {
  title: "Hi there 👋",
  theme: "#af6df9",
  colorMode: "dark",
  icon: false,
});
</script>

<template>
  <NuxtRouteAnnouncer />
  <NuxtLayout>
    <NuxtPage />
  </NuxtLayout>
</template>
