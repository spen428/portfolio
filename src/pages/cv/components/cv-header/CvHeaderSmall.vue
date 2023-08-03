<template>
  <div>
    <CvHeaderProfilePicture />
    <div class="m-0 flex w-full min-w-0 flex-row flex-wrap justify-between">
      <div
        class="mb-4 flex w-full flex-col items-center justify-between text-center"
      >
        <h1
          class="mx-0 mt-3 font-serif text-3xl font-bold text-cv-dark-purple xs:text-4xl"
        >
          {{ personalInfo.fullName }}
        </h1>
        <span class="mb-4 mt-8">
          {{ personalInfo.longerTagLine }}
        </span>
      </div>
      <div class="my-2 flex w-full items-center justify-evenly md:my-4">
        <a :href="`tel:${personalInfo.phoneNumber.intl}`">
          <img src="/icons/phone.svg" alt="Phone" />
        </a>
        <a :href="`mailto:${personalInfo.emailAddress}`">
          <img src="/icons/mail.svg" alt="Email" />
        </a>
        <a :href="personalInfo.location.url" target="_blank">
          <img src="/icons/map-pin.svg" alt="Location" />
        </a>
        <a :href="personalInfo.linkedIn.url" target="_blank">
          <img src="/icons/linkedin-outline.svg" alt="LinkedIn" />
        </a>
        <a :href="personalInfo.github.url" target="_blank">
          <img src="/icons/github.svg" alt="GitHub" />
        </a>
      </div>
    </div>
  </div>
</template>

<script setup lang="ts">
import CvHeaderProfilePicture from "@/pages/cv/components/cv-header/CvHeaderProfilePicture.vue";

import DataService from "@/services/DataService";

const personalInfo = DataService.getPersonalInfo();
</script>
