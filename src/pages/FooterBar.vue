<template>
  <footer class="w-full bg-gray-800 bg-opacity-20 opacity-70">
    <div class="mx-auto max-w-7xl px-2 lg:px-8">
      <p class="all-caps p-4 text-justify text-[0.6rem] text-cv-white">
        Copyright &copy; 2023 {{ fullName }}. All rights reserved. The source
        code for this website makes use of open source software licenced under
        MIT, BSD-2-Clause, Apache-2.0, and other permissive licenses. Please
        refer to the list of packages and their licences contained within the
        site's source code repository. You may use a tool such as
        <a
          href="https://www.npmjs.com/package/license-checker"
          class="text-cv-white underline"
          >NPM License Checker</a
        >
        to automate this process. The
        <a
          href="https://github.com/akveo/eva-icons"
          class="text-cv-white underline"
          >Eva Icons</a
        >
        icon set, used throughout this website both as-in and after
        modification, is copyright &copy; 2018 Akveo. Their free and unhindered
        usage is made possible by the generous use of the permissive MIT
        licence. Thank you all.
      </p>
    </div>
  </footer>
</template>

<script setup lang="ts">
import DataService from "@/services/DataService";

const fullName = DataService.getFullName();
</script>
