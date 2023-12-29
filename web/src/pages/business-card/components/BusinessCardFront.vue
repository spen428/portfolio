<template>
  <div
    class="flex flex-row items-center justify-between border-2 border-cv-dark-purple bg-cv-white p-4"
  >
    <img src="/logo.svg" class="m-4 ml-0 h-1/2" alt="" />
    <div class="w-full whitespace-nowrap text-sm font-bold">
      <h1 class="text-lg text-cv-dark-purple">{{ personalInfo.fullName }}</h1>
      <h2 class="small-caps mb-4 text-xs italic">
        Software &amp; Devops engineer
      </h2>
      <span class="flex">
        <img src="/icons/phone.svg" alt="Phone:" class="mr-1 inline w-4" />
        {{ personalInfo.phoneNumber.local }}
      </span>
      <span class="flex">
        <img src="/icons/mail.svg" alt="Email:" class="mr-1 inline w-4" />
        {{ personalInfo.emailAddress }}
      </span>
      <span class="flex">
        <img src="/icons/globe.svg" alt="Site:" class="mr-1 inline w-4" />
        {{ personalInfo.cvUrl.short }}
      </span>
    </div>
  </div>
</template>

<script setup lang="ts">
import type { PersonalInfo } from "@shared/data.model";

defineProps<{ personalInfo: PersonalInfo }>();
</script>
