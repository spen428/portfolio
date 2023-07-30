<template>
  <div
    class="relative aspect-[1.5/1] w-[calc(100%-2rem)] sm:aspect-[2/1] md:aspect-[2.75/1] lg:aspect-[4/1] lg:h-auto"
  >
    <svg
      width="100%"
      height="100%"
      viewBox="0 0 3 1"
      class="absolute mix-blend-color blur-2xl"
      preserveAspectRatio="none"
    >
      <use href="#outerLeft" />
      <use href="#outerMiddle" />
      <use href="#outerRight" />
    </svg>
    <svg
      width="100%"
      height="100%"
      viewBox="0 0 3 1"
      class="absolute"
      preserveAspectRatio="none"
    >
      <polygon
        id="outerLeft"
        points="0.25,0 1,0 0.75,1 0,1"
        class="fill-cv-dark-purple"
      />
      <polygon
        id="outerMiddle"
        points="1,0 2.25,0 2,1 0.75,1"
        class="fill-gray-50"
      />
      <polygon
        id="outerRight"
        points="2.25,0 3,0 2.75,1 2,1"
        class="fill-cv-purple"
      />

      <polygon
        id="innerLeft"
        points="0.25,0 1,0 0.75,1 0,1"
        transform="translate(0.0075,0.0075) scale(0.985)"
        class="fill-none"
      />
      <polygon
        id="innerMiddle"
        points="0.444444,0 1,0 0.888888,0.444444 0.333333,0.444444"
        transform="translate(0.0225,0.0075) scale(2.2175)"
        class="fill-none"
      />
      <polygon
        id="innerRight"
        points="0.25,0 1,0 0.75,1 0,1"
        transform="translate(2.0075,0.0075) scale(0.985)"
        class="fill-none"
      />
      <clipPath id="maskLeft" clipPathUnits="objectBoundingBox">
        <use href="#innerLeft" />
      </clipPath>
      <clipPath id="maskMiddle" clipPathUnits="objectBoundingBox">
        <use
          href="#innerMiddle"
          transform="translate(-0.49875,0) scale(0.665,1)"
        />
      </clipPath>
      <clipPath id="maskRight" clipPathUnits="objectBoundingBox">
        <use href="#innerRight" transform="translate(-2,0)" />
      </clipPath>
    </svg>
    <router-link
      id="linkLeft"
      to="/portfolio/cv"
      class="absolute block h-full w-1/3"
      v-on:mouseover="hoverIndex = 0"
      v-on:mouseout="hoverIndex = -1"
    >
      <div
        class="h-full w-full duration-1000"
        :style="{
          opacity: getOpacity(0, 0.2, 1, 0.5),
        }"
      ></div>
      <CenterRibbonTileText
        class="w-3/5 text-cv-white"
        :style="{
          opacity: getOpacity(0, 1, 0),
        }"
      >
        Curriculum Vitae
      </CenterRibbonTileText>
    </router-link>
    <router-link
      id="linkMiddle"
      to="/portfolio/projects"
      class="absolute left-1/4 block h-full w-1/2"
      v-on:mouseover="hoverIndex = 1"
      v-on:mouseout="hoverIndex = -1"
    >
      <div
        class="h-full w-full duration-1000"
        :style="{
          opacity: getOpacity(1, 0.2, 1, 0.5),
        }"
      ></div>
      <CenterRibbonTileText
        class="text-cv-purple"
        :style="{
          opacity: getOpacity(1, 1, 0),
        }"
        >Project Showcase
      </CenterRibbonTileText>
    </router-link>
    <router-link
      id="linkRight"
      to="/portfolio/ce"
      class="absolute right-0 block h-full w-1/3"
      v-on:mouseover="hoverIndex = 2"
      v-on:mouseout="hoverIndex = -1"
    >
      <div
        class="h-full w-full duration-1000"
        :style="{
          opacity: getOpacity(2, 0.2, 1, 0.5),
        }"
      ></div>
      <CenterRibbonTileText
        class="w-3/5 text-cv-white"
        :style="{
          opacity: getOpacity(2, 1, 0),
        }"
      >
        Commercial Experience
      </CenterRibbonTileText>
    </router-link>
  </div>
  <div class="mt-2 accent-cv-dark-purple">
    <DiamondRadioButton
      v-for="(ordinal, index) in numBannerPages"
      :key="ordinal"
      v-on:click="onRadioClick(index)"
      :checked="currentBannerPage === index"
      class="duration-500"
    />
  </div>
</template>

<style scoped>
#linkLeft > div {
  clip-path: url(#maskLeft);
  background-image: url("/projects/cv.thumb.jpg");
  background-position: center;
  background-size: cover;
}

#linkMiddle > div {
  clip-path: url(#maskMiddle);
  background-image: url("/project-page.png");
  background-position: center;
  background-size: cover;
}

#linkRight > div {
  clip-path: url(#maskRight);
  background-image: url("/projects/ce.thumb.jpg");
  background-position: center;
  background-size: cover;
}
</style>

<script setup lang="ts">
import { computed, onMounted, ref } from "vue";
import DiamondRadioButton from "@/pages/home/components/DiamondRadioButton.vue";
import CenterRibbonTileText from "@/pages/home/components/CenterRibbonTileText.vue";
import ConfigurationService from "@/services/ConfigurationService";

const numBannerPages = 3;

const hoverIndex = ref(-1);
const currentBannerPage = ref(-1);
const nextBannerPage = computed(
  () => (currentBannerPage.value + 1) % numBannerPages
);

function moveToNextBannerPage() {
  currentBannerPage.value = nextBannerPage.value;
}

function getOpacity(
  index: number,
  activeOpacity: number,
  inactiveOpacity: number,
  semiActiveOpacity = activeOpacity
): number {
  if (hoverIndex.value === index) {
    return activeOpacity;
  }
  if (currentBannerPage.value === index) {
    return semiActiveOpacity;
  }
  return inactiveOpacity;
}

function onRadioClick(index: number) {
  currentBannerPage.value = index;
}

function runOpeningAnimation() {
  const showOffIntervalMs = 1050;
  for (let i = 0; i <= numBannerPages; i++) {
    setTimeout(() => moveToNextBannerPage(), i * showOffIntervalMs);
  }
  setTimeout(
    () => setInterval(() => moveToNextBannerPage(), 3000),
    3 * showOffIntervalMs
  );
}

onMounted(() => {
  if (ConfigurationService.isAnimationEnabled()) {
    runOpeningAnimation();
  }
});
</script>
