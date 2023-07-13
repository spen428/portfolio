<template>
  <CvArticle
    class="print:!pt-0 first-of-type:lg:pt-8"
    v-for="article in cvData.articles"
    :key="article"
    :title="article.title"
  >
    <CvSection
      class="mt-5 first-of-type:mt-0"
      v-for="section in article.sections"
      :key="section"
      :title="section.title"
      :subtitle="section.subtitle"
      :date-range="section.dateRange"
    >
      <div v-html="section.htmlContent"></div>
    </CvSection>
  </CvArticle>
  <button
    class="mx-auto mt-4 flex animate-tease justify-center print:!hidden lg:mt-8"
    onclick="document.body.scrollTop = 0; document.documentElement.scrollTop = 0;"
  >
    <img src="/logo.svg" alt="Logo" class="h-16 w-16 select-none" />
  </button>
</template>
<script setup lang="ts">
import CvDataService from "@/services/DataService";
import CvArticle from "@/pages/cv/components/CvArticle.vue";
import CvSection from "@/pages/cv/components/CvSection.vue";

const cvData = CvDataService.getCvData();
</script>
