<template>
  <div class="mx-auto h-full w-full max-w-3xl">
    <div
      class="relative flex h-full w-full items-center justify-center overflow-hidden"
    >
      <div id="logoLeft" class="logo animate-wiggle">
        <svg
          width="100%"
          height="100%"
          viewBox="0 0 1 1"
          preserveAspectRatio="none"
        >
          <image
            href="/projects/cv.thumb.jpg"
            width="1"
            height="1"
            transform="rotate(30)"
            x="0"
            y="-0.3"
          ></image>
          <text
            x="0.30"
            y="0.35"
            font-size="0.1"
            transform="rotate(20)"
            class="fill-cv-dark-purple"
          >
            CV
          </text>
          <use
            id="outlineLeft"
            class="fill-cv-dark-purple duration-[4s]"
            href="logo-hollow.svg#logoLeft"
          ></use>
          <clipPath id="maskLeft" clipPathUnits="objectBoundingBox">
            <use href="logo-hollow.svg#logoLeft"></use>
          </clipPath>
        </svg>
        <router-link
          to="/portfolio/cv"
          class="absolute flex h-full w-full items-center justify-center"
        >
        </router-link>
      </div>

      <div id="logoMiddle" class="logo animate-wiggle">
        <svg
          width="100%"
          height="100%"
          viewBox="0 0 1 1"
          preserveAspectRatio="none"
        >
          <image
            href="/projects/jong.png"
            width="1"
            height="1"
            x="0.125"
            y="-0.125"
            transform="rotate(20)"
          ></image>
          <text
            x="0.525"
            y="0.35"
            font-size="0.05"
            transform="rotate(15)"
            class="fill-cv-white"
          >
            Project
          </text>
          <text
            x="0.49"
            y="0.405"
            font-size="0.05"
            transform="rotate(15)"
            class="fill-cv-white"
          >
            Showcase
          </text>
          <use
            id="outlineMiddle"
            class="fill-cv-white duration-[4s]"
            href="logo-hollow.svg#logoMiddle"
          ></use>
          <clipPath id="maskMiddle" clipPathUnits="objectBoundingBox">
            <use href="logo-hollow.svg#logoMiddle"></use>
          </clipPath>
        </svg>
        <router-link
          to="/portfolio/projects"
          class="absolute flex h-full w-full items-center justify-center overflow-hidden whitespace-nowrap text-xl"
        >
        </router-link>
      </div>

      <div id="logoRight" class="logo animate-wiggle">
        <svg
          width="100%"
          height="100%"
          viewBox="0 0 1 1"
          preserveAspectRatio="none"
        >
          <image
            href="/projects/cv.thumb.jpg"
            width="1"
            height="1"
            transform="rotate(30)"
            x="0.5"
            y="-0.3"
          ></image>
          <text
            x="0.85"
            y="0.35"
            font-size="0.1"
            transform="rotate(20)"
            class="fill-cv-purple"
          >
            XP
          </text>
          <use
            id="outlineRight"
            class="fill-cv-purple duration-[4s]"
            href="logo-hollow.svg#logoRight"
          ></use>
          <clipPath id="maskRight" clipPathUnits="objectBoundingBox">
            <use href="logo-hollow.svg#logoRight"></use>
          </clipPath>
        </svg>
        <router-link
          to="/portfolio/ce"
          class="absolute flex h-full w-full items-center justify-center"
        >
        </router-link>
      </div>
    </div>
  </div>
</template>

<style scoped>
* {
  --initial-size: 10rem;
}

.logo {
  width: var(--initial-size);
  height: var(--initial-size);
  display: flex;
  align-items: center;
  justify-content: center;
  transition-duration: 2s;
  aspect-ratio: 1 / 1;
}

#logoLeft {
  //clip-path: url(#maskLeft); z-index: 2; position: absolute; left: calc(50% - var(--initial-size) / 2);
  top: calc(50% - var(--initial-size) / 2);
}

#logoMiddle {
  //clip-path: url(#maskMiddle); z-index: 1;
}

#logoRight {
  //clip-path: url(#maskRight); z-index: 2; position: absolute; right: calc(50% - var(--initial-size) / 2);
  bottom: calc(50% - var(--initial-size) / 2);
}

image {
  display: none;
}
</style>

<script setup lang="ts">
import { onMounted } from "vue";
import ConfigurationService from "@/services/ConfigurationService";

function setTargetStyles() {
  const logoLeft = document.getElementById("logoLeft") as HTMLDivElement;
  const logoMiddle = document.getElementById("logoMiddle") as HTMLDivElement;
  const logoRight = document.getElementById("logoRight") as HTMLDivElement;

  const parts = [logoLeft, logoMiddle, logoRight];

  if (parts.some((x) => !x)) {
    return;
  }

  parts.forEach((x) => (x.style.width = "auto"));
  parts.forEach((x) => (x.style.height = "50%"));
  parts.forEach((x) => (x.style.transform = "rotate(-30deg)"));

  logoLeft.style.left = "0";
  logoLeft.style.top = "0";

  logoRight.style.right = "0";
  logoRight.style.bottom = "0";

  logoMiddle.style.height = "90%";
  logoMiddle.style.transform = "rotate(-15deg)";
}

function reduceFillOpacity() {
  const parts = [
    document.querySelector("#outlineLeft") as SVGPathElement,
    document.querySelector("#outlineMiddle") as SVGPathElement,
    document.querySelector("#outlineRight") as SVGPathElement,
  ];

  if (parts.some((x) => !x)) {
    return;
  }

  parts.forEach((x) => (x.style.fillOpacity = "0.4"));
}

onMounted(() => {
  const isAnimationDisabled = !ConfigurationService.isAnimationEnabled();
  setTimeout(() => setTargetStyles(), isAnimationDisabled ? 0 : 500);
  setTimeout(() => reduceFillOpacity(), isAnimationDisabled ? 0 : 2000);
});
</script>
