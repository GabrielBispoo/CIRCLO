import { createRouter, createWebHistory, RouteRecordRaw } from 'vue-router';
import RegisterForm from '../views/RegisterForm.vue';
import LoginForm from '../views/LoginForm.vue';
import HomeForm from '../views/HomeForm.vue';
import UsersForm from '../views/UsersForm.vue';
import ProfileForm from '../views/ProfileForm.vue';
import UpdateUser from '../views/UpdateUser.vue'

import Cookies from 'js-cookie';
import axios from 'axios';

const hasToken = () => !!Cookies.get('token');
const routes: Array<RouteRecordRaw> = [
  {
    path: '/',
    redirect: '/Home'
  },
  {
    path: '/Home',
    name: 'Home',
    component: HomeForm
  },
  {
    path: '/Registro',
    name: 'RegisterForm',
    component: RegisterForm
  },
  {
    path: '/Login',
    name: 'Login',
    component: LoginForm
  },
  {
    path: '/Users',
    name: 'Users',
    component: UsersForm,
    beforeEnter: (to, from, next) => {
      if (hasToken()) {
        const email = Cookies.get('email')
        const req = {
          headers: {
            authorization: "Bearer " + Cookies.get('token'),
          }
        }

        console.log('token no guard', req)

        axios.post('http://localhost:3330/validate', { email }, req).then(res => {
          console.log('TESTE', res.data)
          next()
        }).catch(err => {
          console.log('erro no catch', err)
          next('/login')
        })
      } else {
        next('/Login')
      }
    }
  },
  {
    path: '/Profile',
    name: 'Profile',
    component: ProfileForm,
    beforeEnter: (to, from, next) => {
      if (hasToken()) {
        next()
      } else {
        next('/Login')
      }
    }
  },
  {
    path: '/UserUpdate/:id',
    name: 'UserUpdate',
    component: UpdateUser,
    beforeEnter: (to, from, next) => {
      if (hasToken()) {
        next()
      } else {
        next('/Login')
      }
    }
  }
]

const router = createRouter({
  history: createWebHistory(process.env.BASE_URL),
  routes
})

export default router
