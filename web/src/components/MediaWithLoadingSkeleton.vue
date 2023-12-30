<template>
  <LoadingSkeleton v-if="mediaLoading" v-bind="$attrs" />
  <video
    v-if="src.endsWith('.webm')"
    v-show="!mediaLoading"
    v-bind="$attrs"
    @canplaythrough="mediaLoading = false"
    class="object-cover"
    loop
    muted
    playsinline
    :autoplay="autoplay"
  >
    <source :src="autoplay ? src : `${src}#t=0.01`" type="video/webm" />
  </video>
  <img
    v-else
    v-show="!mediaLoading"
    v-bind="$attrs"
    @load="mediaLoading = false"
    @error="mediaLoading = false"
    :src="src"
    :alt="alt ?? ''"
    class="object-cover"
  />
</template>

<script setup lang="ts">
import LoadingSkeleton from "@/components/LoadingSkeleton.vue";
import { ref } from "vue";

const mediaLoading = ref(true);

defineProps<{ src: string; alt?: string; autoplay?: boolean }>();
</script>
