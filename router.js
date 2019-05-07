import Vue from 'vue'
import Router from 'vue-router'

import Home from './pages/index'
import About from './pages/about'
import us from './pages/us'

Vue.use(Router);

export function createRouter() {
  return new Router({
    mode: 'history',
    routes: [
      {
        name: 'about',
        path: '/:lang?/about',
        component: About
      },
      {
        name: 'home',
        path: '/:lang?',
        component: Home
      },
      {
        name: 'us',
        path: '/:lang?/us',
        component: us
      }
    ]
  })
}
