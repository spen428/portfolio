<template>
  <div class="mx-auto w-full max-w-5xl bg-cv-white">
    <div
      class="mx-auto px-2 py-4 print:!m-0 print:!max-w-[210mm] print:!p-[0.5mm] md:px-4 lg:max-w-4xl lg:px-0 lg:py-8"
    >
      <CvHeaderLarge class="hidden lg:flex" />
      <CvHeaderSmall class="lg:hidden" />
      <CvBody />
    </div>
  </div>
</template>

<script setup lang="ts">
import CvBody from "@/pages/cv/components/CvBody.vue";
import CvHeaderLarge from "@/pages/cv/components/cv-header/CvHeaderLarge.vue";
import CvHeaderSmall from "@/pages/cv/components/cv-header/CvHeaderSmall.vue";
// import { onBeforeMount, watch } from "vue";
// import DataService from "@/services/data.service";
//
// const fullName = DataService.getFullName();
//
// onBeforeMount(() =>
//   watch(fullName, () => {
//     document.title = `${fullName} ― CV & Portfolio`;
//   })
// );
</script>
