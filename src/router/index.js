import { createRouter, createWebHistory } from "vue-router";
const routerHistory = createWebHistory();
const jsonArrayRoute = [

]

const router = createRouter({
    history: routerHistory,
    routes: jsonArrayRoute
})

export { router };
