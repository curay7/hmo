import "bootstrap/dist/css/bootstrap.css";

//Icons

import "@fortawesome/fontawesome-svg-core";
import "@fortawesome/free-solid-svg-icons";
//import "bootstrap-icons/font/bootstrap-icons.css";

import { createApp } from "vue";
import { createPinia } from "pinia";

import App from "./App.vue";
import router from "./router";

const app = createApp(App);

app.use(createPinia());
app.use(router);

app.mount("#app");

import "bootstrap/dist/js/bootstrap.js";
