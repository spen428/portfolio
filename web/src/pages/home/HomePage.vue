<template>
  <div
    class="mx-auto flex max-w-6xl flex-col gap-16 2xl:max-w-7xl"
    ref="container"
  >
    <div
      class="flex h-[calc(100vh-9rem)] flex-col items-center justify-between gap-8 py-12"
    >
      <div
        class="flex flex-col items-center gap-2 whitespace-nowrap duration-1000 ease-in-out"
      >
        <LoadingSkeleton
          v-if="!personalInfo.fullName"
          class="!h-9 !w-[30vw] !bg-primary-950"
        />
        <h1
          v-else
          class="font-serif text-[min(1.5rem,5vw)] font-bold text-primary-950 text-opacity-80 shadow-primary-950 text-shadow"
        >
          <TextWithRuby
            :text="`&centerdot; ${personalInfo.fullName} &centerdot;`"
            :ruby="personalInfo.fullNameRuby"
          />
        </h1>

        <LoadingSkeleton v-if="!personalInfo.tagLine" class="!h-10 !w-[45vw]" />
        <h2
          v-else
          class="font-serif text-[min(1.85rem,5vw)] font-bold italic text-white shadow-primary-950 text-shadow"
        >
          {{ personalInfo.tagLine }}
        </h2>
      </div>

      <img
        src="/logo-hollow.svg"
        :alt="$t('logo')"
        class="w-[45vw] animate-sideToSide select-none xs:h-64 xs:w-[unset]"
      />

      <LandingPageLinks class="xs:hidden" />

      <div id="separator" />

      <img
        src="/icons/arrow-ios-downward-outline.svg"
        :alt="$t('scrollDown')"
        class="absolute top-[calc(100dvh-4rem)] w-8 animate-bounce invert duration-300"
        :style="{ opacity: scrollTop == 0 ? 1 : 0 }"
      />
    </div>
    <div class="">
      <h1
        class="pb-16 text-center font-serif text-[min(1.85rem,5vw)] font-bold italic text-white shadow-primary-950 text-shadow"
      >
        So, what can you do?
      </h1>
    </div>
    <TechScreen
      class="mx-auto"
      title-html="<em>Responsive</em> and <em>reactive</em> web pages"
      subtitle-html="using tried and tested <em>industry-favourite</em> technologies."
      :media-urls="[
        '/animated/portfolio-responsivity-demo.webm',
        '/projects/raffld-270.jpg',
      ]"
      :technologyIds="[
        'angular',
        'vue',
        'javascript',
        'typescript',
        'rxjs',
        'ngrx',
        'tailwind',
        'primeng',
      ]"
    />
    <img
      src="/logo-hollow.svg"
      alt=""
      class="mx-auto w-8 brightness-0 invert"
    />
    <TechScreen
      class="mx-auto"
      title-html="<em>Robust</em> client-server applications"
      subtitle-html="crafted with care using <em>test-driven development</em>."
      :media-urls="['/projects/jbooru-270.jpg', '/projects/tenhou.png']"
      :technologyIds="[
        'kotlin',
        'java',
        'python',
        'csharp',
        'netcore',
        'spring',
        'swagger',
        'xunit',
      ]"
    />
    <img
      src="/logo-hollow.svg"
      alt=""
      class="mx-auto w-8 brightness-0 invert"
    />
    <TechScreen
      class="mx-auto"
      title-html="Cloud configuration and system administration"
      subtitle-html="for continuous build and release pipelines, on-demand scaling, and disaster recovery."
      :media-urls="['/projects/portainer.jpg', '/projects/pipelines.png']"
      :technologyIds="[
        'aws',
        'azure',
        'linux',
        'windows-server',
        'docker',
        'postgresql',
        'portainer',
        'proxmox',
      ]"
    />
    <LandingPageLinks />
    <button
      class="mx-auto mb-16 flex animate-tease"
      onclick="document.body.scrollTop = 0; document.documentElement.scrollTop = 0;"
    >
      <img
        src="/logo-outline.svg"
        :alt="$t('logo')"
        class="h-16 w-16 select-none"
      />
    </button>
  </div>
</template>

<script setup lang="ts">
import DataService from "@/services/data.service";
import { onBeforeUnmount, onMounted, ref } from "vue";
import TechScreen from "@/pages/home/components/TechScreen.vue";
import LoadingSkeleton from "@/components/LoadingSkeleton.vue";
import LandingPageLinks from "@/pages/home/LandingPageLinks.vue";
import TextWithRuby from "@/components/TextWithRuby.vue";

const personalInfo = DataService.getPersonalInfo();

const scrollTop = ref(0);
const container = ref();
const containerHeightPx = ref(0);
const containerWidthPx = ref(0);

const updateScrollPosition = () => {
  const documentRoot = document.querySelector("html")!;
  scrollTop.value = documentRoot.scrollTop;
};

const updateContainerSize = () => {
  containerWidthPx.value = container.value?.parentElement?.offsetWidth ?? 0;
  containerHeightPx.value = container.value?.parentElement?.offsetHeight ?? 0;
};

onMounted(async () => {
  document.addEventListener("scroll", updateScrollPosition);
  document.addEventListener("resize", updateContainerSize);
  updateScrollPosition();
  updateContainerSize();
});
onBeforeUnmount(() => {
  document.removeEventListener("scroll", updateScrollPosition);
  document.removeEventListener("resize", updateContainerSize);
});
</script>
