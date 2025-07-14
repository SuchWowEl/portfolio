<script lang="ts">
import {langs, frameworks, tools, iconColor} from "~/utils/tech";
import type {techSpan} from "~/utils/tech";
import { SkillCategory } from "~/enums/SkillCategory";

type projectType = {
  name: string,
  link?: string,
  desc: string,
  langs: techSpan,
  fwrks?: techSpan,
  tools?: techSpan,
}

const techFilterer = (tech: techSpan, list: string[]) => {
  return tech.filter(tch => list.includes(tch.name));
}

const projects: projectType[] = [
  {
    name: 'Andana',
    desc: `An MVP mobile game that teaches children
    how to read through playing interactive Filipino stories,
    with which we won the 2024 STTP Region 10, a startup competition
    hosted by DOST.`,
    langs: techFilterer(langs,['TypeScript']),
    fwrks: techFilterer(frameworks,['React', 'Ionic']),
    tools: techFilterer(tools, ['Figma', 'Tailwind']),
  },
  {
    name: `Academic Data Mart w/ API for MSU-IIT's Student
    Information System `,
    desc: `For our thesis, I led the team in designing the
    Data Mart Schema and developing the ETL.`,
    langs: techFilterer(langs, [ 'Groovy']),
    tools: techFilterer(tools, ['PostgreSQL', 'Apache NiFi', 'DBeaver', 'Docker', 'GitHub Copilot']),
  },
  {
    name: 'PAO Web App',
    desc: `As a requirement in one of my college subjects, I
    led the team to make the initial web application— which
    digitizes a client scheduling an appointment with an
    attorney. Focused more on the Database (MySQL)`,
    langs: techFilterer(langs, ['Python']),
    fwrks: techFilterer(frameworks, ['Flask']),
    tools: techFilterer(tools, ['MySQL', 'Tailwind', 'Jira', 'Figma', 'DBeaver']),
  },
  {
    name: 'Planning Digitization (LGU GenSan)',
    desc: `Digitize the process of creating AIP/PPA’s for the
    City of General Santos LGU by developing a web application.`,
    langs: techFilterer(langs, ['PHP', 'Javascript']),
    fwrks: techFilterer(frameworks, ['Laravel', 'Alpine']),
    tools: techFilterer(tools, ['MySQL', 'Tailwind', 'DBeaver', 'Docker']),
  },
];

export default defineComponent({
  data() {
    return {
      hoveredIdx: [] as string[],
    }
  },
  computed: {
    projects: () => projects,
    skillEnums() {
      return (title: string) => {
        if (title === "langs") return iconColor(SkillCategory.Languages)
        if (title === "fwrks") return iconColor(SkillCategory.Frameworks)
        else return iconColor(SkillCategory.Tools)
      }
    },
  },
  methods: {
    ifHovered(projIdx: number, category: string, techIdx: number): boolean {
      if (this.hoveredIdx === null) return false;
      return this.hoveredIdx.includes(`${projIdx}-${category}-${techIdx}`);
    },
  }
})

</script>

<template>
  <div class="flex md:flex-row flex-col gap-6">
    <div
      class="flex flex-col lg:w-1/2 w-full gap-6 h-fit"
    >
      <div 
        v-for="(proj,projIdx) in projects.slice(0,2)"
        :key="projIdx"
        class="bg-gray-800 p-4 rounded-lg w-full shadow flex flex-col gap-y-4 h-fit basis-1/2"
        @mouseleave="hoveredIdx = []"
      >
        <h3 class="text-xl text-rv-yellow font-semibold">{{ proj.name }}</h3>
        <p class="text-base">{{ proj.desc }}</p>
        <div 
          class="self-end text-end max-w-full flex
          items-center flex-wrap p-3 sm:p-4
          gap-x-2 gap-y-2 sm:gap-x-4 sm:gap-y-4 content-center">
          <template v-for="category in ['langs', 'fwrks', 'tools']">
            <span
              v-for="(tech,techIdx) in (proj[category as keyof projectType] as techSpan)"
              :class="['flex flex-row items-center lg:gap-x-2',
                !ifHovered(projIdx, category, techIdx) ? 'gap-x-0' : 'gap-x-2'
              ]"
              @mouseenter="hoveredIdx = [...hoveredIdx, `${projIdx}-${category}-${techIdx}`]"
            >
              <component 
                :is="tech.icon" 
                :color="`${skillEnums(category as string)}`"
                :size='24'
              ></component>
              <a 
                :class="['transition-all',
                  !ifHovered(projIdx, category, techIdx) ? 'text-[0px]' : 'text-base'
                ]"
              >{{ tech.name }}</a>
            </span>
          </template>
        </div>
      </div>
    </div>
    <div
      class="flex flex-col lg:w-1/2 w-full gap-6 h-fit"
    >
      <div 
        v-for="(proj,projIdx) in projects.slice(2,5)"
        :key="projIdx"
        class="bg-gray-800 p-4 rounded-lg w-full shadow flex flex-col gap-y-4 h-fit basis-1/2"
        @mouseleave="hoveredIdx = []"
      >
        <h3 class="text-xl text-rv-yellow font-semibold">{{ proj.name }}</h3>
        <p class="text-base">{{ proj.desc }}</p>
        <div 
          class="self-end text-end max-w-full flex
          items-center flex-wrap p-3 sm:p-4
          gap-x-2 gap-y-2 sm:gap-x-4 sm:gap-y-4 content-center">
          <template v-for="category in ['langs', 'fwrks', 'tools']">
            <div
              v-for="(tech,techIdx) in (proj[category as keyof projectType] as techSpan)"
              :class="['flex flex-row items-center lg:gap-x-2',
                !ifHovered(projIdx+2, category, techIdx) ? 'gap-x-0' : 'gap-x-2'
              ]"
              @mouseenter="hoveredIdx = [...hoveredIdx, `${projIdx+2}-${category}-${techIdx}`]"
            >
              <component 
                :is="tech.icon" 
                :color="`${skillEnums(category as string)}`"
                :size='24'
              ></component>
              <a 
                :class="['transition-all',
                  !ifHovered(projIdx+2, category, techIdx) ? 'text-[0px]' : 'text-base'
                ]"
              >{{ tech.name }}</a>
            </div>
          </template>
        </div>
      </div>
    </div>
  </div>
</template>

