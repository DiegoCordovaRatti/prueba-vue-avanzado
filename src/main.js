import '@babel/polyfill'
import 'mutationobserver-shim'
import Vue from 'vue'
import './plugins/bootstrap-vue'
import App from './App.vue'
import router from './router'
import store from './store'
import { BootstrapVue, BootstrapVueIcons } from 'bootstrap-vue'
import { initializeApp } from "firebase/app";
import {getAuth} from 'firebase/auth'
import 'bootstrap/dist/css/bootstrap.css'
import 'bootstrap-vue/dist/bootstrap-vue.css'

Vue.use(BootstrapVue)
Vue.use(BootstrapVueIcons)


const firebaseConfig = {
  apiKey: "AIzaSyAdtNpYbtIc3h2IrpJlFykSsjcZsLMPGRQ",
  authDomain: "prueba-componentes-avanzados.firebaseapp.com",
  projectId: "prueba-componentes-avanzados",
  storageBucket: "prueba-componentes-avanzados.appspot.com",
  messagingSenderId: "196026882339",
  appId: "1:196026882339:web:f6d9e544de45f347e81496"
};

const app = initializeApp(firebaseConfig);
const auth = getAuth(app)
export default auth



Vue.config.productionTip = false

new Vue({
  router,
  store,
  render: h => h(App)
}).$mount('#app')
