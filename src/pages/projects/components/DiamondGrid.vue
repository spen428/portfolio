<template>
  <div
    class="relative w-full overflow-y-hidden overflow-x-scroll lg:overflow-x-hidden"
    ref="container"
    :style="{ height: containerHeightPx + 'px' }"
  >
    <ProjectDiamond
      v-for="diamond in diamonds"
      :key="diamond.id"
      :size="diamondSizeRem + 'rem'"
      :project="diamond.project"
      class="!absolute"
      :style="{ inset: getTranslation(diamond.position) }"
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

type Diamond = {
  project: Project | null;
  index: number;
  id: string;
  position: Position;
};

const diamonds = computed(() => {
  const arr: Diamond[] = props.projects.map((project, index) => ({
    id: project.id + "",
    project,
    position: getRowCol(index),
    index,
  }));

  let counter = 0;

  function placeholder(row: number, col: number) {
    return {
      id: "placeholder" + counter++,
      project: null,
      position: { row, col },
      index: row * col,
    };
  }

  for (let i = arr.length; i < colsPerRow.value * totalRows.value; i++) {
    const { row, col } = getRowCol(i);
    arr.push(placeholder(row, col));
  }
  for (let i = 0; i < colsPerRow.value + 1; i++) {
    arr.push(placeholder(totalRows.value, i));
    arr.push(placeholder(totalRows.value + 1, i));
  }
  for (let i = 0; i < totalRows.value + 1; i++) {
    arr.push(placeholder(i, -1));
    arr.push(placeholder(i, colsPerRow.value));
  }

  return arr.sort((a, b) => b.index - a.index);
});

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
const yOffsetPx = computed(() => diamondSizePx.value * 0.5 + spacingPx.value);
const totalRows = computed(() => {
  return Math.floor(
    (containerHeightPx.value - yOffsetPx.value) / yOffsetPx.value
  );
});
const colsPerRow = computed(() => {
  if (!isDesktopSize.value) {
    return Math.ceil(props.projects.length / totalRows.value);
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
  const heightPx = totalRows.value * yOffsetPx.value + yOffsetPx.value;
  const marginPx = (containerHeightPx.value - heightPx) / 2;

  if (isDesktopSize.value) {
    return marginPx * 0.5;
  }
  return marginPx;
});

type Position = { row: number; col: number };

function getRowCol(index: number): Position {
  let row = 2 * Math.floor(index / colsPerTwoRows.value);
  let col = index % colsPerTwoRows.value;

  if (col >= colsPerRow.value) {
    row += 1;
    col -= colsPerRow.value;
  }

  return { row, col };
}

function getTranslation(position: Position): string {
  if (containerWidthPx.value === 0) {
    return "0";
  }

  const { row, col } = position;

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
