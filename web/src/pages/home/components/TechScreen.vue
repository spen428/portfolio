<template>
  <div class="flex w-full max-w-5xl flex-col items-center gap-12 text-cv-white">
    <div class="flex w-full max-w-4xl flex-col gap-4">
      <h1 class="mx-4 text-[min(1.85rem,5vw)]" v-html="titleHtml" />
      <h2 class="mx-4 self-end text-right" v-html="subtitleHtml" />
    </div>
    <ScreenWithTech
      media-position="left"
      :media-url="mediaUrls[0]"
      :technologyIds="technologyIds.slice(0, 4)"
    />
    <ScreenWithTech
      media-position="right"
      :media-url="mediaUrls[1]"
      :technologyIds="technologyIds.slice(4, 8)"
    />
  </div>
</template>

<script setup lang="ts">
import ScreenWithTech from "@/pages/home/components/ScreenWithTech.vue";

defineProps<{
  titleHtml: string;
  subtitleHtml: string;
  technologyIds: string[];
  mediaUrls: string[];
}>();
</script>
