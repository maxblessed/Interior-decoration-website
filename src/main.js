import Vue from "vue";
import App from "./App.vue";
import router from "./router";
let bootstrap =require('bootstrap');
import 'bootstrap/dist/css/bootstrap.css'
import headerv from "./components/header.vue";
import footerv from "./components/footer.vue";
Vue.config.productionTip = false;

Vue.component('header1',headerv);
Vue.component('footer1',footerv);


new Vue({
  el:'#app',
  router,
  render: h => h(App)
})
