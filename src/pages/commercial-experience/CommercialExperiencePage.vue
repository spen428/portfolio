<template>
  <div class="mx-auto w-full max-w-5xl bg-cv-white">
    <div
      class="mx-auto px-2 py-4 text-justify print:!m-0 print:!max-w-[210mm] print:!p-[0.5mm] md:px-4 lg:max-w-4xl lg:px-0 lg:py-8"
    >
      <h1 class="mb-8 mt-4 text-xl font-bold">Commercial Experience</h1>
      <p v-html="data.introduction" class="mb-8 text-sm italic" />
      <article v-for="article in data.articles">
        <h1 class="my-4 text-xl">{{ article.title }}</h1>
        <img :src="article.logoUrl" class="mx-auto h-16" />
        <p class="text-balanced my-4 text-center text-sm">
          {{ article.tags.join(", ") }}
        </p>KKK
        <p>{{ article.introduction }}</p>
        <section v-for="section in article.sections">
          <h2 class="mb-4 mt-6 text-lg">{{ section.title }}</h2>
          <p v-html="section.body" />
        </section>
      </article>
    </div>
  </div>
</template>

<style scoped>
.text-balanced {
  text-wrap: balance;
}
</style>

<script setup lang="ts">
import DataService from "@/services/DataService";

const data = DataService.getCommercialExperience();
</script>
