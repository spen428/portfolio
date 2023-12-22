<template>
  <div
    class="mx-auto flex max-w-6xl flex-col gap-16 2xl:max-w-7xl"
    ref="container"
  >
    <!--    <div class="flex flex-col items-center justify-between gap-8 py-12">-->
    <!--      <div-->
    <!--        class="flex flex-col items-center gap-2 whitespace-nowrap duration-1000 ease-in-out"-->
    <!--      >-->
    <!--        <LoadingSkeleton-->
    <!--          v-if="!personalInfo.fullName"-->
    <!--          class="!h-9 !w-[30vw] !bg-cv-dark-purple"-->
    <!--        />-->
    <!--        <h1-->
    <!--          v-else-->
    <!--          class="text-shadow-cv-dark-purple font-serif text-[min(1.5rem,5vw)] font-bold text-cv-dark-purple text-opacity-80"-->
    <!--        >-->
    <!--          <ruby v-if="personalInfo.fullNameRuby">-->
    <!--            &centerdot; {{ personalInfo.fullName }} &centerdot;-->
    <!--            <rt>{{ personalInfo.fullNameRuby }}</rt>-->
    <!--          </ruby>-->
    <!--          <span v-else-->
    <!--            >&centerdot; {{ personalInfo.fullName }} &centerdot;</span-->
    <!--          >-->
    <!--        </h1>-->

    <!--        <LoadingSkeleton v-if="!personalInfo.tagLine" class="!h-10 !w-[45vw]" />-->
    <!--        <h2-->
    <!--          v-else-->
    <!--          class="text-shadow-cv-dark-purple font-serif text-[min(1.85rem,5vw)] font-bold italic text-cv-white"-->
    <!--        >-->
    <!--          {{ personalInfo.tagLine }}-->
    <!--        </h2>-->
    <!--      </div>-->

    <!--      <img-->
    <!--        src="/logo-hollow.svg"-->
    <!--        :alt="$t('logo')"-->
    <!--        class="w-[45vw] animate-sideToSide select-none xs:h-64 xs:w-[unset]"-->
    <!--      />-->

    <!--      <div class="flex flex-col items-center gap-6 xs:hidden">-->
    <!--        <router-link to="/portfolio/cv" class="text-cv-white">-->
    <!--          <button class="rounded-lg border px-4 py-2">-->
    <!--            {{ $t("view_my_cv") }}-->
    <!--          </button>-->
    <!--        </router-link>-->
    <!--        <router-link to="/portfolio/projects" class="text-cv-white">-->
    <!--          <button class="rounded-lg border px-4 py-2">-->
    <!--            {{ $t("browse_my_portfolio") }}-->
    <!--          </button>-->
    <!--        </router-link>-->
    <!--        <a-->
    <!--          class="text-cv-white"-->
    <!--          href="https://github.com/spen428"-->
    <!--          target="_blank"-->
    <!--        >-->
    <!--          <button-->
    <!--            class="inline-flex items-center gap-2 rounded-lg border px-4 py-2"-->
    <!--          >-->
    <!--            {{ $t("open_my_github") }}-->
    <!--            <img-->
    <!--              src="/icons/external-link.svg"-->
    <!--              :alt="$t('opens_an_external_site')"-->
    <!--              class="h-4 brightness-0 invert"-->
    <!--            />-->
    <!--          </button>-->
    <!--        </a>-->
    <!--      </div>-->

    <!--      <button class="w-8">-->
    <!--        <img-->
    <!--          src="/icons/arrow-ios-downward-outline.svg"-->
    <!--          :alt="$t('scrollDown')"-->
    <!--          class="animate-bounce invert"-->
    <!--        />-->
    <!--      </button>-->
    <!--    </div>-->
    <!--    <div class="">-->
    <!--      <h1-->
    <!--        class="text-shadow-cv-white pb-16 text-center font-serif text-[min(1.85rem,5vw)] font-bold italic text-cv-white"-->
    <!--      >-->
    <!--        What can I do?-->
    <!--      </h1>-->
    <!--    </div>-->
    <div class="mx-auto flex max-w-5xl flex-col text-cv-white">
      <h1 class="mx-4 text-[min(1.85rem,5vw)]">
        <em>Responsive</em> and <em>reactive</em> web pages
      </h1>
      <h2 class="mx-4 mb-12 mt-4 self-end text-right">
        using tried and tested
        <em>industry-favourite</em> technologies.
      </h2>
      <div class="flex items-center justify-center md:gap-8 lg:gap-16">
        <img
          src="/project-page.png"
          alt=""
          class="relative right-[calc(50%+1rem)] h-fit rounded-lg border-2 border-cv-white md:static md:w-1/2"
        />
        <div
          class="absolute left-[calc(50%+1rem)] flex w-[calc(50%-3rem)] flex-col gap-4 md:static md:w-1/4"
        >
          <div class="inline-flex items-center gap-4">
            <img
              src="/tech-logos/angular.svg"
              alt="Angular"
              class="h-16 w-16"
            />
            <span class="font-bold text-red-600">Angular</span>
          </div>
          <div class="inline-flex items-center gap-4 self-end">
            <span class="font-bold text-yellow-300">JavaScript</span>
            <img
              src="/tech-logos/javascript.svg"
              alt="JavaScript"
              class="h-16 w-16"
            />
          </div>
          <div class="inline-flex items-center gap-4">
            <img
              src="/tech-logos/typescript.svg"
              alt="TypeScript"
              class="h-16 w-16"
            />
            <span class="font-bold text-blue-600">TypeScript</span>
          </div>
          <div class="inline-flex items-center gap-4 self-end">
            <span class="font-bold text-cyan-300">React</span>
            <img src="/tech-logos/react.svg" alt="React" class="h-16 w-16" />
          </div>
        </div>
      </div>
      <div class="mt-16 flex justify-around">
        <div class="flex w-1/4 flex-col gap-4">
          <div class="inline-flex items-center gap-4">
            <img src="/tech-logos/rxjs.svg" alt="RxJS" class="h-16 w-16" />
            <span class="font-bold">RxJS</span>
          </div>
          <div class="inline-flex items-center gap-4 self-end">
            <span class="font-bold">NgRx</span>
            <img src="/tech-logos/ngrx.svg" alt="NgRx" class="h-16 w-16" />
          </div>
          <div class="inline-flex items-center gap-4">
            <img
              src="/tech-logos/tailwind.svg"
              alt="Tailwind CSS"
              class="h-16 w-16"
            />
            <span class="font-bold">Tailwind CSS</span>
          </div>
          <div class="inline-flex items-center gap-4 self-end">
            <span class="font-bold">PrimeFaces</span>
            <img
              src="/tech-logos/primeng.svg"
              alt="PrimeFaces"
              class="h-16 w-16"
            />
          </div>
        </div>
        <img
          src="/project-page.png"
          alt=""
          class="w-1/2 rounded-lg border-2 border-cv-white"
        />
      </div>
    </div>
    <img
      src="/logo-hollow.svg"
      :alt="$t('separator')"
      class="mx-auto w-8 brightness-0 invert"
    />
    <div class="mx-auto max-w-5xl text-cv-white">
      <h1 class="text-[min(1.85rem,5vw)]">
        <em>Robust</em> client-server applications
      </h1>
      <h2 class="mb-12 ml-[40%] mt-4">
        crafted with care using
        <em>test-driven development</em>.
      </h2>
      <div class="flex justify-around">
        <img
          src="/project-page.png"
          alt=""
          class="w-1/2 rounded-lg border-2 border-cv-white"
        />
        <div class="flex w-1/4 flex-col gap-4">
          <div class="inline-flex items-center gap-4">
            <img src="/tech-logos/kotlin.svg" alt="Kotlin" class="h-16 w-16" />
            <span class="font-bold">Kotlin</span>
          </div>
          <div class="inline-flex items-center gap-4 self-end">
            <span class="font-bold">Java</span>
            <img src="/tech-logos/java.svg" alt="Java" class="h-16 w-16" />
          </div>
          <div class="inline-flex items-center gap-4">
            <img src="/tech-logos/python.svg" alt="Python" class="h-16 w-16" />
            <span class="font-bold">Python</span>
          </div>
          <div class="inline-flex items-center gap-4 self-end">
            <span class="font-bold">C#</span>
            <img src="/tech-logos/csharp.svg" alt="C-Sharp" class="h-16 w-16" />
          </div>
        </div>
      </div>
      <div class="mt-16 flex justify-around">
        <div class="flex w-1/4 flex-col gap-4">
          <div class="inline-flex items-center gap-4">
            <img
              src="/tech-logos/netcore.svg"
              alt="DOTNET Core"
              class="h-16 w-16"
            />
            <span class="font-bold">.NET Core</span>
          </div>
          <div class="inline-flex items-center gap-4 self-end">
            <span class="font-bold">Spring</span>
            <img src="/tech-logos/spring.svg" alt="Spring" class="h-16 w-16" />
          </div>
          <div class="inline-flex items-center gap-4">
            <img
              src="/tech-logos/swagger.svg"
              alt="Swagger"
              class="h-16 w-16"
            />
            <span class="font-bold">Swagger</span>
          </div>
          <div class="inline-flex items-center gap-4 self-end">
            <span class="font-bold">xUnit</span>
            <img src="/tech-logos/xunit.svg" alt="xUnit" class="h-16 w-16" />
          </div>
        </div>
        <img
          src="/project-page.png"
          alt=""
          class="w-1/2 rounded-lg border-2 border-cv-white"
        />
      </div>
    </div>
    <img
      src="/logo-hollow.svg"
      :alt="$t('separator')"
      class="mx-auto w-8 brightness-0 invert"
    />
    <div class="border"><h1>Pipelines</h1></div>
    <div class="h-[80vh] border">Call to action</div>
  </div>
