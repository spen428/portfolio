<template>
  <div class="mt-12 flex w-full flex-col items-center justify-start">
    <h1
      class="text-shadow mb-2 font-serif text-[min(1.5rem,5vw)] font-bold text-cv-dark-purple text-opacity-80"
    >
      &diamond; {{ personalInfo.fullName }} &diamond;
    </h1>
    <h2
      class="text-shadow mb-20 font-serif text-[min(1.85rem,6vw)] font-bold italic text-cv-white"
    >
      {{ personalInfo.tagLine }}
    </h2>
    <CenterRibbon />

    <p class="mt-12">{{ yearsExperience }} years' experience</p>
    <p>as a full-stack developer&hellip;</p>
    <p class="mt-12">&hellip;but writing code even as a child,</p>
    <p>
      totalling <strong>over {{ yearsCoding }} years</strong> as a programmer.
    </p>
    <p class="mt-12">I specialise in&hellip;</p>
    <p class="mt-12">Angular with RxJS</p>
    <p>C# ASP.NET with EF Core</p>
    <p>Java Spring Framework</p>
    <p>Build and deployment pipelines</p>
    <p>and cloud configuration.</p>
    <p class="mt-12">I also have a passion for&hellip;</p>
    <p class="mt-12">Awesome tooling</p>
    <p>and clean architecture.</p>
    <p class="mt-12">
      Writing software <strong>isn't just</strong> work&hellip;
    </p>
    <p class="mt-12">As a tech <strong>enthusiast</strong></p>
    <p>it extends to my leisure time too,</p>
    <p><strong>amplifying</strong> my exposure to&hellip;</p>
    <p class="mt-12">novel problems</p>
    <p>design patterns</p>
    <p class="mb-12">new paradigms</p>
    <button
      class="mb-12 flex animate-tease"
      onclick="document.body.scrollTop = 0; document.documentElement.scrollTop = 0;"
    >
      <img
        src="/logo-outline.svg"
        alt="Tap here to scroll back to the top"
        class="h-16 w-16 select-none"
      />
    </button>
    <div class="fixed bottom-0 flex h-32 w-full justify-center">
      <button class="mt-4 w-12 animate-bounce">
        <img
          src="/icons/arrow-ios-downward-outline.svg"
          alt="Scroll down to read more"
        />
      </button>
    </div>
  </div>
</template>

<style scoped>
.text-shadow {
  text-shadow: 0 0 2rem rgb(var(--cv-dark-purple));
}

p {
  font-size: 2rem;
  color: white;
  text-shadow: 0 0 2rem rgb(var(--cv-dark-purple));
}
</style>

<script setup lang="ts">
import CenterRibbon from "@/pages/home/components/CenterRibbon.vue";
import DataService from "@/services/DataService";

const personalInfo = DataService.getPersonalInfo();

const currentYear = new Date().getFullYear();
const yearsExperience = currentYear - 2018;
const yearsCoding = currentYear - 2006;

const scrollToTop = () => {
  document.body.scrollTop = 0;
  document.documentElement.scrollTop = 0;
};
</script>
