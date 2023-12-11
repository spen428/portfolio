<template>
  <footer class="w-full bg-gray-800 bg-opacity-20 opacity-70">
    <div class="mx-auto max-w-7xl px-2 lg:px-8">
      <p class="all-caps p-4 text-justify text-[0.6rem] text-cv-white">
        <i18n-t keypath="copyright_notice">
          <span>{{ fullName }}</span>
          <a
            href="https://www.npmjs.com/package/license-checker"
            class="text-cv-white underline"
            >NPM License Checker</a
          >
          <a
            href="https://github.com/akveo/eva-icons"
            class="text-cv-white underline"
            >Eva Icons</a
          >
        </i18n-t>
      </p>
    </div>
  </footer>
</template>

<script setup lang="ts">
defineProps<{ fullName: string }>();
</script>
