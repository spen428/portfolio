<template>
  <div
    class="relative flex h-full w-full items-center justify-evenly border-2 border-cv-white bg-cv-white"
  >
    <svg
      width="100%"
      height="100%"
      viewBox="0 0 1 1"
      preserveAspectRatio="none"
      class="absolute inset-0"
    >
      <polygon points="0,0 0,0.1 1,0.05 1,0" class="fill-cv-dark-purple" />
      <polygon points="1,1 1,0.9 0,0.95 0,1" class="fill-cv-purple" />
    </svg>

    <div class="flex h-full w-full items-center px-2 py-8">
      <img src="/logo.svg" alt="" class="mx-auto h-1/2" />
    </div>
  </div>
</template>

<script setup lang="ts">
import type { CvData } from "@/services/data.model";

defineProps<{ cvData: CvData }>();
</script>
