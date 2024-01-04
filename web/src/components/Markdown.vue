<template>
  <div v-html="renderedMarkdown" />
</template>

<script setup lang="ts">
import { ref, watch, onMounted } from "vue";
import MarkdownIt from "markdown-it";

const renderedMarkdown = ref("");

const _mdiInstance = new MarkdownIt({
  html: true,
  xhtmlOut: false,
  breaks: false,
  linkify: false,
});

const updateMarkdown = () => {
  renderedMarkdown.value = _mdiInstance.render(props.source);
};

watch(() => props.source, updateMarkdown);

onMounted(updateMarkdown);

const props = defineProps<{ source: string }>();
</script>
