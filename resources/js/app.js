import { createApp } from "vue";
import axios from 'axios';
// init app component
import App from "./App.vue";
const app = createApp(App);
// init app
app.config.globalProperties.axios = axios

// mount app to element
app.mount('#app');
