<script lang="ts">
import { SiGithub, SiLinkedin } from "vue-icons-plus/si";
import type { IconType } from "vue-icons-plus";
import { NuxtLink } from "#components";

export default defineComponent({
  components: {
    SiGithub,
    SiLinkedin,
  },
  methods: {
    location(): string {
      if (this.$route.path == "/") {
        return "";
      } else return this.$route.path;
    },
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
});
</script>

<template>
  <div class="bg-rv-bgdark pt-6 min-h-screen font-hack flex flex-col">
    <nav class="text-white py-4 flex flex-row items-center-safe">
      <NuxtLink
        class="ml-10 border-b-1 border-rv-bgdark text-rv-green p-2 transition-all hover:cursor-pointer hover:border-rv-green"
        to="/"
      >
        <span class="">~{{ location() }} $ </span>
        <span class="font-bold text-lg">ED</span>
      </NuxtLink>
      <ul class="mr-10 flex justify-end space-x-4 flex-auto">
        <li>
          <NuxtLink
            to="/about"
            class="relative hover:border-b hover:border-rv-yellow hover:pb-1 hover:transition-all"
            >About</NuxtLink
          >
        </li>
        <li>
          <NuxtLink
            to="/projects"
            class="relative hover:border-b hover:border-rv-yellow hover:pb-1 hover:transition-all"
            >Projects</NuxtLink
          >
        </li>
      </ul>
    </nav>
    <main class="min-h-full text-white flex-grow my-10">
      <slot />
    </main>
    <footer
      class="text-rv-green/50 text-sm md:text-base py-4 flex flex-row justify-end-safe gap-4 pr-10"
    >
      <template v-for="socials in links">
        <NuxtLink :to="socials.link">
          <component
            :is="socials.icon"
            className="text-rv-green/50 hover:text-rv-green transition-all"
          ></component>
        </NuxtLink>
      </template>
    </footer>
  </div>
</template>
