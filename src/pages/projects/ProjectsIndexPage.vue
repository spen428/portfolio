<template>
  <div class="relative mx-32">
    <ProjectDiamond
      v-for="(project, index) in projects"
      :key="project.id"
      :project="project"
      :size="placements[index].size"
      class="absolute"
      :style="{
        top: placements[index].top,
        left: placements[index].left,
      }"
    />
  </div>
</template>

<style scoped></style>

<script setup lang="ts">
import DataService from "@/services/DataService";
import ProjectDiamond from "@/pages/projects/components/ProjectDiamond.vue";
import { computed } from "vue";

const placements = [
  { size: "32rem", left: "0", top: "8rem" },
  { size: "32rem", left: "32rem", top: "8rem" },
  { size: "16rem", left: "48rem", top: "0" },
  { size: "16rem", left: "24rem", top: "8rem" },
  { size: "16rem", left: "32rem", top: "32rem" },
  { size: "16rem", left: "48rem", top: "32rem" },
  { size: "32rem", left: "56rem", top: "16rem" },
  { size: "32rem", left: "72rem", top: "0" },
];

const projects = computed(() =>
  DataService.getProjects().slice(0, placements.length)
);
</script>
