<template>
  <LoadingSkeleton v-if="mediaLoading" v-bind="$attrs" />
  <video
    v-if="mediaUrl.endsWith('.webm')"
    v-show="!mediaLoading"
    v-bind="$attrs"
    @canplaythrough="mediaLoading = false"
    class="object-cover"
    loop
    muted
    playsinline
    :autoplay="autoplay"
  >
    <source
      :src="autoplay ? mediaUrl : `${mediaUrl}#t=0.01`"
      type="video/webm"
    />
  </video>
  <img
    v-else
    v-show="!mediaLoading"
    v-bind="$attrs"
    @load="mediaLoading = false"
    @error="mediaLoading = false"
    :src="mediaUrl"
    alt=""
    class="object-cover"
  />
</template>

<script setup lang="ts">
import LoadingSkeleton from "@/components/LoadingSkeleton.vue";
import { ref } from "vue";

const mediaLoading = ref(true);

defineProps<{ mediaUrl: string; autoplay?: boolean }>();
</script>
