<template>
  <DiamondGrid :projects="projects" />
</template>

<style scoped></style>

<script setup lang="ts">
import DiamondGrid from "@/pages/projects/components/DiamondGrid.vue";
import DataService from "@/services/DataService";

const projects = DataService.getProjects();
</script>
