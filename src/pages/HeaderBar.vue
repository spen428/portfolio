<template>
  <div id="headerBarSpacer" class="print:!hidden lg:h-20"></div>
  <header
    class="w-full print:!hidden lg:fixed lg:bg-gradient-to-t lg:from-transparent"
    :class="{ 'lg:to-gray-900': hasScrolled }"
  >
    <div
      class="mx-auto flex h-20 max-w-6xl items-center gap-3 px-4 lg:my-4 lg:h-12 lg:px-8"
    >
      <router-link to="/portfolio" class="h-full">
        <img
          src="/logo-outline.svg"
          alt="Logo"
          class="h-20 select-none py-4 lg:h-12 lg:py-2"
        />
      </router-link>
      <router-link to="/portfolio">
        <h1 class="text-xl text-cv-white lg:text-lg">
          {{ pageTitle }}
        </h1>
      </router-link>
      <div id="spacer" class="grow"></div>
      <div class="hidden h-full items-center gap-4 py-6 xs:flex lg:py-2">
        <router-link to="/portfolio/cv" class="text-cv-white">
          Résumé
        </router-link>
        <router-link to="/portfolio/projects" class="text-cv-white">
          Portfolio
        </router-link>
        <a
          class="group inline-flex items-center gap-1 text-cv-white"
          href="https://github.com/spen428"
          target="_blank"
        >
          GitHub
          <img
            src="/icons/external-link.svg"
            alt="Opens an external site"
            class="h-4 w-0 brightness-0 invert duration-200 group-hover:w-4"
          />
        </a>
      </div>
      <button class="aspect-square h-full w-8 py-6 xs:hidden">
        <img
          src="/icons/menu.svg"
          alt="Menu"
          class="inline h-full brightness-0 invert"
        />
      </button>
      <div class="hidden h-7 gap-2 xs:flex">
        <button
          v-if="isStyleable"
          class="aspect-square h-6 transition hover:opacity-50"
        >
          <img
            src="/icons/color-palette-outline.svg"
            alt="Toggle styles"
            class="inline h-full brightness-0 invert"
          />
        </button>
        <button
          v-if="isPrintable"
          class="aspect-square h-6 transition hover:opacity-50"
          onclick="print()"
        >
          <img
            src="/icons/printer.svg"
            alt="Print"
            class="inline h-full brightness-0 invert"
          />
        </button>
        <button class="aspect-square h-full transition">
          <img
            :src="languageIcon"
            alt="Print"
            class="inline h-full opacity-75 hover:opacity-100"
            v-on:click="toggleLanguage()"
          />
        </button>
      </div>
    </div>
  </header>
</template>

<script setup lang="ts">
import { computed, onBeforeUnmount, onMounted, ref } from "vue";
import { useRouter } from "vue-router";

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

const isStyleable = computed(
  () => currentRoute.value.meta.isStyleable ?? false
);
const isPrintable = computed(
  () => currentRoute.value.meta.isPrintable ?? false
);

const languageId = ref(0);
const languageIcon = computed(
  () => ["/icons/circle-en-GB.svg", "/icons/circle-ja-JP.svg"][languageId.value]
);
const toggleLanguage = () => (languageId.value = (languageId.value + 1) % 2);
</script>
