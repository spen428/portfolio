<template>
  <div>
    <CvHeaderProfilePicture />
    <div class="m-0 flex w-full min-w-0 flex-row flex-wrap justify-between">
      <div
        class="mb-8 flex w-full flex-col items-center justify-between text-center"
      >
        <h1
          class="mx-0 mt-3 font-serif text-3xl font-bold text-cv-dark-purple xs:text-4xl"
        >
          {{ personalInfo.fullName }}
        </h1>
        <span class="small-caps mb-4 mt-8 text-lg italic">
          Full-stack software and Devops engineer
        </span>
      </div>
      <div class="mv-4 flex w-full items-center justify-evenly">
        <a :href="`tel:${personalInfo.phoneNumber.intl}`">
          <img src="/icons/phone.svg" alt="Phone" />
        </a>
        <a :href="`mailto:${personalInfo.emailAddress}`">
          <img src="/icons/mail.svg" alt="Email" />
        </a>
        <a :href="personalInfo.location.url" target="_blank">
          <img src="/icons/map-pin.svg" alt="Location" />
        </a>
        <a :href="personalInfo.github.url" target="_blank">
          <img src="/icons/github.svg" alt="GitHub" />
        </a>
        <router-link to="/portfolio">
          <img src="/icons/briefcase.svg" alt="Portfolio" />
        </router-link>
      </div>
    </div>
  </div>
</template>

<script setup lang="ts">
import CvHeaderProfilePicture from "@/pages/cv/components/cv-header/CvHeaderProfilePicture.vue";

import DataService from "@/services/DataService";

const personalInfo = DataService.getPersonalInfo();
</script>
