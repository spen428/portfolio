<template>
  <div
    class="mx-auto flex max-w-6xl flex-col gap-16 2xl:max-w-7xl"
    ref="container"
  >
    <div
      class="flex h-[calc(100vh-9rem)] flex-col items-center justify-between gap-8 py-12"
    >
      <div
        class="flex flex-col items-center gap-2 whitespace-nowrap duration-1000 ease-in-out"
      >
        <LoadingSkeleton
          v-if="!personalInfo.fullName"
          class="!h-9 !w-[30vw] !bg-cv-dark-purple"
        />
        <h1
          v-else
          class="text-shadow-cv-dark-purple font-serif text-[min(1.5rem,5vw)] font-bold text-cv-dark-purple text-opacity-80"
        >
          <ruby v-if="personalInfo.fullNameRuby">
            &centerdot; {{ personalInfo.fullName }} &centerdot;
            <rt>{{ personalInfo.fullNameRuby }}</rt>
          </ruby>
          <span v-else
            >&centerdot; {{ personalInfo.fullName }} &centerdot;</span
          >
        </h1>

        <LoadingSkeleton v-if="!personalInfo.tagLine" class="!h-10 !w-[45vw]" />
        <h2
          v-else
          class="text-shadow-cv-dark-purple font-serif text-[min(1.85rem,5vw)] font-bold italic text-cv-white"
        >
          {{ personalInfo.tagLine }}
        </h2>
      </div>

      <img
        src="/logo-hollow.svg"
        :alt="$t('logo')"
        class="w-[45vw] animate-sideToSide select-none xs:h-64 xs:w-[unset]"
      />

      <LandingPageLinks class="xs:hidden" />

      <div id="separator" />

      <img
        src="/icons/arrow-ios-downward-outline.svg"
        :alt="$t('scrollDown')"
        class="absolute top-[calc(100dvh-4rem)] w-8 animate-bounce invert duration-300"
        :style="{ opacity: scrollTop == 0 ? 1 : 0 }"
      />
    </div>
    <div class="">
      <h1
        class="text-shadow-cv-dark-purple pb-16 text-center font-serif text-[min(1.85rem,5vw)] font-bold italic text-cv-white"
      >
        So, what can you do?
      </h1>
    </div>
    <TechScreen
      class="mx-auto"
      title-html="<em>Responsive</em> and <em>reactive</em> web pages"
      subtitle-html="using tried and tested <em>industry-favourite</em> technologies."
      :image-urls="[
        '/animated/portfolio-responsivity-demo.gif',
        '/projects/raffld-270.jpg',
      ]"
      :technologies="[
        { name: 'Angular', logoUrl: '/tech-logos/angular.svg' },
        { name: 'Vue.js', logoUrl: '/tech-logos/vue.svg' },
        { name: 'JavaScript', logoUrl: '/tech-logos/javascript.svg' },
        { name: 'TypeScript', logoUrl: '/tech-logos/typescript.svg' },
        { name: 'RxJS', logoUrl: '/tech-logos/rxjs.svg' },
        { name: 'NgRx', logoUrl: '/tech-logos/ngrx.svg' },
        { name: 'Tailwind CSS', logoUrl: '/tech-logos/tailwind.svg' },
        { name: 'PrimeFaces', logoUrl: '/tech-logos/primeng.svg' },
      ]"
    />
    <img
      src="/logo-hollow.svg"
      alt=""
      class="mx-auto w-8 brightness-0 invert"
    />
    <TechScreen
      class="mx-auto"
      title-html="<em>Robust</em> client-server applications"
      subtitle-html="crafted with care using <em>test-driven development</em>."
      :image-urls="['/projects/jbooru-270.jpg', '/projects/tenhou.png']"
      :technologies="[
        { name: 'Kotlin', logoUrl: '/tech-logos/kotlin.svg' },
        { name: 'Java', logoUrl: '/tech-logos/java.svg' },
        { name: 'Python', logoUrl: '/tech-logos/python.svg' },
        { name: 'C#', logoUrl: '/tech-logos/csharp.svg' },
        { name: '.NET Core', logoUrl: '/tech-logos/netcore.svg' },
        { name: 'Spring', logoUrl: '/tech-logos/spring.svg' },
        { name: 'Swagger', logoUrl: '/tech-logos/swagger.svg' },
        { name: 'xUnit', logoUrl: '/tech-logos/xunit.svg' },
      ]"
    />
    <img
      src="/logo-hollow.svg"
      alt=""
      class="mx-auto w-8 brightness-0 invert"
    />
    <TechScreen
      class="mx-auto"
      title-html="Cloud configuration and system administration"
      subtitle-html="for continuous build and release pipelines, on-demand scaling, and disaster recovery."
      :image-urls="['/projects/portainer.jpg', '/projects/pipelines.png']"
      :technologies="[
        { name: 'Amazon Web Services', logoUrl: '/tech-logos/aws.svg' },
        { name: 'Microsoft Azure', logoUrl: '/tech-logos/azure.svg' },
        { name: 'Linux', logoUrl: '/tech-logos/linux.svg' },
        { name: 'Windows Server', logoUrl: '/tech-logos/windows-server.svg' },
        { name: 'Docker', logoUrl: '/tech-logos/docker.svg' },
        { name: 'PostgreSQL', logoUrl: '/tech-logos/postgresql.svg' },
        { name: 'Portainer', logoUrl: '/tech-logos/portainer.svg' },
        { name: 'Proxmox', logoUrl: '/tech-logos/proxmox.png' },
      ]"
    />
    <LandingPageLinks />
    <button
      class="mx-auto mb-8 flex animate-tease"
      onclick="document.body.scrollTop = 0; document.documentElement.scrollTop = 0;"
    >
      <img src="/logo.svg" :alt="$t('logo')" class="h-16 w-16 select-none" />
    </button>
  </div>
</template>

<style scoped>
.text-shadow-cv-dark-purple {
  text-shadow: 0 0 2rem rgb(var(--cv-dark-purple));
}
</style>

<script setup lang="ts">
import DataService from "@/services/data.service";
import { onBeforeUnmount, onMounted, ref } from "vue";
import TechScreen from "@/pages/home/components/TechScreen.vue";
import LoadingSkeleton from "@/components/LoadingSkeleton.vue";
import LandingPageLinks from "@/pages/home/LandingPageLinks.vue";

const personalInfo = DataService.getPersonalInfo();

const scrollTop = ref(0);
const container = ref();
const containerHeightPx = ref(0);
const containerWidthPx = ref(0);

const updateScrollPosition = () => {
  const documentRoot = document.querySelector("html")!;
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
