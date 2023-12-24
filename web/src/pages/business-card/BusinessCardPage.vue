<template>
  <div class="mx-auto mt-8 flex w-fit select-none flex-col items-center gap-8">
    <BusinessCardFront
      :style="{ height: '55mm', width: cardWidth }"
      :personal-info="personalInfo"
    />
    <BusinessCardBack
      :style="{ height: '55mm', width: cardWidth }"
      :cv-data="cvData"
    />
  </div>
</template>

<script setup lang="ts">
import BusinessCardFront from "@/pages/business-card/components/BusinessCardFront.vue";
import BusinessCardBack from "@/pages/business-card/components/BusinessCardBack.vue";
import DataService from "@/services/data.service";
import LocaleService from "@/services/locale.service";
import { computed } from "vue";

const personalInfo = DataService.getPersonalInfo();
const cvData = DataService.getCvData();
const cardWidth = computed(() => {
  const locale = LocaleService.getCurrentLocale();
  return locale.value === "ja-JP" ? "99mm" : "85mm";
});
</script>
