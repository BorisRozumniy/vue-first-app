import { createRouter, createWebHistory } from "vue-router";

const HomePage = () => import("../views/HomePage.vue");
const TodosCoockbook = () => import("../views/TodosCoockbook.vue");
const TimeCalculator = () => import("../views/TimeCalculator.vue");
const TestLayout = () => import("../views/TestLayout.vue");

export const routes = [
	{ path: "/", component: HomePage },
  { path: "/todos-coockbook", component: TodosCoockbook },
	{ path: "/time-calculator", component: TimeCalculator },
  { path: "/layout", component: TestLayout },
];

export const router = createRouter({
	history: createWebHistory(),
	routes,
});
