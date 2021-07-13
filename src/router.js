import { createRouter,createWebHistory} from "vue-router";
import Home from './components/Home.vue'
import Random from './components/Random.vue'
import Animation from './components/Animation.vue'

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
    {
        path: "/animation",
        name: "animation",
        component: Animation,
    },
];

// 导出路由
const router = createRouter({
    history: createWebHistory(),
    routes
});

export default router;