<template>
  <div class="mx-auto w-full max-w-5xl bg-cv-white">
    <div
      v-if="project"
      class="mx-auto px-2 py-4 print:!m-0 print:!max-w-[210mm] print:!p-[0.5mm] md:px-4 lg:max-w-4xl lg:px-0 lg:py-8"
    >
      <h1>{{ project.title }}</h1>
      <a :href="project.url.url">Official site</a>
      <div v-if="project.iconUrls?.length" class="flex flex-wrap gap-2">
        <img
          v-for="iconUrl in project.iconUrls"
          :key="iconUrl"
          :src="iconUrl"
          alt=""
          class="h-6 w-6"
        />
      </div>
    </div>
  </div>
</template>

<script setup lang="ts">
import DataService from "@/services/data.service";

const props = defineProps<{ projectId: string }>();

const project = DataService.getProject(props.projectId);
</script>
