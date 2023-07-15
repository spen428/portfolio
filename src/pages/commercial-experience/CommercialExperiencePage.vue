<template>
  <div class="flex w-full flex-col items-center bg-cv-white p-8">
    <h1>CE</h1>
    <h1>CE</h1>
    <h1>CE</h1>
  </div>
</template>

<style scoped></style>

<script setup lang="ts">
import DataService from "@/services/DataService";

const personalInfo = DataService.getPersonalInfo();
</script>
