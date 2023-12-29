<template>
  <div class="mx-auto w-full max-w-5xl bg-cv-white">
    <div
      v-if="project"
      class="mx-auto px-2 py-4 print:!m-0 print:!max-w-[210mm] print:!p-[0.5mm] md:px-4 lg:max-w-4xl lg:px-0 lg:py-8"
    >
      <h1>{{ project.title }}</h1>
      <AOrRouterLink :href="project.url.url" external>
        Official Site
      </AOrRouterLink>
      <div v-if="technologies.length" class="flex flex-wrap gap-2">
        <img
          v-for="tech in technologies"
          :key="tech.id"
          :src="tech.logoUrl"
          alt=""
          class="h-12 w-12"
        />
      </div>
      <p class="text-justify text-sm italic" v-html="project.abstract ?? ''" />
      <article v-html="project.articleBody ?? ''" />
    </div>
  </div>
</template>

<script setup lang="ts">
import DataService from "@/services/data.service";
import { computed } from "vue";
import AOrRouterLink from "@/components/AOrRouterLink.vue";

const props = defineProps<{ projectId: string }>();

const project = DataService.getProject(props.projectId);
const technologies = computed(() =>
  DataService.getTechnologiesById(project.value?.technologyIds ?? [])
);
</script>
