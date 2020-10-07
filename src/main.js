import Vue from 'vue'
import App from './App.vue'
import router from './router'
import store from './store'
import firebase from 'firebase/app'
import 'firebase/auth'
import 'firebase/database'
import '@/assets/styles/main.scss'
import 'bootstrap/dist/css/bootstrap.min.css'

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

new Vue({
  router,
  store,
  render: h => h(App)
}).$mount('#app')


function makeRandomizer(numbers) {
  const start = numbers[0];
  const finish = numbers[1];
  const massNumber = [];

  for (let i = start; i <= finish; i++) {
    massNumber.push(i)
  }

  const getRandom = () => {
    let randomIndex = Math.floor(Math.random() * massNumber.length)

    let randomNumber = massNumber.splice(randomIndex, 1)[0]

    return randomNumber !== undefined ? randomNumber : null
  }

  return getRandom;
}