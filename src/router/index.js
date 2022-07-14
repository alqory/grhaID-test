import { createRouter, createWebHistory } from 'vue-router'

const Routes = [
    {
        path : "/",
        name : "dashboard",
        component : () => import('../pages/Dashboard.vue')
    },
    {
        path : "/penjualan",
        name : "penjualan",
        component : () => import('../pages/Penjualan.vue')
    },
    {
        path : "/user-product",
        name : "user-product",
        component : () => import('../pages/UserProduct.vue')
    },
    {
        path : "/report",
        name : "report",
        component : () => import('../pages/Report.vue')
    },
    {
        path : "/login",
        name : "login",
        component : () => import('../pages/Login.vue')
    }
] 

export const Router = createRouter({
    history : createWebHistory(),
    routes : Routes,
})