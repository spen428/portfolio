<template>
  <div
    class="fixed left-0 top-0 h-full w-full animate-fadeIn whitespace-nowrap bg-gradient-to-b from-cv-dark-purple to-cv-light-grey text-2xl italic text-cv-white"
  >
    <div class="step-1 animate-fade p-16 text-4xl opacity-0">Welcome.</div>
    <div class="step-2 animate-fade p-16 opacity-0">
      Let me take you on a journey through my life.
    </div>
    <div class="step-3 animate-fade p-16 opacity-0">
      Our story begins some 20 years ago...
    </div>
  </div>
</template>

<style scoped>
.step-1 {
  animation-delay: 0s;
}

.step-2 {
  animation-delay: 9s;
}

.step-3 {
  animation-delay: 18s;
}
</style>

<script setup lang="ts"></script>
