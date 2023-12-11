<template>
  <div
    class="mx-auto mt-12 flex w-full max-w-6xl flex-col items-center justify-start 2xl:max-w-7xl"
  >
    <h1
      class="text-shadow mb-2 font-serif text-[min(1.5rem,5vw)] font-bold text-cv-dark-purple text-opacity-80"
    >
      <ruby>
        &centerdot;
        {{ personalInfo.fullName }}
        <rt>{{ personalInfo.fullNameRuby }}</rt>
        &centerdot;
      </ruby>
    </h1>
    <h2
      class="text-shadow mb-8 font-serif text-[min(1.85rem,5vw)] font-bold italic text-cv-white"
    >
      {{ personalInfo.tagLine }}
    </h2>
    <img
      src="/logo-hollow.svg"
      :alt="$t('logo')"
      class="w-[45vw] animate-sideToSide select-none xs:h-64 xs:w-[unset]"
    />
    <div class="flex flex-col items-center gap-6 pt-10 xs:hidden">
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
.text-shadow {
  text-shadow: 0 0 2rem rgb(var(--cv-dark-purple));
}
</style>

<script setup lang="ts">
import DataService from "@/services/data.service";

const personalInfo = DataService.getPersonalInfo();
</script>