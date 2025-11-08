<script lang="ts">
import { defineComponent, ref } from "vue";
import { CgNotes } from "vue-icons-plus/cg";
import { GrWorkshop } from "vue-icons-plus/gr";
import type { IconType } from "vue-icons-plus/lib";
import type { JSX } from "vue/jsx-runtime";
import { animate } from "animejs";

type TopButton<E extends keyof JSX.IntrinsicElements> = Record<
  string,
  {
    icon: IconType;
    element: E;
    props: JSX.IntrinsicElements[E];
    onClick?: () => void;
  }
>;

export default defineComponent({
  props: {
    title: {
      type: String,
      default: "Heya 👋 I am Elizer Dolorosa",
      required: false,
    },
    goToProjects: {
      type: Function as PropType<() => void>,
      required: true,
    },
  },
  setup(props) {
    const display = ref<string>("");
    const paragraphDisplay = ref<string>("");
    const paragraph =
      "A <span class='text-rv-pink'>Tinkerer</span> at heart, and a <span class='text-rv-cyan'>Software Developer</span> by trade 🔨";

    const typeText = (
      text: string,
      displayRef: { value: string },
      interval: number,
      callback?: () => void
    ) => {
      const chars = Array.from(text);
      let index = 0;
      const timer = setInterval(() => {
        if (index < chars.length) {
          const nextChar = chars[index];
          displayRef.value += nextChar;
          index++;
          if (nextChar === "<") {
            while (index < chars.length && chars[index] !== ">") {
              displayRef.value += chars[index];
              index++;
            }
          }
        } else {
          clearInterval(timer);
          if (callback) callback();
        }
      }, interval);
    };

    const startTypingEffect = () => {
      typeText(props.title, display, 50);
      typeText(paragraph, paragraphDisplay, 50);
    };

    return { display, paragraphDisplay, startTypingEffect };
  },
  data() {
    return {
      topButtons: {
        "My Works": {
          icon: markRaw(GrWorkshop),
          element: "button",
          props: {
            class: "hover:bg-rv-orange hover:text-rv-bg bg-rv-bg text-rv-orange",
          },
          onClick: this.goToProjects,
        },
        "Resume": {
          icon: markRaw(CgNotes),
          element: "a",
          props: {
            class: "hover:bg-rv-green hover:text-rv-bg bg-rv-bg text-rv-green",
            href: "https://drive.google.com/file/d/108rKBhb7MpY-ChPmJeTA8EhO0KZvPVX_/view?usp=drive_link",
          },
        },
      } as TopButton<"button" | "a">,
    };
  },
  mounted() {
    if (this.$refs.topButtonsRef) {
      animate(this.$refs.topButtonsRef as HTMLDivElement, {
        keyframes: [
          // Blink 1 (fast)
          { opacity: 0, duration: 50, easing: "linear" },
          { opacity: 1, duration: 50, easing: "linear" },

          // Blink 2 (fast)
          { opacity: 0, duration: 50, easing: "linear" },
          { opacity: 1, duration: 50, easing: "linear" },

          // Blink 3 (slow)
          { opacity: 0, duration: 150, easing: "linear" },
          { opacity: 1, duration: 150, easing: "linear" },
        ],
        duration: 0, // keyframes manage timing individually
        easing: "linear",
      });
    }

    this.startTypingEffect();
  },
});
</script>

<template>
  <h1 class="text-2xl md:text-3xl lg:text-4xl font-bold mt-6">{{ display }}</h1>
  <!-- eslint-disable-next-line vue/no-v-html -->
  <p class="pr-4 mt-4 text-base md:text-xl" v-html="paragraphDisplay" />
  <div
    ref="topButtonsRef"
    class="flex flex-row flex-wrap justify-center lg:justify-start gap-4 text-sm md:text-base text-center pt-6 opacity-0"
  >
    <template v-for="[label, btn] in Object.entries(topButtons)" :key="label">
      <component
        :is="btn.element"
        v-bind="btn.props"
        :class="[
          'flex flex-row items-center gap-x-2 px-6 py-2 font-semibold rounded hover:shadow-md hover:transition-all hover:cursor-pointer',
          btn.props.class
        ]"
        @click="btn.onClick"
      >
        <component :is="btn.icon" />
        {{ label }}
      </component>
    </template>
  </div>
</template>
