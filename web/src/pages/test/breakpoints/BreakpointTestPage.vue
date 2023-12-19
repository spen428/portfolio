<template>
  <div class="mx-auto mt-8 max-w-4xl">
    <div
      class="m-2 flex basis-1/3 flex-wrap whitespace-nowrap border font-mono text-xl font-bold"
      v-for="b of breakpoints"
      :key="b.classes"
    >
      <span class="w-1/4 text-right">{{ b.name }}</span>
      <span
        :class="b.classes"
        class="mx-4 grow bg-green-400 text-center"
      ></span>
      <span :class="b.classes">"{{ b.classes }}"</span>
    </div>
  </div>
</template>

<script setup lang="ts">
const breakpoints = [
  { name: "default", classes: "" },
  { name: "hidden", classes: "hidden" },
  { name: "print", classes: "hidden print:block" },
  { name: "xs", classes: "hidden xs:block" },
  { name: "sm", classes: "hidden sm:block" },
  { name: "md", classes: "hidden md:block" },
  { name: "lg", classes: "hidden lg:block" },
  { name: "xl", classes: "hidden xl:block" },
  { name: "2xl", classes: "hidden 2xl:block" },
  { name: "block", classes: "block" },
  { name: "-print", classes: "block print:hidden" },
  { name: "-xs", classes: "block xs:hidden" },
  { name: "-sm", classes: "block sm:hidden" },
  { name: "-md", classes: "block md:hidden" },
  { name: "-lg", classes: "block lg:hidden" },
  { name: "-xl", classes: "block xl:hidden" },
  { name: "-2xl", classes: "block 2xl:hidden" },
  { name: "!-xs", classes: "block xs:hidden print:hidden" },
  { name: "!xs", classes: "hidden xs:block sm:hidden" },
  { name: "!sm", classes: "hidden sm:block md:hidden" },
  { name: "!md", classes: "hidden md:block lg:hidden" },
  { name: "!lg", classes: "hidden lg:block xl:hidden" },
  { name: "!xl", classes: "hidden xl:block 2xl:hidden" },
  { name: "!2xl", classes: "hidden 2xl:block print:hidden" },
  { name: "!print", classes: "hidden print:block" },
];
</script>
