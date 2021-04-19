import Vue from 'vue'
import Vuex from 'vuex'

// import example from './modules/examples'

Vue.use(Vuex)

export default function () {
  const Store = new Vuex.Store({
    modules: {
      // example
    },

    strict: process.env.DEBUGGING
  })

  return Store
}
