<template>
  <div
    class="mx-auto flex max-w-6xl flex-col gap-16 2xl:max-w-7xl"
    ref="container"
  >
    <div class="flex flex-col items-center justify-between gap-8 py-12">
      <div
        class="flex flex-col items-center gap-2 whitespace-nowrap duration-1000 ease-in-out"
      >
        <LoadingSkeleton
          v-if="!personalInfo.fullName"
          class="!h-9 !w-[30vw] !bg-cv-dark-purple"
        />
        <h1
          v-else
          class="text-shadow-cv-dark-purple font-serif text-[min(1.5rem,5vw)] font-bold text-cv-dark-purple text-opacity-80"
        >
          <ruby v-if="personalInfo.fullNameRuby">
            &centerdot; {{ personalInfo.fullName }} &centerdot;
            <rt>{{ personalInfo.fullNameRuby }}</rt>
          </ruby>
          <span v-else
            >&centerdot; {{ personalInfo.fullName }} &centerdot;</span
          >
        </h1>

        <LoadingSkeleton v-if="!personalInfo.tagLine" class="!h-10 !w-[45vw]" />
        <h2
          v-else
          class="text-shadow-cv-dark-purple font-serif text-[min(1.85rem,5vw)] font-bold italic text-cv-white"
        >
          {{ personalInfo.tagLine }}
        </h2>
      </div>

      <img
        src="/logo-hollow.svg"
        :alt="$t('logo')"
        class="w-[45vw] animate-sideToSide select-none xs:h-64 xs:w-[unset]"
      />

      <div class="flex flex-col items-center gap-6 xs:hidden">
        <router-link to="/portfolio/cv" class="text-cv-white">
          <button class="rounded-lg border px-4 py-2">
            {{ $t("view_my_cv") }}
          </button>
        </router-link>
        <router-link to="/portfolio/projects" class="text-cv-white">
          <button class="rounded-lg border px-4 py-2">
            {{ $t("browse_my_portfolio") }}
          </button>
        </router-link>
        <a
          class="text-cv-white"
          href="https://github.com/spen428"
          target="_blank"
        >
          <button
            class="inline-flex items-center gap-2 rounded-lg border px-4 py-2"
          >
            {{ $t("open_my_github") }}
            <img
              src="/icons/external-link.svg"
              :alt="$t('opens_an_external_site')"
              class="h-4 brightness-0 invert"
            />
          </button>
        </a>
      </div>

      <button class="w-8">
        <img
          src="/icons/arrow-ios-downward-outline.svg"
          :alt="$t('scrollDown')"
          class="animate-bounce invert"
        />
      </button>
    </div>
    <div class="">
      <h1
        class="text-shadow-cv-white pb-16 text-center font-serif text-[min(1.85rem,5vw)] font-bold italic text-cv-white"
      >
        What can I do?
      </h1>
    </div>
    <TechScreen
      title-html="<em>Responsive</em> and <em>reactive</em> web pages"
      subtitle-html="using tried and tested <em>industry-favourite</em> technologies."
      :technologies="tech1"
    />
    <img
      src="/logo-hollow.svg"
      :alt="$t('separator')"
      class="mx-auto w-8 brightness-0 invert"
    />
    <TechScreen
      title-html="<em>Robust</em> client-server applications"
      subtitle-html="crafted with care using <em>test-driven development</em>."
      :technologies="tech2"
    />
    <img
      src="/logo-hollow.svg"
      :alt="$t('separator')"
      class="mx-auto w-8 brightness-0 invert"
    />
    <div class="text-cv-white">
      <h1 class="ml-4 mr-4 text-[min(1.85rem,5vw)]">
        Cloud configuration on <em>Azure</em> and <em>AWS</em>
      </h1>
      <h2 class="mx-4 self-end text-right">
        for automated build and release pipelines, on-demand scaling, and health
        monitoring.
      </h2>
    </div>
    <div class="mb-16 flex flex-col items-center gap-6">
      <router-link to="/portfolio/cv" class="text-cv-white">
        <button class="rounded-lg border px-4 py-2">
          {{ $t("view_my_cv") }}
        </button>
      </router-link>
      <router-link to="/portfolio/projects" class="text-cv-white">
        <button class="rounded-lg border px-4 py-2">
          {{ $t("browse_my_portfolio") }}
        </button>
      </router-link>
      <a
        class="text-cv-white"
        href="https://github.com/spen428"
        target="_blank"
      >
        <button
          class="inline-flex items-center gap-2 rounded-lg border px-4 py-2"
        >
          {{ $t("open_my_github") }}
          <img
            src="/icons/external-link.svg"
            :alt="$t('opens_an_external_site')"
            class="h-4 brightness-0 invert"
          />
        </button>
      </a>
    </div>
  </div>
</template>

<style scoped>
.text-shadow-cv-dark-purple {
  text-shadow: 0 0 2rem rgb(var(--cv-dark-purple));
}

.text-shadow-cv-white {
  text-shadow: 0 0 2rem rgb(var(--cv-white));
}
</style>

<script setup lang="ts">
import DataService from "@/services/data.service";
import { onBeforeUnmount, onMounted, ref } from "vue";
import TechScreen from "@/pages/home/components/TechScreen.vue";
import type { TechnologyWithIcon } from "@/pages/home/components/ScreenWithTech.vue";

const personalInfo = DataService.getPersonalInfo();

const tech1: TechnologyWithIcon[] = [
  {
    name: "Angular",
    logoUrl: "/tech-logos/angular.svg",
    color: "rgb(220 38 38)",
  },
  {
    name: "JavaScript",
    logoUrl: "/tech-logos/javascript.svg",
    color: "rgb(253 224 71)",
  },
  {
    name: "TypeScript",
    logoUrl: "/tech-logos/typescript.svg",
    color: "rgb(37 99 235)",
  },
  {
    name: "React",
    logoUrl: "/tech-logos/react.svg",
    color: "rgb(103 232 249)",
  },
  {
    name: "RxJS",
    logoUrl: "/tech-logos/rxjs.svg",
  },
  {
    name: "NgRx",
    logoUrl: "/tech-logos/ngrx.svg",
  },
  {
    name: "Tailwind CSS",
    logoUrl: "/tech-logos/tailwind.svg",
  },
  {
    name: "PrimeFaces",
    logoUrl: "/tech-logos/primeng.svg",
  },
];

const tech2: TechnologyWithIcon[] = [
  {
    name: "Kotlin",
    logoUrl: "/tech-logos/kotlin.svg",
  },
  {
    name: "Java",
    logoUrl: "/tech-logos/java.svg",
  },
  {
    name: "Python",
    logoUrl: "/tech-logos/python.svg",
  },
  {
    name: "C#",
    logoUrl: "/tech-logos/csharp.svg",
  },
  {
    name: ".NET Core",
    logoUrl: "/tech-logos/netcore.svg",
  },
  {
    name: "Spring",
    logoUrl: "/tech-logos/spring.svg",
  },
  {
    name: "Swagger",
    logoUrl: "/tech-logos/swagger.svg",
  },
  {
    name: "xUnit",
    logoUrl: "/tech-logos/xunit.svg",
  },
];

const scrollTop = ref(0);
const container = ref();
const containerHeightPx = ref(0);
const containerWidthPx = ref(0);

const updateScrollPosition = () => {
  const documentRoot = document.getElementsByTagName("html")[0];
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
