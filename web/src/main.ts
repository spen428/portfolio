import { createApp } from "vue";
import App from "./App.vue";

import "./assets/main.css";
import { createRouter, createWebHistory } from "vue-router";
import CvPage from "@/pages/cv/CvPage.vue";
import BusinessCardPage from "@/pages/business-card/BusinessCardPage.vue";
import BreakpointTestPage from "@/pages/test/breakpoints/BreakpointTestPage.vue";
import RouterView from "@/pages/RouterView.vue";
import ProjectsIndexPage from "@/pages/projects/ProjectsIndexPage.vue";
import HomePage from "@/pages/home/HomePage.vue";
import ConfigurationService from "@/services/configuration.service";
import { createI18n } from "vue-i18n";
import { messages } from "@/services/locale.service";

const router = createRouter({
  history: createWebHistory(),
  routes: [
    { path: "/", redirect: "/portfolio" },
    { path: "/cv", component: CvPage },
    { path: "/business-card", component: BusinessCardPage },
    {
      path: "/portfolio",
      component: RouterView,
      children: [
        { path: "", component: HomePage },
        {
          path: "projects",
          component: ProjectsIndexPage,
          name: "Project Showcase",
        },
        {
          path: "cv",
          component: CvPage,
          name: "Curriculum Vitae",
          meta: {
            isPrintable: true,
            isStyleable: false,
          },
        },
      ],
    },
    {
      path: "/test",
      children: [
        {
          path: "breakpoints",
          component: BreakpointTestPage,
        },
      ],
    },
  ],
});

router.beforeEach((to, from, next) => {
  if (to.query.disableAnimation) {
    ConfigurationService.setAnimationEnabled(false);
  }
  next();
});

const app = createApp(App);
app.use(router);
app.use(
  createI18n({
    legacy: false,
    globalInjection: true,
    locale: "en-GB",
    fallbackLocale: "en-GB",
    availableLocales: ["en-GB", "ja-JP"],
    messages,
  })
);

app.mount("#root");
