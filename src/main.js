import { createApp } from "vue";
import "./style.css";
import App from "./App.vue";
import UI from "./components/UI";
import { router } from "./routes";

const app = createApp(App).use(router);

UI.forEach((component) => {
  app.component(component.name, component);
});

app.mount("#app");
