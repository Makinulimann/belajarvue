import Vue from 'vue'
import VueRouter from 'vue-router'
import App from './App.vue'
import Biodata from './components/BiodataPage.vue'
import Home from './components/HomePage.vue'

Vue.use(VueRouter)

// Definisikan rute
const routes = [
  { path: '/', component: Home },
  { path: '/biodata', component: Biodata }
]

// Buat router
const router = new VueRouter({
  mode: 'history',
  routes
})

// Buat dan mount aplikasi
new Vue({
  router,
  render: h => h(App)
}).$mount('#app')