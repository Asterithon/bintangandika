import {createRouter, createWebHistory} from 'vue-router'

const routes = [
    {
        path: "/",
        name: "Home",
        component: () => import("../view/Home.vue"),
    },
    {
        path: "/personal",
        name: "personal",
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
        component: () => import("../view/Contact.vue"),
    },
];

const router = createRouter({
    history: createWebHistory(import.meta.env.BASE_URL),
    routes
})

export default router
