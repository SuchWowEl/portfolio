<script lang="ts">
import {langs, frameworks, tools, iconColor} from "~/utils/tech";
import type {techSpan} from "~/utils/tech";
import { SkillCategory } from "~/enums/SkillCategory";

interface projectType {
  name: string,
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
    desc: `A prototype mobile game that teaches children
    how to read through playing interactive Filipino stories,
    with which we won the 2024 STTP competition.`,
    langs: techFilterer(langs,['TypeScript']),
    fwrks: techFilterer(frameworks,['React', 'Ionic']),
  },
  {
    name: 'PAO Web App',
    desc: `As a requirement in one of my college subjects, I
    led a team to make initial web application— which digitizes
    a client scheduling an appointment with an attorney.
    Focused more on the Backend (MySQL)`,
    langs: techFilterer(langs, ['Python']),
    fwrks: techFilterer(frameworks, ['Flask']),
    tools: techFilterer(tools, ['MySQL', 'Tailwind', 'Jira', 'Figma', 'DBeaver']),
  },
  {
    name: 'Planning Digitization (for LGU GenSan)',
    desc: `Digitize the process of creating AIP/PPA’s for the
    City of General Santos LGU by developing a web application.`,
    langs: techFilterer(langs, ['PHP', 'TypeScript']),
    fwrks: techFilterer(frameworks, ['Laravel', 'Alpine']),
    tools: techFilterer(tools, ['MySQL', 'Tailwind', 'DBeaver', 'Docker']),
  },
  {
    // name: `Transforming Academic Data: Towards Building a new
    // MSU-IIT Data Warehouse and its Application Programming Interface`,
    name: "Academic Data Mart for MSU-IIT's Student Information System",
    desc: `For our thesis, I led the team to design and develop the
    Data Mart and its ETL using Apache NiFI.`,
    langs: techFilterer(langs, [ 'Groovy']),
    tools: techFilterer(tools, ['PostgreSQL', 'Apache NiFi', 'DBeaver', 'Docker']),
  },
];

export default defineComponent({
  name: 'PortfolioSection',
  data() {
    return {
      hoveredIdx: null as string | null,
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
      return this.hoveredIdx === `${projIdx}-${category}-${techIdx}`;
    },
  }
})

</script>

<template>
  <div 
    v-for="(proj,projIdx) in projects"
    :key="projIdx"
    class="bg-gray-800 p-4 rounded-lg shadow flex flex-col gap-y-4"
    @mouseleave="hoveredIdx = 'none'"
  >
    <h3 class="text-xl text-rv-yellow font-semibold">{{ proj.name }}</h3>
    <p class="text-base">{{ proj.desc }}</p>
    <div 
      class="bg-gray-900 rounded-b-md self-end md:max-w-2/3 flex
      items-center flex-wrap border-t-rv-pink border-t-1 p-3 sm:p-4
      gap-x-2 gap-y-2 sm:gap-x-4 sm:gap-y-4 content-center">
      <template v-for="category in ['langs', 'fwrks', 'tools']">
        <div
          v-for="(tech,techIdx) in (proj[category as keyof projectType] as techSpan)"
          :class="['flex flex-row items-center lg:gap-x-2',
            !ifHovered(projIdx, category, techIdx) ? 'gap-x-0' : 'gap-x-2'
          ]"
          @mouseenter="hoveredIdx = `${projIdx}-${category}-${techIdx}`"
        >
          <component 
            :is="tech.icon" 
            :color="`${skillEnums(category as string)}`"
            class="transition-all h-[24px] w-[24px] sm:h-[32px] sm:w-[32px]"
          ></component>
          <a 
            :class="['transition-all',
              !ifHovered(projIdx, category, techIdx) ? 'text-[0px]' : 'text-base'
            ]"
          >{{ tech.name }}</a>
        </div>
      </template>
    </div>
  </div>
</template>

