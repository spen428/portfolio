<template>
  <div class="mx-auto w-full max-w-5xl bg-cv-white">
    <div
      v-if="project"
      class="mx-auto px-2 py-4 print:!m-0 print:!max-w-[210mm] print:!p-[0.5mm] md:px-4 lg:max-w-4xl lg:px-0 lg:py-8"
    >
      <h1>{{ project.title }}</h1>
      <a
        :href="project.url.url"
        target="_blank"
        class="group inline-flex items-center gap-1"
      >
        Official Site
        <img
          src="/icons/external-link.svg"
          :alt="$t('opens_an_external_site')"
          class="h-4 w-0 duration-200 group-hover:w-4"
        />
      </a>
      <div v-if="project.iconUrls?.length" class="flex flex-wrap gap-2">
        <img
          v-for="iconUrl in project.iconUrls"
          :key="iconUrl"
          :src="iconUrl"
          alt=""
          class="h-6 w-6"
        />
      </div>
      <p class="text-justify text-sm italic" v-html="project.abstract ?? ''" />
      <article v-html="project.articleBody ?? ''" />
    </div>
  </div>
</template>

<script setup lang="ts">
import DataService from "@/services/data.service";

const props = defineProps<{ projectId: string }>();

const project = DataService.getProject(props.projectId);
</script>
