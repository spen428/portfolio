<template>
  <div id="headerBarSpacer" class="print:!hidden lg:h-20"></div>
  <header
    class="w-full print:!hidden lg:fixed lg:bg-gradient-to-t lg:from-transparent"
    :class="{ 'lg:to-gray-900': hasScrolled }"
  >
    <div
      class="mx-auto flex h-20 max-w-6xl items-center px-4 lg:my-4 lg:h-12 lg:px-8"
    >
      <router-link to="/portfolio" class="h-full">
        <img
          src="/logo-outline.svg"
          alt="Logo"
          class="h-20 select-none py-4 lg:h-12 lg:py-2"
        />
      </router-link>
      <router-link to="/portfolio">
        <h1 class="px-6 text-xl text-cv-white lg:px-4 lg:text-lg">
          {{ pageTitle }}
        </h1>
      </router-link>
      <div id="spacer" class="grow"></div>
      <div
        class="hidden h-full items-center gap-6 py-6 xs:flex sm:gap-4 lg:py-2.5"
      >
        <a
          class="aspect-square h-full transition hover:opacity-50"
          :href="personalInfo.linkedIn.url"
          target="_blank"
        >
          <img
            src="/icons/linkedin-outline.svg"
            alt="Print"
            class="inline h-full brightness-0 invert"
          />
        </a>
        <a
          class="aspect-square h-full transition hover:opacity-50"
          :href="personalInfo.github.url"
          target="_blank"
        >
          <img
            src="/icons/github.svg"
            alt="Print"
            class="inline h-full brightness-0 invert"
          />
        </a>
        <button
          v-if="isStylable"
          class="aspect-square h-full transition hover:opacity-50"
        >
          <img
            src="/icons/color-palette-outline.svg"
            alt="Toggle styles"
            class="inline h-full brightness-0 invert"
          />
        </button>
        <button
          v-if="isPrintable"
          class="aspect-square h-full transition hover:opacity-50"
          onclick="print()"
        >
          <img
            src="/icons/printer.svg"
            alt="Print"
            class="inline h-full brightness-0 invert"
          />
        </button>
      </div>
    </div>
  </header>
</template>

<script setup lang="ts">
import { computed, onBeforeUnmount, onMounted, ref } from "vue";
import { useRouter } from "vue-router";
import DataService from "@/services/DataService";

const currentRoute = computed(() => useRouter().currentRoute.value);
const pageTitle = computed(() => currentRoute.value.name ?? "");

const hasScrolled = ref(false);
const detectScrolling = () => {
  const documentRoot = document.getElementsByTagName("html")[0];
  const scrollPosition = documentRoot.scrollTop;
  return (hasScrolled.value = scrollPosition > 16);
};
onMounted(() => document.addEventListener("scroll", detectScrolling));
onBeforeUnmount(() => document.removeEventListener("scroll", detectScrolling));

const isStylable = computed(() => currentRoute.value.meta.isStylable ?? false);
const isPrintable = computed(
  () => currentRoute.value.meta.isPrintable ?? false
);

const personalInfo = DataService.getPersonalInfo();
</script>
