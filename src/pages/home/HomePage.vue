<template>
  <div
    class="mx-auto mt-12 flex w-full max-w-6xl flex-col items-center justify-start 2xl:max-w-7xl"
  >
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
  </div>
</template>

<style scoped>
.text-shadow {
  text-shadow: 0 0 2rem rgb(var(--cv-dark-purple));
}
</style>

<script setup lang="ts">
import CenterRibbon from "@/pages/home/components/CenterRibbon.vue";
import DataService from "@/services/DataService";

const personalInfo = DataService.getPersonalInfo();
</script>
