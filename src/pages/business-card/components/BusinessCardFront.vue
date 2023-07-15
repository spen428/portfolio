<template>
  <div class="relative">
    <svg
      width="100%"
      height="100%"
      viewBox="0 0 1 1"
      preserveAspectRatio="none"
      class="absolute inset-0 z-0"
    >
      <polygon
        points="0,0 0,0.3 1,0.1 1,0"
        class="fill-cv-dark-purple"
      ></polygon>
      <polygon points="1,1 1,0.7 0,0.9 0,1" class="fill-cv-purple"></polygon>
    </svg>

    <div
      class="absolute inset-0 flex h-full w-full flex-col items-center justify-center p-2"
    >
      <div class="text-center text-sm">
        <h1 class="mt-1 text-lg text-cv-dark-purple">
          {{ personalInfo.fullName }}
        </h1>
        <h2 class="small-caps mb-4 mt-1 text-xs italic">
          Software &amp; Devops engineer
        </h2>
      </div>
      <div class="flex flex-col items-center text-sm">
        <span class="flex">
          <img src="/icons/globe.svg" alt="Site:" class="mr-1 inline w-4" />
          {{ personalInfo.cvUrl.short }}
        </span>
        <span class="flex">
          <img src="/icons/phone.svg" alt="Phone:" class="mr-1 inline w-4" />
          {{ personalInfo.phoneNumber.local }}
        </span>
      </div>
    </div>
  </div>
</template>

<script setup lang="ts">
import DataService from "@/services/DataService";

const personalInfo = DataService.getPersonalInfo();
</script>
