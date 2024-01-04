<template>
  <div v-html="renderedMarkdown" />
</template>

<script setup lang="ts">
import { computed } from "vue";
import MarkdownIt from "markdown-it";
import type { RenderRule } from "markdown-it/lib/renderer";

const markdownInstance = new MarkdownIt({
  html: true,
  xhtmlOut: false,
  breaks: false,
  linkify: false,
});

const originalRenderFn = markdownInstance.renderer.rules.html_block!;
const customRenderFn: RenderRule = (tokens, idx, options, env, self) => {
  const token = tokens[idx];
  if (token.type === "html_block") {
    if (token.content.startsWith("<video")) {
    }
  }

  return originalRenderFn(tokens, idx, options, env, self);
};
markdownInstance.renderer.rules.html_block = customRenderFn;

const renderedMarkdown = computed(() => markdownInstance.render(props.source));

const props = defineProps<{ source: string }>();
</script>
