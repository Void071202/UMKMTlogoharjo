import Vue from 'vue'
import App from './App.vue'
import './assets/tailwind.css'
import router from './router';
import * as VueGoogleMaps from 'vue2-google-maps';
import 'bootstrap/dist/css/bootstrap.css';
import 'bootstrap/dist/js/bootstrap.js';
Vue.config.productionTip = false;

new Vue({
  router,
  render: h => h(App),
}).$mount('#app');


Vue.use(VueGoogleMaps, {
  load: {
    key: 'YOUR_GOOGLE_MAPS_API_KEY', // Gantilah dengan API Key Google Maps Anda
    libraries: 'places',
  },
});
new Vue({
  render: h => h(App),
}).$mount('#app')
