<template>
  <div>
    <div
      class="pointer-events-none relative select-none"
      :style="{ width: size, height: size }"
    >
      <a-or-router-link
        v-on:mouseover="hover = true"
        v-on:mouseout="hover = false"
        :is-external="!!project?.url?.external"
        :href="project?.url?.url ?? ''"
        class="diamond pointer-events-auto z-10 border-transparent duration-1000"
        :class="{
          'border-opacity-80': hover,
          'bg-black': !project,
          'bg-opacity-10': !project,
          '!border-cv-dark-purple': hover,
        }"
      >
        <img
          v-if="project && project.thumbnailUrl"
          :src="project.thumbnailUrl"
          :alt="project.title"
          class="fit-to-diamond bg-cv-white transition-opacity"
          :style="{
            opacity: hover ? 0.3 : 1,
          }"
        />
      </a-or-router-link>

      <h2
        v-if="project"
        class="pointer-events-none flex h-full items-center justify-center overflow-hidden"
      >
        <span
          class="text-shadow z-10 p-12 text-center text-sm text-cv-white duration-500"
          :style="{ opacity: hover ? 1 : 0 }"
        >
          {{ project.title }}
        </span>
      </h2>
    </div>
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
  --border-width: 0.125rem;

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
  object-fit: cover;
  overflow: hidden;
  width: 100%;
  height: 100%;
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
