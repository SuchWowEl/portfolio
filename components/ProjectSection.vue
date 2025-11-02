<script lang="ts">
import {langs, frameworks, tools, iconColor} from "~/utils/tech";
import type {techSpan} from "~/utils/tech";
import { SkillCategory } from "~/enums/SkillCategory";

type projectType = {
  name: string,
  link?: string,
  image?: string,
  desc: string,
  langs: techSpan,
  fwrks?: techSpan,
  tools?: techSpan,
}

const techFilterer = (tech: techSpan, list: string[]) => {
  return tech.filter(tch => list.includes(tch.name));
}

const tempImageLink = 'https://placeholderjs.com/200x200';

const projects: projectType[] = [
  {
    name: 'Andana',
    desc: `An MVP mobile game that teaches children
    how to read through playing interactive Filipino stories,
    with which we won the 2024 STTP Region 10— a startup competition
    hosted by DOST for College students in the region.`,
    image: tempImageLink,
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
    image: tempImageLink,
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
    image: tempImageLink,
  },
  {
    name: 'Planning Digitization (LGU GenSan)',
    desc: `Digitize the process of creating AIP/PPA’s for the
    City of General Santos LGU by developing a web application.`,
    langs: techFilterer(langs, ['PHP', 'Javascript']),
    fwrks: techFilterer(frameworks, ['Laravel', 'Alpine']),
    tools: techFilterer(tools, ['MySQL', 'Tailwind', 'DBeaver', 'Docker']),
    image: tempImageLink,
  },
];

export default defineComponent({
  data() {
    return {
      hoveredIdx: [] as string[],
    }
  },
  computed: {
    groupedProjects() {
      // divide the projects into 2 columns
      const midIndex = Math.ceil(projects.length / 2);
      return [projects.slice(0, midIndex), projects.slice(midIndex)];
    },
    skillEnums() {
      return (title: string) => {
        if (title === "langs") return iconColor(SkillCategory.Languages)
        if (title === "fwrks") return iconColor(SkillCategory.Frameworks)
        else return iconColor(SkillCategory.Tools)
      }
    },
  },
  methods: {
    ifHovered(colIdx: number, projIdx: number, category: string, techIdx: number): boolean {
      if (this.hoveredIdx === null) return false;
      return this.hoveredIdx.includes(`${colIdx}-${projIdx}-${category}-${techIdx}`);
    },
    addToHover(colIdx: number, projIdx: number, category: string, techIdx: number): void {
      this.hoveredIdx = [...this.hoveredIdx, `${colIdx}-${projIdx}-${category}-${techIdx}`]
    },
  }
})
</script>

<template>
  <div class="flex md:flex-row flex-col gap-6">
    <div
      v-for="(column, colIdx) in groupedProjects"
      :key="colIdx"
      class="flex flex-col lg:w-1/2 w-full gap-6 h-fit"
    >
      <div 
        v-for="(proj,projIdx) in column"
        :key="projIdx"
        class="bg-gray-800 p-4 rounded-lg w-full shadow flex flex-col gap-y-4 h-fit basis-1/2"
      >
        <h3 class="text-xl text-rv-yellow font-semibold">{{ proj.name }}</h3>
        <img src="https://placeholderjs.com/200x200" alt="Placeholder image" class="h-[200px] w-[200px] mx-auto"/>
        <p class="text-base">{{ proj.desc }}</p>
        <div 
          class="self-end text-end max-w-full flex
          items-center flex-wrap p-3 sm:p-4
          gap-x-2 gap-y-2 sm:gap-x-4 sm:gap-y-4 content-center">
          <template v-for="category in ['langs', 'fwrks', 'tools']">
            <span
              v-for="(tech,techIdx) in (proj[category as keyof projectType] as techSpan)"
              :class="['flex flex-row items-center lg:gap-x-2',
                !ifHovered(colIdx,projIdx, category, techIdx) ? 'gap-x-0' : 'gap-x-2'
              ]"
              @mouseenter="addToHover(colIdx, projIdx, category, techIdx)"
              @touchstart="addToHover(colIdx, projIdx, category, techIdx)"
            >
              <component 
                :is="tech.icon" 
                :color="`${skillEnums(category as string)}`"
                :size='24'
              ></component>
              <a 
                :class="['transition-all',
                  !ifHovered(colIdx,projIdx, category, techIdx) ? 'text-[0px]' : 'text-base'
                ]"
              >{{ tech.name }}</a>
            </span>
          </template>
        </div>
      </div>
    </div>
  </div>
</template>

