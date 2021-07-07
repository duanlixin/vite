import { createRouter,createWebHistory} from "vue-router";
import Random from './components/Random.vue'
import Home from './components/Home.vue'
// 路由信息
const routes = [
    {
        path: "/",
        name: "home",
        component: Home,
    },
    {
        path: "/random",
        name: "random",
        component: Random,
    },
];

// 导出路由
const router = createRouter({
    history: createWebHistory(),
    routes
});

export default router;