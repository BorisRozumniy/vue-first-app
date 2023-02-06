import { createApp } from "vue";
import "./style.css";
import App from "./App.vue";
import UI from "./components/UI";
// router start
import { createRouter, createWebHistory } from "vue-router";
import TodosCoockbook from "./views/TodosCoockbook.vue";
import HomePage from "./views/HomePage.vue";
import TimeCalculator from "./views/TimeCalculator.vue";
import TestLayout from "./views/TestLayout.vue";

const routes = [
  { path: "/", component: HomePage },
  { path: "/todos-coockbook", component: TodosCoockbook },
  { path: "/time-calculator", component: TimeCalculator },
  { path: "/layout", component: TestLayout },
];

const router = createRouter({
  history: createWebHistory(),
  routes,
});
// router end
const app = createApp(App).use(router);

UI.forEach((component) => {
  app.component(component.name, component);
});

app.mount("#app");
