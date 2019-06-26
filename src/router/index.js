import Vue from 'vue'
import Router from 'vue-router'
import Home from '@/pages/home/Home'
import GetStart from '@/pages/getStart/GetStart'
import NewcomerSignup from '@/pages/newcomer-signup/NewcomerSignup'
import NewcomerSignupStepTwo from '@/pages/newcomer-signup-next/NewcomerSignupNext'
import NewcomerSignupCongra from '@/pages/newcomer-signup-congra/NewcomerSignupCongra'
import HelperSignup from '@/pages/helper-signup/HelperSignup'
import HelperSignupStepTwo from '@/pages/helper-signup-next/HelperSignupNext'
import HelperSignupStepThree from '@/pages/helper-signup-verify/HelperSignupVerify'
import HelperSignupCongra from '@/pages/helper-signup-congra/HelperSignupCongra'
import NewcomerIntro from '@/pages/newcomer-intro/NewcomerIntro'
import HelperIntro from '@/pages/helper-intro/HelperIntro'
import Learn from '@/pages/learn/Learn'
import Company from '@/pages/company/Company'
import Career from '@/pages/career/Career'
import Business from '@/pages/business/Business'
import Investment from '@/pages/investment/Investment'
import Privacy from '@/pages/privacy/Privacy'


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
      component: NewcomerSignup
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
    },
    {
      path: '/helper-signup',
      name: 'helper-signup',
      component: HelperSignup
    },
    {
      path: '/helper-signup-next',
      name: 'helper-signup-next',
      component: HelperSignupStepTwo
    },
    {
      path: '/helper-signup-verify',
      name: 'helper-signup-verify',
      component: HelperSignupStepThree
    },
    {
      path: '/helper-signup-congra',
      name: 'helper-signup-congra',
      component: HelperSignupCongra
    },
    {
      path: '/newcomer-intro',
      name: 'newcomer-intro',
      component: NewcomerIntro
    },
    {
      path: '/helper-intro',
      name: 'helper-intro',
      component: HelperIntro
    },
    {
      path: '/learn',
      name: 'learn',
      component: Learn
    },
    {
      path: '/company',
      name: 'company',
      component: Company
    },
    {
      path: '/career',
      name: 'career',
      component: Career
    },
    {
      path: '/business',
      name: 'business',
      component: Business
    },
    {
      path: '/investment',
      name: 'investment',
      component: Investment
    },
    {
      path: '/privacy',
      name: 'privacy',
      component: Privacy
    }]
})
