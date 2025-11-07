<script lang="ts">
import { SiGithub, SiLinkedin } from "vue-icons-plus/si";
import type { IconType } from "vue-icons-plus";

export default defineComponent({
  components: {
    SiGithub,
    SiLinkedin,
  },
  computed: {
    links(): { icon: IconType; link: string }[] {
      return [
        { icon: SiGithub, link: "https://github.com/SuchWowEl" },
        {
          icon: SiLinkedin,
          link: "https://www.linkedin.com/in/elizer-dolorosa7/",
        },
      ];
    },
  },
  methods: {
    location(): string {
      if (this.$route.path == "/") {
        return "";
      } else return this.$route.path;
    },
  },
});
</script>

<template>
  <div class="bg-rv-bgdark pt-6 min-h-screen font-hack flex flex-col">
    <nav class="text-white py-4 flex flex-row items-center-safe">
      <NuxtLink
        class="ml-10 border-b border-rv-bgdark text-rv-green p-2 transition-all touch-auto:cursor-pointer touch-auto:border-rv-green hover:cursor-pointer hover:border-rv-green"
        to="/"
      >
        <span class="">~{{ location() }} $ </span>
        <span class="font-bold text-lg">ED</span>
      </NuxtLink>
    </nav>
    <main class="min-h-full text-white grow my-10">
      <slot />
    </main>
    <footer
      class="text-rv-orange/50 text-sm md:text-base py-4 flex flex-row justify-end-safe gap-4 pr-10"
    >
      <template v-for="(socials, idx) in links" :key="idx">
        <NuxtLink :to="socials.link">
          <component
            :is="socials.icon"
            class-name="text-rv-orange/50 hover:text-rv-orange transition-all"
          />
        </NuxtLink>
      </template>
    </footer>
  </div>
</template>
