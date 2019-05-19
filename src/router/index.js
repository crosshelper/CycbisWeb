import Vue from 'vue'
import Router from 'vue-router'
import Home from '@/pages/home/Home'
import GetStart from '@/pages/getStart/GetStart'
import Signup from '@/pages/newcomer-signup/Signup'
import NewcomerSignupStepTwo from '@/pages/newcomer-signup-next/NewcomerSignupNext'
import NewcomerSignupCongra from '@/pages/newcomer-signup-congra/SignupCongra'

Vue.use(Router)

export default new Router({
  routes: [{
      path: '/',
      name: 'Home',
      component: Home
    },
    {
      path: '/getStart',
      name: 'get-start',
      component: GetStart
    },
    {
      path: '/newcomer-signup',
      name: 'newcomer-signup',
      component: Signup
    },
    {
      path: '/newcomer-signup-next',
      name: 'newcomer-signup-next',
      component: NewcomerSignupStepTwo
    },
    {
      path: '/newcomer-signup-congra',
      name: 'newcomer-signup-congra',
      component: NewcomerSignupCongra
    }]
})
