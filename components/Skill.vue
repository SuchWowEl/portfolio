<script lang="ts">
import { defineComponent } from 'vue';
import { SkillCategory } from '../enums/SkillCategory';
import type { PropType } from 'vue';
import type { IconType } from 'vue-icons-plus/lib';

export default defineComponent({
  props: {
    name: {
      type: String as PropType<SkillCategory>,
      required: true,
    },
    hoveredIdx: {
      type: [String, null] as PropType<string | null>,
      required: true
    },
    skills: {
      type: Array as PropType<Array<{name: string, icon?: IconType, url?: string}>>,
      required: true,
    },
    colorChoice: {
      type: String,
      required: true,
    },
  },
  data() {
    return {
    };
  },
});
</script>

<template>
  <div class="flex flex-wrap items-center">
    <span class="text-rv-pink">{{ name }}:</span>
    <span
      v-for="(skill, idx) in skills"
      :key="skill.name"
      :class="['flex items-center gap-x-2 m-1 duration-200', { 'hover:text-lg hover:transition-all': hoveredIdx === `${name}-${idx}` }]"
      @mouseover="$emit('update:hoveredIdx', `${name}-${idx}`)"
      @mouseleave="$emit('call:cntDwn')"
    >
      <template v-if="skill.icon">
        <component
          :is="skill.icon"
          :color="colorChoice"
          :size='hoveredIdx === `${name}-${idx}` ? 32 : 24'
          className="duration-200 transition-all"
        /><a :class="['transition-all', { 'text-lg': hoveredIdx === `${name}-${idx}` }]">{{ skill.name }}</a>
      </template>
      <template v-else>
        <a
          v-if="skill.url != null"
          :href="skill.url"
          :class="['bg-gray-800 px-1 rounded-sm transition-all', { 'text-lg text-rv-cyan': hoveredIdx === `${name}-${idx}` }]"
        >
          {{ skill.name }}
        </a>
        <a v-else>{{ skill.name }}</a>
      </template>
      <template v-if="idx < skills.length - 1"> | </template>
    </span>
  </div>
</template>

