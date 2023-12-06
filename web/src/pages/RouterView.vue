<template>
  <div
    class="bg-rgb-blur flex min-h-screen flex-col items-center print:!bg-none"
  >
    <HeaderBar />

    <div class="w-full grow">
      <router-view></router-view>
    </div>

    <FooterBar class="print:hidden" />
  </div>
</template>

<style>
.bg-rgb-blur {
  background-image: url("/rgb-blur.jpg");
  background-repeat: repeat;
}
</style>

<script setup lang="ts">
import FooterBar from "@/pages/FooterBar.vue";
import HeaderBar from "@/pages/HeaderBar.vue";
import DataService from "@/services/data.service";

DataService.initializeWatches();
</script>
