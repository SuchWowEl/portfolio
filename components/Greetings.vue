<script lang="ts">
import { defineComponent, ref } from "vue";

export default defineComponent({
  props: {
    title: {
      type: String,
      default: "Heya 👋 I am Elizer Dolorosa",
      required: false,
    },
  },
  setup(props) {
    const display = ref<string>("");
    const paragraphDisplay = ref<string>("");
    const paragraph = "A <span class='text-rv-pink'>Tinkerer</span> at heart, and a <span class='text-rv-cyan'>Software Developer</span> by trade 🔨";

    const typeText = (text: string, displayRef: { value: string }, interval: number, callback?: () => void) => {
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
  mounted() {
    this.startTypingEffect();
  },
});
</script>

<template>
  <h1 class="text-2xl md:text-3xl lg:text-4xl font-bold mt-6">{{ display }}</h1>
  <p class="pr-4 mt-4 text-base md:text-xl" v-html="paragraphDisplay"></p>
</template>
