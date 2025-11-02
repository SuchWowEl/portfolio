import {
  SiLua,
  SiPhp,
  SiPython,
  SiJavascript,
  SiTypescript,
  SiC,
  SiCplusplus,
  SiHaskell,
  SiReact,
  SiVuedotjs,
  SiLaravel,
  SiDocker,
  SiNeovim,
  SiVisualstudiocode,
  SiAlpinedotjs,
  SiApache,
  SiPreact,
  SiMysql,
  SiPostgresql,
  SiFirebase,
  SiAndroidstudio,
  SiDbeaver,
  SiLatex,
  SiGnubash,
  SiFlask,
  SiApachegroovy,
  SiJupyter,
  SiIonic,
  SiPostman,
  SiFigma,
  SiNuxtdotjs,
  SiFlutter,
  SiTailwindcss,
  SiGithubcopilot,
  SiDart,
  SiKeras,
  SiJirasoftware,
  SiGodotengine,
  SiTypst,
  SiLinux,
} from "vue-icons-plus/si";
import { RiJavaLine } from "vue-icons-plus/ri";
import type { IconType } from "vue-icons-plus";
import { SkillCategory } from "~/enums/SkillCategory";

export const colors = {
  iconCyan: "#61E2FF",
  iconGreen: "#72F1B8",
  iconOrange: "#FF8B39",
};

export type techSpan = { name: string; icon?: IconType; url?: string }[];

export const langs: techSpan = [
  { name: "Python", icon: SiPython },
  { name: "Javascript", icon: SiJavascript },
  { name: "TypeScript", icon: SiTypescript },
  { name: "C", icon: SiC },
  { name: "C++", icon: SiCplusplus },
  { name: "Java", icon: RiJavaLine },
  { name: "PHP", icon: SiPhp },
  { name: "Lua", icon: SiLua },
  { name: "Dart", icon: SiDart },
  { name: "Haskell", icon: SiHaskell },
  { name: "Bash", icon: SiGnubash },
  { name: "Typst", icon: SiTypst },
  { name: "Latex", icon: SiLatex },
  { name: "Groovy", icon: SiApachegroovy },
];
export const frameworks: techSpan = [
  { name: "React", icon: SiReact },
  { name: "Ionic", icon: SiIonic },
  { name: "Vue.js", icon: SiVuedotjs },
  { name: "Alpine", icon: SiAlpinedotjs },
  { name: "Nuxt.js", icon: SiNuxtdotjs },
  { name: "Laravel", icon: SiLaravel },
  { name: "Flask", icon: SiFlask },
  { name: "Flutter", icon: SiFlutter },
  { name: "Preact", icon: SiPreact },
];
export const tools: techSpan = [
  { name: "Docker", icon: SiDocker },
  { name: "Linux", icon: SiLinux },
  { name: "Neovim", icon: SiNeovim },
  { name: "VSCode", icon: SiVisualstudiocode },
  { name: "Android Studio", icon: SiAndroidstudio },
  { name: "Godot", icon: SiGodotengine },
  { name: "DBeaver", icon: SiDbeaver },
  { name: "MySQL", icon: SiMysql },
  { name: "PostgreSQL", icon: SiPostgresql },
  { name: "Tailwind", icon: SiTailwindcss },
  { name: "Firebase", icon: SiFirebase },
  { name: "Postman", icon: SiPostman },
  { name: "Figma", icon: SiFigma },
  { name: "Apache NiFi", icon: SiApache },
  { name: "Jupyter Notebook", icon: SiJupyter },
  { name: "Keras", icon: SiKeras },
  { name: "GitHub Copilot", icon: SiGithubcopilot },
  { name: "Jira", icon: SiJirasoftware },
];

export function skills(choice: string): techSpan {
  if (choice === "Languages") return langs;
  else if (choice === "Frameworks") return frameworks;
  else return tools;
}

export function iconColor(choice: string): string {
  if (choice === SkillCategory.Languages) {
    return colors.iconCyan;
  } else if (choice === SkillCategory.Frameworks) {
    return colors.iconGreen;
  } else {
    return colors.iconOrange;
  }
}
