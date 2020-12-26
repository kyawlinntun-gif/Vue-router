import { createWebHistory, createRouter } from 'vue-router'

import Home from '@/views/Home'
import About from '@/views/About'
import Login from '@/views/Login'
import ProductHome from '@/views/ProductHome'
import Profile from '@/views/Profile'
import ProductDetail from '@/views/ProductDetail'

const routes = [
    {
        path: '/',
        component: Home
    },
    {
        path: '/about',
        component: About
    },
    {
        path: '/login',
        component: Login
    },
    {
        path: '/product',
        component: ProductHome
    },
    {
        path: '/profile',
        component: Profile
    },
    {
        path: '/product/:id',
        component: ProductDetail
    }
]

const router = createRouter({
    history: createWebHistory(),
    routes // short for `routes: routes`
})

export default router;