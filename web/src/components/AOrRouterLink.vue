<template>
  <div>
    <router-link v-if="!isExternal" :to="href">
      <slot></slot>
    </router-link>
    <a v-if="isExternal" :href="href" target="_blank">
      <slot></slot>
    </a>
  </div>
</template>

<script setup lang="ts">
defineProps<{ isExternal: boolean; href: string }>();
</script>
