<template>
  <template v-for="item in contentItems">
    <div v-if="item.type === 'html'" v-html="item.content" />
    <MediaWithLoadingSkeleton
      v-if="item.type === 'media'"
      :src="item.attrs![0][1]"
      autoplay
    />
  </template>
</template>

<script setup lang="ts">
import { computed, type ComputedRef } from "vue";
import MarkdownIt, { type Token } from "markdown-it";
import MediaWithLoadingSkeleton from "@/components/MediaWithLoadingSkeleton.vue";
import type StateCore from "markdown-it/lib/rules_core/state_core";

const opts = {
  html: true,
  xhtmlOut: false,
  breaks: false,
  linkify: false,
};
const markdownInstance = new MarkdownIt(opts);

markdownInstance.core.ruler.push("custom_media", (state: StateCore) => {
  for (let i = 0; i < state.tokens.length; i++) {
    const t = state.tokens[i];
    if (!t.content.startsWith("#! ")) {
      continue;
    }
    let token = new state.Token("media", "", 0);
    let src = t.content.split("#! ", 2)[1];
    token.attrSet("src", src);
    state.tokens[i] = token;
  }
});

const props = defineProps<{ source: string }>();

type PartialToken = Pick<Token, "type" | "content" | "attrs">;

const contentItems: ComputedRef<PartialToken[]> = computed(() => {
  const tokens = markdownInstance.parse(props.source, {});
  const items = [];
  let currentToken, content;
  for (let i = 0; i < tokens.length; i++) {
    currentToken = tokens[i];

    if (currentToken.type.endsWith("_open")) {
      if (
        i + 2 < tokens.length &&
        tokens[i + 1].type === "media" &&
        tokens[i + 2].type === "paragraph_close"
      ) {
        items.push(tokens[i + 1]);
        i += 2;
        continue;
      }

      content = "";
      i++;
      while (i < tokens.length && !tokens[i].type.endsWith("_close")) {
        content += markdownInstance.renderer.render(
          [tokens[i]],
          markdownInstance.options,
          {}
        );
        i++;
      }

      items.push({
        type: "html",
        content: `<${currentToken.tag}>${content}</${currentToken.tag}>`,
        attrs: [],
      });
      continue;
    }

    items.push({
      type: "html",
      content: markdownInstance.renderer.render(
        [currentToken],
        markdownInstance.options,
        {}
      ),
      attrs: currentToken.attrs,
    });
  }

  return items;
});
</script>
