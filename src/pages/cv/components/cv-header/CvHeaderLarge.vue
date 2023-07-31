<template>
  <div
    class="mb-8 flex h-20 w-full min-w-[700px] flex-row flex-wrap items-center justify-between print:!mb-10"
  >
    <div
      class="flex w-1/5 flex-col items-start self-end whitespace-nowrap print:!text-sm"
    >
      <a :href="`tel:${personalInfo.phoneNumber.intl}`">
        <img src="/icons/phone.svg" alt="Phone" class="inline w-4" />
        <span class="ml-1">{{ personalInfo.phoneNumber.local }}</span>
      </a>
      <a :href="`mailto:${personalInfo.emailAddress}`">
        <img src="/icons/mail.svg" alt="Email" class="inline w-4" />
        <span class="ml-1">{{ personalInfo.emailAddress }}</span>
      </a>
      <a :href="personalInfo.github.url" target="_blank" class="print:!hidden">
        <img src="/icons/github.svg" alt="GitHub" class="inline w-4" />
        <span class="ml-1">github/{{ personalInfo.github.username }}</span>
      </a>
      <a :href="personalInfo.cvUrl.full" class="hidden print:!block">
        <img src="/icons/globe.svg" alt="Website" class="inline w-4" />
        <span class="ml-1">{{ personalInfo.cvUrl.short }}</span>
      </a>
    </div>
    <div
      class="mb-0 flex h-full w-3/5 flex-col items-center justify-center text-center"
    >
      <h1
        class="mt-8 font-serif text-3xl font-bold text-cv-dark-purple print:!mt-3"
      >
        {{ personalInfo.fullName }}
      </h1>
      <span class="small-caps mt-2 text-base italic leading-4 print:!text-sm">
        {{ personalInfo.longerTagLine }}
      </span>
    </div>
    <div
      class="flex w-1/5 flex-col items-end self-end whitespace-nowrap text-right print:!text-sm"
    >
      <a
        :href="personalInfo.location.url"
        target="_blank"
        class="flex flex-col"
      >
        <span v-for="line in personalInfo.location.lines" :key="line">
          {{ line }}
        </span>
      </a>
    </div>
  </div>
</template>

<script setup lang="ts">
import DataService from "@/services/DataService";

const personalInfo = DataService.getPersonalInfo();
</script>
