import { createRouter, createWebHistory } from 'vue-router'
import DashboardVue from '../pages/Dashboard.vue'
import PenjualanVue from '../pages/Penjualan.vue'
import UserProductVue from '../pages/UserProduct.vue'
import ReportVue from '../pages/Report.vue'
import LoginVue from '../pages/Login.vue'

const Routes = [
    {
        path : "/",
        name : "dashboard",
        component : DashboardVue
    },
    {
        path : "/penjualan",
        name : "penjualan",
        component : PenjualanVue
    },
    {
        path : "/user-product",
        name : "user-product",
        component : UserProductVue
    },
    {
        path : "/report",
        name : "report",
        component : ReportVue
    },
    {
        path : "/login",
        name : "login",
        component : LoginVue
    }
] 

export const Router = createRouter({
    history : createWebHistory(),
    routes : Routes,
})