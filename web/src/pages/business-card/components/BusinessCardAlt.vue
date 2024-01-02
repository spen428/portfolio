<template>
  <div class="relative">
    <svg
      width="100%"
      height="100%"
      viewBox="0 0 1 1"
      preserveAspectRatio="none"
      class="absolute inset-0 z-0"
    >
      <polygon points="0,0 0,0.3 1,0.1 1,0" class="fill-primary-950"></polygon>
      <polygon points="1,1 1,0.7 0,0.9 0,1" class="fill-primary-700"></polygon>
    </svg>

    <div class="flex h-full w-full items-center justify-center">
      <img src="/logo.svg" :alt="$t('logo')" class="h-1/3" />
    </div>
  </div>
</template>

<script setup lang="ts"></script>
