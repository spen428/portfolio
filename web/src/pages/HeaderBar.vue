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
          :alt="$t('logo')"
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
          {{ $t("cv") }}
        </router-link>
        <router-link to="/portfolio/projects" class="text-cv-white">
          {{ $t("portfolio") }}
        </router-link>
        <a
          class="group inline-flex items-center gap-1 text-cv-white"
          href="https://github.com/spen428"
          target="_blank"
        >
          GitHub
          <img
            src="/icons/external-link.svg"
            :alt="$t('opens_an_external_site')"
            class="h-4 w-0 brightness-0 invert duration-200 group-hover:w-4"
          />
        </a>
      </div>
      <!--<button class="aspect-square h-full w-8 py-6 xs:hidden">-->
      <!--  <img-->
      <!--    src="/icons/menu.svg"-->
      <!--    alt="Menu"-->
      <!--    class="inline h-full brightness-0 invert"-->
      <!--  />-->
      <!--</button>-->
      <div class="hidden h-7 gap-2 xs:flex">
        <button
          v-if="isStyleable"
          class="aspect-square h-6 transition hover:opacity-50"
        >
          <img
            src="/icons/color-palette-outline.svg"
            :alt="$t('toggle_styles')"
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
            :alt="$t('print')"
            class="inline h-full brightness-0 invert"
          />
        </button>
        <LocaleSwitcher />
      </div>
    </div>
  </header>
</template>

<script setup lang="ts">
import { computed, onBeforeUnmount, onMounted, ref } from "vue";
import { useRouter } from "vue-router";
import { useI18n } from "vue-i18n";
import LocaleSwitcher from "@/pages/LocaleSwitcher.vue";
import DataService from "@/services/data.service";

const { t, te } = useI18n();

const fullName = DataService.getFullName();

const currentRoute = computed(() => useRouter().currentRoute.value);
const pageTitle = computed(() => {
  const routeName = currentRoute.value.name?.toString();
  if (!routeName) return fullName.value;
  const key = `routes.${routeName}`;
  return te(key) ? t(key) : routeName;
});

const hasScrolled = ref(false);
const detectScrolling = () => {
  const documentRoot = document.getElementsByTagName("html")[0];
  const scrollPosition = documentRoot.scrollTop;
  return (hasScrolled.value = scrollPosition > 16);
};

const isStyleable = computed(
  () => currentRoute.value.meta.isStyleable ?? false
);
const isPrintable = computed(
  () => currentRoute.value.meta.isPrintable ?? false
);

onMounted(async () => {
  document.addEventListener("scroll", detectScrolling);
});
onBeforeUnmount(() => document.removeEventListener("scroll", detectScrolling));
</script>