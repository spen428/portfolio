<template>
  <section class="mx-4 my-8 lg:m-8">
    <LoadingSkeleton v-if="!cvData.abstract" class="h-6 w-full" />
    <p
      v-else
      class="text-center italic print:!text-xs lg:text-justify lg:text-sm"
    >
      {{ cvData.abstract }}
    </p>
  </section>

  <LoadingSkeleton v-if="!cvData.articles" class="h-64 w-full" />
  <CvArticle
    v-else
    v-for="article in cvData.articles"
    :key="article.title"
    :title="article.title"
  >
    <CvSection
      class="mt-5 first-of-type:mt-0"
      v-for="section in article.sections"
      :key="section.title"
      :title="section.title"
      :subtitle="section.subtitle"
      :date-range="section.dateRange"
    >
      <div v-html="section.htmlContent" class="cv-section-content"></div>
    </CvSection>
  </CvArticle>
  <div class="mt-4 text-center text-xs lg:text-right">
    Last modified: {{ cvData.lastModified }}
  </div>
  <button
    class="mx-auto mt-4 flex animate-tease justify-center print:!hidden lg:mt-8"
    onclick="document.body.scrollTop = 0; document.documentElement.scrollTop = 0;"
  >
    <img src="/logo.svg" :alt="$t('logo')" class="h-16 w-16 select-none" />
  </button>
</template>

<style>
.cv-section-content {
  & p {
    @apply mb-2;
  }

  & li {
    @apply pr-8 text-justify;
  }
}
</style>

<script setup lang="ts">
import CvArticle from "@/pages/cv/components/CvArticle.vue";
import CvSection from "@/pages/cv/components/CvSection.vue";
import type { CvData } from "@shared/data.model";
import LoadingSkeleton from "@/components/LoadingSkeleton.vue";

defineProps<{ cvData: CvData }>();
</script>
