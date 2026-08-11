import { createRouter, createWebHistory } from 'vue-router'

import HomeView     from '../views/HomeView.vue'
import AboutView    from '../views/AboutView.vue'
import ProductView  from '../views/Product.vue'
import ContactView  from '../views/ContactView.vue'
import Myproprs from '../views/Myproprs.vue'
import LoginView    from '../views/LoginView.vue'
import RegisterView from '../views/RegisterView.vue'

const router = createRouter({
  history: createWebHistory(),

  routes: [
    {
      path: '/',
      name: 'home',
      component: HomeView
    },
    {
      path: '/about',
      name: 'about',
      component: AboutView
    },
    {
      path: '/contact',
      name: 'contact',
      component: ContactView
    },
    {
      path: '/properties',
      name: 'product',
      component: ProductView,
      alias: ['/product', '/products']
    },
        {
      path: '/myproprs',
      name: 'mypropr',
      component: Myproprs,
      alias: ['/mypropr', '/myproprs']
    },
    
    {
      path: '/login',
      name: 'login',
      component: LoginView
    },
    {
      path: '/register',
      name: 'register',
      component: RegisterView
    }
  ]
})

export default router