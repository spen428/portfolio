<template>
  <main class="text-default-text">
    <router-view></router-view>
  </main>
</template>

<script setup lang="ts">
import LocaleService from "@/services/locale.service";
import DataService from "@/services/data.service";

LocaleService.setCurrentLocale(
  LocaleService.getDefaultLocaleFromLocalStorage()
);
DataService.initializeWatches();
</script>
