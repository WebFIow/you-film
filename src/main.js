import Vue from 'vue'
import App from './App.vue'
import router from './router'
import store from './store'
import firebase from 'firebase/app'
import Vuelidate from 'vuelidate'
import Paginate from 'vuejs-paginate'
import 'firebase/auth'
import 'firebase/database'
import '@/assets/styles/main.scss'
import 'bootstrap/dist/css/bootstrap.min.css'

Vue.use(Vuelidate)
Vue.component('Paginate', Paginate)

Vue.config.productionTip = false

const firebaseConfig = {
  apiKey: process.env.VUE_APP_APIKEY,
  authDomain: "webflow-youfilm.firebaseapp.com",
  databaseURL: "https://webflow-youfilm.firebaseio.com",
  projectId: "webflow-youfilm",
  storageBucket: "webflow-youfilm.appspot.com",
  messagingSenderId: process.env.VUE_APP_SENDER_ID,
  appId: process.env.VUE_APP_ID
};
// Initialize Firebase
firebase.initializeApp(firebaseConfig);

let app

firebase.auth().onAuthStateChanged(() => {
  if(!app) {
    app = new Vue({
      router,
      store,
      render: h => h(App)
    }).$mount('#app')
  }
})