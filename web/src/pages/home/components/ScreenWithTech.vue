<template>
  <div
    class="flex w-full flex-col items-center justify-center gap-10 overflow-hidden md:h-72 md:flex-row md:gap-4 lg:mx-8 lg:gap-16"
    :class="{ 'md:flex-row-reverse': imagePosition === 'right' }"
  >
    <div
      class="mx-4 md:static md:w-1/2"
      :class="{
        'md:ml-4': imagePosition === 'left',
        'md:mr-4': imagePosition === 'right',
      }"
    >
      <img
        :src="imageUrl"
        alt=""
        class="rounded-lg border-2 border-cv-white object-cover"
        width="480"
        height="270"
      />
    </div>

    <div
      class="flex h-full w-9/12 grow flex-wrap justify-between gap-4 xs:w-3/5 md:static md:w-auto md:shrink md:flex-col md:flex-nowrap"
      :class="{
        'md:mr-8': imagePosition === 'left',
        'md:ml-8': imagePosition === 'right',
      }"
    >
      <div
        v-for="(tech, index) in technologies"
        :key="tech.name"
        class="inline-flex basis-[calc(50%-1rem)] items-center gap-4"
        :class="{ 'md:self-end': index % 2 == 1 }"
      >
        <img
          :src="tech.logoUrl"
          alt=""
          class="h-[min(3rem,8vw)] w-[min(3rem,8vw)]"
        />
        <span
          class="text-[min(1rem,4vw)] font-bold xs:text-base"
          :style="{ color: '#fff' }"
          v-text="tech.name"
        />
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
