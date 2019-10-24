import Vue from 'vue'
import Router from 'vue-router'
import HelloWorld from '@/components/HelloWorld'
import TestVUE from '@/components/TestVUE'
import BaseTest from '@/components/BaseTest'
import BaseTestA from '@/components/BaseTestA'
import BaseTestB from '@/components/BaseTestB'
import BaseTestC from '@/components/BaseTestC'
import Slots from '@/components/Slots'
import ComponentTest from '@/components/ComponentTest'
import ComponentInput from '@/components/ComponentInput'

Vue.use(Router)

export default new Router({
  routes: [
    {
      path: '/',
      name: 'HelloWorld',
      component: HelloWorld
    },
    {
      path: '/test',
      name: 'test',
      component: TestVUE
    },
    {
      path: '/base-test',
      name: 'base-test',
      component: BaseTest
    },
    {
      path: '/base-test-a',
      name: 'base-test-a',
      component: BaseTestA
    },
    {
      path: '/base-test-b',
      name: 'base-test-b',
      component: BaseTestB
    },
    {
      path: '/base-test-c',
      name: 'base-test-c',
      component: BaseTestC
    },
    {
      path: '/slots-test',
      name: 'slots-test',
      component: Slots
    },
    {
      path: '/component-test',
      name: 'component-test',
      component: ComponentTest
    },
    {
      path: '/component-input',
      name: 'component-input',
      component: ComponentInput
    }
  ]
})
