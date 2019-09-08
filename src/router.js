import Vue from 'vue'
import Router from 'vue-router'
import Home from './views/Home.vue'
import Simple from './components/simpleStore/Index.vue'
import AttrsAndListeners from './components/attrsAndListeners/Index.vue'
import EventBus from './components/eventBus/Index.vue'
import PropsAndEmit from './components/propsAndEmit/Index.vue'
import Vx from './components/vuex/Index.vue'

Vue.use(Router)

export default new Router({
  mode: 'history',
  base: process.env.BASE_URL,
  routes: [
    {
      path: '/',
      name: 'home',
      component: Home
    },
    {
      path: '/attrandlisterners',
      component: AttrsAndListeners
    },
    {
      path: '/eventbus',
      component: EventBus
    },
    {
      path: '/propsandemit',
      component: PropsAndEmit
    },
    {
      path: '/vuex',
      component: Vx
    },
    {
      path: '/simple',
      component: Simple
    }
  ]
})
