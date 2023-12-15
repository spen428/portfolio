<template>
  <div>
    <div class="m-0 flex w-full min-w-0 flex-row flex-wrap justify-between">
      <div
        class="mb-4 flex w-full flex-col items-center justify-between text-center"
      >
        <h1
          class="mx-0 mt-3 font-serif text-3xl font-bold text-cv-dark-purple xs:text-4xl"
        >
          <ruby v-if="personalInfo.fullNameRuby">
            {{ personalInfo.fullName }}
            <rt> {{ personalInfo.fullNameRuby }}</rt>
          </ruby>
          <span v-else>{{ personalInfo.fullName }}</span>
        </h1>
        <span class="balance mb-4 mt-8">
          {{ personalInfo.longerTagLine }}
        </span>
      </div>
      <div class="my-2 flex w-full items-center justify-evenly md:my-4">
        <a :href="`tel:${personalInfo.phoneNumber.intl}`">
          <img src="/icons/phone.svg" :alt="$t('telephone')" />
        </a>
        <a :href="`mailto:${personalInfo.emailAddress}`">
          <img src="/icons/mail.svg" :alt="$t('email_address')" />
        </a>
        <a :href="personalInfo.location.url" target="_blank">
          <img src="/icons/map-pin.svg" :alt="$t('location')" />
        </a>
        <a :href="personalInfo.github.url" target="_blank">
          <img src="/icons/github.svg" alt="GitHub" />
        </a>
        <router-link to="/portfolio">
          <img src="/icons/briefcase.svg" :alt="$t('portfolio')" />
        </router-link>
      </div>
    </div>
  </div>
</template>

<script setup lang="ts">
import type { PersonalInfo } from "@/services/data.model";

defineProps<{ personalInfo: PersonalInfo }>();
</script>
