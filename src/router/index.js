import Vue from 'vue'
import Router from 'vue-router'

Vue.use(Router)

export default new Router({
  routes: [{
      path: '/',
      name: 'Home',
      component: () => import('@/pages/home/Home')
    },
    {
      path: '/getStart',
      name: 'get-start',
      component: () => import('@/pages/getStart/GetStart')
    },
    {
      path: '/newcomer-signup',
      name: 'newcomer-signup',
      component: () => import('@/pages/newcomer-signup/NewcomerSignup')
    },
    {
      path: '/newcomer-signup-next',
      name: 'newcomer-signup-next',
      component: () => import('@/pages/newcomer-signup-next/NewcomerSignupNext')
    },
    {
      path: '/newcomer-signup-congra',
      name: 'newcomer-signup-congra',
      component: () => import('@/pages/newcomer-signup-congra/NewcomerSignupCongra')
    },
    {
      path: '/helper-signup',
      name: 'helper-signup',
      component: () => import('@/pages/helper-signup/HelperSignup')
    },
    {
      path: '/helper-signup-next',
      name: 'helper-signup-next',
      component: () => import('@/pages/helper-signup-next/HelperSignupNext')
    },
    {
      path: '/helper-signup-verify',
      name: 'helper-signup-verify',
      component: () => import('@/pages/helper-signup-verify/HelperSignupVerify')
    },
    {
      path: '/helper-signup-congra',
      name: 'helper-signup-congra',
      component: () => import('@/pages/helper-signup-congra/HelperSignupCongra')
    },
    {
      path: '/newcomer-intro',
      name: 'newcomer-intro',
      component: () => import('@/pages/newcomer-intro/NewcomerIntro')
    },
    {
      path: '/helper-intro',
      name: 'helper-intro',
      component: () => import('@/pages/helper-intro/HelperIntro')
    },
    {
      path: '/learn',
      name: 'learn',
      component: () => import('@/pages/learn/Learn')
    },
    {
      path: '/company',
      name: 'company',
      component: () => import('@/pages/company/Company')
    },
    {
      path: '/career',
      name: 'career',
      component: () => import('@/pages/career/Career')
    },
    {
      path: '/business',
      name: 'business',
      component: () => import('@/pages/business/Business')
    },
    {
      path: '/investment',
      name: 'investment',
      component: () => import('@/pages/investment/Investment')
    },
    {
      path: '/privacy',
      name: 'privacy',
      component: () => import('@/pages/privacy/Privacy')
    },
    {
      path: '/terms',
      name: 'terms',
      component: () => import('@/pages/terms/Terms')
    }]
})
