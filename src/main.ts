import { createApp } from "vue";
import App from "./App.vue";

import "./assets/main.css";
import { createRouter, createWebHistory } from "vue-router";
import CvPage from "@/pages/cv/CvPage.vue";
import BusinessCardPage from "@/pages/business-card/BusinessCardPage.vue";
import BreakpointTestPage from "@/pages/test/breakpoints/BreakpointTestPage.vue";
import RouterView from "@/pages/RouterView.vue";
import PortfolioCommercialExperienceCalorieMate from "@/pages/projects/components/PortfolioCommercialExperienceCalorieMate.vue";
import ProjectsIndexPage from "@/pages/projects/ProjectsIndexPage.vue";
import HomePage from "@/pages/home/HomePage.vue";
import ConfigurationService from "@/services/ConfigurationService";
import DataService from "@/services/DataService";
import CommercialExperiencePage from "@/pages/commercial-experience/CommercialExperiencePage.vue";

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
        { path: "", component: HomePage, name: DataService.getFullName() },
        {
          path: "projects",
          component: ProjectsIndexPage,
          name: "Project Showcase",
        },
        {
          path: "ce",
          component: CommercialExperiencePage,
          name: "Commercial Experience",
          meta: {
            isPrintable: true,
          },
        },
        {
          path: "cv",
          component: CvPage,
          name: "Curriculum Vitae",
          meta: {
            isPrintable: true,
            isStylable: false,
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
app.mount("#root");
