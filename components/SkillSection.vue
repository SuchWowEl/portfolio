
<script lang="ts">
import { defineComponent } from 'vue';
import { SkillCategory } from '../enums/SkillCategory';

  // Ensure SkillCategory is declared in the data or methods
import { SiLua, SiPhp, SiPython, SiJavascript, SiTypescript, SiC, SiCplusplus, SiHaskell, SiReact, SiVuedotjs, SiLaravel, SiGit, SiDocker, SiNeovim, SiVisualstudiocode, SiAlpinedotjs, SiApache, SiPreact, SiMysql, SiPostgresql, SiFirebase, SiAndroidstudio, SiDbeaver, SiLatex, SiGnubash, SiFlask, SiApachegroovy, SiJupyter, SiIonic, SiPostman, SiFigma, SiNuxtdotjs, SiFlutter, SiTailwindcss, SiGithubcopilot, SiDart, SiKeras } from "vue-icons-plus/si";
import { RiJavaLine } from "vue-icons-plus/ri";
import type { IconType } from 'vue-icons-plus';

export default defineComponent({
  name: 'SkillSection',
  data() {
    return {
      hoveredIdx: null as string | null,
      hoveredSec: 1 as number,
      intervalId: null as number | null,
      iconCyan: '#61E2FF',
      iconGreen: '#72F1B8',
      iconOrange: '#FF8B39',
      SkillCategory
    }
  },
  methods: {
    skills(choice: string): {name: string, icon?: IconType, url?: string}[] {
      if (choice === 'Languages') {
        return [
          { name: 'Python', icon: SiPython },
          { name: 'Javascript', icon: SiJavascript },
          { name: 'TypeScript', icon: SiTypescript },
          { name: 'C', icon: SiC },
          { name: 'C++', icon: SiCplusplus },
          { name: 'Java', icon: RiJavaLine },
          { name: 'PHP', icon: SiPhp },
          { name: 'Lua', icon: SiLua },
          { name: 'Dart', icon: SiDart },
          { name: 'Haskell', icon: SiHaskell },
          { name: 'Bash', icon: SiGnubash },
          { name: 'Latex', icon: SiLatex },
          { name: 'Groovy', icon: SiApachegroovy },
        ];
      } else if (choice === 'Frameworks') {
        return [
          { name: 'React', icon: SiReact },
          { name: 'Ionic', icon: SiIonic },
          { name: 'Vue.js', icon: SiVuedotjs },
          { name: 'Alpine', icon: SiAlpinedotjs },
          { name: 'Nuxt.js', icon: SiNuxtdotjs },
          { name: 'Laravel', icon: SiLaravel },
          { name: 'Flask', icon: SiFlask },
          { name: 'Flutter', icon: SiFlutter },
          { name: 'Preact', icon: SiPreact },
        ];
      } else {
        return [
          { name: 'Git', icon: SiGit },
          { name: 'Docker', icon: SiDocker },
          { name: 'Neovim', icon: SiNeovim },
          { name: 'VSCode', icon: SiVisualstudiocode },
          { name: 'Android Studio', icon: SiAndroidstudio },
          { name: 'DBeaver', icon: SiDbeaver },
          { name: 'MySQL', icon: SiMysql },
          { name: 'PostgreSQL', icon: SiPostgresql },
          { name: 'Tailwind', icon: SiTailwindcss },
          { name: 'Firebase', icon: SiFirebase },
          { name: 'Postman', icon: SiPostman },
          { name: 'Figma', icon: SiFigma },
          { name: 'Apache NiFi', icon: SiApache },
          { name: 'Keras', icon: SiKeras },
          { name: 'Jupyter Notebook', icon: SiJupyter },
          { name: 'GitHub Copilot', icon: SiGithubcopilot },
          { name: 'just', url: 'https://www.github.com/casey/just' },
        ];
      }
    },
    iconColor(choice: string): string {
      if (choice === 'Languages') {
        return this.iconCyan;
      } else if (choice === 'Frameworks') {
        return this.iconGreen;
      } else {
        return this.iconOrange;
      }
    },
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

    resetHoverState(): void {
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

