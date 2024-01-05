<template>
  <LoadingSkeleton v-if="mediaLoading" v-bind="$attrs" />
  <video
    v-if="['webm', 'mp4'].includes(fileExt)"
    v-show="!mediaLoading"
    v-bind="$attrs"
    @canplaythrough="mediaLoading = false"
    loop
    muted
    playsinline
    :autoplay="autoplay"
  >
    <source
      :src="autoplay ? src : `${src}#t=0.01`"
      :type="`video/${fileExt}`"
    />
  </video>
  <img
    v-else
    v-show="!mediaLoading"
    v-bind="$attrs"
    @load="mediaLoading = false"
    @error="mediaLoading = false"
    :src="src"
    :alt="alt ?? ''"
  />
</template>

<script setup lang="ts">
import LoadingSkeleton from "@/components/LoadingSkeleton.vue";
import { computed, ref } from "vue";

const mediaLoading = ref(true);

const fileExt = computed(() => {
  const split = (props.src ?? "").split(".");
  if (split.length < 2) return "";
  return split.pop()!;
});

const props = defineProps<{ src: string; alt?: string; autoplay?: boolean }>();
</script>
