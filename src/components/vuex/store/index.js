import Vue from 'vue'
import Vuex from 'vuex'
import GrandPa from './modules/grandPa'
import Father from './modules/father'
import ChildA from './modules/childA'
import ChildB from './modules/childB'

Vue.use(Vuex)

export default new Vuex.Store({
  modules: {
    GrandPa,
    Father,
    ChildA,
    ChildB
  }
})
