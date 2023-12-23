<template>
  <div
    class="flex w-full flex-col items-center justify-center gap-10 overflow-hidden md:h-72 md:flex-row md:gap-4 lg:mx-8 lg:gap-16"
    :class="{ 'md:flex-row-reverse': imagePosition === 'right' }"
  >
    <div class="mx-4 h-full md:static">
      <img
        :src="imageUrl"
        alt=""
        class="h-full rounded-lg border-2 border-cv-white"
      />
    </div>

    <div
      class="flex h-full w-3/5 grow flex-wrap justify-between gap-4 md:static md:w-auto md:shrink md:flex-col md:flex-nowrap"
      :class="{
        'md:mr-8': imagePosition === 'left',
        'md:ml-8': imagePosition === 'right',
      }"
    >
      <div
        v-for="(tech, index) in technologies"
        :key="tech.name"
        class="inline-flex items-center gap-4"
        :class="{ 'md:self-end': index % 2 == 1 }"
      >
        <img :src="tech.logoUrl" alt="" class="h-12 w-12" />
        <span class="font-bold" :style="{ color: '#fff' }" v-text="tech.name" />
      </div>
    </div>
  </div>
</template>

<script setup lang="ts">
export type TechnologyWithIcon = {
  name: string;
  logoUrl: string;
  color?: string;
};

defineProps<{
  imagePosition: "left" | "right";
  imageUrl: string;
  technologies: TechnologyWithIcon[];
}>();
</script>
