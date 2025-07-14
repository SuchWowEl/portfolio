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
    skill: {
      type: Object as PropType<{name: string, icon?: IconType, url?: string}>,
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
      :size='24'
      className="duration-200 transition-all"
      @mouseover="handleMouseOver"
    />
    <a 
      :class="['transition-all',
        { 'text-[0px]': !hovered },
        { 'text-base': hovered }]"
    >{{ skill.name }}</a>
  </template>
  <template v-else>
    <a
      v-if="skill.url != null"
      :href="skill.url"
      :class="['bg-gray-800 px-1 rounded-sm transition-all', { 'text-lg text-rv-cyan': hovered }]"
    >
      {{ skill.name }}
    </a>
    <a v-else>{{ skill.name }}</a>
  </template>
</template>

