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

    <img src="/logo.svg" alt="" class="h-1/3" />

    <div class="flex flex-col items-center justify-center gap-2">
      <div class="text-center">
        <h1 class="mt-1 text-lg text-primary-950">
          {{ personalInfo.fullName }}
        </h1>
        <h2 class="mb-4 mt-1 font-serif text-xs italic">
          {{ personalInfo.tagLine }}
        </h2>
      </div>
      <div class="flex flex-col items-center gap-1">
        <span class="flex text-xs">
          <img src="/icons/globe.svg" alt="Web:" class="mr-1 inline w-4" />
          {{ personalInfo.cvUrl.short }}
        </span>
        <span class="flex text-xs">
          <img src="/icons/mail.svg" alt="Email:" class="mr-1 inline w-4" />
          {{ personalInfo.emailAddress }}
        </span>
        <span class="flex text-xs">
          <img src="/icons/phone.svg" alt="Phone:" class="mr-1 inline w-4" />
          {{ personalInfo.phoneNumber.intl }}
        </span>
      </div>
    </div>
  </div>
</template>

<script setup lang="ts">
import type { PersonalInfo } from "@shared/data.model";

defineProps<{ personalInfo: PersonalInfo }>();
</script>
