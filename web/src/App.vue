<template>
  <main class="text-default-text">
    <router-view></router-view>
  </main>
</template>

<script setup lang="ts">
import LocaleService from "@/services/locale.service";
import DataService from "@/services/data.service";
import { onBeforeMount, watch } from "vue";

LocaleService.setCurrentLocale(
  LocaleService.getDefaultLocaleFromLocalStorage()
);
DataService.initializeWatches();

const fullName = DataService.getFullName();
onBeforeMount(() =>
  watch(fullName, () => {
    document.title = `${fullName.value} ― CV & Portfolio`;
  })
);
</script>
