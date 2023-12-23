<template>
  <div class="relative border-2 border-cv-white bg-cv-white">
    <svg
      width="100%"
      height="100%"
      viewBox="0 0 1 1"
      preserveAspectRatio="none"
      class="absolute inset-0 z-0"
    >
      <polygon points="0,0 0,0.22 1,0.1 1,0" class="fill-cv-dark-purple" />
      <polygon points="1,1 1,0.78 0,0.9 0,1" class="fill-cv-purple" />
    </svg>

    <div class="flex h-full w-full items-center justify-center">
      <img src="/logo.svg" alt="Logo" class="h-1/3" />
    </div>
  </div>
</template>

<script setup lang="ts">
import type { PersonalInfo } from "@/services/data.model";

defineProps<{ personalInfo: PersonalInfo }>();
</script>
