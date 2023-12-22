<template>
  <div
    class="mx-auto flex max-w-6xl flex-col gap-16 text-cv-white xs:gap-12 md:gap-8"
  >
    <h1 class="ml-4 mr-4 text-[min(1.85rem,5vw)]" v-html="titleHtml" />
    <h2 class="mx-4 self-end text-right" v-html="subtitleHtml" />
    <ScreenWithTech
      image-position="left"
      image-url="/projects/raffld.png"
      :technologies="technologies.slice(0, 4)"
    />
    <ScreenWithTech
      image-position="right"
      image-url="/projects/tenhou.png"
      :technologies="technologies.slice(4, 8)"
    />
  </div>
</template>

<script setup lang="ts">
import ScreenWithTech, {
  type TechnologyWithIcon,
} from "@/pages/home/components/ScreenWithTech.vue";

defineProps<{
  titleHtml: string;
  subtitleHtml: string;
  technologies: TechnologyWithIcon[];
}>();
</script>
