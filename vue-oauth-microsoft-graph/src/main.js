import { createApp } from 'vue';
import router from './router';
import store from './store'; 
import 'bootstrap/dist/css/bootstrap.css';
import 'bootstrap-vue/dist/bootstrap-vue.css';
import 'bootstrap/dist/js/bootstrap.js';
import 'bootstrap-vue/dist/bootstrap-vue.js';
import App from './App.vue';
import { FontAwesomeIcon } from '@fortawesome/vue-fontawesome';
import { library } from '@fortawesome/fontawesome-svg-core';
import { faCircleNotch } from '@fortawesome/free-solid-svg-icons';

library.add(faCircleNotch);

const app = createApp(App);

app.use(router);
app.use(store); 

app.component('font-awesome-icon', FontAwesomeIcon);

app.mount('#app');