<script lang="ts">
import { defineComponent } from "vue";
import type { SkillCategory } from "../enums/SkillCategory";

export default defineComponent({
  props: {
    name: {
      type: String as PropType<SkillCategory>,
      required: true,
    },
    skill: {
      type: Object as PropType<techSpan>,
      required: true,
    },
    colorChoice: {
      type: String,
      required: true,
    },
  },
  data() {
    return {
      hovered: false,
    };
  },
  computed: {
    ifShiny(): "Linux" | "Neovim" | undefined {
      if (["Linux", "Neovim"].includes(this.skill.name)) {
        return this.skill.name as "Linux" | "Neovim";
      }
      return undefined;
    },
  },
  watch: {
    ifHover(newVal, _) {
      if (newVal.includes(this.name)) {
        this.hovered = true;
      }
    },
  },
  methods: {
    handleMouseOver() {
      this.hovered = true;
    },
  },
});
</script>

<template>
  <template v-if="skill.icon">
    <component
      :is="skill.icon"
      :color="colorChoice"
      :size="24"
      class-name="duration-200 transition-all"
      @mouseover="handleMouseOver"
      @touchstart="handleMouseOver"
    />
    <div
      :class="[
        'transition-all',
        { 'text-[0px]': !hovered },
        { 'text-base': hovered },
      ]"
    >
      <Shiny
        v-if="ifShiny"
        :tool="ifShiny"
      />
      {{ skill.name }}
    </div>
  </template>
  <template v-else>
    <a
      v-if="skill.url != null"
      :href="skill.url"
      :class="[
        'bg-gray-800 px-1 rounded-sm transition-all',
        { 'text-lg text-rv-cyan': hovered },
      ]"
    >
      {{ skill.name }}
    </a>
    <a v-else>{{ skill.name }}</a>
  </template>
</template>
