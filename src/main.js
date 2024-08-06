/**
 * main.js
 *
 * Bootstraps Vuetify and other plugins then mounts the App`
 */

// Plugins
import { registerPlugins } from "@/plugins";
import store from "@/store";
import router from "@/router";
import "./assets/main.css";
// tailwind style
import "@/index.css";

// Components
import App from "@/App.vue";

store.dispatch("fetchData");
// Composables
import { createApp } from "vue";

const app = createApp(App);
app.use(store);
app.use(router);

registerPlugins(app);

app.mount("#app");
