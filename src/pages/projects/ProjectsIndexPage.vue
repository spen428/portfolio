<template>
  <div class="relative mx-32">
    <ProjectDiamond
      :project="projects[0]"
      size="32rem"
      class="absolute left-0 top-32"
    />
    <ProjectDiamond
      :project="projects[1]"
      size="32rem"
      class="absolute left-[32rem] top-32"
    />
    <ProjectDiamond
      :project="projects[2]"
      size="16rem"
      class="absolute left-[48rem] top-0"
    />
    <ProjectDiamond
      :project="projects[3]"
      size="16rem"
      class="absolute left-[24rem] top-[8rem]"
    />
    <ProjectDiamond
      :project="projects[4]"
      size="16rem"
      class="absolute left-[32rem] top-[32rem]"
    />
    <ProjectDiamond
      :project="projects[5]"
      size="16rem"
      class="absolute left-[48rem] top-[32rem]"
    />
    <ProjectDiamond
      :project="projects[6]"
      size="32rem"
      class="absolute left-[56rem] top-[16rem]"
    />
    <ProjectDiamond
      :project="projects[7]"
      size="32rem"
      class="absolute left-[72rem] top-0"
    />
  </div>
</template>

<style scoped></style>

<script setup lang="ts">
import DataService from "@/services/DataService";
import ProjectDiamond from "@/pages/projects/components/ProjectDiamond.vue";
import { computed } from "vue";
import type { Project } from "@/services/IDataService";

type VertexMeetingPosition =
  | "default"
  | "topToLeft"
  | "leftToTop"
  | "leftToRight";

interface PositionedProjectDiamond {
  project: Project;
  size: string;
  top: string;
  left: string;
}

const defs: { size: number; position: VertexMeetingPosition }[] = [
  { size: 32, position: "default" },
  { size: 16, position: "leftToTop" },
  { size: 32, position: "leftToRight" },
  { size: 16, position: "leftToTop" },
];

const projects = computed(() => DataService.getProjects());
const positionedProjectDiamonds = computed(() => map(projects.value));

function calculateOffset(
  previous: PositionedProjectDiamond,
  current: { size: number; position: VertexMeetingPosition }
): { top: string; left: string } {
  switch (current.position) {
    case "default":
      break;
    case "leftToRight":
      return {
        top: previous.top,
        left: `calc(${previous.left}+${previous.size})`,
      };
    case "topToLeft":
      break;
    case "leftToTop":
      break;
  }
  return {
    top: "0",
    left: "0",
  };
}

function map(projects: Project[]): PositionedProjectDiamond[] {
  const out: PositionedProjectDiamond[] = [];

  for (let i = 0; i < projects.length; i++) {
    const project = projects[i];
    const previous = out[i - 1];
    const def = defs[i];
    out.push({
      project,
      size: def.size + "rem",
      ...calculateOffset(previous, def),
    });
  }

  return out;
}
</script>
