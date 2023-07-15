<template>
  <DiamondGrid :projects="projects" :diamondSizeRem="16" :spacingRem="0.25" />
</template>

<style scoped></style>

<script setup lang="ts">
import DiamondGrid from "@/pages/projects/components/DiamondGrid.vue";
import DataService from "@/services/DataService";

const projects = DataService.getProjects();
</script>
