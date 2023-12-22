<template>
  <div class="mx-auto flex max-w-6xl flex-col gap-8 text-cv-white">
    <div class="md:mx-auto md:min-w-[70vw] lg:min-w-[60vw] xl:min-w-[50vw]">
      <h1 class="mx-4 text-[min(1.85rem,5vw)]">
        <em>Responsive</em> and <em>reactive</em> web pages
      </h1>
      <h2 class="mx-4 mt-4 self-end text-right">
        using tried and tested
        <em>industry-favourite</em> technologies.
      </h2>
    </div>
    <ScreenWithTech
      image-position="left"
      image-url="/project-page.png"
      :technologies="technologies.slice(0, 4)"
    />
    <ScreenWithTech
      image-position="right"
      image-url="/project-page.png"
      :technologies="technologies.slice(4, 8)"
    />
  </div>
</template>

<script setup lang="ts">
import ScreenWithTech, {
  type TechnologyWithIcon,
} from "@/pages/home/components/ScreenWithTech.vue";

const technologies: TechnologyWithIcon[] = [
  {
    name: "Angular",
    logoUrl: "/tech-logos/angular.svg",
    color: "rgb(220 38 38)",
  },
  {
    name: "JavaScript",
    logoUrl: "/tech-logos/javascript.svg",
    color: "rgb(253 224 71)",
  },
  {
    name: "TypeScript",
    logoUrl: "/tech-logos/typescript.svg",
    color: "rgb(37 99 235)",
  },
  {
    name: "React",
    logoUrl: "/tech-logos/react.svg",
    color: "rgb(103 232 249)",
  },
  {
    name: "RxJS",
    logoUrl: "/tech-logos/rxjs.svg",
  },
  {
    name: "NgRx",
    logoUrl: "/tech-logos/ngrx.svg",
  },
  {
    name: "Tailwind CSS",
    logoUrl: "/tech-logos/tailwind.svg",
  },
  {
    name: "PrimeFaces",
    logoUrl: "/tech-logos/primeng.svg",
  },
];
</script>

<style scoped>
em {
  font-style: normal;
  font-weight: bold;
}
</style>