</template>

<style scoped>
.text-shadow-cv-dark-purple {
  text-shadow: 0 0 2rem rgb(var(--cv-dark-purple));
}

.text-shadow-cv-white {
  text-shadow: 0 0 2rem rgb(var(--cv-white));
}

em {
  font-style: normal;
  font-weight: bold;
}
</style>

<script setup lang="ts">
import LoadingSkeleton from "@/components/LoadingSkeleton.vue";
import DataService from "@/services/data.service";
import { onBeforeUnmount, onMounted, ref } from "vue";

const personalInfo = DataService.getPersonalInfo();

const scrollTop = ref(0);
const container = ref();
const containerHeightPx = ref(0);
const containerWidthPx = ref(0);

const updateScrollPosition = () => {
  const documentRoot = document.getElementsByTagName("html")[0];
  scrollTop.value = documentRoot.scrollTop;
};

const updateContainerSize = () => {
  containerWidthPx.value = container.value?.parentElement?.offsetWidth ?? 0;
  containerHeightPx.value = container.value?.parentElement?.offsetHeight ?? 0;
};

onMounted(async () => {
  document.addEventListener("scroll", updateScrollPosition);
  document.addEventListener("resize", updateContainerSize);
  updateScrollPosition();
  updateContainerSize();
});
onBeforeUnmount(() => {
  document.removeEventListener("scroll", updateScrollPosition);
  document.removeEventListener("resize", updateContainerSize);
});
</script>
