<template>
  <div
    class="relative w-full overflow-x-scroll lg:overflow-x-hidden"
    ref="container"
    :style="{ height: containerHeightPx + 'px' }"
  >
    <ProjectDiamond
      v-for="(project, index) in projects"
      :key="project.id"
      :size="diamondSizeRem + 'rem'"
      :project="project"
      class="!absolute"
      :style="{ inset: getTranslation(index) }"
    />
  </div>
</template>

<script setup lang="ts">
import type { Project } from "@/services/IDataService";
import ProjectDiamond from "@/pages/projects/components/ProjectDiamond.vue";
import type { Ref } from "vue";
import { computed, onBeforeUnmount, onMounted, ref } from "vue";

const props = defineProps<{
  diamondSizeRem: number;
  spacingRem: number;
  projects: Project[];
}>();

const container: Ref<HTMLDivElement | undefined> = ref();
const containerWidthPx = ref(0);
const containerHeightPx = ref(0);
const isDesktopSize = computed(() => {
  const breakpointWidthPx = 960; // TODO: Extract from tailwind config
  return containerWidthPx.value >= breakpointWidthPx;
});
const diamondSizePx = computed(() => remToPx(props.diamondSizeRem));
const spacingPx = computed(() => remToPx(props.spacingRem));
const xOffsetPx = computed(() => diamondSizePx.value + spacingPx.value);
const yOffsetPx = computed(() => xOffsetPx.value * 0.5);
const colsPerRow = computed(() => {
  if (!isDesktopSize.value) {
    const totalRows = Math.floor(
      (containerHeightPx.value - yOffsetPx.value) / yOffsetPx.value
    );
    return Math.ceil(props.projects.length / totalRows);
  }

  return Math.floor(containerWidthPx.value / xOffsetPx.value);
});
const colsPerTwoRows = computed(() => {
  if (!isDesktopSize.value) {
    return 2 * colsPerRow.value;
  }

  return (
    2 * colsPerRow.value -
    (containerWidthPx.value % xOffsetPx.value >= xOffsetPx.value / 2 ? 0 : 1)
  );
});
const leftMarginPx = computed(() => {
  if (!isDesktopSize.value) {
    return 16;
  }

  let widthPx = colsPerRow.value * xOffsetPx.value;
  if (colsPerTwoRows.value % 2 === 0) {
    widthPx += diamondSizePx.value / 2;
  }
  return (containerWidthPx.value - widthPx) / 2;
});
const topMarginPx = computed(() => {
  const totalRows = (2 * props.projects.length) / colsPerTwoRows.value;
  const heightPx = totalRows * yOffsetPx.value + yOffsetPx.value;
  const marginPx = (containerHeightPx.value - heightPx) / 2;

  if (isDesktopSize.value) {
    return marginPx * 0.5;
  }
  return marginPx;
});

function getRowCol(index: number): { row: number; col: number } {
  let row = 2 * Math.floor(index / colsPerTwoRows.value);
  let col = index % colsPerTwoRows.value;

  if (col >= colsPerRow.value) {
    row += 1;
    col -= colsPerRow.value;
  }

  return { row, col };
}

function getTranslation(index: number): string {
  if (containerWidthPx.value === 0) {
    return "0";
  }

  const { row, col } = getRowCol(index);

  const oddRowXOffset = (row % 2) * xOffsetPx.value * 0.5;

  const x = col * xOffsetPx.value + oddRowXOffset + leftMarginPx.value;
  const y = row * yOffsetPx.value + topMarginPx.value;

  return `${y}px ${x}px`;
}

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
