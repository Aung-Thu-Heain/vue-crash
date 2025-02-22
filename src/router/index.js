import { createRouter,createWebHistory } from "vue-router";
import HomeView from "@/View/HomeView.vue";
import NotFound from "@/View/NotFound.vue";
import JobView from "@/View/JobView.vue";
const router = createRouter({
    history:createWebHistory(import.meta.env.BASE_URL),
    routes:[
        {
            path:'/',
            name:"Home",
            component:HomeView,
        },
        {
            path:'/jobs',
            name:"Jobs",
            component:JobView,
        },
        {
            path:'/job-create',
            name:"CreateJob",
            component:JobView,
        },
        { 
            path: '/:pathMatch(.*)*', 
            name: 'NotFound', 
            component: NotFound 
        },
    ]
})

export default router;