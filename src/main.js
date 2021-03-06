// The Vue build version to load with the `import` command
// (runtime-only or standalone) has been set in webpack.base.conf with an alias.
import Vue from 'vue'
import App from './App'
import router from './router'
import store from './store'
import Vuetify from 'vuetify'
import 'vuetify/dist/vuetify.min.css'
import VueKonva from 'vue-konva'
import Swatches from 'vue-swatches'
import 'vue-swatches/dist/vue-swatches.min.css'

Vue.use(Vuetify)
Vue.use(VueKonva)

Vue.config.productionTip = false

/* eslint-disable no-new */
new Vue({
  el: '#app',
  store,
  router,
  components: {
    App,
    Swatches
  },
  template: '<App/>'
})
