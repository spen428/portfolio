<template>
  <input
    :name="name"
    :checked="checked"
    v-on:click="$emit('click')"
    type="radio"
    class="ml-2 cursor-pointer first-of-type:ml-0"
  />
</template>

<style scoped>
input[type="radio"] {
  box-sizing: border-box;
  appearance: none;
  background: white;
  outline: 2px solid rgb(var(--cv-grey));
  border: 2px solid white;
  width: 0.75rem;
  height: 0.75rem;
  rotate: 45deg;
  margin: 0.5rem;
}

input[type="radio"]:checked {
  background: rgb(var(--cv-dark-purple));
  outline: 2px solid rgb(var(--cv-purple));
}
</style>

<script setup lang="ts">
defineProps<{
  name?: string;
  checked?: boolean;
}>();

defineEmits<{
  (e: "click", value: number): void;
}>();
</script>
