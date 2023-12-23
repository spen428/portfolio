<template>
  <div
    class="pointer-events-none mx-auto mt-8 flex w-fit select-none flex-col items-center border-[2rem] border-cv-light-grey"
  >
    <BusinessCardFront class="card" :personal-info="personalInfo" />
    <span class="h-8 w-full bg-cv-light-grey"></span>
    <BusinessCardBack class="card" :personal-info="personalInfo" />
  </div>
</template>

<style scoped>
.card {
  width: 85mm; /* 91mm in Japan */
  height: 55mm;
}
</style>

<script setup lang="ts">
import BusinessCardFront from "@/pages/business-card/components/BusinessCardFront.vue";
import BusinessCardBack from "@/pages/business-card/components/BusinessCardBack.vue";
import DataService from "@/services/data.service";

const personalInfo = DataService.getPersonalInfo();
</script>
