<template>
  <div class="mx-auto w-full max-w-5xl bg-cv-white py-4 sm:py-8 lg:py-16">
    <article
      v-if="project"
      class="project-content mx-4 flex flex-col gap-4 lg:mx-auto lg:max-w-4xl"
    >
      <span class="flex flex-col justify-between xs:flex-row">
        <h1 class="text-2xl text-cv-dark-purple">{{ project.title }}</h1>
        <span>{{ project.type }}</span>
      </span>

      <div
        v-if="technologies.length"
        class="flex flex-wrap justify-evenly sm:my-4 sm:justify-start sm:gap-4"
      >
        <img
          v-for="tech in technologies"
          :key="tech.id"
          :src="tech.logoUrl"
          :alt="tech.name"
          class="h-[min(2.5rem,10vw)] w-[min(2.5rem,10vw)]"
        />
      </div>

      <p class="text-justify text-sm italic">
        <b>Abstract:</b>
        {{ project.abstract ?? "None." }}
      </p>

      <section class="flex flex-col justify-around md:flex-row">
        <div class="flex gap-2 md:gap-4">
          <div class="w-0.5 shrink-0 bg-cv-light-grey sm:w-1" />
          <div class="flex grow flex-col gap-[inherit] py-2">
            <h2 class="!text-base">Learning objectives</h2>
            <ul class="list-disc text-sm">
              <li v-for="lo in project.learningObjectives ?? []" v-html="lo" />
            </ul>
          </div>
          <div class="w-0.5 bg-cv-light-grey sm:w-1 md:w-0" />
        </div>
        <div class="flex gap-2 md:gap-4">
          <div class="w-0.5 bg-cv-light-grey sm:w-1 md:w-0" />
          <div class="flex grow flex-col gap-[inherit] py-2">
            <h2 class="!text-base">Learning outcomes</h2>
            <ul class="list-disc text-sm">
              <li v-for="lo in project.learningOutcomes ?? []" v-html="lo" />
            </ul>
          </div>
          <div class="w-0.5 shrink-0 bg-cv-light-grey sm:w-1" />
        </div>
      </section>

      <section
        v-html="project.articleBody ?? ''"
        class="flex flex-col gap-[inherit]"
      />
    </article>
  </div>
</template>

<style>
.project-content {
  & h2 {
    @apply text-lg text-cv-purple;
  }

  & p {
    @apply text-justify;
  }

  & pre {
    @apply overflow-x-scroll rounded border border-cv-dark-purple bg-cv-light-grey p-2;
  }
}
</style>

<script setup lang="ts">
import DataService from "@/services/data.service";
import { computed } from "vue";

const props = defineProps<{ projectId: string }>();

const project = DataService.getProject(props.projectId);
const technologies = computed(() =>
  DataService.getTechnologiesById(project.value?.technologyIds ?? [])
);
</script>
