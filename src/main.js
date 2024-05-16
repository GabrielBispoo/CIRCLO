// import { createApp } from 'vue'
// import App from './App.vue'
// import router from './router'
// import store from './store';


// const app = createApp(App);
// app.use(router)
// app.use(store);
// app.mount('#app');


import { createApp } from 'vue'
import App from './App.vue'
import router from './router'

const app = createApp(App);

// Use os plugins
app.use(router);


// Monte a aplicação
app.mount('#app');