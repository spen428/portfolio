<template>
  <div
    class="relative flex h-full w-full items-center justify-evenly border-2 border-white bg-white"
  >
    <svg
      width="100%"
      height="100%"
      viewBox="0 0 1 1"
      preserveAspectRatio="none"
      class="absolute inset-0"
    >
      <polygon points="0,0 0,0.1 1,0.05 1,0" class="fill-primary-950" />
      <polygon points="1,1 1,0.9 0,0.95 0,1" class="fill-primary-700" />
    </svg>

    <div class="flex h-full w-full items-center px-2 py-8"></div>
  </div>
</template>

<script setup lang="ts">
import type { CvData } from "@shared/data.model";

defineProps<{ cvData: CvData }>();
</script>
