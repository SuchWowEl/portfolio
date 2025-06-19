<script lang="ts">
import { defineComponent } from 'vue';
import { SkillCategory } from '../enums/SkillCategory';
import { skills, iconColor } from '~/utils/tech';

export default defineComponent({
  name: 'SkillSection',
  data() {
    return {
      hoveredIdx: null as string | null,
      hoveredSec: 1 as number,
      intervalId: null as number | null,
      SkillCategory
    }
  },
  methods: {
    skills: skills,
    iconColor: iconColor,
    cntDwn(): void {
      if (this.intervalId !== null) return;

      let currIdx = this.hoveredIdx;
      this.intervalId = window.setInterval(() => {
        if (currIdx !== this.hoveredIdx) {
          currIdx = this.hoveredIdx;
          this.hoveredSec = 1;
        } else if (this.hoveredSec <= 0) {
          this.resetHoverState();
        } else {
          this.hoveredSec--;
        }
        // console.log(`counting down... ${this.hoveredSec}`);
      }, 1000);
    },
    ifHovered(category: string): boolean {
      if (typeof this.hoveredIdx == "string"){
        console.log((this.hoveredIdx.split('-')[0] == category) + category);
        return this.hoveredIdx.split('-')[0] == category;
      } else return false
    },

    resetHoverState(): void {
      console.log("resetHoverState");
      this.hoveredIdx = null;
      this.hoveredSec = 1;
      clearInterval(this.intervalId!);
      this.intervalId = null;
    },
  },
});
</script>

<template>
  <template v-for="category in Object.values(SkillCategory)" :key="category">
    <Skill
      :name="category"
      :skills="skills(category)"
      :colorChoice="iconColor(category)"
      :hoveredIdx="hoveredIdx"
      @update:hoveredIdx="val => hoveredIdx = val"
      @call:cntDwn="cntDwn"
    />
  </template>
</template>

