import { createRouter, createWebHistory } from "vue-router";
import HomePage from '@/pages/HomePage.vue'
import ProjectPage from '@/pages/ProjectPage.vue'
import BlogPage from '@/pages/BlogPage.vue'
import ProjectDetails from '@/pages/ProjectDetails.vue'
import BlogDetailsPage from '@/pages/BlogDetailsPage.vue'
import NotFoundPage from '@/pages/NotFoundPage.vue'


const routes = [
  {
    path: "/",
    name: "home",
    component: HomePage,
  },
  {
    path: "/project",
    name: "project",
    component: ProjectPage,
  },
  {
    path: "/project/:page",
    name: "projectArticle",
    component: ProjectPage,
  },
  {
    path: "/blog",
    name: "blog",
    component: BlogPage,
  },
  {
    path: "/blog/:page",
    name: "blogArticle",
    component: BlogPage,
  },
  {
    path: "/project-details",
    name: "project-details",
    component: ProjectDetails,
  },
  {
    path: "/blog-details",
    name: "blog-details",
    component: BlogDetailsPage,
  },
  {
    path: "/:CatchAll(.*)",
    name: "404",
    component: NotFoundPage,
  },
];
const router = createRouter({
    history: createWebHistory(),
    routes,
});

export default router;
