<template>
  <div
    class="relative w-full overflow-y-hidden overflow-x-scroll lg:overflow-x-hidden"
    ref="container"
    :style="{ height: containerHeightPx + 'px' }"
  >
    <ProjectDiamond
      v-for="(project, index) in projects"
      :key="project.id"
      :project="project"
      :size="placements[index].size"
      class="absolute"
      :style="{
        top: placements[index].top,
        left: placements[index].left,
      }"
    />
  </div>
</template>

<script setup lang="ts">
import type { Project } from "@/services/IDataService";
import ProjectDiamond from "@/pages/projects/components/ProjectDiamond.vue";
import type { Ref } from "vue";
import { computed, onBeforeUnmount, onMounted, ref } from "vue";

defineProps<{ projects: Project[] }>();

const leftOffsetRem = 6;
const topOffsetRem = 1;

const placements = [
  { size: 32, left: 0, top: 8 },
  { size: 32, left: 32, top: 8 },
  { size: 16, left: 48, top: 0 },
  { size: 16, left: 24, top: 8 },
  { size: 16, left: 32, top: 32 },
  { size: 16, left: 48, top: 32 },
  { size: 32, left: 56, top: 16 },
  { size: 32, left: 72, top: 0 },
].map((placement) => ({
  size: placement.size + "rem",
  left: leftOffsetRem + placement.left + "rem",
  top: topOffsetRem + placement.top + "rem",
}));

const container: Ref<HTMLDivElement | undefined> = ref();
const containerWidthPx = ref(0);
const containerHeightPx = ref(0);
const isDesktopSize = computed(() => {
  const breakpointWidthPx = 960; // TODO: Extract from tailwind config
  return containerWidthPx.value >= breakpointWidthPx;
});

const baseFontSize = parseFloat(
  getComputedStyle(document.documentElement).fontSize
);

function remToPx(rem: number): number {
  return rem * baseFontSize;
}

function updateContainerSize() {
  containerWidthPx.value = container.value?.offsetWidth ?? 0;
  containerHeightPx.value = container.value?.parentElement?.offsetHeight ?? 0;
}

onMounted(() => {
  window.addEventListener("resize", updateContainerSize);
  updateContainerSize();
});
onBeforeUnmount(() =>
  window.removeEventListener("resize", updateContainerSize)
);
</script>
