<script lang="ts">
import { langs, frameworks, tools, iconColor } from "~/utils/tech";
import { SkillCategory } from "~/enums/SkillCategory";

interface projectType {
  name: string;
  link?: string;
  image: {
    link: string;
    alt: string;
  };
  desc: string;
  langs: techSpanArr;
  fwrks?: techSpanArr;
  tools?: techSpanArr;
}

const techFilterer = (tech: techSpanArr, list: string[]) => {
  return tech.filter((tch) => list.includes(tch.name));
};

// const tempImageLink = "https://placeholderjs.com/200x200";

const projects: projectType[] = [
  {
    name: "Andana",
    desc: `An MVP mobile game that teaches children
    how to read through playing interactive Filipino stories,
    with which we won the 2024 STTP Region 10— a startup competition
    hosted by DOST for College students in the region.`,
    langs: techFilterer(langs, ["TypeScript"]),
    fwrks: techFilterer(frameworks, ["React", "Ionic"]),
    tools: techFilterer(tools, ["Figma", "Tailwind"]),
    image: {
      link: "https://res.cloudinary.com/djqoxxzdo/image/upload/v1762239424/andana_um7mdb.png",
      alt: "Andana preview",
    },
  },
  {
    name: `Academic Data Mart w/ API for MSU-IIT's Student
    Information System `,
    desc: `For our thesis, I led the team in designing the
    Data Mart Schema and developing the ETL using Kimball's
    method.`,
    langs: techFilterer(langs, ["Groovy"]),
    tools: techFilterer(tools, [
      "PostgreSQL",
      "Apache NiFi",
      "DBeaver",
      "Docker",
      "GitHub Copilot",
    ]),
    image: {
      link: "https://res.cloudinary.com/djqoxxzdo/image/upload/v1762239424/full_system_architecture_cnedew.png",
      alt: "Data Mart Architecture",
    },
  },
  {
    name: "PAO Web App",
    desc: `As a requirement in one of my college subjects, I
    led the team to make the initial web application— which
    digitizes a client scheduling an appointment with an
    attorney. Focused more on the Database and the Backend.`,
    langs: techFilterer(langs, ["Python"]),
    fwrks: techFilterer(frameworks, ["Flask"]),
    tools: techFilterer(tools, [
      "MySQL",
      "Tailwind",
      "Jira",
      "Figma",
      "DBeaver",
    ]),
    image: {
      link: "https://res.cloudinary.com/djqoxxzdo/image/upload/v1762239424/Login_gktkgs.png",
      alt: "PAO landing page",
    },
  },
  {
    name: "Planning Digitization (LGU GenSan)",
    desc: `Digitize the process of creating AIP/PPA’s for the
    City of General Santos LGU by developing a web application.`,
    langs: techFilterer(langs, ["PHP", "Javascript"]),
    fwrks: techFilterer(frameworks, ["Laravel", "Alpine"]),
    tools: techFilterer(tools, ["MySQL", "Tailwind", "DBeaver", "Docker"]),
    image: {
      link: "https://res.cloudinary.com/djqoxxzdo/image/upload/v1762239423/aip-ppa_pvxv9y.png",
      alt: "Planning Digitization landing page",
    },
  },
];

export default defineComponent({
  data() {
    return {
      hoveredIdx: [] as string[],
      iconColor,
      // eslint-disable-next-line @typescript-eslint/array-type
      projecttype_skill_keys: ["langs", "fwrks", "tools"] as Array<
        keyof Pick<projectType, "langs" | "fwrks" | "tools">
      >,
    };
  },
  computed: {
    groupedProjects() {
      // divide the projects into 2 columns
      const midIndex = Math.ceil(projects.length / 2);
      return [projects.slice(0, midIndex), projects.slice(midIndex)];
    },
    enum_of() {
      return (title: string): SkillCategory => {
        if (title === "langs") return SkillCategory.Languages;
        if (title === "fwrks") return SkillCategory.Frameworks;
        else return SkillCategory.Tools;
      };
    },
  },
  methods: {
    ifHovered(
      colIdx: number,
      projIdx: number,
      category: string,
      techIdx: number
    ): boolean {
      if (this.hoveredIdx === null) return false;
      return this.hoveredIdx.includes(
        `${colIdx}-${projIdx}-${category}-${techIdx}`
      );
    },
    addToHover(
      colIdx: number,
      projIdx: number,
      category: string,
      techIdx: number
    ): void {
      this.hoveredIdx = [
        ...this.hoveredIdx,
        `${colIdx}-${projIdx}-${category}-${techIdx}`,
      ];
    },
  },
});
</script>

<template>
  <div class="flex lg:flex-row flex-col gap-6">
    <div
      v-for="(column, colIdx) in groupedProjects"
      :key="colIdx"
      class="flex flex-col lg:w-1/2 w-full gap-6 h-fit"
    >
      <div
        v-for="(proj, projIdx) in column"
        :key="projIdx"
        class="bg-gray-800 p-4 rounded-lg w-full shadow flex flex-col gap-y-4 h-fit basis-1/2"
      >
        <h3 class="text-xl text-rv-yellow font-semibold">{{ proj.name }}</h3>
        <img :src="proj.image.link" :alt="proj.image.alt" >
        <p class="text-base">{{ proj.desc }}</p>
        <div
          class="self-end justify-end-safe text-end max-w-full flex items-center flex-wrap p-3 sm:p-4 gap-x-2 gap-y-2 sm:gap-x-4 sm:gap-y-4 content-end"
        >
          <template v-for="category in projecttype_skill_keys">
            <span
              v-for="(tech, techIdx) in proj[category]"
              :key="tech.name + techIdx"
              :class="[
                'flex flex-row items-center lg:gap-x-2 gap-x-0',
                !ifHovered(colIdx, projIdx, category, techIdx)
                  ? 'gap-x-0'
                  : 'gap-x-2',
              ]"
              @mouseenter="addToHover(colIdx, projIdx, category, techIdx)"
              @touchstart="addToHover(colIdx, projIdx, category, techIdx)"
            >
              <Skill
                :name="enum_of(category)"
                :skill="tech"
                :color-choice="iconColor(enum_of(category))"
              />
            </span>
          </template>
        </div>
      </div>
    </div>
  </div>
</template>
