<template>
  <div
    class="pointer-events-none relative select-none"
    :style="{ width: size, height: size }"
  >
    <a-or-router-link
      v-on:mouseover="hover = true"
      v-on:mouseout="hover = false"
      :is-external="!!project?.url?.external"
      :href="project?.url?.url ?? ''"
      class="diamond pointer-events-auto z-10 border-cv-dark-purple duration-1000"
      :class="{
        'border-opacity-80': hover,
        'bg-black': !project,
        'bg-opacity-10': !project,
      }"
    >
      <img
        v-if="project && project.thumbnailUrl"
        :src="project.thumbnailUrl"
        :alt="project.title"
        class="fit-to-diamond opacity-40 blur-[2px] duration-1000"
        :class="{
          '!opacity-100': hover,
          '!blur-0': hover,
        }"
      />
    </a-or-router-link>

    <img
      v-if="project && project.url.url.includes('github')"
      src="/icons/github.svg"
      alt="GitHub"
      class="pointer-events-none absolute bottom-4 left-[calc(50%-1rem)] z-10 h-8 rounded-full bg-cv-white opacity-0 duration-700"
      :class="{ 'opacity-80': hover }"
    />

    <h2
      v-if="project"
      class="pointer-events-none flex h-full items-center justify-center overflow-hidden"
    >
      <span
        class="z-10 p-12 pt-28 text-center text-sm text-cv-dark-purple opacity-100 duration-700"
        :class="{ 'text-shadow': hover, 'text-cv-white': hover }"
      >
        {{ project.title }}
      </span>
    </h2>
  </div>
</template>

<style scoped>
.text-shadow {
  --text-shadow-length: 0.25rem;
  text-shadow: 1px 1px var(--text-shadow-length) rgb(var(--cv-dark-purple)),
    -1px -1px var(--text-shadow-length) rgb(var(--cv-dark-purple)),
    1px -1px var(--text-shadow-length) rgb(var(--cv-dark-purple)),
    -1px 1px var(--text-shadow-length) rgb(var(--cv-dark-purple));
}

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

  rotate: 0 0 1 45deg;
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
  project: Project | null;
}>();

const hover = ref(false);
</script>
