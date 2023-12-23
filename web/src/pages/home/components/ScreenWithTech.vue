<template>
  <div
    class="flex h-72 w-full items-center justify-center overflow-hidden md:gap-4 lg:mx-8 lg:gap-16"
    :class="{ 'flex-row-reverse': imagePosition === 'right' }"
  >
    <div
      class="relative mx-4 h-full md:static"
      :class="{
        'right-3/5': imagePosition === 'left',
        'xs:right-1/3': imagePosition === 'left',
        'left-3/5': imagePosition === 'right',
        'xs:left-1/3': imagePosition === 'right',
      }"
    >
      <img
        :src="imageUrl"
        alt=""
        class="h-full rounded-lg border-2 border-cv-white"
      />
    </div>

    <div
      class="flex h-full shrink grow flex-col justify-between md:static"
      :class="{
        'left-[calc(55%+1rem)] xs:left-[calc(70%)]': imagePosition === 'left',
        'right-[calc(55%+1rem)] xs:right-[calc(70%)]':
          imagePosition === 'right',
      }"
    >
      <div
        v-for="(tech, index) in technologies"
        :key="tech.name"
        class="inline-flex items-center gap-4"
        :class="{ 'self-end': index % 2 == 1 }"
      >
        <img :src="tech.logoUrl" alt="" class="h-12 w-12" />
        <span class="font-bold" :style="{ color: '#fff' }" v-text="tech.name" />
      </div>
    </div>

    <div id="spacer" class="shrink grow bg-pink-500">.</div>
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
