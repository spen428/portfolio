<template>
  <section class="mt-0 break-inside-avoid-page xs:text-xl lg:text-base">
    <div class="text-center lg:text-left">
      <div
        class="justify-content-between mb-1 mt-6 flex w-full items-center font-bold text-primary-toned-700 print:!m-0 print:!text-sm lg:mb-2 lg:mt-0 lg:block"
      >
        <span class="h-[1pt] w-full bg-primary-toned-700 lg:!hidden"></span>
        <span class="mx-2 w-fit shrink-0 lg:mx-0">
          {{ title }}
        </span>
        <span class="h-[1pt] w-full bg-primary-toned-700 lg:!hidden"></span>
      </div>
      <div
        v-if="dateRange || subtitle"
        class="mb-6 mt-1 flex w-full flex-wrap items-center justify-center print:!text-sm lg:mb-2 lg:justify-start"
      >
        <h3 v-if="dateRange" class="mx-2 shrink-0 font-bold lg:ml-0">
          {{ dateRange.from }} &ndash; {{ dateRange.to }}
        </h3>
        <h4 v-if="subtitle" class="mx-2 shrink-0 italic lg:mx-0">
          {{ subtitle }}
        </h4>
      </div>
    </div>
    <p
      class="mb-4 text-justify last:mb-0 print:!text-[9pt] print:!leading-[18px] xs:text-lg lg:text-sm lg:leading-6"
    >
      <slot></slot>
    </p>
  </section>
</template>

<script setup lang="ts">
defineProps<{
  title: string;
  subtitle?: string;
  dateRange?: { from: string; to: string };
}>();
</script>
