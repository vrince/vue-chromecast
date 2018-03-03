import Vue from 'vue'
import Vuex from 'vuex'
import content from './modules/content'
import session from './modules/session'

Vue.use(Vuex)

const debug = process.env.NODE_ENV !== 'production'

export default new Vuex.Store({
  modules: {
    session,
    content
  },
  strict: debug
})
