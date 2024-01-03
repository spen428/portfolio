<template>
  <div
    class="flex min-h-screen flex-col items-center bg-primary-toned-600 bg-[url('/rgb-blur.jpg')] bg-repeat print:!bg-none"
  >
    <HeaderBar :full-name="fullName" />

    <div class="w-full grow">
      <router-view></router-view>
    </div>

    <FooterBar class="print:hidden" :full-name="fullName" />
  </div>
</template>

<script setup lang="ts">
import FooterBar from "@/pages/FooterBar.vue";
import HeaderBar from "@/pages/HeaderBar.vue";
import DataService from "@/services/data.service";

const fullName = DataService.getFullName();
</script>
