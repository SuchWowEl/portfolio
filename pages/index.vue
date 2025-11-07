<script lang="ts">
import { SiArchlinux, SiNeovim } from "vue-icons-plus/si";

// NOTE: resort to using `style` as the icon has this weird
// quirk that when the component is initially rendered,
// it uses the `class` attribute, but when switched to another
// and back again, it becomes `className` which breaks the
// transitions.

export default defineComponent({
  components: {
    SiArchlinux,
    SiNeovim,
  },
  data() {
    return {
      email: "elizer.dolorosa7@gmail.com",
      sectionsVisible: false,
      observer: null as IntersectionObserver | null,
    };
  },
  mounted() {
    this.observer = new IntersectionObserver((entries) => {
      entries.forEach((entry) => {
        if (entry.isIntersecting) {
          this.sectionsVisible = true;
        }
      });
    });

    const hobbiesSection = this.$refs.hobbiesSection as HTMLElement;

    if (hobbiesSection && this.observer) this.observer.observe(hobbiesSection);
  },
  beforeUnmount() {
    if (this.observer !== null) this.observer.disconnect();
  },

  methods: {
    goToProjects() {
      (this.$refs.projectSec as HTMLElement).scrollIntoView({
        behavior: "smooth",
      });
    },
    async copyEmail() {
      const message = "Redirecting to your email client";
      console.log(message);
      useNuxtApp().$toast.info(message, { autoClose: 1500 });
    },
  },
});
</script>

<template>
  <div>
    <div
      class="flex lg:flex-row flex-col flex-wrap justify-around items-center w-2/3 lg:w-full mx-auto"
    >
      <div class="flex flex-col items-end lg:w-1/3">
        <img
          src="https://res.cloudinary.com/djqoxxzdo/image/upload/v1762536434/candidate_2_xq16to.jpg"
          alt="Profile Image"
          class="rounded-full md:h-[300px] h-[200px] md:w-[300px] w-[200px]"
        >
      </div>
      <div class="lg:w-2/3 lg:px-32 text-center lg:text-left">
        <Greetings />
      </div>
    </div>

    <div class="text-center">
      <button
        class="mt-6 px-6 py-2 bg-rv-cyan text-rv-bg font-semibold rounded hover:shadow-md hover:shadow-rv-cyan hover:transition-all hover:cursor-pointer"
        @click="goToProjects"
      >
        View My Work
      </button>
    </div>

    <div
      class="mt-20 sm:mx-auto mx-4 max-w-full sm:max-w-2/3 md:py-16 py-10 border-y border-rv-comment"
    >
      <Header title="About Me" />
      <p class="mt-4 lg:text-xl text-base leading-relaxed">
        I am passionate about technology, especially free and open-source
        software<span class="lg:text-2xl text-rv-pink">.</span> <br >
        My curiosity and drive to learn have led me to explore various tools and
        platforms<span class="lg:text-2xl text-rv-cyan">.</span> <br >
        As a recent graduate, I am eager to apply my knowledge to design and
        develop impactful solutions<span class="lg:text-2xl text-rv-red">.</span>
      </p>
    </div>

    <!-- <div class="lg:px-16 px-10 flex md:flex-row flex-col divide-x"> -->
    <div class="flex flex-col sm:mx-0 mx-4 gap-x-4">
      <!-- Skills Section -->
      <div class="mt-10 self-center-safe sm:w-2/3 w-full h-fit lg:pb-0 pb-10">
        <Header title="Skills" />
        <p>Here are some of the things I've used.</p>
        <SkillSection />
      </div>

      <div ref="projectSec" class="mt-10 self-center-safe sm:w-2/3 w-full">
        <Header title="Projects" />
        <p class="mt-4 text-base leading-relaxed">
          I also have public repos in my
          <a
            class="text-rv-green hover:border-b hover:border-rv-cyan hover:pb-1 hover:transition-all"
            href="https://github.com/SuchWowEl"
            target="_blank"
          >GitHub</a
          >.
        </p>
        <div class="flex flex-row gap-6 mt-6 place-content-center h-fit">
          <ProjectSection />
        </div>
      </div>

      <!-- mt-10 mx-auto grid grid-cols-1 lg:grid-cols-2 gap-y-10 lg:gap-x-10 w-2/3 -->
      <div
        class="mt-10 mx-auto flex flex-col lg:flex-row w-full sm:w-2/3 self-center-safe gap-y-12"
      >
        <div class="text-center lg:text-left">
          <Header title="Hobbies & Interests" />
          <ul
            ref="hobbiesSection"
            class="list-disc list-inside text-base md:text-lg"
          >
            <!-- prettier-ignore -->
            <li>keeping up with FOSS happenings/events</li>
            <!-- prettier-ignore -->
            <li>"i use
              <a class="inline-flex gap-x-2 text-rv-cyan underline underline-offset-4 hover:cursor-pointer hover:text-shadow-lg/30 hover:text-shadow-rv-cyan [*]:hover:drop-shadow-rv-cyan [*]:hover:drop-shadow-lg" href="https://github.com/SuchWowEl/dotfiles">
                <span
                  id="arch"
                >arch</span
                >
                <SiArchlinux
                  color="#61E2FF"
                  :size="sectionsVisible ? 24 : 0"
                />
              </a>
              btw"
            </li>
            <!-- prettier-ignore -->
            <li>configuring my
              <a class="inline-flex gap-x-2 text-rv-green underline underline-offset-4 hover:cursor-pointer hover:text-shadow-lg/30 hover:text-shadow-rv-green [*]:hover:drop-shadow-rv-green [*]:hover:drop-shadow-lg" href="https://github.com/SuchWowEl/nvim_conf">
                <span
                  id="neovim"
                >
                  neovim
                </span>
                <SiNeovim
                  color="#72F1B8"
                  :size="sectionsVisible ? 24 : 0"
                />
              </a>
              setup
            </li>
            <li>playing games, reading manga, watching animes or movies</li>
            <!-- <li>Playing musical instruments (guitar, piano)</li> -->
          </ul>
        </div>
        <!-- Contact Section -->
        <div class="text-center lg:text-right grow">
          <h2 class="text-2xl font-semibold text-rv-pink">Contact Me:</h2>
          <p class="mt-4">
            <a
              :class="[
                `bg-gray-800 px-1 rounded-sm transition-all text-lg hover:border-b
hover:border-rv-cyan hover:rounded-t-sm hover:transition-all hover:text-rv-cyan hover:cursor-pointer`,
              ]"
              :href="`mailto:${email}`"
              @click="copyEmail"
            >{{ email }}
            </a>
          </p>
          <!-- <button class="mt-6 px-6 py-2 bg-rv-green text-rv-bg font-semibold rounded shadow hover:shadow-md hover:shadow-rv-yellow hover:transition-all">Hire Me</button> -->
        </div>
      </div>
    </div>
  </div>
</template>
