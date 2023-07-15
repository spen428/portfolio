<template>
  <div
    class="pointer-events-none relative select-none duration-100 ease-in-out"
    :style="{ width: size, height: size }"
  >
    <a-or-router-link
      v-on:mouseover="hover = true"
      v-on:mouseout="hover = false"
      :is-external="project.url.external"
      :href="project.url.url"
      class="diamond pointer-events-auto z-10 border-cv-dark-purple bg-none duration-1000"
      :class="{ 'border-opacity-80': hover }"
    >
      <img
        v-if="project.thumbnailUrl"
        :src="project.thumbnailUrl"
        :alt="project.title"
        class="fit-to-diamond opacity-50 blur-[2px] duration-1000"
        :class="{
          '!opacity-100': hover,
          '!blur-0': hover,
        }"
      />
    </a-or-router-link>

    <img
      v-if="project.url.url.includes('github')"
      src="/icons/github.svg"
      alt="GitHub"
      class="pointer-events-none absolute bottom-4 left-[calc(50%-1rem)] z-10 h-8 rounded-full bg-cv-white opacity-0 duration-700"
      :class="{ 'opacity-80': hover }"
    />

    <h2
      class="pointer-events-none flex h-full items-center justify-center overflow-hidden"
    >
      <span
        class="z-10 p-12 text-center font-bold text-cv-purple opacity-100 duration-700"
        :class="{ '!opacity-0': hover }"
      >
        {{ project.title }}
      </span>
    </h2>
  </div>
</template>

<style scoped>
.diamond {
  --diamond-ratio: 70.71067812%; /* x / (x sqrt 2) */
  --border-width: 1px;

  content: "";
  display: block;
  overflow: hidden;
  width: var(--diamond-ratio);
  height: var(--diamond-ratio);

  position: absolute;
  top: 0;
  left: 0;

  transform: rotate(45deg);
  transform-origin: 0 0;
  translate: var(--diamond-ratio) 0;

  border-width: var(--border-width);
  border-radius: var(--border-width);
}

.fit-to-diamond {
  --2x-diamond-ratio: calc(2 * var(--diamond-ratio));

  rotate: -45deg;
  scale: var(--2x-diamond-ratio);
}
</style>

<script setup lang="ts">
import { ref } from "vue";
import type { Project } from "@/services/IDataService";
import AOrRouterLink from "@/components/AOrRouterLink.vue";

defineProps<{
  size: string;
  project: Project;
}>();

const hover = ref(false);
</script>
