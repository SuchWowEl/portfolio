<script lang="ts">
import { defineComponent } from "vue";
import { SkillCategory } from "../enums/SkillCategory";
import { skills, iconColor } from "~/utils/tech";

export default defineComponent({
  name: "SkillSection",
  data() {
    return {
      intervalId: null as number | null,
      SkillCategory,
      hoverAll: [] as string[],
    };
  },
  methods: {
    skills: skills,
    iconColor: iconColor,
    addToHover(category: string): void {
      if (!this.hoverAll.includes(category)) {
        this.hoverAll.push(category);
        this.hoverAll = [...this.hoverAll];
      }
      console.log(this.hoverAll.toString());
    },
  },
});
</script>

<template>
  <div
    class="mt-4 gap-y-4"
    v-for="category in Object.values(SkillCategory)"
    :key="category"
    @touchstart="addToHover(category)"
  >
    <div class="flex flex-wrap gap-2 items-center wrap-break-word">
      <span class="text-rv-pink">{{ category }}:</span>
      <span
        v-for="skill in skills(category)"
        :key="skill.name"
        class="flex items-center gap-x-2 m-1 duration-200 text-sm sm:text-base"
      >
        <Skill
          :name="category"
          :skill="skill"
          :ifHover="hoverAll"
          :colorChoice="iconColor(category)"
        />
      </span>
    </div>
  </div>
</template>
