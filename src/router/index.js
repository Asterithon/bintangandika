import { createRouter, createWebHistory } from "vue-router";

const routes = [
    {
        path: "/",
        name: "Home",
        component: () => import("../view/home.vue"),
    },
    {
        path: "/personal",
        name: "Personal",
        component: () => import("../view/Personal.vue"),
    },
    {
        path: "/projects",
        name: "Projects",
        component: () => import("../view/Projects.vue"),
    },
    {
        path: "/contact",
        name: "Contact",
        component: () => import("../view/contact.vue"),
    },
];

const router = createRouter({
    history: createWebHistory(import.meta.env.BASE_URL),
    routes,
    scrollBehavior() {
        return { top: 0 };
    },
});

export default router;
