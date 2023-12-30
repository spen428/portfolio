<template>
  <div
    class="flex w-full flex-col items-center justify-center gap-10 overflow-hidden md:h-72 md:flex-row md:gap-4 lg:mx-8 lg:gap-16"
    :class="{ 'md:flex-row-reverse': mediaPosition === 'right' }"
  >
    <div
      class="mx-4 md:static md:w-1/2"
      :class="{
        'md:ml-4': mediaPosition === 'left',
        'md:mr-4': mediaPosition === 'right',
      }"
    >
      <MediaWithLoadingSkeleton
        :src="mediaUrl"
        :autoplay="autoplayVideos"
        class="h-[270px] w-[480px] rounded-lg border-2 border-cv-white object-cover"
      />
    </div>

    <div
      class="flex h-full w-9/12 grow flex-wrap justify-between gap-4 xs:w-3/5 md:static md:w-auto md:shrink md:flex-col md:flex-nowrap"
      :class="{
        'md:mr-8': mediaPosition === 'left',
        'md:ml-8': mediaPosition === 'right',
      }"
    >
      <div
        v-for="(tech, index) in technologies"
        :key="tech.name"
        class="inline-flex basis-[calc(50%-1rem)] items-center gap-4"
        :class="{ 'md:self-end': index % 2 == 1 }"
      >
        <MediaWithLoadingSkeleton
          :src="tech.logoUrl"
          class="h-[min(3rem,8vw)] w-[min(3rem,8vw)]"
        />
        <span
          class="text-[min(1rem,4vw)] font-bold xs:text-base"
          :style="{ color: tech.color ?? '#fff' }"
          v-text="tech.name"
        />
      </div>
    </div>
  </div>
</template>

<script setup lang="ts">
import ConfigurationService from "@/services/configuration.service";
import { computed } from "vue";
import DataService from "@/services/data.service";
import MediaWithLoadingSkeleton from "@/components/MediaWithLoadingSkeleton.vue";

const autoplayVideos = ConfigurationService.isAnimationEnabled();

const technologies = computed(() =>
  DataService.getTechnologiesById(props.technologyIds)
);

const props = defineProps<{
  mediaPosition: "left" | "right";
  mediaUrl: string;
  technologyIds: string[];
}>();
</script>
