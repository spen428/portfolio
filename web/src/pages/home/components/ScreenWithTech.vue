<template>
  <div
    class="flex items-center justify-center overflow-hidden md:gap-8 lg:gap-16"
    :class="{ 'flex-row-reverse': imagePosition === 'right' }"
  >
    <img
      :src="imageUrl"
      alt=""
      class="relative h-fit rounded-lg border-2 border-cv-white md:static md:w-1/2"
      :class="{
        'right-[calc(45%+1rem)] xs:right-[calc(35%+1rem)]':
          imagePosition === 'left',
        'left-[calc(45%+1rem)] xs:left-[calc(35%+1rem)]':
          imagePosition === 'right',
      }"
    />
    <div
      class="absolute flex w-[calc(45%-3rem)] flex-col gap-8 xs:w-[calc(35%-3rem)] md:static md:w-1/4 md:gap-4"
      :class="{
        'left-[calc(55%+1rem)] xs:left-[calc(65%+1rem)]':
          imagePosition === 'left',
        'right-[calc(55%+1rem)] xs:right-[calc(65%+1rem)]':
          imagePosition === 'right',
      }"
    >
      <div
        v-for="(tech, index) in technologies"
        :key="tech.name"
        class="inline-flex items-center gap-4"
        :class="{ 'self-end': index % 2 == 1 }"
      >
        <img
          :src="tech.logoUrl"
          :alt="tech.name"
          class="h-[min(4rem,5vw)] w-[min(4rem,5vw)]"
        />
        <span
          class="font-bold"
          :style="{ color: tech.color ?? '#fff' }"
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
