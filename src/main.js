import { createApp } from "vue";
import "./style.css";
import App from "./App.vue";
import UI from "./components/UI";
// router start
import { createRouter, createWebHistory } from "vue-router";
import TodosCoockbook from "./views/TodosCoockbook.vue";
import HomePage from "./views/HomePage.vue";

const routes = [
  { path: "/", component: HomePage },
  { path: "/todos-coockbook", component: TodosCoockbook },
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
