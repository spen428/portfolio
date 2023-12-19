<template>
  <DiamondGrid :projects="projects" />
</template>

<style scoped></style>

<script setup lang="ts">
import DiamondGrid from "@/pages/projects/components/DiamondGrid.vue";
import DataService from "@/services/data.service";

const projects = DataService.getProjects();
</script>
